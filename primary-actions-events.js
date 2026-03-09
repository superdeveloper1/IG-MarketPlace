(function (global) {
    'use strict';

    function bindHeaderActions() {
        var searchBtn = document.getElementById('searchBtn');
        if (searchBtn && searchBtn.dataset.primaryActionBound !== '1') {
            searchBtn.addEventListener('click', function () {
                global.performSearch();
            });
            searchBtn.dataset.primaryActionBound = '1';
        }

        var adminOpenBtn = document.getElementById('adminOpenBtn');
        if (adminOpenBtn && adminOpenBtn.dataset.primaryActionBound !== '1') {
            adminOpenBtn.addEventListener('click', function () {
                global.openAdminPanel();
            });
            adminOpenBtn.dataset.primaryActionBound = '1';
        }

        var headerCartIcon = document.getElementById('headerCartIcon');
        if (headerCartIcon && headerCartIcon.dataset.primaryActionBound !== '1') {
            headerCartIcon.addEventListener('click', function () {
                global.toggleCart();
            });
            headerCartIcon.dataset.primaryActionBound = '1';
        }
    }

    function bindHeroActions() {
        var heroCtas = document.querySelectorAll('.hero-cta-btn');
        heroCtas.forEach(function (button) {
            if (button.dataset.primaryActionBound === '1') return;
            button.addEventListener('click', function () {
                var target = document.querySelector('.products-section');
                if (!target) return;
                target.scrollIntoView({ behavior: 'smooth' });
            });
            button.dataset.primaryActionBound = '1';
        });

        var heroNavButtons = document.querySelectorAll('.hero-nav-btn[data-step]');
        heroNavButtons.forEach(function (button) {
            if (button.dataset.primaryActionBound === '1') return;
            button.addEventListener('click', function () {
                var step = Number(button.getAttribute('data-step'));
                if (!isFinite(step) || step === 0) return;
                global.moveHeroSlide(step);
            });
            button.dataset.primaryActionBound = '1';
        });
    }

    function bindCatalogActions() {
        var clearFiltersBtn = document.getElementById('clearFiltersBtn');
        if (clearFiltersBtn && clearFiltersBtn.dataset.primaryActionBound !== '1') {
            clearFiltersBtn.addEventListener('click', function () {
                global.clearFilters();
            });
            clearFiltersBtn.dataset.primaryActionBound = '1';
        }

        var sortSelect = document.getElementById('sortSelect');
        if (sortSelect && sortSelect.dataset.primaryActionBound !== '1') {
            sortSelect.addEventListener('change', function () {
                global.sortProducts();
            });
            sortSelect.dataset.primaryActionBound = '1';
        }

        var viewButtons = document.querySelectorAll('.view-toggle .view-btn[data-view]');
        viewButtons.forEach(function (button) {
            if (button.dataset.primaryActionBound === '1') return;
            button.addEventListener('click', function () {
                var view = String(button.getAttribute('data-view') || '').trim().toLowerCase();
                if (!view) return;
                global.setView(view);
            });
            button.dataset.primaryActionBound = '1';
        });
    }

    function bindPrimaryActionEvents() {
        bindHeaderActions();
        bindHeroActions();
        bindCatalogActions();
    }

    global.bindPrimaryActionEvents = bindPrimaryActionEvents;
})(window);
