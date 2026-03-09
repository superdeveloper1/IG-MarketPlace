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

    global.bindAdminPanelEvents = bindAdminMediaInputEvents;
})(window);
