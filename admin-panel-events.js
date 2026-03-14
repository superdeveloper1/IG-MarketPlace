(function (global) {
    'use strict';

    function bindAdminMediaInputEvents() {
        var adminVideoUrlInput = document.getElementById('adminVideoUrl');
        if (adminVideoUrlInput && adminVideoUrlInput.dataset.adminVideoUrlBound !== '1') {
            adminVideoUrlInput.addEventListener('input', function () {
                if (!String(this.value || '').trim()) return;
                global.adminUploadedVideoAsset = null;
                var videoFileInput = document.getElementById('adminVideoFile');
                if (videoFileInput) videoFileInput.value = '';
                global.setAdminUploadStatus('adminVideoUploadStatus', 'Using video URL.', false);
            });
            adminVideoUrlInput.dataset.adminVideoUrlBound = '1';
        }

        var adminModelUrlInput = document.getElementById('adminModelUrl');
        if (adminModelUrlInput && adminModelUrlInput.dataset.adminModelUrlBound !== '1') {
            adminModelUrlInput.addEventListener('input', function () {
                if (!String(this.value || '').trim()) return;
                global.adminUploadedModelAsset = null;
                var modelFileInput = document.getElementById('adminModelFile');
                if (modelFileInput) modelFileInput.value = '';
                global.setAdminUploadStatus('adminModelUploadStatus', 'Using 3D model URL.', false);
            });
            adminModelUrlInput.dataset.adminModelUrlBound = '1';
        }

        var adminSpecialColorPicker = document.getElementById('adminSpecialColorPicker');
        if (adminSpecialColorPicker && adminSpecialColorPicker.dataset.adminSpecialPickerBound !== '1') {
            adminSpecialColorPicker.addEventListener('change', function () {
                global.syncAdminSpecialColorSectionState();
            });
            adminSpecialColorPicker.dataset.adminSpecialPickerBound = '1';
        }
    }


    function bindAdminProductSearchEvents() {
        var searchInput = document.getElementById('adminProductSearch');
        var suggestions = document.getElementById('adminSearchSuggestions');
        if (!searchInput || !suggestions || searchInput.dataset.adminSearchEventsBound === '1') return;

        searchInput.addEventListener('input', function () {
            var query = String(this.value || '').trim().toLowerCase();
            if (!query) {
                suggestions.innerHTML = '';
                suggestions.classList.remove('open');
                suggestions.style.display = 'none';
                return;
            }
            var matches = (window.products || []).filter(function (product) {
                return product.name.toLowerCase().includes(query);
            }).slice(0, 6);
            var html = '';
            matches.forEach(function (product) {
                var thumb = Object.values(product.images)[0];
                html += '<button type="button" class="admin-search-suggestion-item" data-admin-product-id="' + product.id + '">';
                html += '<img src="' + thumb + '" class="admin-search-product-thumb" alt="' + escapeHtml(product.name) + '">';
                html += '<span class="admin-search-product-name">' + escapeHtml(product.name) + '</span>';
                html += '</button>';
            });
            if (!html) {
                html = '<div class="search-no-results">No suggestions found</div>';
            }
            suggestions.innerHTML = html;
            suggestions.classList.add('open');
            suggestions.style.display = '';
        });

        searchInput.addEventListener('blur', function () {
            setTimeout(function () {
                suggestions.classList.remove('open');
                suggestions.style.display = 'none';
            }, 200);
        });

        suggestions.addEventListener('click', function (e) {
            var btn = e.target.closest('.admin-search-suggestion-item');
            if (!btn) return;
            var productId = Number(btn.getAttribute('data-admin-product-id'));
            if (!isFinite(productId)) return;
            var product = (window.products || []).find(function (p) { return p.id === productId; });
            if (!product) return;
            searchInput.value = product.name;
            suggestions.classList.remove('open');
            suggestions.style.display = 'none';
            // Optionally trigger admin product selection logic here
        });

        searchInput.dataset.adminSearchEventsBound = '1';
    }
    global.bindAdminPanelEvents = function() {
        bindAdminMediaInputEvents();
        bindAdminProductSearchEvents();
    };
})(window);
