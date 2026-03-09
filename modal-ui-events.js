(function (global) {
    'use strict';

    function bindThumbnailEvents() {
        var thumbnails = document.getElementById('thumbnails');
        if (!thumbnails || thumbnails.dataset.modalThumbEventsBound === '1') return;

        thumbnails.addEventListener('pointerdown', function (e) {
            var thumb = e.target.closest('.thumbnail[data-index]');
            if (!thumb) return;
            global.handleModalThumbnailActivate(Number(thumb.getAttribute('data-index')), e);
        }, true);

        thumbnails.addEventListener('click', function (e) {
            var modelThumb = e.target.closest('.thumbnail-model');
            if (modelThumb && thumbnails.contains(modelThumb)) {
                e.preventDefault();
                e.stopPropagation();
                global.openProductModel();
                return;
            }

            var videoThumb = e.target.closest('.thumbnail-video');
            if (videoThumb && thumbnails.contains(videoThumb)) {
                e.preventDefault();
                e.stopPropagation();
                global.openProductVideo();
                return;
            }

            var thumb = e.target.closest('.thumbnail[data-index]');
            if (!thumb) return;
            global.handleModalThumbnailActivate(Number(thumb.getAttribute('data-index')), e);
        }, true);

        thumbnails.dataset.modalThumbEventsBound = '1';
    }

    function bindImageIndexControls() {
        var imageIndexControls = document.getElementById('modalImageIndexControls');
        if (!imageIndexControls || imageIndexControls.dataset.modalIndexEventsBound === '1') return;

        imageIndexControls.addEventListener('pointerdown', function (e) {
            var control = e.target.closest('.image-index-btn[data-index]');
            if (!control || !imageIndexControls.contains(control)) return;
            global.handleModalThumbnailActivate(Number(control.getAttribute('data-index')), e);
        }, true);

        imageIndexControls.addEventListener('click', function (e) {
            var control = e.target.closest('.image-index-btn[data-index]');
            if (!control || !imageIndexControls.contains(control)) return;
            global.handleModalThumbnailActivate(Number(control.getAttribute('data-index')), e);
        }, true);

        imageIndexControls.dataset.modalIndexEventsBound = '1';
    }

    function bindProductModalControls() {
        var closeBtn = document.getElementById('productModalCloseBtn');
        if (closeBtn && closeBtn.dataset.modalControlBound !== '1') {
            closeBtn.addEventListener('click', function () {
                global.closeProductModal();
            });
            closeBtn.dataset.modalControlBound = '1';
        }

        var carouselButtons = document.querySelectorAll('#productModal .carousel-btn[data-modal-carousel-step]');
        carouselButtons.forEach(function (button) {
            if (button.dataset.modalControlBound === '1') return;
            button.addEventListener('click', function () {
                var step = Number(button.getAttribute('data-modal-carousel-step'));
                if (!isFinite(step) || step === 0) return;
                global.moveModalCarousel(step);
            });
            button.dataset.modalControlBound = '1';
        });

        var qtyButtons = document.querySelectorAll('#productModal .qty-btn[data-qty-delta]');
        qtyButtons.forEach(function (button) {
            if (button.dataset.modalControlBound === '1') return;
            button.addEventListener('click', function () {
                var delta = Number(button.getAttribute('data-qty-delta'));
                if (!isFinite(delta) || delta === 0) return;
                global.changeQuantity(delta);
            });
            button.dataset.modalControlBound = '1';
        });

        var buyNowBtn = document.getElementById('modalBuyNowBtn');
        if (buyNowBtn && buyNowBtn.dataset.modalControlBound !== '1') {
            buyNowBtn.addEventListener('click', function () {
                global.buyNow();
            });
            buyNowBtn.dataset.modalControlBound = '1';
        }

        var addToCartBtn = document.getElementById('modalAddToCartBtn');
        if (addToCartBtn && addToCartBtn.dataset.modalControlBound !== '1') {
            addToCartBtn.addEventListener('click', function () {
                global.addToCartFromModal();
            });
            addToCartBtn.dataset.modalControlBound = '1';
        }

        var wishlistBtn = document.getElementById('modalWishlistBtn');
        if (wishlistBtn && wishlistBtn.dataset.modalControlBound !== '1') {
            wishlistBtn.addEventListener('click', function () {
                global.toggleWishlistModal();
            });
            wishlistBtn.dataset.modalControlBound = '1';
        }

        var shareBtn = document.getElementById('modalShareBtn');
        if (shareBtn && shareBtn.dataset.modalControlBound !== '1') {
            shareBtn.addEventListener('click', function () {
                global.shareCurrentProduct();
            });
            shareBtn.dataset.modalControlBound = '1';
        }
    }

    function bindMediaModalControls() {
        var videoModal = document.getElementById('videoModal');
        if (videoModal && videoModal.dataset.mediaOverlayBound !== '1') {
            videoModal.addEventListener('click', function (e) {
                global.closeProductVideoOnOverlay(e);
            });
            videoModal.dataset.mediaOverlayBound = '1';
        }

        var modelModal = document.getElementById('modelModal');
        if (modelModal && modelModal.dataset.mediaOverlayBound !== '1') {
            modelModal.addEventListener('click', function (e) {
                global.closeProductModelOnOverlay(e);
            });
            modelModal.dataset.mediaOverlayBound = '1';
        }

        var videoCloseBtn = document.getElementById('productVideoCloseBtn');
        if (videoCloseBtn && videoCloseBtn.dataset.mediaCloseBound !== '1') {
            videoCloseBtn.addEventListener('click', function () {
                global.closeProductVideo();
            });
            videoCloseBtn.dataset.mediaCloseBound = '1';
        }

        var modelCloseBtn = document.getElementById('productModelCloseBtn');
        if (modelCloseBtn && modelCloseBtn.dataset.mediaCloseBound !== '1') {
            modelCloseBtn.addEventListener('click', function () {
                global.closeProductModel();
            });
            modelCloseBtn.dataset.mediaCloseBound = '1';
        }
    }

    function bindSpecialColorPreviewEvents() {
        var mainImage = document.getElementById('mainImage');
        if (mainImage && mainImage.dataset.specialPreviewBound !== '1') {
            mainImage.addEventListener('click', global.handleSpecialColorPreviewPick);
            mainImage.dataset.specialPreviewBound = '1';
        }

        if (document.body && document.body.dataset.specialColorClickBound !== '1') {
            document.addEventListener('click', function (e) {
                var pickBtn = e.target.closest('#specialPickColorBtn');
                if (pickBtn) {
                    global.toggleSpecialColorPickMode();
                    return;
                }
                var resetBtn = e.target.closest('#specialResetColorBtn');
                if (resetBtn) {
                    global.resetSpecialColorSample();
                }
            });
            document.body.dataset.specialColorClickBound = '1';
        }

        if (document.body && document.body.dataset.specialColorInputBound !== '1') {
            document.addEventListener('input', function (e) {
                var manualInput = e.target.closest('#specialManualColorInput');
                if (!manualInput) return;
                global.updateSpecialColorSampleFromManual(manualInput.value, { statusText: 'Pattern sample updated manually.' });
            });

            document.addEventListener('change', function (e) {
                var manualInput = e.target.closest('#specialManualColorInput');
                if (!manualInput) return;
                global.updateSpecialColorSampleFromManual(manualInput.value, { statusText: 'Pattern sample updated manually.' });
            });

            document.body.dataset.specialColorInputBound = '1';
        }
    }

    function bindVariantSelectionEvents() {
        var modalVariants = document.getElementById('modalVariants');
        if (!modalVariants || modalVariants.dataset.variantEventsBound === '1') return;

        modalVariants.addEventListener('click', function (e) {
            var optionBtn = e.target.closest('[data-option][data-value]');
            if (!optionBtn || !modalVariants.contains(optionBtn)) return;
            var option = String(optionBtn.getAttribute('data-option') || '').trim();
            var value = String(optionBtn.getAttribute('data-value') || '').trim();
            if (!option || !value) return;
            global.selectVariant(option, value);
        });

        modalVariants.dataset.variantEventsBound = '1';
    }

    function bindProductModalOverlayClose() {
        var productModalRoot = document.getElementById('productModal');
        if (!productModalRoot || productModalRoot.dataset.overlayCloseBound === '1') return;

        productModalRoot.addEventListener('click', function (e) {
            if (e.target.id === 'productModal') {
                global.closeProductModal();
            }
        });

        productModalRoot.dataset.overlayCloseBound = '1';
    }

    function bindModalUiEvents() {
        bindThumbnailEvents();
        bindImageIndexControls();
        bindProductModalControls();
        bindVariantSelectionEvents();
        bindMediaModalControls();
        bindSpecialColorPreviewEvents();
        bindProductModalOverlayClose();
    }

    global.bindModalUiEvents = bindModalUiEvents;
})(window);
