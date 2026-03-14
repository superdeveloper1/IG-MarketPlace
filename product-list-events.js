(function (global) {
    'use strict';

    function bindProductCardActions() {
        var productsContainer = document.getElementById('productsContainer');
        if (!productsContainer || productsContainer.dataset.productCardEventsBound === '1') return;

        productsContainer.addEventListener('click', function (e) {
            var actionBtn = e.target.closest('[data-card-action][data-product-id]');
            if (actionBtn && productsContainer.contains(actionBtn)) {
                e.preventDefault();
                e.stopPropagation();
                global.hideSearchSuggestions();
                var action = String(actionBtn.getAttribute('data-card-action') || '').trim().toLowerCase();
                var actionProductId = Number(actionBtn.getAttribute('data-product-id'));
                if (!isFinite(actionProductId)) return;

                if (action === 'quick-add') {
                    global.quickAddToCart(actionProductId);
                    return;
                }
                if (action === 'toggle-wishlist') {
                    global.toggleWishlist(actionProductId);
                    return;
                }
                return;
            }

            var card = e.target.closest('.product-card[data-product-id]');
            if (!card || !productsContainer.contains(card)) return;
            var productId = Number(card.getAttribute('data-product-id'));
            if (!isFinite(productId)) return;
            e.stopPropagation();
            // Hide suggestions and blur search before opening modal
            global.hideSearchSuggestions();
            var searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.blur();
            global.openProductModal(productId);
        });

        productsContainer.dataset.productCardEventsBound = '1';
    }

    function bindPaginationActions() {
        var pagination = document.getElementById('pagination');
        if (!pagination || pagination.dataset.paginationEventsBound === '1') return;

        pagination.addEventListener('click', function (e) {
            var pageBtn = e.target.closest('button[data-page]');
            if (!pageBtn || !pagination.contains(pageBtn)) return;
            var page = Number(pageBtn.getAttribute('data-page'));
            if (!isFinite(page)) return;
            global.changePage(page);
        });

        pagination.dataset.paginationEventsBound = '1';
    }

    function bindRelatedItemActions() {
        var relatedItems = document.getElementById('relatedItems');
        if (!relatedItems || relatedItems.dataset.relatedEventsBound === '1') return;

        relatedItems.addEventListener('click', function (e) {
            var relatedItem = e.target.closest('[data-related-product-id]');
            if (!relatedItem || !relatedItems.contains(relatedItem)) return;
            var productId = Number(relatedItem.getAttribute('data-related-product-id'));
            if (!isFinite(productId)) return;
            e.stopPropagation();
            // Hide suggestions and blur search before opening modal
            global.hideSearchSuggestions();
            var searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.blur();
            global.openProductModal(productId);
        });

        relatedItems.dataset.relatedEventsBound = '1';
    }

    function bindProductListEvents() {
        bindProductCardActions();
        bindPaginationActions();
        bindRelatedItemActions();
    }

    global.bindProductListEvents = bindProductListEvents;
})(window);
