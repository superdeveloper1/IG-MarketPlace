function handleAuthLinkClick(event) {
    if (event) event.preventDefault();
    if (!currentUser) {
        openAuthModal('signin', 'shop');
        return;
    }
    openProfileModal();
}

function openProfileModal() {
    if (!currentUser) {
        openAuthModal('signin', 'shop');
        return;
    }

    var overlay = document.getElementById('profileOverlay');
    if (!overlay) return;

    var nameInput = document.getElementById('profileName');
    var emailText = document.getElementById('profileEmail');

    if (nameInput) nameInput.value = String(currentUser.name || '').trim();
    if (emailText) emailText.textContent = String(currentUser.email || '');

    updateProfileStats();
    rememberFocusForModal('profileOverlay');
    overlay.classList.add('open');
    focusFirstElementIn(overlay, '#profileName');
}

function closeProfileModal() {
    var overlay = document.getElementById('profileOverlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    restoreFocusForModal('profileOverlay');
}

function closeProfileModalOnOverlay(event) {
    if (event.target && event.target.id === 'profileOverlay') {
        closeProfileModal();
    }
}

function updateProfileStats() {
    var orderCountEl = document.getElementById('profileOrderCount');
    var watchlistCountEl = document.getElementById('profileWatchlistCount');
    var cartCountEl = document.getElementById('profileCartCount');
    if (!orderCountEl || !watchlistCountEl || !cartCountEl) return;

    var orderCount = Array.isArray(orders) ? orders.length : 0;
    var watchlistCount = Array.isArray(wishlist) ? wishlist.length : 0;
    var cartCount = Array.isArray(cart)
        ? cart.reduce(function (sum, item) { return sum + Number(item.quantity || 0); }, 0)
        : 0;

    orderCountEl.textContent = String(orderCount);
    watchlistCountEl.textContent = String(watchlistCount);
    cartCountEl.textContent = String(cartCount);
}

function submitProfileForm(event) {
    if (event) event.preventDefault();
    if (!currentUser) return;

    var nameInput = document.getElementById('profileName');
    if (!nameInput) return;

    var nextName = String(nameInput.value || '').trim();
    if (!nextName) {
        showToast('Name is required');
        return;
    }

    currentUser.name = nextName;
    var account = users.find(function (item) {
        return item.email === currentUser.email;
    });
    if (account) account.name = nextName;

    saveToStorage();
    updateAuthUI();
    closeProfileModal();
    showToast('Profile updated');
}

function signOutCurrentUser() {
    if (!currentUser) return;
    persistLoginAcrossSessions = false;
    currentUser = null;
    saveToStorage({ skipCloudSync: true });
    updateAuthUI();
    if (typeof handleCloudIdentityChange === 'function') {
        handleCloudIdentityChange();
    }
    closeAdminPanel();
    closeProfileModal();
    showToast('Signed out');
}

function normalizeHelpTopic(topic) {
    var value = String(topic || '').trim().toLowerCase();
    if (!value) return 'help';
    if (value.includes('order')) return 'order';
    if (value.includes('shipping') || value.includes('delivery')) return 'shipping';
    if (value.includes('return') || value.includes('refund')) return 'returns';
    if (value.includes('payment') || value.includes('billing')) return 'payments';
    if (value.includes('report') || value.includes('issue')) return 'report';
    return 'help';
}

function getHelpTopicLabel(topic) {
    var map = {
        order: 'Order status',
        shipping: 'Shipping & delivery',
        returns: 'Returns & refunds',
        payments: 'Payments',
        report: 'Report an issue',
        help: 'General help'
    };
    return map[topic] || map.help;
}

function normalizeUserRole(role) {
    var value = String(role || '').trim().toLowerCase();
    if (value === USER_ROLE_ADMIN) return USER_ROLE_ADMIN;
    return USER_ROLE_CUSTOMER;
}

function isAdminUser(user) {
    return Boolean(user) && normalizeUserRole(user.role) === USER_ROLE_ADMIN;
}

function isCurrentUserAdmin() {
    return isAdminUser(currentUser);
}

function ensureAdminAccess(actionLabel, options) {
    if (isCurrentUserAdmin()) return true;
    var silent = Boolean(options && options.silent);
    if (silent) return false;

    if (!currentUser) {
        openAuthModal('signin', actionLabel || 'access admin tools');
        showToast('Sign in with an admin account');
    } else {
        openAuthModal('signin', actionLabel || 'access admin tools');
        showToast('Admin access required');
    }
    return false;
}

function ensureAtLeastOneAdminUser() {
    if (!Array.isArray(users) || users.length === 0) return;
    var hasAdmin = users.some(function (item) { return isAdminUser(item); });
    if (hasAdmin) return;
    users[0].role = USER_ROLE_ADMIN;
    if (currentUser && currentUser.email === users[0].email) {
        currentUser.role = USER_ROLE_ADMIN;
    }
}

function updateAdminEntryUI() {
    var adminButton = document.querySelector('.admin-open-btn');
    if (!adminButton) return;
    if (isCurrentUserAdmin()) {
        adminButton.textContent = 'Admin';
        adminButton.title = 'Open admin panel';
        adminButton.classList.remove('locked');
    } else {
        adminButton.textContent = 'Admin (Locked)';
        adminButton.title = 'Admin access required';
        adminButton.classList.add('locked');
    }
}

function openHelpContactModal(topic) {
    var overlay = document.getElementById('helpOverlay');
    if (!overlay) return;

    var normalizedTopic = normalizeHelpTopic(topic);
    var topicSelect = document.getElementById('helpTopic');
    var contextText = document.getElementById('helpContextText');
    var nameInput = document.getElementById('helpName');
    var emailInput = document.getElementById('helpEmail');

    if (topicSelect) topicSelect.value = normalizedTopic;
    if (contextText) {
        contextText.textContent = 'Tell us what you need about ' + getHelpTopicLabel(normalizedTopic).toLowerCase() + '.';
    }
    if (nameInput && currentUser && !nameInput.value.trim()) {
        nameInput.value = String(currentUser.name || '').trim();
    }
    if (emailInput && currentUser && !emailInput.value.trim()) {
        emailInput.value = String(currentUser.email || '').trim();
    }

    rememberFocusForModal('helpOverlay');
    overlay.classList.add('open');
    focusFirstElementIn(overlay, '#helpName');
}

function closeHelpModal() {
    var overlay = document.getElementById('helpOverlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    restoreFocusForModal('helpOverlay');
}

function closeHelpModalOnOverlay(event) {
    if (event.target && event.target.id === 'helpOverlay') {
        closeHelpModal();
    }
}

function submitHelpRequest(event) {
    if (event) event.preventDefault();

    var nameInput = document.getElementById('helpName');
    var emailInput = document.getElementById('helpEmail');
    var topicSelect = document.getElementById('helpTopic');
    var messageInput = document.getElementById('helpMessage');

    if (!nameInput || !emailInput || !topicSelect || !messageInput) return;

    var name = String(nameInput.value || '').trim();
    var email = normalizeAuthEmail(emailInput.value);
    var topic = String(topicSelect.value || '').trim();
    var message = String(messageInput.value || '').trim();

    if (!name || !email || !topic || !message) {
        showToast('Please complete all help fields');
        return;
    }

    var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
        showToast('Enter a valid email');
        return;
    }

    if (message.length < 10) {
        showToast('Please add more details');
        return;
    }

    var requestId = 'HLP-' + Date.now();
    closeHelpModal();
    showToast('Support request sent (' + requestId + ')');
    document.getElementById('helpContactForm').reset();
}

function normalizeAuthEmail(value) {
    return String(value || '').trim().toLowerCase();
}

function getDisplayName(fullName, email) {
    var fromName = String(fullName || '').trim();
    if (fromName) return fromName.split(/\s+/)[0];
    var fromEmail = String(email || '').trim();
    if (!fromEmail.includes('@')) return 'Shopper';
    return fromEmail.split('@')[0];
}

function updateAuthUI() {
    var userName = document.getElementById('userName');
    var authLink = document.getElementById('authLink');
    if (!userName || !authLink) {
        updateAdminEntryUI();
        return;
    }

    if (currentUser) {
        userName.textContent = getDisplayName(currentUser.name, currentUser.email);
        authLink.title = 'Signed in as ' + currentUser.email + ' (click for profile)';
    } else {
        userName.textContent = 'Sign in';
        authLink.title = 'Sign in or sign up';
    }
    updateAdminEntryUI();
}

function openAuthModal(mode, actionLabel) {
    var overlay = document.getElementById('authOverlay');
    if (!overlay) return;

    pendingAuthAction = actionLabel || pendingAuthAction || 'shop';
    var prompt = document.getElementById('authPrompt');
    if (prompt) {
        prompt.textContent = 'Sign in or create an account to ' + pendingAuthAction + '.';
    }

    switchAuthMode(mode || 'signin');
    rememberFocusForModal('authOverlay');
    overlay.classList.add('open');
    focusFirstElementIn(overlay, mode === 'signup' ? '#authSignUpName' : '#authSignInEmail');
}

function closeAuthModal() {
    var overlay = document.getElementById('authOverlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    restoreFocusForModal('authOverlay');
}

function closeAuthModalOnOverlay(event) {
    if (event.target && event.target.id === 'authOverlay') {
        closeAuthModal();
    }
}

function switchAuthMode(mode) {
    var signInTab = document.getElementById('authTabSignIn');
    var signUpTab = document.getElementById('authTabSignUp');
    var signInForm = document.getElementById('authSignInForm');
    var signUpForm = document.getElementById('authSignUpForm');
    if (!signInTab || !signUpTab || !signInForm || !signUpForm) return;

    var normalizedMode = mode === 'signup' ? 'signup' : 'signin';
    var signInActive = normalizedMode === 'signin';

    signInTab.classList.toggle('active', signInActive);
    signUpTab.classList.toggle('active', !signInActive);
    signInForm.classList.toggle('auth-hidden', !signInActive);
    signUpForm.classList.toggle('auth-hidden', signInActive);

    if (signInActive) {
        var keepSignedInInput = document.getElementById('authKeepSignedIn');
        if (keepSignedInInput) keepSignedInInput.checked = Boolean(persistLoginAcrossSessions);
    }
}

function submitSignIn(event) {
    event.preventDefault();

    var emailInput = document.getElementById('authSignInEmail');
    var passwordInput = document.getElementById('authSignInPassword');
    var keepSignedInInput = document.getElementById('authKeepSignedIn');
    if (!emailInput || !passwordInput) return;

    var email = normalizeAuthEmail(emailInput.value);
    var password = String(passwordInput.value || '');
    if (!email || !password) {
        showToast('Enter email and password');
        return;
    }

    var user = users.find(function (item) {
        return item.email === email && item.password === password;
    });
    if (!user) {
        showToast('Invalid credentials. Try again or create an account');
        return;
    }

    persistLoginAcrossSessions = Boolean(keepSignedInInput && keepSignedInInput.checked);
    currentUser = { name: user.name, email: user.email, role: normalizeUserRole(user.role) };
    saveToStorage({ skipCloudSync: true });
    updateAuthUI();
    if (typeof handleCloudIdentityChange === 'function') {
        handleCloudIdentityChange();
    }
    closeAuthModal();
    showToast('Welcome back, ' + getDisplayName(user.name, user.email));
    pendingAuthAction = '';
}

function submitSignUp(event) {
    event.preventDefault();

    var nameInput = document.getElementById('authSignUpName');
    var emailInput = document.getElementById('authSignUpEmail');
    var passwordInput = document.getElementById('authSignUpPassword');
    var confirmInput = document.getElementById('authSignUpConfirm');
    if (!nameInput || !emailInput || !passwordInput || !confirmInput) return;

    var name = String(nameInput.value || '').trim();
    var email = normalizeAuthEmail(emailInput.value);
    var password = String(passwordInput.value || '');
    var confirmPassword = String(confirmInput.value || '');

    if (!name || !email || !password || !confirmPassword) {
        showToast('Please complete all sign up fields');
        return;
    }
    if (password.length < 6) {
        showToast('Password must be at least 6 characters');
        return;
    }
    if (password !== confirmPassword) {
        showToast('Passwords do not match');
        return;
    }
    if (users.some(function (item) { return item.email === email; })) {
        showToast('An account with that email already exists');
        return;
    }

    var hasAdmin = users.some(function (item) { return isAdminUser(item); });
    var assignedRole = hasAdmin ? USER_ROLE_CUSTOMER : USER_ROLE_ADMIN;
    users.push({ name: name, email: email, password: password, role: assignedRole });
    persistLoginAcrossSessions = false;
    currentUser = { name: name, email: email, role: assignedRole };
    saveToStorage({ skipCloudSync: true });
    updateAuthUI();
    if (typeof handleCloudIdentityChange === 'function') {
        handleCloudIdentityChange();
    }
    closeAuthModal();
    showToast(assignedRole === USER_ROLE_ADMIN ? 'Account created (Admin)' : 'Account created');
    pendingAuthAction = '';
}

function ensureAuthenticatedForShopping(actionLabel) {
    if (currentUser) return true;
    openAuthModal('signin', actionLabel || 'shop');
    showToast('Sign in or sign up to shop');
    return false;
}
