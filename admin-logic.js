// Admin
var ADMIN_COMPACT_MODE_STORAGE_KEY = 'ig_admin_compact_mode';
var adminCompactMode = readAdminCompactModePreference();
var ADMIN_TABLE_DENSITY_STORAGE_KEY = 'ig_admin_table_density';
var adminTableDensity = readAdminTableDensityPreference();
var ADMIN_PRODUCTS_PAGE_SIZE_STORAGE_KEY = 'ig_admin_products_page_size';
var adminProductsPageSize = readAdminProductsPageSizePreference();
var ADMIN_PRODUCTS_SORT_STORAGE_KEY = 'ig_admin_products_sort';
var adminProductsSort = readAdminProductsSortPreference();
var adminProductsPage = 1;
var ADMIN_PRODUCT_FORM_SECTIONS = ['basic', 'pricing', 'media', 'options'];
var adminActiveProductFormSection = 'basic';
var adminVisibleProductIds = [];
var adminSelectedProductIds = [];
var adminRecentlyMovedProductId = null;

function readAdminCompactModePreference() {
    try {
        return localStorage.getItem(ADMIN_COMPACT_MODE_STORAGE_KEY) === '1';
    } catch (err) {
        return false;
    }
}

function writeAdminCompactModePreference(enabled) {
    try {
        localStorage.setItem(ADMIN_COMPACT_MODE_STORAGE_KEY, enabled ? '1' : '0');
    } catch (err) { }
}

function readAdminTableDensityPreference() {
    try {
        var storedValue = String(localStorage.getItem(ADMIN_TABLE_DENSITY_STORAGE_KEY) || 'comfortable').trim().toLowerCase();
        if (storedValue === 'compact' || storedValue === 'ultra') return storedValue;
        return 'comfortable';
    } catch (err) {
        return 'comfortable';
    }
}

function writeAdminTableDensityPreference(value) {
    try {
        localStorage.setItem(ADMIN_TABLE_DENSITY_STORAGE_KEY, value);
    } catch (err) { }
}

function readAdminProductsPageSizePreference() {
    try {
        var storedValue = Number(localStorage.getItem(ADMIN_PRODUCTS_PAGE_SIZE_STORAGE_KEY));
        if ([10, 20, 50, 100].indexOf(storedValue) >= 0) return storedValue;
        return 20;
    } catch (err) {
        return 20;
    }
}

function writeAdminProductsPageSizePreference(value) {
    try {
        localStorage.setItem(ADMIN_PRODUCTS_PAGE_SIZE_STORAGE_KEY, String(value));
    } catch (err) { }
}

function readAdminProductsSortPreference() {
    try {
        var rawValue = localStorage.getItem(ADMIN_PRODUCTS_SORT_STORAGE_KEY);
        if (!rawValue) return { key: 'name', direction: 'asc' };
        var parsed = JSON.parse(rawValue);
        var key = String(parsed && parsed.key || '').trim().toLowerCase();
        var direction = String(parsed && parsed.direction || '').trim().toLowerCase();
        if (['name', 'category', 'price', 'stock'].indexOf(key) < 0) key = 'name';
        if (direction !== 'asc' && direction !== 'desc') direction = 'asc';
        return { key: key, direction: direction };
    } catch (err) {
        return { key: 'name', direction: 'asc' };
    }
}

function writeAdminProductsSortPreference(sortState) {
    try {
        localStorage.setItem(ADMIN_PRODUCTS_SORT_STORAGE_KEY, JSON.stringify({
            key: sortState.key,
            direction: sortState.direction
        }));
    } catch (err) { }
}

function applyAdminCompactMode() {
    var panel = document.getElementById('adminPanel');
    if (panel) panel.classList.toggle('admin-compact', Boolean(adminCompactMode));

    var toggleBtn = document.getElementById('adminCompactToggleBtn');
    if (!toggleBtn) return;
    var isCompact = Boolean(adminCompactMode);
    toggleBtn.textContent = isCompact ? 'Compact On' : 'Compact Off';
    toggleBtn.setAttribute('aria-pressed', isCompact ? 'true' : 'false');
    toggleBtn.classList.toggle('is-active', isCompact);
}

function applyAdminTableDensity() {
    var panel = document.getElementById('adminPanel');
    if (panel) {
        panel.classList.toggle('admin-density-compact', adminTableDensity === 'compact');
        panel.classList.toggle('admin-density-ultra', adminTableDensity === 'ultra');
    }

    var select = document.getElementById('adminTableDensity');
    if (!select) return;
    select.value = adminTableDensity;
}

function setAdminTableDensity(density) {
    if (!ensureAdminAccess('change admin table density')) return;
    var normalized = String(density || '').trim().toLowerCase();
    if (normalized !== 'compact' && normalized !== 'ultra') normalized = 'comfortable';
    adminTableDensity = normalized;
    writeAdminTableDensityPreference(adminTableDensity);
    applyAdminTableDensity();
}

