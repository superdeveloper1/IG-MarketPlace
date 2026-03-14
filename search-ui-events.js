(function (global) {
    'use strict';

    function bindCategoryNavigation() {
        var categoriesList = document.getElementById('categoriesList');
        if (!categoriesList || categoriesList.dataset.searchCategoryEventsBound === '1') return;

        categoriesList.addEventListener('click', function (e) {
            var item = e.target.closest('.category-item');
            if (!item) return;
            global.currentFilters.category = item.dataset.category || 'all';
            global.hideSearchSuggestions();
            global.renderCategoryUI();
            global.applyFilters();
            global.scrollToResultsSection();
        });

        categoriesList.dataset.searchCategoryEventsBound = '1';
    }

    function bindSearchInputEvents() {
        var searchInput = document.getElementById('searchInput');
        if (!searchInput || searchInput.dataset.searchInputEventsBound === '1') return;

        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') global.performSearch();
        });

        searchInput.addEventListener('input', function () {
            console.log('[search-input] input event', this.value);
            global.queueSearchSuggestions(this.value);
        });

        searchInput.addEventListener('focus', function () {
            console.log('[search-input] focus event', this.value);
            // Block focus-triggered suggestions if recently hidden
            console.log('[search-input] focus event', this.value, 'blockUntil:', window.searchSuggestionsFocusBlockedUntil, 'now:', Date.now());
            if (typeof window.searchSuggestionsFocusBlockedUntil !== 'undefined' && Date.now() < window.searchSuggestionsFocusBlockedUntil) {
                console.log('[search-input] focus event blocked', 'blockUntil:', window.searchSuggestionsFocusBlockedUntil, 'now:', Date.now());
                return;
            }
            // Only show suggestions if there's actual search text
            if (this.value.trim()) {
                global.queueSearchSuggestions(this.value);
            }
        });

        searchInput.addEventListener('blur', function () {
            console.log('[search-input] blur event', this.value);
            // Delay hiding suggestions slightly to allow click events on suggestion items to fire
            setTimeout(function () {
                global.hideSearchSuggestions();
            }, 200);
        });

        searchInput.addEventListener('keydown', function (e) {
            console.log('[search-input] keydown event', e.key);
            if (e.key === 'Escape') {
                global.hideSearchSuggestions();
                this.blur();
            }
        });

        searchInput.dataset.searchInputEventsBound = '1';
    }

    function bindSearchCategoryEvents() {
        var searchInput = document.getElementById('searchInput');
        var searchCategory = document.getElementById('searchCategory');
        if (!searchCategory || searchCategory.dataset.searchSelectEventsBound === '1') return;

        searchCategory.addEventListener('pointerdown', function (e) {
            e.stopPropagation();
        });

        searchCategory.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        searchCategory.addEventListener('change', function () {
            var selectedValue = String(searchCategory.value || 'all').toLowerCase();
            global.hideSearchSuggestions();
            global.performSearch();
            global.scrollToResultsSection();
            if (selectedValue !== 'all') {
                searchCategory.value = 'all';
                global.updateBrowseUrlState({ includeSearch: true });
            }
            if (searchInput) searchInput.blur();
        });

        searchCategory.dataset.searchSelectEventsBound = '1';
    }

    function bindOutsideSearchClick() {
        if (document.body && document.body.dataset.searchOutsideBound === '1') return;

        document.addEventListener('click', function (e) {
            // Get search bar and check if click is outside it
            var searchBar = document.querySelector('.search-bar');
            if (!searchBar) return;
            
            // If click target or any parent is the search bar, don't hide
            if (searchBar.contains(e.target)) return;
            
            // Otherwise, hide suggestions (click was outside search bar)
            global.hideSearchSuggestions();
        }, true); // Use capture phase to catch clicks early

        if (document.body) document.body.dataset.searchOutsideBound = '1';
    }

    function bindSearchSuggestionActions() {
        var searchSuggestions = document.getElementById('searchSuggestions');
        if (searchSuggestions && searchSuggestions.dataset.searchActionsBound !== '1') {
            searchSuggestions.addEventListener('click', function (e) {
                var termBtn = e.target.closest('[data-search-term]');
                if (termBtn) {
                    e.preventDefault();
                    var encodedTerm = String(termBtn.getAttribute('data-search-term') || '').trim();
                    if (!encodedTerm) return;
                    var term = '';
                    try {
                        term = decodeURIComponent(encodedTerm);
                    } catch (err) {
                        term = encodedTerm;
                    }
                    global.useSearchSuggestion(term);
                    return;
                }

                var productBtn = e.target.closest('[data-search-product-id]');
                if (!productBtn) return;
                e.preventDefault();
                var productId = Number(productBtn.getAttribute('data-search-product-id'));
                if (!isFinite(productId)) return;
                global.selectSuggestedProduct(productId);
            });
            searchSuggestions.dataset.searchActionsBound = '1';
        }

        if (document.body && document.body.dataset.searchResetBound !== '1') {
            document.addEventListener('click', function (e) {
                var resetBtn = e.target.closest('.search-empty-reset-btn');
                if (!resetBtn) return;
                e.preventDefault();
                global.resetSearchExperience();
            });
            document.body.dataset.searchResetBound = '1';
        }
    }

    function bindSearchAndCategoryEvents() {
        bindCategoryNavigation();
        bindSearchInputEvents();
        bindSearchCategoryEvents();
        bindOutsideSearchClick();
        bindSearchSuggestionActions();
    }

    global.bindSearchAndCategoryEvents = bindSearchAndCategoryEvents;
})(window);
