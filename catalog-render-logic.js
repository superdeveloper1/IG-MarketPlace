// Catalog Rendering Logic
function renderProducts() {
    stopProductCardImageRotation();
    var container = document.getElementById('productsContainer');
    var start = (currentPage - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var pageProducts = filteredProducts.slice(start, end);

    document.getElementById('resultsCount').textContent =
        filteredProducts.length + ' results';

    var html = '';
    pageProducts.forEach(function (product) {
        var mainImages = getProductMainImages(product);
        var imageIndex = getProductCardImageIndex(product.id, Math.max(1, mainImages.length));
        var firstImage = mainImages[imageIndex] || 'https://via.placeholder.com/600?text=Product';
        var discount = Math.round((1 - product.price / product.originalPrice) * 100);
        var stars = '*'.repeat(Math.floor(product.rating)) + '-'.repeat(5 - Math.floor(product.rating));
        var isWishlisted = wishlist.includes(product.id);

        html += '<div class="product-card' + (currentView === 'list' ? ' list-view' : '') + '" data-product-id="' + product.id + '">';
        html += '<img src="' + firstImage + '" class="product-image js-rotating-product-image" data-product-id="' + product.id + '" data-image-index="' + imageIndex + '" alt="' + product.name + '">';
        html += '<button class="wishlist-btn' + (isWishlisted ? ' active' : '') + '" data-card-action="toggle-wishlist" data-product-id="' + product.id + '">' + (isWishlisted ? '&#9829;' : '&#9825;') + '</button>';

        if (product.badge) {
            html += '<div class="product-badge' + (product.badge === 'new' ? ' new' : '') + '">' + product.badge.toUpperCase() + '</div>';
        }

        html += '<div class="product-info">';
        html += '<div class="product-category">' + product.category + '</div>';
        html += '<div class="product-name">' + product.name + '</div>';
        html += '<div class="product-rating">';
        html += '<span class="stars">' + stars + '</span>';
        html += '<span class="rating-count">(' + product.reviews + ')</span>';
        html += '</div>';
        html += '<div class="product-price">$' + product.price;
        html += '<span class="product-original-price">$' + product.originalPrice + '</span>';
        html += '<span class="product-discount">' + discount + '% off</span>';
        html += '</div>';
        html += '<div class="product-shipping">Free shipping</div>';
        html += '<div class="product-actions">';
        html += '<button class="quick-add-btn" data-card-action="quick-add" data-product-id="' + product.id + '">Quick Add</button>';
        html += '</div>';
        html += '</div></div>';
    });

    container.innerHTML = html || buildProductsEmptyStateHtml();
    if (html) startProductCardImageRotation();

    renderPagination();
}

function renderPagination() {
    var totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    var html = '';

    if (totalPages > 1) {
        if (currentPage > 1) {
            html += '<button class="page-btn" data-page="' + (currentPage - 1) + '">Previous</button>';
        }

        for (var i = 1; i <= Math.min(totalPages, 5); i++) {
            html += '<button class="page-btn' + (i === currentPage ? ' active' : '') + '" data-page="' + i + '">' + i + '</button>';
        }

        if (totalPages > 5) {
            html += '<button class="page-btn">...</button>';
            html += '<button class="page-btn" data-page="' + totalPages + '">' + totalPages + '</button>';
        }

        if (currentPage < totalPages) {
            html += '<button class="page-btn" data-page="' + (currentPage + 1) + '">Next</button>';
        }
    }

    document.getElementById('pagination').innerHTML = html;
}

function changePage(page) {
    currentPage = page;
    renderProducts();
    scrollToResultsSection();
}

function renderRelatedItems(product) {
    var container = document.getElementById('relatedItems');
    if (!container || !product) return;

    var related = products
        .filter(function (item) {
            return item.id !== product.id && item.category === product.category;
        })
        .sort(function (a, b) { return b.rating - a.rating; })
        .slice(0, 4);

    if (related.length === 0) {
        related = products
            .filter(function (item) { return item.id !== product.id; })
            .slice(0, 4);
    }

    var html = '';
    related.forEach(function (item) {
        var image = Object.values(item.images || {})[0] || '';
        html += '<div class="related-item" data-related-product-id="' + item.id + '">';
        html += '<img src="' + image + '" alt="' + escapeHtml(item.name) + '">';
        html += '<div class="related-name">' + escapeHtml(item.name) + '</div>';
        html += '<div class="related-price">$' + Number(item.price).toFixed(2) + '</div>';
        html += '</div>';
    });

    container.innerHTML = html;
}