function applyAdminProductsSortUi() {
    var sortButtons = document.querySelectorAll('.admin-sort-btn[data-admin-sort-key]');
    sortButtons.forEach(function (button) {
        var key = String(button.getAttribute('data-admin-sort-key') || '').trim().toLowerCase();
        var isActive = key === adminProductsSort.key;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        button.setAttribute('data-sort-direction', isActive ? adminProductsSort.direction : '');
    });
}

function setAdminProductsSort(key) {
    if (!ensureAdminAccess('sort products table', { silent: true })) return;
    var normalizedKey = String(key || '').trim().toLowerCase();
    if (['name', 'category', 'price', 'stock'].indexOf(normalizedKey) < 0) return;

    if (adminProductsSort.key === normalizedKey) {
        adminProductsSort.direction = adminProductsSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        adminProductsSort.key = normalizedKey;
        adminProductsSort.direction = 'asc';
    }

    writeAdminProductsSortPreference(adminProductsSort);
    adminProductsPage = 1;
    applyAdminProductsSortUi();
    renderAdminProducts();
}

function toggleAdminCompactMode() {
    if (!ensureAdminAccess('toggle compact admin mode')) return;
    adminCompactMode = !adminCompactMode;
    writeAdminCompactModePreference(adminCompactMode);
    applyAdminCompactMode();
}

