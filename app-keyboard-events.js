(function (global) {
    'use strict';

    function bindAppKeyboardEvents() {
        if (document.body && document.body.dataset.appKeyboardEventsBound === '1') return;

        document.addEventListener('keydown', function (e) {
            var activeDialog = global.getActiveFocusTrapContainer();
            if (e.key === 'Tab' && activeDialog) {
                global.trapFocusInContainer(e, activeDialog);
                return;
            }
            if (e.key !== 'Escape') return;

            var videoModal = document.getElementById('videoModal');
            if (videoModal && videoModal.classList.contains('open')) {
                global.closeProductVideo();
                return;
            }
            var modelModal = document.getElementById('modelModal');
            if (modelModal && modelModal.classList.contains('open')) {
                global.closeProductModel();
                return;
            }
            var confirmOverlay = document.getElementById('confirmOverlay');
            if (confirmOverlay && confirmOverlay.classList.contains('open')) {
                global.closeConfirmModal();
                return;
            }
            var profileOverlay = document.getElementById('profileOverlay');
            if (profileOverlay && profileOverlay.classList.contains('open')) {
                global.closeProfileModal();
                return;
            }
            var helpOverlay = document.getElementById('helpOverlay');
            if (helpOverlay && helpOverlay.classList.contains('open')) {
                global.closeHelpModal();
                return;
            }
            var authOverlay = document.getElementById('authOverlay');
            if (authOverlay && authOverlay.classList.contains('open')) {
                global.closeAuthModal();
                return;
            }
            var adminPanel = document.getElementById('adminPanel');
            if (adminPanel && adminPanel.classList.contains('open')) {
                global.closeAdminPanel();
                return;
            }
            var cartPanel = document.getElementById('cartPanel');
            if (cartPanel && cartPanel.classList.contains('open')) {
                global.toggleCart();
                return;
            }
            var productModal = document.getElementById('productModal');
            if (productModal && productModal.classList.contains('open')) {
                global.closeProductModal();
            }
        });

        if (document.body) document.body.dataset.appKeyboardEventsBound = '1';
    }

    global.bindAppKeyboardEvents = bindAppKeyboardEvents;
})(window);
