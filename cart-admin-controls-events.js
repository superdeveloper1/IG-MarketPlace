(function (global) {
    'use strict';

    function bindCartControls() {
        var cartOverlay = document.getElementById('cartOverlay');
        if (cartOverlay && cartOverlay.dataset.cartControlBound !== '1') {
            cartOverlay.addEventListener('click', function () {
                global.toggleCart();
            });
            cartOverlay.dataset.cartControlBound = '1';
        }

        var cartCloseBtn = document.getElementById('cartCloseBtn');
        if (cartCloseBtn && cartCloseBtn.dataset.cartControlBound !== '1') {
            cartCloseBtn.addEventListener('click', function () {
                global.toggleCart();
            });
            cartCloseBtn.dataset.cartControlBound = '1';
        }

        var cartContinueBtn = document.getElementById('cartContinueBtn');
        if (cartContinueBtn && cartContinueBtn.dataset.cartControlBound !== '1') {
            cartContinueBtn.addEventListener('click', function () {
                global.toggleCart();
            });
            cartContinueBtn.dataset.cartControlBound = '1';
        }

        var cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
        if (cartCheckoutBtn && cartCheckoutBtn.dataset.cartControlBound !== '1') {
            cartCheckoutBtn.addEventListener('click', function () {
                global.proceedToCheckout();
            });
            cartCheckoutBtn.dataset.cartControlBound = '1';
        }

        var cartBody = document.getElementById('cartBody');
        if (cartBody && cartBody.dataset.cartItemsBound !== '1') {
            cartBody.addEventListener('click', function (e) {
                var actionBtn = e.target.closest('[data-cart-action]');
                if (!actionBtn) return;

                var action = String(actionBtn.getAttribute('data-cart-action') || '').trim().toLowerCase();
                var index = Number(actionBtn.getAttribute('data-cart-index'));
                if (!isFinite(index)) return;

                if (action === 'remove') {
                    global.removeFromCart(index);
                    return;
                }
                if (action !== 'qty') return;
                var delta = Number(actionBtn.getAttribute('data-cart-delta'));
                if (!isFinite(delta) || delta === 0) return;
                global.updateCartQuantity(index, delta);
            });
            cartBody.dataset.cartItemsBound = '1';
        }
    }

    function bindAdminControls() {
        var adminOverlay = document.getElementById('adminOverlay');
        if (adminOverlay && adminOverlay.dataset.adminControlBound !== '1') {
            adminOverlay.addEventListener('click', function () {
                global.closeAdminPanel();
            });
            adminOverlay.dataset.adminControlBound = '1';
        }

        var adminCloseBtn = document.getElementById('adminCloseBtn');
        if (adminCloseBtn && adminCloseBtn.dataset.adminControlBound !== '1') {
            adminCloseBtn.addEventListener('click', function () {
                global.closeAdminPanel();
            });
            adminCloseBtn.dataset.adminControlBound = '1';
        }

        var clearOrdersBtn = document.getElementById('clearOrdersBtn');
        if (clearOrdersBtn && clearOrdersBtn.dataset.adminControlBound !== '1') {
            clearOrdersBtn.addEventListener('click', function () {
                global.clearOrders();
            });
            clearOrdersBtn.dataset.adminControlBound = '1';
        }

        var adminTabs = document.querySelectorAll('.admin-tabs .admin-tab[data-tab]');
        adminTabs.forEach(function (tabBtn) {
            if (tabBtn.dataset.adminControlBound === '1') return;
            tabBtn.addEventListener('click', function () {
                var tab = String(tabBtn.getAttribute('data-tab') || '').trim();
                if (!tab) return;
                global.switchAdminTab(tab);
            });
            tabBtn.dataset.adminControlBound = '1';
        });
    }

    function bindCartAdminControls() {
        bindCartControls();
        bindAdminControls();
    }

    global.bindCartAdminControls = bindCartAdminControls;
})(window);
