(function (global) {
    'use strict';

    function bindAuthAndTopLinks() {
        var authLink = document.getElementById('authLink');
        if (authLink && authLink.dataset.authLinkBound !== '1') {
            authLink.addEventListener('click', global.handleAuthLinkClick);
            authLink.dataset.authLinkBound = '1';
        }

        var dailyDealsLink = document.getElementById('dailyDealsLink');
        if (dailyDealsLink && dailyDealsLink.dataset.dailyDealsBound !== '1') {
            dailyDealsLink.addEventListener('click', function (e) {
                e.preventDefault();
                global.toggleDailyDealsFilter();
                global.scrollToResultsSection();
            });
            dailyDealsLink.dataset.dailyDealsBound = '1';
        }
        global.updateDailyDealsUI();

        var wishlistLink = document.getElementById('wishlistLink');
        if (wishlistLink && wishlistLink.dataset.wishlistBound !== '1') {
            wishlistLink.addEventListener('click', function (e) {
                e.preventDefault();
                if (!global.ensureAuthenticatedForShopping('view your watchlist')) return;
                global.showWishlistProducts();
            });
            wishlistLink.dataset.wishlistBound = '1';
        }

        var helpContactLink = document.getElementById('helpContactLink');
        if (helpContactLink && helpContactLink.dataset.helpContactBound !== '1') {
            helpContactLink.addEventListener('click', function (e) {
                e.preventDefault();
                global.openHelpContactModal('help');
            });
            helpContactLink.dataset.helpContactBound = '1';
        }

        var sellLink = document.getElementById('sellLink');
        if (sellLink && sellLink.dataset.sellLinkBound !== '1') {
            sellLink.addEventListener('click', function (e) {
                e.preventDefault();
                global.showToast('coming soon');
            });
            sellLink.dataset.sellLinkBound = '1';
        }
    }

    function bindProductBreadcrumbLinks() {
        var modalBreadcrumbHome = document.getElementById('modalBreadcrumbHome');
        if (modalBreadcrumbHome && modalBreadcrumbHome.dataset.modalHomeBound !== '1') {
            modalBreadcrumbHome.addEventListener('click', function (e) {
                e.preventDefault();
                global.closeProductModal();
                global.resetFilterInputs(false);
                global.resetSearchControls();
                global.currentFilters.category = 'all';
                global.currentFilters.dailyDealsOnly = false;
                global.updateDailyDealsUI();
                global.renderCategoryUI();
                global.applyFilters();
                global.scrollToResultsSection();
            });
            modalBreadcrumbHome.dataset.modalHomeBound = '1';
        }

        var modalCategoryLink = document.getElementById('modalCategory');
        if (modalCategoryLink && modalCategoryLink.dataset.modalCategoryBound !== '1') {
            modalCategoryLink.addEventListener('click', function (e) {
                e.preventDefault();
                var category = global.currentProduct && global.currentProduct.category
                    ? String(global.currentProduct.category).trim()
                    : '';
                global.closeProductModal();
                if (!category) {
                    global.currentFilters.category = 'all';
                    global.renderCategoryUI();
                    global.applyFilters();
                    global.scrollToResultsSection();
                    return;
                }
                global.applyCategoryFromFooter(category);
            });
            modalCategoryLink.dataset.modalCategoryBound = '1';
        }
    }

    function bindNavAccountEvents() {
        bindAuthAndTopLinks();
        bindProductBreadcrumbLinks();
    }

    global.bindNavAccountEvents = bindNavAccountEvents;
})(window);
