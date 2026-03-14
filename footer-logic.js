function setupFooterInteractions() {
    var footerYear = document.getElementById('footerYear');
    if (footerYear) {
        footerYear.textContent = String(new Date().getFullYear());
    }

    var backToTop = document.getElementById('footerBackToTop');
    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    var siteFooter = document.getElementById('siteFooter');
    if (siteFooter && siteFooter.dataset.linkEventsBound !== '1') {
        siteFooter.addEventListener('click', function (e) {
            var link = e.target.closest('a');
            if (!link || !siteFooter.contains(link)) return;

            if (link.classList.contains('footer-category-link')) {
                e.preventDefault();
                var category = link.dataset.category || 'all';
                applyCategoryFromFooter(category);
                return;
            }

            if (link.hasAttribute('onclick')) return;
            e.preventDefault();
            showToast('coming soon');
        });
        siteFooter.dataset.linkEventsBound = '1';
    }

    var trackForm = document.getElementById('footerTrackForm');
    if (trackForm) {
        trackForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var input = document.getElementById('footerOrderId');
            if (!input) return;

            var orderId = String(input.value || '').trim();
            if (!orderId) {
                showToast('Enter an order ID');
                return;
            }

            var order = orders.find(function (item) {
                return String(item.id || '').toLowerCase() === orderId.toLowerCase();
            });

            if (!order) {
                showToast('Order not found');
                return;
            }

            showToast('Order ' + order.id + ' is ' + String(order.status || 'processing'));
        });
    }

    var newsletterForm = document.getElementById('footerNewsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var input = document.getElementById('footerNewsletterEmail');
            if (!input) return;
            var email = String(input.value || '').trim().toLowerCase();
            var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            if (!valid) {
                showToast('Enter a valid email');
                return;
            }

            localStorage.setItem('ig_newsletter_email', email);
            input.value = '';
            showToast('Subscribed to deals newsletter');
        });
    }

    initializeFooterPreferences();
    initializeFooterAccordion();
}

function initializeFooterPreferences() {
    var language = document.getElementById('footerLanguage');
    var currency = document.getElementById('footerCurrency');
    var country = document.getElementById('footerCountry');
    if (!language || !currency || !country) return;

    var defaults = {
        language: language.value,
        currency: currency.value,
        country: country.value
    };

    var saved = null;
    try {
        saved = JSON.parse(localStorage.getItem('ig_footer_preferences') || '{}');
    } catch (e) {
        saved = null;
    }

    var data = Object.assign({}, defaults, saved || {});
    if (Array.from(language.options).some(function (opt) { return opt.value === data.language; })) {
        language.value = data.language;
    }
    if (Array.from(currency.options).some(function (opt) { return opt.value === data.currency; })) {
        currency.value = data.currency;
    }
    if (Array.from(country.options).some(function (opt) { return opt.value === data.country; })) {
        country.value = data.country;
    }

    [language, currency, country].forEach(function (select) {
        select.addEventListener('change', function () {
            saveFooterPreferences();
            showToast('Preferences updated');
        });
    });
}

function saveFooterPreferences() {
    var language = document.getElementById('footerLanguage');
    var currency = document.getElementById('footerCurrency');
    var country = document.getElementById('footerCountry');
    if (!language || !currency || !country) return;

    var preferences = {
        language: language.value,
        currency: currency.value,
        country: country.value
    };

    localStorage.setItem('ig_footer_preferences', JSON.stringify(preferences));
}

function initializeFooterAccordion() {
    var columns = Array.from(document.querySelectorAll('.footer-column'));
    if (columns.length === 0) return;

    function isMobileFooter() {
        return window.matchMedia('(max-width: 768px)').matches;
    }

    function syncFooterAccordionState() {
        var mobile = isMobileFooter();
        columns.forEach(function (column, index) {
            var toggle = column.querySelector('.footer-column-toggle');
            if (!toggle) return;

            if (!mobile) {
                column.classList.add('is-open');
                toggle.setAttribute('aria-expanded', 'true');
                return;
            }

            if (!column.dataset.mobileStateInit) {
                if (index === 0) {
                    column.classList.add('is-open');
                } else {
                    column.classList.remove('is-open');
                }
                column.dataset.mobileStateInit = '1';
            }
            toggle.setAttribute('aria-expanded', column.classList.contains('is-open') ? 'true' : 'false');
        });
    }

    columns.forEach(function (column) {
        var toggle = column.querySelector('.footer-column-toggle');
        if (!toggle || toggle.dataset.bound === '1') return;

        toggle.addEventListener('click', function () {
            if (!isMobileFooter()) return;
            var willOpen = !column.classList.contains('is-open');
            column.classList.toggle('is-open', willOpen);
            toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });
        toggle.dataset.bound = '1';
    });

    syncFooterAccordionState();
    window.addEventListener('resize', syncFooterAccordionState);
}

function applyCategoryFromFooter(category) {
    var categoryMap = getAllCategories();
    var value = categoryMap[category] ? category : 'all';
    currentFilters.category = value;
    if (typeof hideSearchSuggestions === 'function') hideSearchSuggestions();
    renderCategoryUI();
    applyFilters();
    scrollToResultsSection();
}
