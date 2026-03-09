// Cart Functions
function quickAddToCart(productId) {
    if (!ensureAuthenticatedForShopping('add items to cart')) return;
    var product = products.find(function (p) { return p.id === productId; });
    if (!product) return;

    if (product.options) {
        openProductModal(productId);
        return;
    }

    var cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: Object.values(product.images)[0],
        quantity: 1,
        variants: {}
    };

    cart.push(cartItem);
    saveToStorage();
    updateCartUI();
    showToast(product.name + ' added to cart');
}

function addToCartFromModal() {
    if (!ensureAuthenticatedForShopping('add items to cart')) return;
    if (!currentProduct) return;

    if (currentProduct.options) {
        var optionKeys = Object.keys(currentProduct.options);
        var missing = [];
        optionKeys.forEach(function (key) {
            if (!selectedVariants[key]) missing.push(key);
        });

        if (missing.length > 0) {
            showToast('Please select: ' + missing.join(', '));
            return;
        }
    }

    if (currentProduct.stock < quantity) {
        showToast('Sorry, only ' + currentProduct.stock + ' items available');
        return;
    }

    var cartItem = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        image: modalCarouselImages[modalCarouselIndex] || Object.values(currentProduct.images)[0],
        quantity: quantity,
        variants: Object.assign({}, selectedVariants)
    };

    var existingIndex = -1;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === cartItem.id && JSON.stringify(cart[i].variants) === JSON.stringify(cartItem.variants)) {
            existingIndex = i;
            break;
        }
    }

    if (existingIndex >= 0) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push(cartItem);
    }

    saveToStorage();
    updateCartUI();
    showToast(currentProduct.name + ' added to cart');
    closeProductModal();
}

function buyNow() {
    if (!ensureAuthenticatedForShopping('checkout')) return;
    addToCartFromModal();
    if (document.getElementById('productModal').classList.contains('open')) return;
    proceedToCheckout();
}

function toggleCart() {
    var panel = document.getElementById('cartPanel');
    var overlay = document.getElementById('cartOverlay');
    if (!panel || !overlay) return;

    if (panel.classList.contains('open')) {
        panel.classList.remove('open');
        overlay.classList.remove('open');
        restoreFocusForModal('cartPanel');
    } else {
        if (!ensureAuthenticatedForShopping('open your cart')) return;
        rememberFocusForModal('cartPanel');
        panel.classList.add('open');
        overlay.classList.add('open');
        renderCart();
        focusFirstElementIn(panel, '.cart-header .close-btn');
    }
}

function updateCartUI() {
    var badge = document.getElementById('cartBadge');
    if (!badge) return;
    var totalItems = cart.reduce(function (sum, item) { return sum + item.quantity; }, 0);

    if (totalItems > 0) {
        badge.style.display = 'flex';
        badge.textContent = totalItems;
    } else {
        badge.style.display = 'none';
    }
}

function renderCart() {
    var body = document.getElementById('cartBody');
    var footer = document.getElementById('cartFooter');
    var itemCount = document.getElementById('cartItemCount');
    if (!body || !footer || !itemCount) return;

    itemCount.textContent = cart.length;

    if (cart.length === 0) {
        body.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">&#128722;</div><h3>Your cart is empty</h3><p>Start shopping to add items</p></div>';
        footer.style.display = 'none';
        return;
    }

    footer.style.display = 'block';

    var html = '';
    var subtotal = 0;

    cart.forEach(function (item, index) {
        subtotal += item.price * item.quantity;
        var variantText = '';
        if (Object.keys(item.variants).length > 0) {
            var parts = [];
            for (var key in item.variants) {
                parts.push(key + ': ' + item.variants[key]);
            }
            variantText = parts.join(' | ');
        }

        html += '<div class="cart-item">';
        html += '<img src="' + item.image + '" class="cart-item-image" alt="' + item.name + '">';
        html += '<div class="cart-item-details">';
        html += '<div class="cart-item-name">' + item.name + '</div>';
        if (variantText) {
            html += '<div class="cart-item-variants">' + variantText + '</div>';
        }
        html += '<div class="cart-item-price">$' + (item.price * item.quantity).toFixed(2) + '</div>';
        html += '<div class="cart-item-controls">';
        html += '<div class="cart-qty-controls">';
        html += '<button class="cart-qty-btn" data-cart-action="qty" data-cart-index="' + index + '" data-cart-delta="-1">-</button>';
        html += '<div class="cart-qty-display">' + item.quantity + '</div>';
        html += '<button class="cart-qty-btn" data-cart-action="qty" data-cart-index="' + index + '" data-cart-delta="1">+</button>';
        html += '</div>';
        html += '<button class="cart-item-remove" data-cart-action="remove" data-cart-index="' + index + '">Remove</button>';
        html += '</div></div></div>';
    });

    body.innerHTML = html;

    var tax = subtotal * 0.08;
    var total = subtotal + tax;

    document.getElementById('cartSubtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('cartTax').textContent = '$' + tax.toFixed(2);
    document.getElementById('cartTotal').textContent = '$' + total.toFixed(2);
}

function updateCartQuantity(index, delta) {
    if (index < 0 || index >= cart.length) return;

    cart[index].quantity = Math.max(1, cart[index].quantity + delta);
    saveToStorage();
    updateCartUI();
    renderCart();
}

function removeFromCart(index) {
    if (index < 0 || index >= cart.length) return;

    cart.splice(index, 1);
    saveToStorage();
    updateCartUI();
    renderCart();
}

function proceedToCheckout() {
    if (!ensureAuthenticatedForShopping('checkout')) return;
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }

    var total = cart.reduce(function (sum, item) { return sum + (item.price * item.quantity); }, 0);
    var tax = total * 0.08;
    var finalTotal = total + tax;

    var orderId = 'ORD-' + Date.now();
    var orderedItems = cart.map(function (item) {
        return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            variants: Object.assign({}, item.variants)
        };
    });

    orders.unshift({
        id: orderId,
        date: new Date().toISOString(),
        itemCount: orderedItems.reduce(function (sum, item) { return sum + item.quantity; }, 0),
        subtotal: Number(total.toFixed(2)),
        tax: Number(tax.toFixed(2)),
        total: Number(finalTotal.toFixed(2)),
        status: 'pending',
        items: orderedItems
    });

    orderedItems.forEach(function (item) {
        var product = products.find(function (p) { return p.id === item.id; });
        if (!product) return;
        product.stock = Math.max(0, Number(product.stock) - Number(item.quantity));
        product.sold = Number(product.sold || 0) + Number(item.quantity);
    });

    showToast('Order placed: ' + orderId + ' - Total $' + finalTotal.toFixed(2));

    cart = [];
    saveToStorage();
    buildSearchTerms();
    applyFilters();
    renderProducts();
    updateCartUI();
    renderCart();
    renderAdminPanel();
    toggleCart();
}
