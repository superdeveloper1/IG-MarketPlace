(function (global) {
    'use strict';

    function bindFilterCheckboxes() {
        var filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
        filterCheckboxes.forEach(function (checkbox) {
            if (checkbox.dataset.filterChangeBound === '1') return;
            checkbox.addEventListener('change', global.applyFilters);
            checkbox.dataset.filterChangeBound = '1';
        });
    }

    function bindPriceInputs() {
        var minPrice = document.getElementById('minPrice');
        if (minPrice && minPrice.dataset.filterPriceBound !== '1') {
            minPrice.addEventListener('change', global.applyFilters);
            minPrice.dataset.filterPriceBound = '1';
        }

        var maxPrice = document.getElementById('maxPrice');
        if (maxPrice && maxPrice.dataset.filterPriceBound !== '1') {
            maxPrice.addEventListener('change', global.applyFilters);
            maxPrice.dataset.filterPriceBound = '1';
        }
    }

    function bindFilterUiEvents() {
        bindFilterCheckboxes();
        bindPriceInputs();
    }

    global.bindFilterUiEvents = bindFilterUiEvents;
})(window);
