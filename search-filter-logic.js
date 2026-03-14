// Filtering and Search Logic
function applyFilters(options) {
    currentPage = 1;
    var minPriceInput = document.getElementById('minPrice');
    var maxPriceInput = document.getElementById('maxPrice');
    var minPrice = parseInt(minPriceInput && minPriceInput.value, 10) || 0;
    var maxPrice = parseInt(maxPriceInput && maxPriceInput.value, 10) || 999999;

    var priceRanges = Array.from(document.querySelectorAll('.filter-option input[type="checkbox"][id^="price"]:checked')).map(function (cb) {
        var range = String(cb.value || '').split('-');
        return {
            min: parseInt(range[0], 10),
            max: parseInt(range[1], 10)
        };
    }).filter(function (range) {
        return !isNaN(range.min) && !isNaN(range.max);
    });
    var conditionValues = new Set(Array.from(document.querySelectorAll('.filter-option input[type="checkbox"][id^="condition"]:checked')).map(function (cb) {
        return cb.value;
    }));
    var brandValues = new Set(Array.from(document.querySelectorAll('.filter-option input[type="checkbox"][id^="brand"]:checked')).map(function (cb) {
        return cb.value;
    }));

    filteredProducts = products.filter(function (product) {
        if (currentFilters.dailyDealsOnly && !product.dailyDeal) return false;
        if (currentFilters.category !== 'all' && product.category !== currentFilters.category) return false;

        if (priceRanges.length > 0) {
            var priceMatch = priceRanges.some(function (range) {
                return product.price >= range.min && product.price <= range.max;
            });
            if (!priceMatch && !(product.price >= minPrice && product.price <= maxPrice)) return false;
        }

        if (conditionValues.size > 0 && !conditionValues.has(product.condition)) return false;
        if (brandValues.size > 0 && !brandValues.has(product.brand)) return false;
        return true;
    });

    sortProducts();
    if (!(options && options.skipUrlSync)) {
        updateBrowseUrlState({ includeSearch: false });
    }
}

function resetFilterInputs(useDefaultCondition) {
    document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(function (cb) {
        cb.checked = false;
    });
    if (useDefaultCondition) {
        var conditionNew = document.getElementById('conditionNew');
        if (conditionNew) conditionNew.checked = true;
    }

    var minPrice = document.getElementById('minPrice');
    var maxPrice = document.getElementById('maxPrice');
    if (minPrice) minPrice.value = '';
    if (maxPrice) maxPrice.value = '';
}

function resetSearchControls() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    var searchCategory = document.getElementById('searchCategory');
    if (searchCategory) searchCategory.value = 'all';
    hideSearchSuggestions();
}

function clearFilters() {
    resetFilterInputs(false);
    currentFilters.dailyDealsOnly = false;
    updateDailyDealsUI();
    applyFilters();
}

function performSearch() {
    clearSearchSuggestionQueue();
    var searchInput = document.getElementById('searchInput');
    var query = searchInput ? String(searchInput.value || '').toLowerCase().trim() : '';
    var selectedCategory = getSelectedSearchCategory();

    if (!query && selectedCategory === 'all') {
        applyFilters();
        hideSearchSuggestions();
        return;
    }

    filteredProducts = products.filter(function (product) {
        var matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        if (!matchesCategory) return false;
        if (currentFilters.dailyDealsOnly && !product.dailyDeal) return false;
        if (!query) return true;

        return product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query);
    });

    currentPage = 1;
    hideSearchSuggestions();
    sortProducts();
    updateBrowseUrlState({ includeSearch: true });
}

function toggleDailyDealsFilter() {
    currentFilters.dailyDealsOnly = !currentFilters.dailyDealsOnly;
    currentPage = 1;
    currentFilters.category = 'all';

    resetFilterInputs(false);
    resetSearchControls();

    renderCategoryUI();
    updateDailyDealsUI();
    applyFilters();
}

function updateDailyDealsUI() {
    var dailyDealsLink = document.getElementById('dailyDealsLink');
    if (!dailyDealsLink) return;
    dailyDealsLink.classList.toggle('active', Boolean(currentFilters.dailyDealsOnly));
}

function buildSearchTerms() {
    var set = new Set();
    products.forEach(function (product) {
        set.add(product.name);
        set.add(product.brand);
        set.add(toTitleCase(product.category));

        product.name.split(/[^a-zA-Z0-9]+/).forEach(function (word) {
            if (word && word.length > 2) set.add(word);
        });
    });
    searchTerms = Array.from(set);
}

function getSelectedSearchCategory() {
    var select = document.getElementById('searchCategory');
    if (!select) return 'all';
    return (select.value || 'all').toLowerCase();
}

function queueSearchSuggestions(rawQuery) {
    clearSearchSuggestionQueue();
    searchSuggestionTimer = setTimeout(function () {
        updateSearchSuggestions(rawQuery);
    }, SEARCH_SUGGESTION_DEBOUNCE_MS);
}

function clearSearchSuggestionQueue() {
    if (searchSuggestionTimer) {
        clearTimeout(searchSuggestionTimer);
        searchSuggestionTimer = null;
    }
}

