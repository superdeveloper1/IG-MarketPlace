(function (global) {
    'use strict';
    console.log('[search-ui-events] LOADED V20260314-25');

    function bindCategoryNavigation() {
        var categoriesList = document.getElementById('categoriesList');
        if (!categoriesList || categoriesList.dataset.searchCategoryEventsBound === '1') return;

        categoriesList.addEventListener('click', function (e) {
            var item = e.target.closest('.category-item');
            if (!item) return;
            var searchInput = document.querySelector('[id^="ig-q-v5-"], #ig-main-search-input-v4');
            if (searchInput) searchInput.blur();
            global.currentFilters.category = item.dataset.category || 'all';
            global.hideSearchSuggestions(300);
            global.renderCategoryUI();
            global.applyFilters();
            global.scrollToResultsSection();
        });

        categoriesList.dataset.searchCategoryEventsBound = '1';
    }

    function bindSearchInputEvents() {
        var searchInput = document.querySelector('[id^="ig-q-v5-"], #ig-main-search-input-v4');
        if (!searchInput) {
            v5Log('bindSearchInputEvents: Input not found.');
            return;
        }
        v5Log('bindSearchInputEvents: Found input ID=' + searchInput.id);
        console.log('[V5-DEBUG] Binding events to input element:', searchInput);
        if (searchInput.dataset.searchInputEventsBound === '1') return;
        v5Log('Binding search input events.');

        searchInput.addEventListener('keypress', function (e) {
            var searchSuggestions = document.getElementById('ig-search-suggestions-container-v5');
            var isSuggestionsOpen = searchSuggestions && searchSuggestions.classList.contains('open');
            var activeItem = isSuggestionsOpen ? searchSuggestions.querySelector('.admin-search-suggestion-item.active') : null;
            
            if (e.key === 'Enter') {
                v5Log('Enter key pressed');
                if (activeItem) {
                    activeItem.click();
                } else {
                    global.performSearch();
                }
                e.preventDefault();
            }
        });

        searchInput.addEventListener('input', function () {
            v5Log('Input event: ' + this.value);
            console.log('[V5-DEBUG] Input event fired on ' + this.id + ': ' + this.value);
            global.queueSearchSuggestions(this.value);
        });

        searchInput.addEventListener('focus', function () {
            v5Log('Focus event');
            if (window.searchSuggestionsFocusBlockedUntil && Date.now() < window.searchSuggestionsFocusBlockedUntil) {
                return;
            }
            if (typeof global.buildSearchTerms === 'function') global.buildSearchTerms();
            global.queueSearchSuggestions(this.value);
        });

        searchInput.addEventListener('blur', function () {
            v5Log('Blur event');
            setTimeout(function () {
                global.hideSearchSuggestions(0, false);
            }, 200);
        });

        searchInput.addEventListener('keydown', function (e) {
            var searchSuggestions = document.getElementById('ig-search-suggestions-container-v5');
            var isSuggestionsOpen = searchSuggestions && searchSuggestions.classList.contains('open');

            if (e.key === 'Escape') {
                global.hideSearchSuggestions();
                this.blur();
                return;
            }

            if (isSuggestionsOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
                e.preventDefault();
                var items = Array.from(searchSuggestions.querySelectorAll('.admin-search-suggestion-item'));
                if (items.length === 0) return;

                var currentIndex = items.findIndex(function(item) { return item.classList.contains('active'); });
                var nextIndex = -1;

                if (e.key === 'ArrowDown') {
                    nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
                } else if (e.key === 'ArrowUp') {
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
                }

                if (currentIndex >= 0) {
                    items[currentIndex].classList.remove('active');
                }
                
                var activeItem = items[nextIndex];
                activeItem.classList.add('active');
                activeItem.scrollIntoView({ block: 'nearest' });

                var term = activeItem.getAttribute('data-search-term');
                if (term) {
                    try {
                        searchInput.value = decodeURIComponent(term);
                    } catch(err) {
                        searchInput.value = term;
                    }
                }
            }
        });

        searchInput.dataset.searchInputEventsBound = '1';
    }

    function bindSearchCategoryEvents() {
        var searchInput = document.querySelector('[id^="ig-q-v5-"], #ig-main-search-input-v4');
        var searchCategory = document.getElementById('searchCategory');
        if (!searchCategory || searchCategory.dataset.searchSelectEventsBound === '1') return;

        searchCategory.addEventListener('pointerdown', function (e) {
            e.stopPropagation();
            if (typeof global.hideSearchSuggestions === 'function') {
                global.hideSearchSuggestions();
            }
        });

        searchCategory.addEventListener('click', function (e) {
            e.stopPropagation();
            if (typeof global.hideSearchSuggestions === 'function') {
                global.hideSearchSuggestions();
            }
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

        function handleOutsideSearchInteraction(e) {
            // Always close suggestions on any interaction that isn't a suggestion item.
            var suggestionItem = e.target.closest('[data-search-term], [data-search-product-id]');
            if (suggestionItem) return;
            var searchInput = document.querySelector('[id^="ig-q-v5-"], #ig-main-search-input-v4');
            if (searchInput && (e.target === searchInput || searchInput.contains(e.target))) {
                return;
            }
            if (searchInput && global.SEARCH_CLEAR_ON_OUTSIDE_CLICK) {
                searchInput.value = '';
                global.SEARCH_CLEAR_ON_OUTSIDE_CLICK = false;
            }
            global.hideSearchSuggestions(200);
        }

        document.addEventListener('pointerdown', handleOutsideSearchInteraction, true);
        document.addEventListener('mousedown', handleOutsideSearchInteraction, true);
        document.addEventListener('click', handleOutsideSearchInteraction, true);
        document.addEventListener('touchstart', handleOutsideSearchInteraction, true);

        if (document.body) document.body.dataset.searchOutsideBound = '1';
    }

    function bindSearchSuggestionActions() {
        if (document.body && document.body.dataset.searchSuggestionsDelegatedV2 === '1') return;

        var container = document.getElementById('ig-search-suggestions-container-v5');
        if (!container) {
            console.warn('[search-ui-events] bindSearchSuggestionActions: container not found, will retry');
            setTimeout(bindSearchSuggestionActions, 100);
            return;
        }

        var clickedElement = null;

        // mousedown on container: capture target, keep dropdown visible so click can fire
        container.addEventListener('mousedown', function (e) {
            clickedElement = e.target;
            window.GLOBAL_SEARCH_LOCKDOWN_UNTIL_V4 = Date.now() + 2000;
            e.preventDefault(); // Prevent input blur
        }, false);

        // click on container: handle suggestion selection using captured target
        container.addEventListener('click', function (e) {
            var target = clickedElement || e.target;
            clickedElement = null;

            var termBtn = target.closest('[data-search-term]');
            if (termBtn) {
                var encodedTerm = String(termBtn.getAttribute('data-search-term') || '').trim();
                if (!encodedTerm) return;
                var term;
                try { term = decodeURIComponent(encodedTerm); } catch (err) { term = encodedTerm; }
                console.log('[SUGG] termBtn clicked, term=', term);
                if (typeof global.useSearchSuggestion === 'function') global.useSearchSuggestion(term);
                if (typeof global.hideSearchSuggestions === 'function') global.hideSearchSuggestions(0, true);
                return;
            }

            var productBtn = target.closest('[data-search-product-id]');
            if (productBtn) {
                var productId = Number(productBtn.getAttribute('data-search-product-id'));
                if (!isFinite(productId)) return;
                console.log('[SUGG] productBtn clicked, id=', productId);
                if (typeof global.selectSuggestedProduct === 'function') global.selectSuggestedProduct(productId);
                if (typeof global.hideSearchSuggestions === 'function') global.hideSearchSuggestions(0, true);
                return;
            }

            var resetBtn = target.closest('.search-empty-reset-btn');
            if (resetBtn) {
                if (typeof global.resetSearchExperience === 'function') global.resetSearchExperience();
                if (typeof global.hideSearchSuggestions === 'function') global.hideSearchSuggestions(0, true);
                return;
            }

            if (typeof global.hideSearchSuggestions === 'function') global.hideSearchSuggestions();
        }, false);

        if (document.body) document.body.dataset.searchSuggestionsDelegatedV2 = '1';
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
