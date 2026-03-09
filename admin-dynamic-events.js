(function (global) {
    'use strict';

    function bindAdminCategoryDynamicEvents() {
        var categoryList = document.getElementById('adminCategoryList');
        if (!categoryList || categoryList.dataset.dynamicEventsBound === '1') return;

        categoryList.addEventListener('click', function (e) {
            var actionBtn = e.target.closest('[data-admin-category-action][data-category-value]');
            if (!actionBtn || !categoryList.contains(actionBtn)) return;

            var action = String(actionBtn.getAttribute('data-admin-category-action') || '').trim().toLowerCase();
            if (action !== 'delete') return;

            var value = String(actionBtn.getAttribute('data-category-value') || '').trim();
            if (!value) return;
            global.deleteAdminCategory(value);
        });

        categoryList.dataset.dynamicEventsBound = '1';
    }

    function bindAdminProductDynamicEvents() {
        var productsBody = document.getElementById('adminProductsBody');
        if (!productsBody || productsBody.dataset.dynamicEventsBound === '1') return;

        productsBody.addEventListener('change', function (e) {
            var selectionToggle = e.target.closest('input[type="checkbox"][data-admin-select-product][data-product-id]');
            if (!selectionToggle || !productsBody.contains(selectionToggle)) return;
            var selectedProductId = Number(selectionToggle.getAttribute('data-product-id'));
            if (!isFinite(selectedProductId)) return;
            global.setAdminProductSelection(selectedProductId, Boolean(selectionToggle.checked));
        });

        productsBody.addEventListener('keydown', function (e) {
            if (e.key !== 'Enter') return;
            var inlineField = e.target.closest('input[data-admin-inline-field][data-product-id]');
            if (!inlineField || !productsBody.contains(inlineField)) return;
            var inlineProductId = Number(inlineField.getAttribute('data-product-id'));
            if (!isFinite(inlineProductId)) return;
            e.preventDefault();
            global.quickSaveAdminProductRow(inlineProductId);
        });

        productsBody.addEventListener('click', function (e) {
            var actionBtn = e.target.closest('[data-admin-product-action][data-product-id]');
            if (!actionBtn || !productsBody.contains(actionBtn)) return;

            var action = String(actionBtn.getAttribute('data-admin-product-action') || '').trim().toLowerCase();
            var productId = Number(actionBtn.getAttribute('data-product-id'));
            if (!isFinite(productId)) return;

            if (action === 'quick-save') {
                global.quickSaveAdminProductRow(productId);
                return;
            }
            if (action === 'move') {
                var direction = Number(actionBtn.getAttribute('data-direction'));
                if (!isFinite(direction) || direction === 0) return;
                global.moveProductOrder(productId, direction);
                return;
            }
            if (action === 'edit') {
                global.editAdminProduct(productId);
                return;
            }
            if (action === 'view') {
                global.openProductModal(productId);
                return;
            }
            if (action === 'delete') {
                global.deleteAdminProduct(productId);
            }
        });

        productsBody.dataset.dynamicEventsBound = '1';
    }

    function bindAdminOrderDynamicEvents() {
        var ordersBody = document.getElementById('adminOrdersBody');
        if (!ordersBody || ordersBody.dataset.dynamicEventsBound === '1') return;

        ordersBody.addEventListener('change', function (e) {
            var statusSelect = e.target.closest('select.admin-status-select[data-order-id]');
            if (!statusSelect || !ordersBody.contains(statusSelect)) return;
            var orderId = String(statusSelect.getAttribute('data-order-id') || '').trim();
            if (!orderId) return;
            global.updateOrderStatus(orderId, String(statusSelect.value || '').trim());
        });

        ordersBody.addEventListener('click', function (e) {
            var actionBtn = e.target.closest('[data-order-action][data-order-id]');
            if (!actionBtn || !ordersBody.contains(actionBtn)) return;

            var action = String(actionBtn.getAttribute('data-order-action') || '').trim().toLowerCase();
            var orderId = String(actionBtn.getAttribute('data-order-id') || '').trim();
            if (!orderId) return;

            if (action === 'view') {
                global.viewOrder(orderId);
                return;
            }
            if (action === 'delete') {
                global.deleteOrder(orderId);
            }
        });

        ordersBody.dataset.dynamicEventsBound = '1';
    }

    function bindAdminDynamicEvents() {
        bindAdminCategoryDynamicEvents();
        bindAdminProductDynamicEvents();
        bindAdminOrderDynamicEvents();
    }

    global.bindAdminDynamicEvents = bindAdminDynamicEvents;
})(window);