function setAdminProductFormSection(section) {
    var normalizedSection = String(section || '').trim().toLowerCase();
    if (ADMIN_PRODUCT_FORM_SECTIONS.indexOf(normalizedSection) < 0) {
        normalizedSection = 'basic';
    }
    adminActiveProductFormSection = normalizedSection;

    var form = document.getElementById('adminProductForm');
    if (!form) return;
    var sections = form.querySelectorAll('.admin-form-section[data-admin-form-section]');
    sections.forEach(function (sectionEl) {
        var sectionValue = String(sectionEl.getAttribute('data-admin-form-section') || '').trim().toLowerCase();
        var isOpen = sectionValue === normalizedSection;
        sectionEl.classList.toggle('is-open', isOpen);
        var toggleBtn = sectionEl.querySelector('.admin-form-section-toggle[data-admin-form-section-toggle]');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

function addAdminCategory() {
    if (!ensureAdminAccess('add categories')) return;
    var input = document.getElementById('adminCategoryName');
    if (!input) return;
    var label = input.value.trim();
    if (!label) return;

    var value = slugifyCategory(label);
    if (!value) {
        showToast('Invalid category name');
        return;
    }

    var existingMap = getAllCategories();
    if (existingMap[value]) {
        showToast('Category already exists');
        return;
    }

    customCategories.push({ value: value, label: label });
    saveToStorage();
    renderCategoryUI();
    input.value = '';
    showToast('Category added');
}

function deleteAdminCategory(value) {
    if (!ensureAdminAccess('delete categories')) return;
    if (!value || value === 'all') return;
    if (products.some(function (product) { return product.category === value; })) {
        showToast('Cannot delete a category that is currently used by products');
        return;
    }

    var previousCustomCategories = clonePlainData(customCategories);
    var previousRemovedCategories = removedCategoryValues.slice();
    var previousActiveCategory = currentFilters.category;
    var wasCustom = customCategories.some(function (item) { return item.value === value; });
    customCategories = customCategories.filter(function (item) { return item.value !== value; });
    if (!wasCustom && categoryLabels[value] && !removedCategoryValues.includes(value)) {
        removedCategoryValues.push(value);
    }
    if (currentFilters.category === value) currentFilters.category = 'all';
    saveToStorage();
    renderCategoryUI();
    applyFilters();
    showUndoToast('Category deleted', function () {
        customCategories = clonePlainData(previousCustomCategories);
        removedCategoryValues = previousRemovedCategories.slice();
        currentFilters.category = previousActiveCategory;
        saveToStorage();
        renderCategoryUI();
        applyFilters();
    }, 8000);
}

function openAdminPanel() {
    if (!ensureAdminAccess('access the admin panel')) return;
    rememberFocusForModal('adminPanel');
    document.getElementById('adminPanel').classList.add('open');
    document.getElementById('adminOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    renderAdminPanel();
    focusFirstElementIn(document.getElementById('adminPanel'), '.admin-header .close-btn');
}

function closeAdminPanel() {
    document.getElementById('adminPanel').classList.remove('open');
    document.getElementById('adminOverlay').classList.remove('open');
    document.body.style.overflow = '';
    restoreFocusForModal('adminPanel');
}

function switchAdminTab(tab) {
    if (!ensureAdminAccess('manage admin tabs', { silent: true })) return;
    adminActiveTab = tab;
    document.querySelectorAll('.admin-tab').forEach(function (button) {
        button.classList.toggle('active', button.dataset.tab === tab);
    });
    document.querySelectorAll('.admin-tab-panel').forEach(function (panel) {
        panel.classList.toggle('active', panel.id === 'adminTab-' + tab);
    });
}

function renderAdminPanel() {
    if (!ensureAdminAccess('view admin data', { silent: true })) return;
    applyAdminCompactMode();
    applyAdminTableDensity();
    applyAdminProductsSortUi();
    setAdminProductFormSection(adminActiveProductFormSection);
    renderCategoryUI();
    renderAdminDashboard();
    renderAdminProducts();
    renderAdminOrders();
    switchAdminTab(adminActiveTab);
}

function renderAdminDashboard() {
    if (!ensureAdminAccess('view admin dashboard', { silent: true })) return;
    var revenue = orders.reduce(function (sum, order) {
        return sum + (Number(order.total) || 0);
    }, 0);
    var lowStock = products.filter(function (product) {
        return Number(product.stock) <= 5;
    }).length;

    document.getElementById('adminStatProducts').textContent = products.length;
    document.getElementById('adminStatOrders').textContent = orders.length;
    document.getElementById('adminStatRevenue').textContent = '$' + revenue.toFixed(2);
    document.getElementById('adminStatLowStock').textContent = lowStock;

    var recent = orders.slice(0, 5);
    var html = '';
    if (recent.length === 0) {
        html = '<p style="color:#667;font-size:13px;">No orders yet.</p>';
    } else {
        recent.forEach(function (order) {
            html += '<div class="admin-recent-order">';
            html += '<span>' + order.id + '</span>';
            html += '<span>$' + Number(order.total).toFixed(2) + ' - ' + order.status + '</span>';
            html += '</div>';
        });
    }
    document.getElementById('adminRecentOrders').innerHTML = html;
}

function syncAdminProductCategoryFilterOptions() {
    var categoryFilter = document.getElementById('adminProductCategoryFilter');
    if (!categoryFilter) return 'all';

    var previousValue = String(categoryFilter.value || 'all');
    var seen = Object.create(null);
    var entries = [];
    products.forEach(function (product) {
        var value = String((product && product.category) || '').trim();
        if (!value || seen[value]) return;
        seen[value] = true;
        var label = value;
        if (typeof categoryLabels === 'object' && categoryLabels && categoryLabels[value]) {
            label = String(categoryLabels[value]).trim() || value;
        }
        entries.push({ value: value, label: label });
    });

    entries.sort(function (a, b) {
        return a.label.localeCompare(b.label);
    });

    var html = '<option value="all">All categories</option>';
    entries.forEach(function (entry) {
        html += '<option value="' + escapeHtml(entry.value) + '">' + escapeHtml(entry.label) + '</option>';
    });
    categoryFilter.innerHTML = html;

    if (previousValue !== 'all' && seen[previousValue]) {
        categoryFilter.value = previousValue;
    } else {
        categoryFilter.value = 'all';
    }
    return String(categoryFilter.value || 'all').trim().toLowerCase();
}

function pruneAdminSelectedProductIds() {
    var existing = Object.create(null);
    products.forEach(function (product) {
        var id = Number(product && product.id);
        if (isFinite(id)) existing[id] = true;
    });

    var seen = Object.create(null);
    adminSelectedProductIds = adminSelectedProductIds
        .map(function (id) { return Number(id); })
        .filter(function (id) {
            if (!isFinite(id) || !existing[id] || seen[id]) return false;
            seen[id] = true;
            return true;
        });
}

function syncAdminBulkCategoryOptions() {
    var bulkCategory = document.getElementById('adminBulkCategory');
    if (!bulkCategory) return '';

    var previousValue = String(bulkCategory.value || '').trim();
    var categoryMap = getAllCategories();
    var keys = Object.keys(categoryMap);
    keys.sort(function (a, b) {
        return String(categoryMap[a] || a).localeCompare(String(categoryMap[b] || b));
    });

    var html = '<option value="">Set category...</option>';
    keys.forEach(function (key) {
        html += '<option value="' + escapeHtml(key) + '">' + escapeHtml(String(categoryMap[key] || key)) + '</option>';
    });
    bulkCategory.innerHTML = html;

    if (previousValue && categoryMap[previousValue]) {
        bulkCategory.value = previousValue;
    }
    return String(bulkCategory.value || '').trim();
}

function syncAdminProductBulkUi() {
    pruneAdminSelectedProductIds();
    syncAdminBulkCategoryOptions();

    var selectedCount = adminSelectedProductIds.length;
    var selectedCountEl = document.getElementById('adminSelectedCount');
    if (selectedCountEl) {
        selectedCountEl.textContent = selectedCount + (selectedCount === 1 ? ' selected' : ' selected');
    }

    var applyCategoryBtn = document.getElementById('adminBulkApplyCategoryBtn');
    if (applyCategoryBtn) applyCategoryBtn.disabled = selectedCount === 0;
    var adjustStockBtn = document.getElementById('adminBulkAdjustStockBtn');
    if (adjustStockBtn) adjustStockBtn.disabled = selectedCount === 0;
    var deleteBtn = document.getElementById('adminBulkDeleteBtn');
    if (deleteBtn) deleteBtn.disabled = selectedCount === 0;

    var selectAll = document.getElementById('adminSelectAllProducts');
    if (!selectAll) return;
    var visibleCount = adminVisibleProductIds.length;
    if (visibleCount === 0) {
        selectAll.checked = false;
        selectAll.indeterminate = false;
        selectAll.disabled = true;
        return;
    }
    selectAll.disabled = false;
    var selectedVisible = adminVisibleProductIds.filter(function (id) {
        return adminSelectedProductIds.includes(Number(id));
    }).length;
    selectAll.checked = selectedVisible > 0 && selectedVisible === visibleCount;
    selectAll.indeterminate = selectedVisible > 0 && selectedVisible < visibleCount;
}

function setAdminProductSelection(productId, isSelected) {
    if (!ensureAdminAccess('select products for bulk actions', { silent: true })) return;
    var id = Number(productId);
    if (!isFinite(id)) return;
    adminSelectedProductIds = adminSelectedProductIds.filter(function (itemId) {
        return Number(itemId) !== id;
    });
    if (isSelected) adminSelectedProductIds.push(id);
    syncAdminProductBulkUi();
}

function toggleAdminSelectAllProducts(isSelected) {
    if (!ensureAdminAccess('select products for bulk actions', { silent: true })) return;
    var checked = Boolean(isSelected);
    var visibleSet = adminVisibleProductIds.map(function (id) { return Number(id); }).filter(isFinite);
    if (checked) {
        visibleSet.forEach(function (id) {
            if (!adminSelectedProductIds.includes(id)) adminSelectedProductIds.push(id);
        });
    } else {
        adminSelectedProductIds = adminSelectedProductIds.filter(function (id) {
            return !visibleSet.includes(Number(id));
        });
    }
    renderAdminProducts();
}

function applyAdminBulkCategory() {
    if (!ensureAdminAccess('bulk update product categories')) return;
    pruneAdminSelectedProductIds();
    if (adminSelectedProductIds.length === 0) {
        showToast('Select products first');
        return;
    }

    var bulkCategory = document.getElementById('adminBulkCategory');
    var categoryValue = String((bulkCategory && bulkCategory.value) || '').trim();
    if (!categoryValue) {
        showToast('Choose a category to apply');
        return;
    }

    var categoryMap = getAllCategories();
    if (!categoryMap[categoryValue]) {
        showToast('Choose a valid category');
        return;
    }

    var selectedSet = Object.create(null);
    adminSelectedProductIds.forEach(function (id) {
        selectedSet[Number(id)] = true;
    });

    var updated = 0;
    products.forEach(function (product) {
        if (!selectedSet[Number(product.id)]) return;
        if (product.category === categoryValue) return;
        product.category = categoryValue;
        updated++;
    });
    if (updated === 0) {
        showToast('Selected products already use that category');
        return;
    }

    saveToStorage();
    buildSearchTerms();
    applyFilters();
    renderProducts();
    renderAdminProducts();
    showToast('Updated category for ' + updated + ' product' + (updated === 1 ? '' : 's'));
}

function adjustAdminBulkStock() {
    if (!ensureAdminAccess('bulk adjust product stock')) return;
    pruneAdminSelectedProductIds();
    if (adminSelectedProductIds.length === 0) {
        showToast('Select products first');
        return;
    }

    var stockDeltaInput = document.getElementById('adminBulkStockDelta');
    var delta = Number((stockDeltaInput && stockDeltaInput.value) || 0);
    if (!isFinite(delta) || delta === 0) {
        showToast('Enter a non-zero stock delta');
        return;
    }
    delta = Math.trunc(delta);

    var selectedSet = Object.create(null);
    adminSelectedProductIds.forEach(function (id) {
        selectedSet[Number(id)] = true;
    });

    var updated = 0;
    products.forEach(function (product) {
        if (!selectedSet[Number(product.id)]) return;
        var currentStock = Number(product.stock) || 0;
        var nextStock = Math.max(0, currentStock + delta);
        if (nextStock === currentStock) return;
        product.stock = nextStock;
        updated++;
    });
    if (updated === 0) {
        showToast('Stock unchanged for selected products');
        return;
    }

    saveToStorage();
    applyFilters();
    renderProducts();
    renderAdminProducts();
    showToast('Adjusted stock for ' + updated + ' product' + (updated === 1 ? '' : 's'));
}

function deleteAdminSelectedProducts() {
    if (!ensureAdminAccess('bulk delete products')) return;
    pruneAdminSelectedProductIds();
    if (adminSelectedProductIds.length === 0) {
        showToast('Select products first');
        return;
    }

    var selectedIds = adminSelectedProductIds.slice();
    openConfirmModal('Delete ' + selectedIds.length + ' selected products?', function () {
        var selectedSet = Object.create(null);
        selectedIds.forEach(function (id) { selectedSet[Number(id)] = true; });

        var previousProducts = clonePlainData(products);
        var previousWishlist = wishlist.slice();
        var previousCart = clonePlainData(cart);
        var previousCurrentProduct = currentProduct ? clonePlainData(currentProduct) : null;

        products = products.filter(function (product) {
            return !selectedSet[Number(product.id)];
        });
        wishlist = wishlist.filter(function (id) {
            return !selectedSet[Number(id)];
        });
        cart = cart.filter(function (item) {
            return !selectedSet[Number(item.id)];
        });
        if (currentProduct && selectedSet[Number(currentProduct.id)]) {
            closeProductModal();
            currentProduct = null;
        }
        adminSelectedProductIds = [];
        adminVisibleProductIds = [];

        saveToStorage();
        buildSearchTerms();
        applyFilters();
        renderProducts();
        updateCartUI();
        renderCart();
        renderAdminPanel();
        showUndoToast(selectedIds.length + ' products deleted', function () {
            products = clonePlainData(previousProducts);
            wishlist = previousWishlist.slice();
            cart = clonePlainData(previousCart);
            currentProduct = previousCurrentProduct ? clonePlainData(previousCurrentProduct) : null;
            adminSelectedProductIds = selectedIds.slice();
            saveToStorage();
            buildSearchTerms();
            applyFilters();
            renderProducts();
            updateCartUI();
            renderCart();
            renderAdminPanel();
        }, 9000);
    }, 'Delete');
}

function setAdminProductsPage(page) {
    if (!ensureAdminAccess('change admin products page', { silent: true })) return;
    var nextPage = Math.floor(Number(page) || 1);
    if (!isFinite(nextPage) || nextPage < 1) nextPage = 1;
    adminProductsPage = nextPage;
    renderAdminProducts();
}

function changeAdminProductsPage(delta) {
    if (!ensureAdminAccess('change admin products page', { silent: true })) return;
    var increment = Math.floor(Number(delta) || 0);
    if (!isFinite(increment) || increment === 0) return;
    setAdminProductsPage(adminProductsPage + increment);
}

function setAdminProductsPageSize(pageSize) {
    if (!ensureAdminAccess('change admin products page size', { silent: true })) return;
    var nextSize = Math.floor(Number(pageSize) || 20);
    if ([10, 20, 50, 100].indexOf(nextSize) < 0) nextSize = 20;
    adminProductsPageSize = nextSize;
    writeAdminProductsPageSizePreference(nextSize);
    adminProductsPage = 1;
    renderAdminProducts();
}

function syncAdminProductsPaginationUi(totalItems, totalPages, currentPage) {
    var safeTotalItems = Math.max(0, Math.floor(Number(totalItems) || 0));
    var safeTotalPages = Math.max(1, Math.floor(Number(totalPages) || 1));
    var safeCurrentPage = Math.max(1, Math.min(safeTotalPages, Math.floor(Number(currentPage) || 1)));

    var pageInfo = document.getElementById('adminProductsPageInfo');
    if (pageInfo) {
        if (safeTotalItems === 0) {
            pageInfo.textContent = '0 results';
        } else {
            pageInfo.textContent = 'Page ' + safeCurrentPage + ' of ' + safeTotalPages + ' (' + safeTotalItems + ' total)';
        }
    }

    var prevBtn = document.getElementById('adminProductsPrevPageBtn');
    if (prevBtn) prevBtn.disabled = safeTotalItems === 0 || safeCurrentPage <= 1;
    var nextBtn = document.getElementById('adminProductsNextPageBtn');
    if (nextBtn) nextBtn.disabled = safeTotalItems === 0 || safeCurrentPage >= safeTotalPages;
    var pageSizeSelect = document.getElementById('adminProductsPageSize');
    if (pageSizeSelect) pageSizeSelect.value = String(adminProductsPageSize);
}

function quickSaveAdminProductRow(productId) {
    if (!ensureAdminAccess('quick edit products')) return;
    var id = Number(productId);
    if (!isFinite(id)) return;

    var product = products.find(function (item) {
        return Number(item.id) === id;
    });
    if (!product) return;

    var priceInput = document.querySelector('input[data-admin-inline-field="price"][data-product-id="' + id + '"]');
    var stockInput = document.querySelector('input[data-admin-inline-field="stock"][data-product-id="' + id + '"]');
    if (!priceInput || !stockInput) return;

    var nextPrice = Number(String(priceInput.value || '').trim());
    var nextStock = Number(String(stockInput.value || '').trim());
    if (!isFinite(nextPrice) || nextPrice <= 0) {
        showToast('Price must be greater than 0');
        priceInput.focus();
        return;
    }
    if (!isFinite(nextStock) || nextStock < 0) {
        showToast('Stock must be 0 or higher');
        stockInput.focus();
        return;
    }
    nextStock = Math.floor(nextStock);

    var currentPrice = Number(product.price);
    var currentStock = Number(product.stock);
    var changed = false;
    if (currentPrice !== nextPrice) {
        product.price = nextPrice;
        if (!isFinite(Number(product.originalPrice)) || Number(product.originalPrice) < nextPrice) {
            product.originalPrice = nextPrice;
        }
        changed = true;
    }
    if (currentStock !== nextStock) {
        product.stock = nextStock;
        changed = true;
    }
    if (!changed) {
        showToast('No changes to save');
        return;
    }

    saveToStorage();
    applyFilters();
    renderProducts();
    renderAdminProducts();
    showToast('Product updated');
}

function renderAdminProducts() {
    if (!ensureAdminAccess('manage products', { silent: true })) return;
    applyAdminProductsSortUi();
    var body = document.getElementById('adminProductsBody');
    if (!body) return;

    var queryInput = document.getElementById('adminProductSearch');
    var query = queryInput ? queryInput.value.toLowerCase().trim() : '';
    var categoryFilter = syncAdminProductCategoryFilterOptions();
    var filtered = products.filter(function (product) {
        var productCategory = String((product && product.category) || '').trim().toLowerCase();
        if (categoryFilter !== 'all' && productCategory !== categoryFilter) return false;
        if (!query) return true;
        return String((product && product.name) || '').toLowerCase().includes(query) ||
            String((product && product.brand) || '').toLowerCase().includes(query) ||
            productCategory.includes(query);
    });
    var sorted = filtered.slice();
    if (adminProductsSort.key === 'manual') {
        if (adminProductsSort.direction === 'desc') sorted.reverse();
    } else {
        sorted.sort(function (a, b) {
            var directionMultiplier = adminProductsSort.direction === 'desc' ? -1 : 1;
            var result = 0;
            if (adminProductsSort.key === 'price') {
                result = (Number(a && a.price) || 0) - (Number(b && b.price) || 0);
            } else if (adminProductsSort.key === 'stock') {
                result = (Number(a && a.stock) || 0) - (Number(b && b.stock) || 0);
            } else if (adminProductsSort.key === 'category') {
                result = String((a && a.category) || '').localeCompare(String((b && b.category) || ''), undefined, { sensitivity: 'base' });
            } else {
                result = String((a && a.name) || '').localeCompare(String((b && b.name) || ''), undefined, { sensitivity: 'base' });
            }
            if (result === 0) {
                result = String((a && a.name) || '').localeCompare(String((b && b.name) || ''), undefined, { sensitivity: 'base' });
            }
            return result * directionMultiplier;
        });
    }

    var totalItems = sorted.length;
    var totalPages = Math.max(1, Math.ceil(totalItems / Math.max(1, adminProductsPageSize)));
    if (adminProductsPage > totalPages) adminProductsPage = totalPages;
    if (adminProductsPage < 1) adminProductsPage = 1;
    var pageStart = (adminProductsPage - 1) * adminProductsPageSize;
    var pageEnd = pageStart + adminProductsPageSize;
    var visible = sorted.slice(pageStart, pageEnd);

    adminVisibleProductIds = visible.map(function (product) {
        return Number(product.id);
    }).filter(isFinite);
    pruneAdminSelectedProductIds();
    syncAdminProductsPaginationUi(totalItems, totalPages, adminProductsPage);

    if (visible.length === 0) {
        body.innerHTML = '<tr><td colspan="6">No products found.</td></tr>';
        syncAdminProductBulkUi();
        return;
    }

    var html = '';
    visible.forEach(function (product) {
        var firstImage = Object.values(product.images || {})[0] || 'https://via.placeholder.com/60?text=Img';
        var isSelected = adminSelectedProductIds.includes(Number(product.id));
        html += '<tr data-admin-product-row-id="' + product.id + '">';
        html += '<td class="admin-select-col"><input type="checkbox" class="admin-row-select" data-admin-select-product="1" data-product-id="' + product.id + '"' + (isSelected ? ' checked' : '') + '></td>';
        html += '<td><div class="admin-product-cell"><img class="admin-product-thumb" src="' + firstImage + '" alt="' + escapeHtml(product.name) + '"><span>' + escapeHtml(product.name) + '</span></div></td>';
        html += '<td>' + escapeHtml(product.category) + '</td>';
        html += '<td><input class="admin-inline-edit-input" type="number" min="0.01" step="0.01" data-admin-inline-field="price" data-product-id="' + product.id + '" value="' + Number(product.price).toFixed(2) + '"></td>';
        html += '<td><input class="admin-inline-edit-input admin-inline-stock-input" type="number" min="0" step="1" data-admin-inline-field="stock" data-product-id="' + product.id + '" value="' + Math.max(0, Math.floor(Number(product.stock) || 0)) + '"></td>';
        html += '<td><div class="admin-inline-actions">';
        html += '<button class="admin-action-btn" data-icon="S" title="Save row edits" aria-label="Save row edits" data-admin-product-action="quick-save" data-product-id="' + product.id + '">Apply</button>';
        html += '<button class="admin-action-btn" data-icon="^" title="Move up" aria-label="Move up" data-admin-product-action="move" data-product-id="' + product.id + '" data-direction="-1">Up</button>';
        html += '<button class="admin-action-btn" data-icon="v" title="Move down" aria-label="Move down" data-admin-product-action="move" data-product-id="' + product.id + '" data-direction="1">Down</button>';
        html += '<button class="admin-action-btn" data-icon="E" title="Edit product" aria-label="Edit product" data-admin-product-action="edit" data-product-id="' + product.id + '">Edit</button>';
        html += '<button class="admin-action-btn" data-icon="V" title="View product" aria-label="View product" data-admin-product-action="view" data-product-id="' + product.id + '">View</button>';
        html += '<button class="admin-action-btn admin-danger-btn" data-icon="X" title="Delete product" aria-label="Delete product" data-admin-product-action="delete" data-product-id="' + product.id + '">Delete</button>';
        html += '</div></td>';
        html += '</tr>';
    });
    body.innerHTML = html;
    syncAdminProductBulkUi();
    highlightMovedAdminProductRow();
}

function highlightMovedAdminProductRow() {
    var movedId = Number(adminRecentlyMovedProductId);
    adminRecentlyMovedProductId = null;
    if (!isFinite(movedId)) return;

    var selector = '#adminProductsBody tr[data-admin-product-row-id="' + movedId + '"]';
    var row = document.querySelector(selector);
    if (!row) return;

    row.classList.remove('admin-row-moved');
    // Restart animation if the same row is moved repeatedly.
    void row.offsetWidth;
    row.classList.add('admin-row-moved');

    try {
        row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (err) {
        row.scrollIntoView();
    }

    setTimeout(function () {
        row.classList.remove('admin-row-moved');
    }, 900);
}

function moveProductOrder(productId, direction) {
    if (!ensureAdminAccess('reorder products')) return;
    var index = products.findIndex(function (product) {
        return Number(product.id) === Number(productId);
    });
    if (index < 0) return;

    var nextIndex = index + Number(direction);
    if (nextIndex < 0 || nextIndex >= products.length) return;

    var temp = products[index];
    products[index] = products[nextIndex];
    products[nextIndex] = temp;
    adminRecentlyMovedProductId = Number(productId);
    adminProductsSort = { key: 'manual', direction: 'asc' };
    applyAdminProductsSortUi();

    saveToStorage();
    applyFilters();
    renderProducts();
    renderAdminProducts();
}

function editAdminProduct(productId) {
    if (!ensureAdminAccess('edit products')) return;
    var product = products.find(function (item) { return Number(item.id) === Number(productId); });
    if (!product) return;

    editingProductId = Number(product.id);
    document.getElementById('adminProductId').value = product.id;
    document.getElementById('adminName').value = product.name;
    document.getElementById('adminCategory').value = product.category;
    document.getElementById('adminBrand').value = product.brand;
    document.getElementById('adminCondition').value = product.condition;
    document.getElementById('adminPrice').value = product.price;
    document.getElementById('adminOriginalPrice').value = product.originalPrice;
    document.getElementById('adminStock').value = product.stock;
    document.getElementById('adminShipping').value = product.shipping || 'free';
    document.getElementById('adminBadge').value = product.badge || '';
    document.getElementById('adminDailyDeal').checked = Boolean(product.dailyDeal);
    document.getElementById('adminSpecialColorPicker').value = product.specialColorPicker ? 'special' : 'regular';
    populateAdminSpecialColorLinesFromProduct(product);
    document.getElementById('adminRating').value = product.rating;
    document.getElementById('adminReviews').value = product.reviews;
    document.getElementById('adminSold').value = product.sold;
    document.getElementById('adminDescription').value = product.description || '';
    document.getElementById('adminFeatures').value = (product.features || []).join(', ');
    document.getElementById('adminMainImages').value = serializeMainImages(product.images, product.mediaByColor);
    document.getElementById('adminAngleImages').value = serializeAngleImages(product.images, product.mediaByColor);
    populateAdminImageLinesFromProduct(product);
    document.getElementById('adminColorMap').value = serializeColorMap(product.colorHexByName);
    document.getElementById('adminColorStyleMap').value = serializeColorStyleMap(product.colorStyleByName);
    populateAdminColorLinesFromProduct(product);
    document.getElementById('adminVideoUrl').value = product.video && product.video.url && product.video.kind !== 'file' ? product.video.url : '';
    document.getElementById('adminVideoThumb').value = product.video && product.video.thumbnail ? product.video.thumbnail : '';
    document.getElementById('adminModelUrl').value = product.model && product.model.url && product.model.kind !== 'file' ? product.model.url : '';
    document.getElementById('adminModelThumb').value = product.model && product.model.thumbnail ? product.model.thumbnail : '';
    resetAdminVideoUploadState();
    resetAdminModelUploadState();
    hydrateSavedAdminUploadedAsset(product.video, {
        fallbackFileName: 'saved-video',
        fallbackMimeType: 'video/mp4',
        setAsset: function (asset) { adminUploadedVideoAsset = asset; },
        statusElementId: 'adminVideoUploadStatus',
        statusPrefix: 'Using saved uploaded video: '
    });
    hydrateSavedAdminUploadedAsset(product.model, {
        fallbackFileName: 'saved-model.glb',
        fallbackMimeType: 'model/gltf-binary',
        setAsset: function (asset) { adminUploadedModelAsset = asset; },
        statusElementId: 'adminModelUploadStatus',
        statusPrefix: 'Using saved uploaded model: '
    });
    document.getElementById('adminOptions').value = serializeOptions(product.options);
    setAdminFormMode(true, product.name);
    setAdminProductFormSection('basic');

    switchAdminTab('products');
    document.getElementById('adminProductForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteAdminProduct(productId) {
    if (!ensureAdminAccess('delete products')) return;
    openConfirmModal('Delete this product?', function () {
        var previousProducts = clonePlainData(products);
        var previousWishlist = wishlist.slice();
        var previousCart = clonePlainData(cart);
        var previousCurrentProduct = currentProduct ? clonePlainData(currentProduct) : null;
        products = products.filter(function (product) { return product.id !== productId; });
        wishlist = wishlist.filter(function (id) { return id !== productId; });
        cart = cart.filter(function (item) { return item.id !== productId; });
        if (currentProduct && currentProduct.id === productId) {
            closeProductModal();
            currentProduct = null;
        }

        saveToStorage();
        buildSearchTerms();
        applyFilters();
        renderProducts();
        updateCartUI();
        renderCart();
        renderAdminPanel();
        showUndoToast('Product deleted', function () {
            products = clonePlainData(previousProducts);
            wishlist = previousWishlist.slice();
            cart = clonePlainData(previousCart);
            currentProduct = previousCurrentProduct ? clonePlainData(previousCurrentProduct) : null;
            saveToStorage();
            buildSearchTerms();
            applyFilters();
            renderProducts();
            updateCartUI();
            renderCart();
            renderAdminPanel();
        }, 9000);
    }, 'Delete');
}

function renderAdminOrders() {
    if (!ensureAdminAccess('manage orders', { silent: true })) return;
    var body = document.getElementById('adminOrdersBody');
    if (!body) return;

    if (orders.length === 0) {
        body.innerHTML = '<tr><td colspan="6">No orders yet.</td></tr>';
        return;
    }

    var html = '';
    orders.forEach(function (order) {
        html += '<tr>';
        html += '<td>' + order.id + '</td>';
        html += '<td>' + formatDate(order.date) + '</td>';
        html += '<td>' + order.itemCount + '</td>';
        html += '<td>$' + Number(order.total).toFixed(2) + '</td>';
        html += '<td><select class="admin-status-select" data-order-id="' + escapeHtml(order.id) + '">';
        html += '<option value="pending"' + (order.status === 'pending' ? ' selected' : '') + '>pending</option>';
        html += '<option value="processing"' + (order.status === 'processing' ? ' selected' : '') + '>processing</option>';
        html += '<option value="shipped"' + (order.status === 'shipped' ? ' selected' : '') + '>shipped</option>';
        html += '<option value="delivered"' + (order.status === 'delivered' ? ' selected' : '') + '>delivered</option>';
        html += '<option value="cancelled"' + (order.status === 'cancelled' ? ' selected' : '') + '>cancelled</option>';
        html += '</select></td>';
        html += '<td><div class="admin-inline-actions">';
        html += '<button class="admin-action-btn" data-icon="V" title="View order" aria-label="View order" data-order-action="view" data-order-id="' + escapeHtml(order.id) + '">View</button>';
        html += '<button class="admin-action-btn admin-danger-btn" data-icon="X" title="Delete order" aria-label="Delete order" data-order-action="delete" data-order-id="' + escapeHtml(order.id) + '">Delete</button>';
        html += '</div></td>';
        html += '</tr>';
    });

    body.innerHTML = html;
}

function updateOrderStatus(orderId, status) {
    if (!ensureAdminAccess('update order status')) return;
    var order = orders.find(function (item) { return item.id === orderId; });
    if (!order) return;
    order.status = status;
    saveToStorage();
    renderAdminDashboard();
}

function viewOrder(orderId) {
    if (!ensureAdminAccess('view order details')) return;
    var order = orders.find(function (item) { return item.id === orderId; });
    if (!order) return;

    var lines = [];
    lines.push('Order ' + order.id);
    lines.push('Date: ' + formatDate(order.date));
    lines.push('Status: ' + order.status);
    lines.push('Total: $' + Number(order.total).toFixed(2));
    lines.push('');
    lines.push('Items:');
    order.items.forEach(function (item) {
        lines.push('- ' + item.name + ' x' + item.quantity + ' ($' + Number(item.price).toFixed(2) + ')');
    });

    showToast('Order ' + order.id + ': ' + order.status + ' - $' + Number(order.total).toFixed(2));
}

function deleteOrder(orderId) {
    if (!ensureAdminAccess('delete orders')) return;
    openConfirmModal('Delete this order?', function () {
        var previousOrders = clonePlainData(orders);
        orders = orders.filter(function (order) { return order.id !== orderId; });
        saveToStorage();
        renderAdminPanel();
        showUndoToast('Order deleted', function () {
            orders = clonePlainData(previousOrders);
            saveToStorage();
            renderAdminPanel();
        }, 8000);
    }, 'Delete');
}

function clearOrders() {
    if (!ensureAdminAccess('clear orders')) return;
    openConfirmModal('Clear all orders?', function () {
        var previousOrders = clonePlainData(orders);
        orders = [];
        saveToStorage();
        renderAdminPanel();
        showUndoToast('All orders cleared', function () {
            orders = clonePlainData(previousOrders);
            saveToStorage();
            renderAdminPanel();
        }, 9000);
    }, 'Clear');
}
