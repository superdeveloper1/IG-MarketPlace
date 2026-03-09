(function (global) {
    'use strict';

    function bindOverlayCloseEvents() {
        var authOverlay = document.getElementById('authOverlay');
        if (authOverlay && authOverlay.dataset.overlayClickBound !== '1') {
            authOverlay.addEventListener('click', function (e) {
                global.closeAuthModalOnOverlay(e);
            });
            authOverlay.dataset.overlayClickBound = '1';
        }

        var helpOverlay = document.getElementById('helpOverlay');
        if (helpOverlay && helpOverlay.dataset.overlayClickBound !== '1') {
            helpOverlay.addEventListener('click', function (e) {
                global.closeHelpModalOnOverlay(e);
            });
            helpOverlay.dataset.overlayClickBound = '1';
        }

        var profileOverlay = document.getElementById('profileOverlay');
        if (profileOverlay && profileOverlay.dataset.overlayClickBound !== '1') {
            profileOverlay.addEventListener('click', function (e) {
                global.closeProfileModalOnOverlay(e);
            });
            profileOverlay.dataset.overlayClickBound = '1';
        }

        var confirmOverlay = document.getElementById('confirmOverlay');
        if (confirmOverlay && confirmOverlay.dataset.overlayClickBound !== '1') {
            confirmOverlay.addEventListener('click', function (e) {
                global.closeConfirmModalOnOverlay(e);
            });
            confirmOverlay.dataset.overlayClickBound = '1';
        }
    }

    function bindAuthModalControls() {
        var authCloseBtn = document.getElementById('authCloseBtn');
        if (authCloseBtn && authCloseBtn.dataset.authControlBound !== '1') {
            authCloseBtn.addEventListener('click', function () {
                global.closeAuthModal();
            });
            authCloseBtn.dataset.authControlBound = '1';
        }

        var authTabSignIn = document.getElementById('authTabSignIn');
        if (authTabSignIn && authTabSignIn.dataset.authControlBound !== '1') {
            authTabSignIn.addEventListener('click', function () {
                global.switchAuthMode('signin');
            });
            authTabSignIn.dataset.authControlBound = '1';
        }

        var authTabSignUp = document.getElementById('authTabSignUp');
        if (authTabSignUp && authTabSignUp.dataset.authControlBound !== '1') {
            authTabSignUp.addEventListener('click', function () {
                global.switchAuthMode('signup');
            });
            authTabSignUp.dataset.authControlBound = '1';
        }
    }

    function bindHelpProfileConfirmControls() {
        var helpCloseBtn = document.getElementById('helpCloseBtn');
        if (helpCloseBtn && helpCloseBtn.dataset.overlayControlBound !== '1') {
            helpCloseBtn.addEventListener('click', function () {
                global.closeHelpModal();
            });
            helpCloseBtn.dataset.overlayControlBound = '1';
        }

        var profileCloseTopBtn = document.getElementById('profileCloseTopBtn');
        if (profileCloseTopBtn && profileCloseTopBtn.dataset.overlayControlBound !== '1') {
            profileCloseTopBtn.addEventListener('click', function () {
                global.closeProfileModal();
            });
            profileCloseTopBtn.dataset.overlayControlBound = '1';
        }

        var profileCloseBtn = document.getElementById('profileCloseBtn');
        if (profileCloseBtn && profileCloseBtn.dataset.overlayControlBound !== '1') {
            profileCloseBtn.addEventListener('click', function () {
                global.closeProfileModal();
            });
            profileCloseBtn.dataset.overlayControlBound = '1';
        }

        var profileSignOutBtn = document.getElementById('profileSignOutBtn');
        if (profileSignOutBtn && profileSignOutBtn.dataset.overlayControlBound !== '1') {
            profileSignOutBtn.addEventListener('click', function () {
                global.signOutCurrentUser();
            });
            profileSignOutBtn.dataset.overlayControlBound = '1';
        }

        var confirmCloseBtn = document.getElementById('confirmCloseBtn');
        if (confirmCloseBtn && confirmCloseBtn.dataset.overlayControlBound !== '1') {
            confirmCloseBtn.addEventListener('click', function () {
                global.confirmModalCancel();
            });
            confirmCloseBtn.dataset.overlayControlBound = '1';
        }

        var confirmCancelBtn = document.getElementById('confirmCancelBtn');
        if (confirmCancelBtn && confirmCancelBtn.dataset.overlayControlBound !== '1') {
            confirmCancelBtn.addEventListener('click', function () {
                global.confirmModalCancel();
            });
            confirmCancelBtn.dataset.overlayControlBound = '1';
        }

        var confirmAcceptBtn = document.getElementById('confirmAcceptBtn');
        if (confirmAcceptBtn && confirmAcceptBtn.dataset.overlayControlBound !== '1') {
            confirmAcceptBtn.addEventListener('click', function () {
                global.confirmModalAccept();
            });
            confirmAcceptBtn.dataset.overlayControlBound = '1';
        }
    }

    function bindAuthOverlayEvents() {
        bindOverlayCloseEvents();
        bindAuthModalControls();
        bindHelpProfileConfirmControls();
    }

    global.bindAuthOverlayEvents = bindAuthOverlayEvents;
})(window);
