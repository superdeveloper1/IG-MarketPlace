(function (global) {
    'use strict';

window.GLOBAL_SEARCH_LOCKDOWN_UNTIL_V4 = window.GLOBAL_SEARCH_LOCKDOWN_UNTIL_V4 || (Date.now() + 50);

// Shared state access via global object
// We don't declare local vars for these to ensure we always use the shared global state
var searchSuggestionTimer = null;

function applyFilters(options) {
    global.currentPage = 1;
    hideSearchSuggestions();
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

    global.filteredProducts = (global.products || products).filter(function (product) {
        if (global.currentFilters.dailyDealsOnly && !product.dailyDeal) return false;
        if (global.currentFilters.category !== 'all' && product.category !== global.currentFilters.category) return false;

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

    if (typeof global.sortProducts === 'function') {
        global.sortProducts();
    } else if (typeof global.renderProducts === 'function') {
        global.renderProducts();
    }
    if (!(options && options.skipUrlSync)) {
        if (typeof global.updateBrowseUrlState === 'function') global.updateBrowseUrlState({ includeSearch: false });
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
    var searchInput = document.querySelector('[id^="ig-q-v5-"], #ig-main-search-input-v4');
    if (searchInput) {
        searchInput.value = '';
        v5Log('Search controls reset.');
        v5Log('Session Started: ' + window.IG_V5_SESSION_ID);
        window.onerror = function(msg, url, line) {
            v5Log('ERROR: ' + msg + ' @ ' + line);
            return false;
        };
    }
    var searchCategory = document.getElementById('searchCategory');
    if (searchCategory) searchCategory.value = 'all';
    hideSearchSuggestions();
}

function clearFilters() {
    resetFilterInputs(false);
    resetSearchControls();
    global.currentFilters.dailyDealsOnly = false;
    updateDailyDealsUI();
    applyFilters();
}

function performSearch(options) {
    v5Log('performSearch triggered');
    clearSearchSuggestionQueue();
    var searchInput = document.querySelector('[id^="ig-q-v5-"], #ig-main-search-input-v4');
    var query = searchInput ? String(searchInput.value || '').toLowerCase().trim() : '';
    v5Log('Search query: "' + query + '"');
    var selectedCategory = getSelectedSearchCategory();

    if (!query && selectedCategory === 'all') {
        applyFilters();
        hideSearchSuggestions();
        return;
    }

    var pList = global.products || window.products || [];
    var filters = global.currentFilters || {};
    global.filteredProducts = pList.filter(function (product) {
        var matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        if (!matchesCategory) return false;
        if (filters.dailyDealsOnly && !product.dailyDeal) return false;
        if (!query) return true;

        return product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query);
    });

    global.currentPage = 1;
    v5Log('Filtered products count: ' + (global.filteredProducts || []).length);
    hideSearchSuggestions(500);
    if (typeof global.sortProducts === 'function') {
        global.sortProducts();
    } else if (typeof global.renderProducts === 'function') {
        global.renderProducts();
    }
    if (typeof global.updateBrowseUrlState === 'function') global.updateBrowseUrlState({ includeSearch: true });

    if (options && options.keepFocus && searchInput) {
        var restoreInput = searchInput;
        var restoreLen = restoreInput.value.length;
        setTimeout(function () {
            try {
                restoreInput.focus();
                if (typeof restoreInput.setSelectionRange === 'function') {
                    if (options.selectAll) {
                        restoreInput.setSelectionRange(0, restoreLen);
                    } else {
                        restoreInput.setSelectionRange(restoreLen, restoreLen);
                    }
                }
            } catch (e) {}
        }, 0);
    }
}

function toggleDailyDealsFilter() {
    var filters = global.currentFilters || {};
    filters.dailyDealsOnly = !filters.dailyDealsOnly;
    global.currentPage = 1;
    filters.category = 'all';

    resetFilterInputs(false);
    resetSearchControls();

    if (typeof global.renderCategoryUI === 'function') global.renderCategoryUI();
    updateDailyDealsUI();
    applyFilters();
}

function updateDailyDealsUI() {
    var dailyDealsLink = document.getElementById('dailyDealsLink');
    if (!dailyDealsLink) return;
    dailyDealsLink.classList.toggle('active', Boolean(global.currentFilters.dailyDealsOnly));
}

function buildSearchTerms() {
    v5Log('buildSearchTerms: starting...');
    var set = new Set();
    var pList = global.products || window.products || [];
    v5Log('buildSearchTerms: product count = ' + pList.length);
    pList.forEach(function (product) {
        set.add(product.name);
        set.add(product.brand);
        if (product.category) set.add((global.toTitleCase || window.toTitleCase)(product.category));

        product.name.split(/[^a-zA-Z0-9]+/).forEach(function (word) {
            if (word && word.length > 2) set.add(word);
        });
    });
    global.searchTerms = Array.from(set);
    v5Log('buildSearchTerms: searchTerms built. Count = ' + global.searchTerms.length);
    v5Log('buildSearchTerms: Sample terms: ' + global.searchTerms.slice(0, 5).join(', '));
}

function getSelectedSearchCategory() {
    var select = document.getElementById('searchCategory');
    if (!select) return 'all';
    return (select.value || 'all').toLowerCase();
}

function queueSearchSuggestions(rawQuery) {
    clearSearchSuggestionQueue();
    var normalized = String(rawQuery || '').trim();
    if (!normalized) {
        hideSearchSuggestions(0, true);
        return;
    }
    searchSuggestionTimer = setTimeout(function () {
        updateSearchSuggestions(rawQuery);
    }, global.SEARCH_SUGGESTION_DEBOUNCE_MS || 250);
}

function clearSearchSuggestionQueue() {
    if (searchSuggestionTimer) {
        clearTimeout(searchSuggestionTimer);
        searchSuggestionTimer = null;
    }
}

function highlightSearchMatch(text, query) {
    var value = String(text || '');
    var rawQuery = String(query || '').trim();
    var escHtml = global.escapeHtml || window.escapeHtml;
    if (!rawQuery) return escHtml(value);
    var safeValue = escHtml(value);
    var escapeRegExpFn = global.escapeRegExp || window.escapeRegExp || function(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
    var regex = new RegExp('(' + escapeRegExpFn(rawQuery) + ')', 'ig');
    return safeValue.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function updateSearchSuggestions(rawQuery) {
    if (Date.now() < window.GLOBAL_SEARCH_LOCKDOWN_UNTIL_V4) return;
    v5Log('updateSearchSuggestions: ' + rawQuery);
    var query = (rawQuery || '').trim().toLowerCase();
    var searchInput = document.querySelector('[id^="ig-q-v5-"], #ig-main-search-input-v4');
    if (!searchInput || document.activeElement !== searchInput) {
        hideSearchSuggestions(0, true);
        return;
    }
    var container = document.getElementById('ig-search-suggestions-container-v5');
    if (!container) {
        v5Log('updateSearchSuggestions: Container NOT FOUND!');
        return;
    }
    v5Log('updateSearchSuggestions: query="' + query + '"');

    var isNavigatingMenu = false;

    var selectedCategory = getSelectedSearchCategory();
    var productMatches = [];
    var termMatches = [];

    if (query) {
        var sTerms = global.searchTerms || window.searchTerms || [];
        termMatches = sTerms
            .filter(function (term) {
                return term.toLowerCase().includes(query);
            })
            .slice(0, 6);

        var pList = global.products || window.products || products || [];
        productMatches = pList
            .filter(function (product) {
                var matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
                if (!matchesCategory) return false;
                return product.name.toLowerCase().includes(query) ||
                    product.description.toLowerCase().includes(query) ||
                    product.brand.toLowerCase().includes(query);
            })
            .slice(0, 5);
    } else {
        // Default suggestions when query is empty
        var pList = global.products || window.products || products || [];
        var sTerms = global.searchTerms || window.searchTerms || [];
        termMatches = sTerms.slice(0, 4);
        productMatches = pList
            .filter(function(product) {
                 return selectedCategory === 'all' || product.category === selectedCategory;
            })
            .slice(0, 4);
    }

    var html = '';

    if (termMatches.length > 0) {
        var escHtml = global.escapeHtml || window.escapeHtml || function(s) { return s; };
        html += '<div class="search-section-label">Suggestions</div>';
        termMatches.forEach(function (term) {
            html += '<button type="button" class="admin-search-suggestion-item" data-search-term="' + escHtml(encodeURIComponent(term)) + '">';
            html += '<span class="search-suggestion-icon">></span>';
            html += '<span>' + highlightSearchMatch(term, query) + '</span>';
            html += '</button>';
        });
    }

    if (productMatches.length > 0) {
        var escHtml = global.escapeHtml || window.escapeHtml || function(s) { return s; };
        html += '<div class="search-section-label">Products</div>';
        productMatches.forEach(function (product) {
            var firstImage = Object.values(product.images)[0];
            html += '<button type="button" class="admin-search-suggestion-item" data-search-product-id="' + String(product.id) + '">';
            html += '<img src="' + firstImage + '" class="admin-search-product-thumb" alt="' + escHtml(product.name) + '">';
            html += '<span class="admin-search-product-name">' + highlightSearchMatch(product.name, query) + '</span>';
            html += '</button>';
        });
    }

    if (!html) {
        html = '<div class="search-no-results">No suggestions found</div>';
    }

    container.style.display = 'block';
    container.innerHTML = html;
    container.classList.add('open');
    v5Log('updateSearchSuggestions: Displayed ' + (termMatches.length + productMatches.length) + ' items.');
}

function scrollToResultsSection() {
    var target = document.querySelector('.content-wrapper');
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideSearchSuggestions(duration, skipLockdown, blurInput) {
    clearSearchSuggestionQueue();
    var container = document.getElementById('ig-search-suggestions-container-v5');
    if (!container) return;
    
    // Hide the container completely
    container.classList.remove('open');
    container.style.display = 'none';
    container.innerHTML = '';

    if (blurInput) {
        var searchInput = document.querySelector('[id^="ig-q-v5-"], #ig-main-search-input-v4');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.blur();
        }
        var blockFor = (typeof duration === 'number') ? duration : 200;
        if (typeof window.searchSuggestionsFocusBlockedUntil === 'number') {
            window.searchSuggestionsFocusBlockedUntil = Math.max(window.searchSuggestionsFocusBlockedUntil, Date.now() + Math.max(200, blockFor));
        }
    }
    
    // Skip lockdown if explicitly requested
    if (skipLockdown) return;
    
    // Block suggestions for a short time to prevent jumpy reappearance on focus/input
    // Default to 200ms unless a specific duration is provided
    var blockDuration = (typeof duration === 'number') ? duration : 200;
    var newBlockedUntil = Date.now() + blockDuration;
    
    // Only update if the new block is LONGER than the current one
    if (newBlockedUntil > window.GLOBAL_SEARCH_LOCKDOWN_UNTIL_V4) {
        window.GLOBAL_SEARCH_LOCKDOWN_UNTIL_V4 = newBlockedUntil;
        console.log('[search] Suggestions blocked until', new Date(window.GLOBAL_SEARCH_LOCKDOWN_UNTIL_V4).toLocaleTimeString());
    }
}

function useSearchSuggestion(text) {
    var searchInput = document.querySelector('[id^="ig-q-v5-"], #ig-main-search-input-v4');
    if (searchInput) {
        searchInput.value = text;
        searchInput.focus();
    }
    global.SEARCH_CLEAR_ON_OUTSIDE_CLICK = true;
    performSearch();
}

function selectSuggestedProduct(productId) {
    var pList = global.products || window.products || [];
    var product = pList.find(function (p) { return p.id === productId; });
    if (!product) return;
    var searchInput = document.querySelector('[id^="ig-q-v5-"], #ig-main-search-input-v4');
    if (searchInput) {
        searchInput.value = product.name;
    }
    global.SEARCH_CLEAR_ON_OUTSIDE_CLICK = true;
    performSearch();
}

function resetSearchExperience() {
    resetSearchControls();
    hideSearchSuggestions();
    if (typeof global.applyFilters === 'function') global.applyFilters();
}

function buildProductsEmptyStateHtml() {
    var queryInput = document.querySelector('[id^="ig-q-v5-"], #ig-main-search-input-v4');
    var escHtml = global.escapeHtml || window.escapeHtml || function(s) { return s; };
    var query = queryInput ? String(queryInput.value || '').trim() : '';
    var selectedCategory = getSelectedSearchCategory();
    var hasSearchCriteria = Boolean(query) || selectedCategory !== 'all';
    var title = hasSearchCriteria ? 'No products match your search' : 'No products found';
    var tips = hasSearchCriteria
        ? 'Try a broader keyword, switch category, or reset search.'
        : 'Try adjusting filters or add products from Admin.';

    var html = '<div class="products-empty-state">';
    html += '<h3 class="products-empty-title">' + escHtml(title) + '</h3>';
    html += '<p class="products-empty-tip">' + escHtml(tips) + '</p>';
    if (hasSearchCriteria) {
        html += '<button type="button" class="search-empty-reset-btn">Reset Search</button>';
    }
    html += '</div>';
    return html;
}

    global.applyFilters = applyFilters;
    global.clearFilters = clearFilters;
    global.performSearch = performSearch;
    global.hideSearchSuggestions = hideSearchSuggestions;
    global.queueSearchSuggestions = queueSearchSuggestions;
    global.useSearchSuggestion = useSearchSuggestion;
    global.selectSuggestedProduct = selectSuggestedProduct;
    global.resetSearchExperience = resetSearchExperience;
    global.resetSearchControls = resetSearchControls;
    global.getSelectedSearchCategory = getSelectedSearchCategory;
    global.updateSearchSuggestions = updateSearchSuggestions;
    global.clearSearchSuggestionQueue = clearSearchSuggestionQueue;
    global.buildProductsEmptyStateHtml = buildProductsEmptyStateHtml;
    global.scrollToResultsSection = scrollToResultsSection;
    global.buildSearchTerms = buildSearchTerms;
    global.resetFilterInputs = resetFilterInputs;
    global.toggleDailyDealsFilter = toggleDailyDealsFilter;
})(window);