function escapeRegExp(text) {
    return String(text || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightSearchMatch(text, query) {
    var value = String(text || '');
    var rawQuery = String(query || '').trim();
    if (!rawQuery) return escapeHtml(value);
    var safeValue = escapeHtml(value);
    var regex = new RegExp('(' + escapeRegExp(rawQuery) + ')', 'ig');
    return safeValue.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function updateSearchSuggestions(rawQuery) {
    // If suggestions are blocked, don't show them
    if (Date.now() < searchSuggestionsBlockedUntil) {
        console.log('[search] Suggestions blocked from showing');
        return;
    }
    
    var query = (rawQuery || '').trim().toLowerCase();
    var container = document.getElementById('searchSuggestions');
    if (!container) return;

    if (!query) {
        hideSearchSuggestions();
        return;
    }

    var selectedCategory = getSelectedSearchCategory();
    var termMatches = searchTerms
        .filter(function (term) {
            return term.toLowerCase().includes(query);
        })
        .slice(0, 6);

    var productMatches = products
        .filter(function (product) {
            var matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            if (!matchesCategory) return false;
            return product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.brand.toLowerCase().includes(query);
        })
        .slice(0, 5);

    var html = '';

    if (termMatches.length > 0) {
        html += '<div class="search-section-label">Suggestions</div>';
        termMatches.forEach(function (term) {
            html += '<button type="button" class="search-suggestion-item" data-search-term="' + escapeHtml(encodeURIComponent(term)) + '">';
            html += '<span class="search-suggestion-icon">></span>';
            html += '<span>' + highlightSearchMatch(term, query) + '</span>';
            html += '</button>';
        });
    }

    if (productMatches.length > 0) {
        html += '<div class="search-section-label">Products</div>';
        productMatches.forEach(function (product) {
            var firstImage = Object.values(product.images)[0];
            html += '<button type="button" class="search-suggestion-item" data-search-product-id="' + String(product.id) + '">';
            html += '<img src="' + firstImage + '" class="search-product-thumb" alt="' + escapeHtml(product.name) + '">';
            html += '<span class="search-product-meta">';
            html += '<span class="search-product-name">' + highlightSearchMatch(product.name, query) + '</span>';
            html += '<span class="search-product-info">$' + product.price + ' - ' + highlightSearchMatch(product.brand, query) + '</span>';
            html += '</span>';
            html += '</button>';
        });
    }

    if (!html) {
        html = '<div class="search-no-results">No suggestions found</div>';
    }

    container.innerHTML = html;
    container.style.display = '';
    container.classList.add('open');
    console.log('[search] Suggestions shown', {query, html});
}

function scrollToResultsSection() {
    var target = document.querySelector('.content-wrapper');
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideSearchSuggestions() {
    clearSearchSuggestionQueue();
    var container = document.getElementById('searchSuggestions');
    if (!container) return;
    
    // Hide the container completely
    container.classList.remove('open');
    container.innerHTML = '';
    container.style.display = 'none';
    container.style.visibility = 'hidden';
    console.log('[search] Suggestions hidden (forced)');
    // Block suggestions from showing for 400ms to prevent them from flickering back
    searchSuggestionsBlockedUntil = Date.now() + 400;
    window.searchSuggestionsFocusBlockedUntil = Date.now() + 400;
}

function useSearchSuggestion(text) {
    var searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = text;
    window.searchSuggestionsFocusBlockedUntil = Date.now() + 400;
    hideSearchSuggestions();
    if (searchInput) searchInput.blur();
    performSearch();
}

function selectSuggestedProduct(productId) {
    var product = products.find(function (p) { return p.id === productId; });
    if (!product) return;
    var searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = product.name;
    window.searchSuggestionsFocusBlockedUntil = Date.now() + 400;
    hideSearchSuggestions();
    if (searchInput) searchInput.blur();
    performSearch();
}

function resetSearchExperience() {
    resetSearchControls();
    hideSearchSuggestions();
    applyFilters();
}

function buildProductsEmptyStateHtml() {
    var queryInput = document.getElementById('searchInput');
    var query = queryInput ? String(queryInput.value || '').trim() : '';
    var selectedCategory = getSelectedSearchCategory();
    var hasSearchCriteria = Boolean(query) || selectedCategory !== 'all';
    var title = hasSearchCriteria ? 'No products match your search' : 'No products found';
    var tips = hasSearchCriteria
        ? 'Try a broader keyword, switch category, or reset search.'
        : 'Try adjusting filters or add products from Admin.';

    var html = '<div class="products-empty-state">';
    html += '<h3 class="products-empty-title">' + escapeHtml(title) + '</h3>';
    html += '<p class="products-empty-tip">' + escapeHtml(tips) + '</p>';
    if (hasSearchCriteria) {
        html += '<button type="button" class="search-empty-reset-btn">Reset Search</button>';
    }
    html += '</div>';
    return html;
}

function toTitleCase(text) {
    return text.replace(/\b\w/g, function (letter) {
        return letter.toUpperCase();
    });
}
