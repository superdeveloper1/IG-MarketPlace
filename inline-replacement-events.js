(function (global) {
    'use strict';

    function bindFormSubmits() {
        var signInForm = document.getElementById('authSignInForm');
        if (signInForm && signInForm.dataset.submitBound !== '1') {
            signInForm.addEventListener('submit', function (e) {
                global.submitSignIn(e);
            });
            signInForm.dataset.submitBound = '1';
        }

        var signUpForm = document.getElementById('authSignUpForm');
        if (signUpForm && signUpForm.dataset.submitBound !== '1') {
            signUpForm.addEventListener('submit', function (e) {
                global.submitSignUp(e);
            });
            signUpForm.dataset.submitBound = '1';
        }

        var helpForm = document.getElementById('helpContactForm');
        if (helpForm && helpForm.dataset.submitBound !== '1') {
            helpForm.addEventListener('submit', function (e) {
                global.submitHelpRequest(e);
            });
            helpForm.dataset.submitBound = '1';
        }

        var profileForm = document.getElementById('profileForm');
        if (profileForm && profileForm.dataset.submitBound !== '1') {
            profileForm.addEventListener('submit', function (e) {
                global.submitProfileForm(e);
            });
            profileForm.dataset.submitBound = '1';
        }

        var adminProductForm = document.getElementById('adminProductForm');
        if (adminProductForm && adminProductForm.dataset.submitBound !== '1') {
            adminProductForm.addEventListener('submit', function (e) {
                global.submitAdminProduct(e);
            });
            adminProductForm.dataset.submitBound = '1';
        }
    }

    function bindAdminControls() {
        var addCategoryBtn = document.getElementById('adminAddCategoryBtn');
        if (addCategoryBtn && addCategoryBtn.dataset.inlineBound !== '1') {
            addCategoryBtn.addEventListener('click', function () {
                global.addAdminCategory();
            });
            addCategoryBtn.dataset.inlineBound = '1';
        }

        var addMainLineBtn = document.getElementById('adminAddMainImageLineBtn');
        if (addMainLineBtn && addMainLineBtn.dataset.inlineBound !== '1') {
            addMainLineBtn.addEventListener('click', function () {
                global.addAdminImageLine('main');
            });
            addMainLineBtn.dataset.inlineBound = '1';
        }

        var addAngleLineBtn = document.getElementById('adminAddAngleImageLineBtn');
        if (addAngleLineBtn && addAngleLineBtn.dataset.inlineBound !== '1') {
            addAngleLineBtn.addEventListener('click', function () {
                global.addAdminImageLine('angle');
            });
            addAngleLineBtn.dataset.inlineBound = '1';
        }

        var addColorLineBtn = document.getElementById('adminAddColorLineBtn');
        if (addColorLineBtn && addColorLineBtn.dataset.inlineBound !== '1') {
            addColorLineBtn.addEventListener('click', function () {
                global.addAdminColorLine('', '#d9d9d9', 'solid', '#d9d9d9', '#d9d9d9', '#d9d9d9', 'to bottom');
            });
            addColorLineBtn.dataset.inlineBound = '1';
        }

        var addSpecialSwatchBtn = document.getElementById('adminAddSpecialSwatchBtn');
        if (addSpecialSwatchBtn && addSpecialSwatchBtn.dataset.inlineBound !== '1') {
            addSpecialSwatchBtn.addEventListener('click', function () {
                global.addAdminSpecialColorLine('', '', '#d9d9d9', '#d9d9d9', 50, 50, 280);
            });
            addSpecialSwatchBtn.dataset.inlineBound = '1';
        }

        var videoFile = document.getElementById('adminVideoFile');
        if (videoFile && videoFile.dataset.inlineBound !== '1') {
            videoFile.addEventListener('change', function (e) {
                global.handleAdminVideoFileChange(e);
            });
            videoFile.dataset.inlineBound = '1';
        }

        var clearVideoBtn = document.getElementById('adminClearVideoBtn');
        if (clearVideoBtn && clearVideoBtn.dataset.inlineBound !== '1') {
            clearVideoBtn.addEventListener('click', function () {
                global.clearAdminMediaFields('clear product video fields', 'adminVideoUrl', 'adminVideoThumb', global.resetAdminVideoUploadState);
            });
            clearVideoBtn.dataset.inlineBound = '1';
        }

        var modelFile = document.getElementById('adminModelFile');
        if (modelFile && modelFile.dataset.inlineBound !== '1') {
            modelFile.addEventListener('change', function (e) {
                global.handleAdminModelFileChange(e);
            });
            modelFile.dataset.inlineBound = '1';
        }

        var clearModelBtn = document.getElementById('adminClearModelBtn');
        if (clearModelBtn && clearModelBtn.dataset.inlineBound !== '1') {
            clearModelBtn.addEventListener('click', function () {
                global.clearAdminMediaFields('clear 3D model fields', 'adminModelUrl', 'adminModelThumb', global.resetAdminModelUploadState);
            });
            clearModelBtn.dataset.inlineBound = '1';
        }

        var addSwatchBtn = document.getElementById('adminAddSwatchBtn');
        if (addSwatchBtn && addSwatchBtn.dataset.inlineBound !== '1') {
            addSwatchBtn.addEventListener('click', function () {
                global.addAdminSwatch();
            });
            addSwatchBtn.dataset.inlineBound = '1';
        }

        var resetProductFormBtn = document.getElementById('adminResetProductFormBtn');
        if (resetProductFormBtn && resetProductFormBtn.dataset.inlineBound !== '1') {
            resetProductFormBtn.addEventListener('click', function () {
                global.resetAdminProductForm();
                if (typeof global.setAdminProductFormSection === 'function') {
                    global.setAdminProductFormSection('basic');
                }
            });
            resetProductFormBtn.dataset.inlineBound = '1';
        }

        var saveAndNewBtn = document.getElementById('adminSaveAndNewBtn');
        if (saveAndNewBtn && saveAndNewBtn.dataset.inlineBound !== '1') {
            saveAndNewBtn.addEventListener('click', function () {
                if (typeof global.triggerAdminSaveAndNew === 'function') {
                    global.triggerAdminSaveAndNew();
                }
            });
            saveAndNewBtn.dataset.inlineBound = '1';
        }

        var adminCompactToggleBtn = document.getElementById('adminCompactToggleBtn');
        if (adminCompactToggleBtn && adminCompactToggleBtn.dataset.inlineBound !== '1') {
            adminCompactToggleBtn.addEventListener('click', function () {
                global.toggleAdminCompactMode();
            });
            adminCompactToggleBtn.dataset.inlineBound = '1';
        }

        var adminProductSearch = document.getElementById('adminProductSearch');
        if (adminProductSearch && adminProductSearch.dataset.inlineBound !== '1') {
            adminProductSearch.addEventListener('input', function () {
                if (typeof global.setAdminProductsPage === 'function') {
                    global.setAdminProductsPage(1);
                } else {
                    global.renderAdminProducts();
                }
            });
            adminProductSearch.dataset.inlineBound = '1';
        }

        var adminProductCategoryFilter = document.getElementById('adminProductCategoryFilter');
        if (adminProductCategoryFilter && adminProductCategoryFilter.dataset.inlineBound !== '1') {
            adminProductCategoryFilter.addEventListener('change', function () {
                if (typeof global.setAdminProductsPage === 'function') {
                    global.setAdminProductsPage(1);
                } else {
                    global.renderAdminProducts();
                }
            });
            adminProductCategoryFilter.dataset.inlineBound = '1';
        }

        var adminTableDensity = document.getElementById('adminTableDensity');
        if (adminTableDensity && adminTableDensity.dataset.inlineBound !== '1') {
            adminTableDensity.addEventListener('change', function () {
                global.setAdminTableDensity(String(this.value || 'comfortable'));
            });
            adminTableDensity.dataset.inlineBound = '1';
        }

        document.querySelectorAll('.admin-sort-btn[data-admin-sort-key]').forEach(function (sortBtn) {
            if (sortBtn.dataset.inlineBound === '1') return;
            sortBtn.addEventListener('click', function () {
                var key = String(sortBtn.getAttribute('data-admin-sort-key') || '').trim().toLowerCase();
                if (!key || typeof global.setAdminProductsSort !== 'function') return;
                global.setAdminProductsSort(key);
            });
            sortBtn.dataset.inlineBound = '1';
        });

        var adminProductsPageSize = document.getElementById('adminProductsPageSize');
        if (adminProductsPageSize && adminProductsPageSize.dataset.inlineBound !== '1') {
            adminProductsPageSize.addEventListener('change', function () {
                if (typeof global.setAdminProductsPageSize === 'function') {
                    global.setAdminProductsPageSize(this.value);
                }
            });
            adminProductsPageSize.dataset.inlineBound = '1';
        }

        var adminProductsPrevPageBtn = document.getElementById('adminProductsPrevPageBtn');
        if (adminProductsPrevPageBtn && adminProductsPrevPageBtn.dataset.inlineBound !== '1') {
            adminProductsPrevPageBtn.addEventListener('click', function () {
                if (typeof global.changeAdminProductsPage === 'function') {
                    global.changeAdminProductsPage(-1);
                }
            });
            adminProductsPrevPageBtn.dataset.inlineBound = '1';
        }

        var adminProductsNextPageBtn = document.getElementById('adminProductsNextPageBtn');
        if (adminProductsNextPageBtn && adminProductsNextPageBtn.dataset.inlineBound !== '1') {
            adminProductsNextPageBtn.addEventListener('click', function () {
                if (typeof global.changeAdminProductsPage === 'function') {
                    global.changeAdminProductsPage(1);
                }
            });
            adminProductsNextPageBtn.dataset.inlineBound = '1';
        }

        var adminSelectAllProducts = document.getElementById('adminSelectAllProducts');
        if (adminSelectAllProducts && adminSelectAllProducts.dataset.inlineBound !== '1') {
            adminSelectAllProducts.addEventListener('change', function () {
                global.toggleAdminSelectAllProducts(Boolean(this.checked));
            });
            adminSelectAllProducts.dataset.inlineBound = '1';
        }

        var adminBulkApplyCategoryBtn = document.getElementById('adminBulkApplyCategoryBtn');
        if (adminBulkApplyCategoryBtn && adminBulkApplyCategoryBtn.dataset.inlineBound !== '1') {
            adminBulkApplyCategoryBtn.addEventListener('click', function () {
                global.applyAdminBulkCategory();
            });
            adminBulkApplyCategoryBtn.dataset.inlineBound = '1';
        }

        var adminBulkAdjustStockBtn = document.getElementById('adminBulkAdjustStockBtn');
        if (adminBulkAdjustStockBtn && adminBulkAdjustStockBtn.dataset.inlineBound !== '1') {
            adminBulkAdjustStockBtn.addEventListener('click', function () {
                global.adjustAdminBulkStock();
            });
            adminBulkAdjustStockBtn.dataset.inlineBound = '1';
        }

        var adminBulkDeleteBtn = document.getElementById('adminBulkDeleteBtn');
        if (adminBulkDeleteBtn && adminBulkDeleteBtn.dataset.inlineBound !== '1') {
            adminBulkDeleteBtn.addEventListener('click', function () {
                global.deleteAdminSelectedProducts();
            });
            adminBulkDeleteBtn.dataset.inlineBound = '1';
        }

        var adminProductFormAccordion = document.getElementById('adminProductFormAccordion');
        if (adminProductFormAccordion && adminProductFormAccordion.dataset.inlineBound !== '1') {
            adminProductFormAccordion.addEventListener('click', function (e) {
                var toggleBtn = e.target.closest('[data-admin-form-section-toggle]');
                if (!toggleBtn || !adminProductFormAccordion.contains(toggleBtn)) return;
                var section = String(toggleBtn.getAttribute('data-admin-form-section-toggle') || '').trim().toLowerCase();
                if (!section || typeof global.setAdminProductFormSection !== 'function') return;
                global.setAdminProductFormSection(section);
            });
            adminProductFormAccordion.dataset.inlineBound = '1';
        }
    }

    function bindFooterActionLinks() {
        var helpLinks = document.querySelectorAll('.footer-help-link[data-help-topic]');
        helpLinks.forEach(function (link) {
            if (link.dataset.inlineBound === '1') return;
            link.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var topic = String(link.getAttribute('data-help-topic') || 'help').trim().toLowerCase();
                global.openHelpContactModal(topic);
            });
            link.dataset.inlineBound = '1';
        });

        var myCartLink = document.getElementById('footerMyCartLink');
        if (myCartLink && myCartLink.dataset.inlineBound !== '1') {
            myCartLink.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                global.toggleCart();
            });
            myCartLink.dataset.inlineBound = '1';
        }

        var watchlistLink = document.getElementById('footerWatchlistLink');
        if (watchlistLink && watchlistLink.dataset.inlineBound !== '1') {
            watchlistLink.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var topWatchlistLink = document.getElementById('wishlistLink');
                if (topWatchlistLink) topWatchlistLink.click();
            });
            watchlistLink.dataset.inlineBound = '1';
        }

        var sellerLinks = document.querySelectorAll('.footer-seller-admin-link');
        sellerLinks.forEach(function (link) {
            if (link.dataset.inlineBound === '1') return;
            link.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                global.openAdminPanel();
            });
            link.dataset.inlineBound = '1';
        });
    }

    function bindToastUndo() {
        var toastUndoBtn = document.getElementById('toastUndoBtn');
        if (toastUndoBtn && toastUndoBtn.dataset.inlineBound !== '1') {
            toastUndoBtn.addEventListener('click', function () {
                global.triggerUndoAction();
            });
            toastUndoBtn.dataset.inlineBound = '1';
        }
    }

    function bindInlineReplacementEvents() {
        bindFormSubmits();
        bindAdminControls();
        bindFooterActionLinks();
        bindToastUndo();
    }

    global.bindInlineReplacementEvents = bindInlineReplacementEvents;
})(window);
