// Dataset Definition
const categories = [
    {
        name: "Men",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop",
        filter: "men"
    },
    {
        name: "Women",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=700&fit=crop",
        filter: "women"
    },
    {
        name: "Accessories",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=700&fit=crop",
        filter: "accessories"
    },
    {
        name: "Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=700&fit=crop",
        filter: "shoes"
    }
];

const products = [
    {
        id: 1,
        name: "Classic White Sneakers",
        description: "Premium leather sneakers with minimalist design and extra cushioned insoles.",
        price: 129.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800"
        ],
        category: "shoes",
        brand: "Nike",
        sizes: ["38", "39", "40", "41", "42", "43", "44"],
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Black", hex: "#1a1a1a" },
            { name: "Gray", hex: "#9ca3af" }
        ],
        rating: 4.8,
        reviews: 245,
        isSale: true
    },
    {
        id: 2,
        name: "Denim Jacket",
        description: "Classic denim jacket crafted from heavyweight durable denim with a modern relaxed fit.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=600&fit=crop",
        images: ["https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800"],
        category: "men",
        brand: "Levi's",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
            { name: "Blue", hex: "#3b82f6" },
            { name: "Black", hex: "#1a1a1a" }
        ],
        rating: 4.5,
        reviews: 128,
        isNew: true
    },
    {
        id: 3,
        name: "Running Performance Tee",
        description: "Lightweight, moisture-wicking athletic tee engineered for ultimate comfort during workouts.",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
        images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800"],
        category: "men",
        brand: "Adidas",
        sizes: ["S", "M", "L", "XL"],
        colors: [
            { name: "White", hex: "#FFFFFF" },
            { name: "Black", hex: "#1a1a1a" },
            { name: "Navy", hex: "#1e3a5f" }
        ],
        rating: 4.6,
        reviews: 89
    },
    {
        id: 4,
        name: "Leather Crossbody Bag",
        description: "Elegant genuine leather crossbody handbag with magnetic snap closure and adjustable strap.",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=600&fit=crop",
        images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800"],
        category: "accessories",
        brand: "Coach",
        sizes: ["One Size"],
        colors: [
            { name: "Brown", hex: "#8b5a2b" },
            { name: "Black", hex: "#1a1a1a" },
            { name: "Tan", hex: "#d2b48c" }
        ],
        rating: 4.9,
        reviews: 312
    },
    {
        id: 5,
        name: "Floral Summer Dress",
        description: "Light and airy summer A-line dress featuring vibrant botanical print design.",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop",
        images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800"],
        category: "women",
        brand: "Zara",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
            { name: "Floral", hex: "#f472b6" },
            { name: "Blue", hex: "#60a5fa" }
        ],
        rating: 4.7,
        reviews: 156,
        isSale: true
    },
    {
        id: 6,
        name: "Premium Wool Coat",
        description: "Luxurious double-breasted wool blend trench coat offering supreme warmth and refined silhouette.",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=600&fit=crop",
        images: ["https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800"],
        category: "women",
        brand: "Max Mara",
        sizes: ["XS", "S", "M", "L"],
        colors: [
            { name: "Camel", hex: "#c19a6b" },
            { name: "Black", hex: "#1a1a1a" },
            { name: "Gray", hex: "#6b7280" }
        ],
        rating: 4.9,
        reviews: 78,
        isNew: true
    },
    {
        id: 7,
        name: "Athletic Running Shoes",
        description: "High-performance running footwear with responsive nitrogen-infused midsole foam.",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop",
        images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"],
        category: "shoes",
        brand: "Nike",
        sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
        colors: [
            { name: "Red", hex: "#ef4444" },
            { name: "Black", hex: "#1a1a1a" },
            { name: "Blue", hex: "#3b82f6" }
        ],
        rating: 4.8,
        reviews: 423
    },
    {
        id: 8,
        name: "Minimalist Watch",
        description: "Sleek analog wrist watch featuring Japanese quartz movement and genuine leather band.",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=600&fit=crop",
        images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"],
        category: "accessories",
        brand: "Daniel Wellington",
        sizes: ["One Size"],
        colors: [
            { name: "Silver", hex: "#c0c0c0" },
            { name: "Gold", hex: "#ffd700" },
            { name: "Rose Gold", hex: "#b76e79" }
        ],
        rating: 4.7,
        reviews: 289
    }
];

const brands = ["Nike", "Adidas", "Levi's", "Zara", "Coach", "Max Mara", "Daniel Wellington"];
const clothingSizes = ["XS", "S", "M", "L", "XL", "XXL"];
const shoeSizes = ["38", "39", "40", "41", "42", "43", "44", "45"];

// State Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentProduct = null;
let selectedQuantity = 1;
let filters = {
    brands: [],
    sizes: [],
    maxPrice: 500,
    category: '',
    special: '',
    search: ''
};
let sortBy = 'featured';
let currentPage = 1;
const itemsPerPage = 8;

// Coupon state (Creative Liberty)
let activeCoupon = null; // { code: 'STYLES50', discountPercent: 50 } or { code: 'FREESHIP', freeShipping: true }

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderFeaturedProducts();
    renderBrandFilters();
    renderSizeFilters();
    updateCartBadge();
    updateWishlistBadge();
    setupResponsive();
    setupSearchInput();
});

// Setup Responsive Listeners
function setupResponsive() {
    const checkWidth = () => {
        const mobileBtn = document.getElementById('mobile-filter-btn');
        const menuToggle = document.getElementById('menu-toggle');
        if (window.innerWidth < 768) {
            if (mobileBtn) mobileBtn.style.display = 'inline-flex';
            if (menuToggle) menuToggle.style.display = 'inline-flex';
        } else {
            if (mobileBtn) mobileBtn.style.display = 'none';
            if (menuToggle) menuToggle.style.display = 'none';
            closeMobileMenu();
        }
    };
    window.addEventListener('resize', checkWidth);
    checkWidth();
}

// Live Search Input Listener
function setupSearchInput() {
    const searchEl = document.getElementById('header-search');
    if (!searchEl) return;
    searchEl.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        filters.search = query;
        if (query.length > 0) {
            const activePage = document.querySelector('.page-view.active');
            if (activePage && activePage.id !== 'page-shop') {
                showPage('shop');
            } else {
                currentPage = 1;
                renderShopProducts();
            }
        } else {
            currentPage = 1;
            renderShopProducts();
        }
    });
}

// Page Navigation Engine
function showPage(page, filter = '') {
    document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
    
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Active state on header navigation
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    if (page === 'shop' && !filter) {
        document.getElementById('nav-shop')?.classList.add('active');
    } else if (filter === 'new') {
        document.getElementById('nav-new')?.classList.add('active');
    } else if (filter === 'sale') {
        document.getElementById('nav-sale')?.classList.add('active');
    }

    const footer = document.getElementById('main-footer');
    if (footer) {
        footer.style.display = page === 'checkout' ? 'none' : 'block';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (page === 'shop') {
        filters.category = '';
        filters.special = '';
        if (['men', 'women', 'accessories', 'shoes'].includes(filter)) {
            filters.category = filter;
        } else if (filter === 'new' || filter === 'sale') {
            filters.special = filter;
        }
        updateShopTitle();
        renderShopProducts();
    } else if (page === 'cart') {
        renderCart();
    } else if (page === 'wishlist') {
        renderWishlist();
    } else if (page === 'checkout') {
        renderCheckout();
        resetCheckoutSteps();
    }
}

function updateShopTitle() {
    const titleEl = document.getElementById('shop-title');
    if (!titleEl) return;
    if (filters.search) {
        titleEl.textContent = `Search Results for "${filters.search}"`;
    } else if (filters.special === 'new') {
        titleEl.textContent = 'New Arrivals';
    } else if (filters.special === 'sale') {
        titleEl.textContent = 'Sale Items';
    } else if (filters.category) {
        titleEl.textContent = filters.category.charAt(0).toUpperCase() + filters.category.slice(1);
    } else {
        titleEl.textContent = 'All Products';
    }
}

// Render Homepage Components
function renderCategories() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;
    grid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="showPage('shop', '${cat.filter}')">
          <img src="${cat.image}" alt="${cat.name}" loading="lazy">
          <div class="category-overlay"></div>
          <div class="category-content">
            <h3 class="category-name">${cat.name}</h3>
            <span class="category-link">Shop Now 
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                </svg>
            </span>
          </div>
        </div>
    `).join('');
}

function renderFeaturedProducts() {
    const grid = document.getElementById('featured-products');
    if (!grid) return;
    grid.innerHTML = products.slice(0, 4).map(p => renderProductCard(p)).join('');
}

// Product Card Template Generator
function renderProductCard(product) {
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    const isWishlisted = wishlist.some(item => item.id === product.id);

    return `
        <div class="card product-card" onclick="showProductDetail(${product.id})">
          <div class="product-image-wrapper">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-badges">
              ${product.isNew ? '<span class="badge badge-primary">New</span>' : ''}
              ${product.isSale && discount ? `<span class="badge badge-destructive">-${discount}%</span>` : ''}
            </div>
            <div class="product-actions">
              <button class="btn btn-outline btn-icon" style="background:var(--card);border-radius:50%;" 
                onclick="event.stopPropagation(); toggleWishlist(${product.id});" 
                title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                <svg width="16" height="16" fill="${isWishlisted ? 'var(--destructive)' : 'none'}" 
                     stroke="${isWishlisted ? 'var(--destructive)' : 'currentColor'}" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </button>
            </div>
            <div class="product-add-btn">
              <button class="btn btn-primary" style="width:100%;" onclick="event.stopPropagation(); quickAddToCart(${product.id});">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
          <div class="product-info">
            <p class="product-brand">${product.brand}</p>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-desc">${product.description}</p>
            <div class="product-rating" style="display:flex; align-items:center; gap:0.25rem; margin:0.35rem 0; font-size:0.85rem;">
              <div style="display:flex; color:#F59E0B;">
                ${Array.from({length: 5}, (_, i) => `
                  <svg width="14" height="14" fill="${i < Math.floor(product.rating) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                `).join('')}
              </div>
              <span style="font-weight:600; color:var(--foreground);">${product.rating}</span>
              <span style="color:var(--muted);">(${product.reviews})</span>
            </div>
            <div class="product-price">
              <span class="product-price-current">$${product.price.toFixed(2)}</span>
              ${product.originalPrice ? `<span class="product-price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
            </div>
          </div>
        </div>
    `;
}

// Shop Filtering Engine
function renderShopProducts() {
    let filtered = [...products];

    if (filters.search) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(filters.search) || 
            p.brand.toLowerCase().includes(filters.search) ||
            p.category.toLowerCase().includes(filters.search) ||
            p.description.toLowerCase().includes(filters.search)
        );
    }
    if (filters.category) filtered = filtered.filter(p => p.category === filters.category);
    if (filters.special === 'new') filtered = filtered.filter(p => p.isNew);
    if (filters.special === 'sale') filtered = filtered.filter(p => p.isSale);
    if (filters.brands.length) filtered = filtered.filter(p => filters.brands.includes(p.brand));
    if (filters.sizes.length) filtered = filtered.filter(p => p.sizes.some(s => filters.sizes.includes(s)));
    filtered = filtered.filter(p => p.price <= filters.maxPrice);

    // Sorting
    if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sortBy === 'newest') filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    const productCountEl = document.getElementById('product-count');
    if (productCountEl) productCountEl.textContent = filtered.length;

    // Pagination Calculation
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const paginated = filtered.slice(start, start + itemsPerPage);

    const shopGrid = document.getElementById('shop-products');
    if (shopGrid) {
        shopGrid.innerHTML = paginated.length ?
            paginated.map(p => renderProductCard(p)).join('') :
            `<div style="grid-column:1/-1;text-align:center;padding:4rem 0;" class="card">
                <svg width="48" height="48" fill="none" stroke="var(--muted)" stroke-width="2" viewBox="0 0 24 24" style="margin:0 auto 1rem;">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <h3 style="font-weight:600;margin-bottom:0.5rem;">No products found</h3>
                <p style="color:var(--muted);margin-bottom:1.5rem;">Try relaxing your search query or clear applied filters.</p>
                <button class="btn btn-primary" onclick="clearFilters()">Clear Filters</button>
             </div>`;
    }

    renderPagination(totalPages);
    renderActiveFilters();
}

function renderPagination(totalPages) {
    const container = document.getElementById('pagination');
    if (!container) return;
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    let html = `<button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <polyline points="15 18 9 12 15 6"/>
                    </svg>
                </button>`;
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    html += `<button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"/>
                </svg>
            </button>`;
    container.innerHTML = html;
}

function changePage(page) {
    currentPage = page;
    renderShopProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderBrandFilters() {
    const container = document.getElementById('brand-filters');
    if (!container) return;
    container.innerHTML = brands.map(brand => `
        <label class="filter-option">
          <input type="checkbox" class="checkbox" ${filters.brands.includes(brand) ? 'checked' : ''} onchange="toggleBrandFilter('${brand}')">
          <span>${brand}</span>
        </label>
    `).join('');
}

function renderSizeFilters() {
    const clothingEl = document.getElementById('clothing-sizes');
    if (clothingEl) {
        clothingEl.innerHTML = clothingSizes.map(size => `
            <button class="size-btn ${filters.sizes.includes(size) ? 'active' : ''}" onclick="toggleSizeFilter(this, '${size}')">${size}</button>
        `).join('');
    }
    const shoeEl = document.getElementById('shoe-sizes');
    if (shoeEl) {
        shoeEl.innerHTML = shoeSizes.map(size => `
            <button class="size-btn ${filters.sizes.includes(size) ? 'active' : ''}" onclick="toggleSizeFilter(this, '${size}')">${size}</button>
        `).join('');
    }
}

function renderActiveFilters() {
    const container = document.getElementById('active-filters');
    if (!container) return;
    let html = '';
    if (filters.search) {
        html += `<span class="filter-pill" onclick="clearSearchFilter()">Search: "${filters.search}" 
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>`;
    }
    filters.brands.forEach(b => {
        html += `<span class="filter-pill" onclick="removeBrandFilter('${b}')">${b} 
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>`;
    });
    filters.sizes.forEach(s => {
        html += `<span class="filter-pill" onclick="removeSizeFilter('${s}')">Size: ${s} 
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>`;
    });
    container.innerHTML = html;
}

// Filter Control Functions
function toggleFilter(btn) {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('svg');
    if (!content) return;
    if (content.style.display === 'none') {
        content.style.display = 'block';
        if (icon) icon.style.transform = 'rotate(0deg)';
    } else {
        content.style.display = 'none';
        if (icon) icon.style.transform = 'rotate(180deg)';
    }
}

function toggleBrandFilter(brand) {
    const idx = filters.brands.indexOf(brand);
    if (idx > -1) filters.brands.splice(idx, 1);
    else filters.brands.push(brand);
    currentPage = 1;
    renderShopProducts();
}

function removeBrandFilter(brand) {
    filters.brands = filters.brands.filter(b => b !== brand);
    document.querySelectorAll('#brand-filters input').forEach(cb => {
        if (cb.nextElementSibling.textContent === brand) cb.checked = false;
    });
    renderShopProducts();
}

function toggleSizeFilter(btn, size) {
    btn.classList.toggle('active');
    const idx = filters.sizes.indexOf(size);
    if (idx > -1) filters.sizes.splice(idx, 1);
    else filters.sizes.push(size);
    currentPage = 1;
    renderShopProducts();
}

function removeSizeFilter(size) {
    filters.sizes = filters.sizes.filter(s => s !== size);
    document.querySelectorAll('.size-btn').forEach(btn => {
        if (btn.textContent === size) btn.classList.remove('active');
    });
    renderShopProducts();
}

function updatePriceFilter(value) {
    filters.maxPrice = parseInt(value);
    const priceMaxEl = document.getElementById('price-max');
    if (priceMaxEl) priceMaxEl.textContent = '$' + value;
    currentPage = 1;
    renderShopProducts();
}

function sortProducts(value) {
    sortBy = value;
    currentPage = 1;
    renderShopProducts();
}

function clearSearchFilter() {
    filters.search = '';
    const searchEl = document.getElementById('header-search');
    if (searchEl) searchEl.value = '';
    updateShopTitle();
    renderShopProducts();
}

function clearFilters() {
    filters = {
        brands: [],
        sizes: [],
        maxPrice: 500,
        category: filters.category,
        special: filters.special,
        search: ''
    };
    const searchEl = document.getElementById('header-search');
    if (searchEl) searchEl.value = '';
    document.querySelectorAll('#brand-filters input').forEach(cb => cb.checked = false);
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    const slider = document.getElementById('price-slider');
    if (slider) slider.value = 500;
    const priceMaxEl = document.getElementById('price-max');
    if (priceMaxEl) priceMaxEl.textContent = '$500';
    currentPage = 1;
    updateShopTitle();
    renderShopProducts();
}

// Product Detail Navigation & View
function showProductDetail(id) {
    currentProduct = products.find(p => p.id === id);
    if (!currentProduct) return;

    selectedQuantity = 1;
    const qtyValEl = document.getElementById('quantity-value');
    if (qtyValEl) qtyValEl.textContent = 1;
    
    document.getElementById('breadcrumb-product').textContent = currentProduct.name;
    document.getElementById('main-product-image').src = currentProduct.images[0];
    document.getElementById('detail-brand').textContent = currentProduct.brand;
    document.getElementById('detail-title').textContent = currentProduct.name;
    document.getElementById('detail-price').textContent = '$' + currentProduct.price.toFixed(2);
    document.getElementById('detail-original-price').textContent = currentProduct.originalPrice ? '$' + currentProduct.originalPrice.toFixed(2) : '';
    document.getElementById('detail-desc').textContent = currentProduct.description;
    document.getElementById('detail-rating-text').textContent = `${currentProduct.rating} (${currentProduct.reviews} reviews)`;
    document.getElementById('tab-desc-content').textContent = currentProduct.description + ' Premium materials and craftsmanship ensure longevity and effortless elegance.';

    // Stars Generation
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
        starsHtml += `<svg width="20" height="20" fill="${i < Math.floor(currentProduct.rating) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>`;
    }
    document.getElementById('detail-stars').innerHTML = starsHtml;

    // Thumbnails
    document.getElementById('product-thumbnails').innerHTML = currentProduct.images.map((img, i) => `
        <div class="thumbnail ${i === 0 ? 'active' : ''}" onclick="selectThumbnail(this, '${img}')">
          <img src="${img}" alt="">
        </div>
    `).join('');

    // Colors
    document.getElementById('selected-color-name').textContent = currentProduct.colors[0].name;
    document.getElementById('color-options').innerHTML = currentProduct.colors.map((c, i) => `
        <button class="color-btn ${i === 0 ? 'active' : ''}" style="background:${c.hex};${c.hex === '#FFFFFF' ? 'border:1px solid var(--border);' : ''}" onclick="selectColor(this, '${c.name}')" title="${c.name}"></button>
    `).join('');

    // Sizes
    document.getElementById('size-select').innerHTML = '<option value="">Select size</option>' + currentProduct.sizes.map(s => `<option value="${s}">${s}</option>`).join('');

    // Specifications
    document.getElementById('specs-grid').innerHTML = `
        <div class="spec-row"><span class="spec-label">Brand</span><span class="spec-value">${currentProduct.brand}</span></div>
        <div class="spec-row"><span class="spec-label">Category</span><span class="spec-value">${currentProduct.category}</span></div>
        <div class="spec-row"><span class="spec-label">Available Sizes</span><span class="spec-value">${currentProduct.sizes.join(', ')}</span></div>
        <div class="spec-row"><span class="spec-label">Color Options</span><span class="spec-value">${currentProduct.colors.map(c => c.name).join(', ')}</span></div>
    `;

    // Favorites Heart Toggle Button State
    const favBtn = document.getElementById('favorite-btn');
    if (favBtn) {
        const isWish = wishlist.some(item => item.id === currentProduct.id);
        favBtn.classList.toggle('active', isWish);
        favBtn.querySelector('svg').setAttribute('fill', isWish ? 'currentColor' : 'none');
        favBtn.style.color = isWish ? 'var(--destructive)' : '';
        favBtn.style.borderColor = isWish ? 'var(--destructive)' : '';
    }

    // Related Products
    const related = products.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id).slice(0, 4);
    document.getElementById('related-products').innerHTML = related.map(p => renderProductCard(p)).join('');

    showPage('product');
}

function selectThumbnail(el, src) {
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('main-product-image').src = src;
}

function selectColor(el, name) {
    document.querySelectorAll('.color-btn').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('selected-color-name').textContent = name;
}

function changeQuantity(delta) {
    selectedQuantity = Math.max(1, selectedQuantity + delta);
    document.getElementById('quantity-value').textContent = selectedQuantity;
}

function switchTab(btn, tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + tabId).classList.add('active');
}

// User Profile Logic
function saveProfileDetails(event) {
    event.preventDefault();
    const fname = document.getElementById('profile-fname').value;
    const lname = document.getElementById('profile-lname').value;
    const email = document.getElementById('profile-email-input').value;

    const displayName = document.getElementById('profile-display-name');
    const displayEmail = document.getElementById('profile-display-email');
    if (displayName) displayName.textContent = `${fname} ${lname}`;
    if (displayEmail) displayEmail.textContent = `${email} • Member since Jan 2024`;

    showToast('Account details updated successfully!', 'success');
}

// Wishlist Logic
function toggleWishlist(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const index = wishlist.findIndex(item => item.id === id);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from Wishlist', 'info');
    } else {
        wishlist.push(product);
        showToast('Added to Wishlist!', 'success');
    }
    saveWishlist();
    updateWishlistBadge();

    // Refresh views if currently on wishlist or shop or product view
    const activePage = document.querySelector('.page-view.active');
    if (activePage?.id === 'page-wishlist') {
        renderWishlist();
    } else if (activePage?.id === 'page-shop') {
        renderShopProducts();
    } else if (activePage?.id === 'page-product' && currentProduct?.id === id) {
        const favBtn = document.getElementById('favorite-btn');
        if (favBtn) {
            const isWish = wishlist.some(item => item.id === id);
            favBtn.classList.toggle('active', isWish);
            favBtn.querySelector('svg').setAttribute('fill', isWish ? 'currentColor' : 'none');
            favBtn.style.color = isWish ? 'var(--destructive)' : '';
            favBtn.style.borderColor = isWish ? 'var(--destructive)' : '';
        }
    }
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function updateWishlistBadge() {
    const total = wishlist.length;
    const badge = document.getElementById('wishlist-badge');
    if (badge) {
        badge.textContent = total;
        badge.style.display = total > 0 ? 'flex' : 'none';
    }
}

function renderWishlist() {
    const isEmpty = wishlist.length === 0;
    const emptyEl = document.getElementById('wishlist-empty');
    const gridEl = document.getElementById('wishlist-grid');

    if (emptyEl) emptyEl.style.display = isEmpty ? 'block' : 'none';
    if (gridEl) {
        gridEl.style.display = isEmpty ? 'none' : 'grid';
        if (!isEmpty) {
            gridEl.innerHTML = wishlist.map(p => renderProductCard(p)).join('');
        }
    }
}

// Shopping Cart Functions
function quickAddToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    addToCart(product, product.sizes[0], product.colors[0].name, 1);
}

function addToCartFromDetail() {
    const size = document.getElementById('size-select').value;
    if (!size) {
        showToast('Please select a size', 'error');
        return;
    }
    const color = document.getElementById('selected-color-name').textContent;
    addToCart(currentProduct, size, color, selectedQuantity);
}

function addToCart(product, size, color, qty) {
    const existing = cart.find(item => item.id === product.id && item.size === size && item.color === color);
    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({
            ...product,
            size,
            color,
            quantity: qty
        });
    }
    saveCart();
    updateCartBadge();
    showToast(`${product.name} added to cart`, 'success');
}

function removeFromCart(id, size, color) {
    cart = cart.filter(item => !(item.id === id && item.size === size && item.color === color));
    saveCart();
    updateCartBadge();
    renderCart();
}

function updateCartQuantity(id, size, color, delta) {
    const item = cart.find(i => i.id === id && i.size === size && i.color === color);
    if (item) {
        item.quantity += delta;
        if (item.quantity < 1) {
            removeFromCart(id, size, color);
            return;
        }
    }
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.textContent = total;
        badge.style.display = total > 0 ? 'flex' : 'none';
    }
}

function renderCart() {
    const isEmpty = cart.length === 0;
    const emptyEl = document.getElementById('cart-empty');
    const contentEl = document.getElementById('cart-content');

    if (emptyEl) emptyEl.style.display = isEmpty ? 'block' : 'none';
    if (contentEl) contentEl.style.display = isEmpty ? 'none' : 'grid';

    if (isEmpty) return;

    const cartItemsEl = document.getElementById('cart-items');
    if (cartItemsEl) {
        cartItemsEl.innerHTML = cart.map(item => `
            <div class="cart-item">
              <div class="cart-item-image" onclick="showProductDetail(${item.id})">
                <img src="${item.image}" alt="${item.name}">
              </div>
              <div class="cart-item-info">
                <div class="cart-item-header">
                  <div>
                    <h3 class="cart-item-name" onclick="showProductDetail(${item.id})">${item.name}</h3>
                    <p class="cart-item-variant">${item.color} / Size: ${item.size}</p>
                  </div>
                  <button class="btn btn-ghost btn-icon cart-item-remove" onclick="removeFromCart(${item.id}, '${item.size}', '${item.color}')" title="Remove item">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                  </button>
                </div>
                <div class="cart-item-footer">
                  <div class="cart-item-qty">
                    <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, '${item.size}', '${item.color}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="updateCartQuantity(${item.id}, '${item.size}', '${item.color}', 1)">+</button>
                  </div>
                  <div class="cart-item-total">
                    <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                    ${item.quantity > 1 ? `<p class="cart-item-each">$${item.price.toFixed(2)} each</p>` : ''}
                  </div>
                </div>
              </div>
            </div>
        `).join('');
    }

    calculateOrderTotals();
}

// Coupon / Promo Engine (Creative Liberty)
function applyCouponCode(event) {
    event.preventDefault();
    const input = document.getElementById('coupon-input');
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (code === 'STYLES50') {
        activeCoupon = { code, discountPercent: 50 };
        showToast('Coupon STYLES50 applied! 50% discount granted.', 'success');
    } else if (code === 'FREESHIP') {
        activeCoupon = { code, freeShipping: true };
        showToast('Coupon FREESHIP applied! Free shipping granted.', 'success');
    } else if (code === 'WELCOME10') {
        activeCoupon = { code, discountPercent: 10 };
        showToast('Coupon WELCOME10 applied! 10% discount granted.', 'success');
    } else {
        showToast('Invalid coupon code. Try STYLES50 or FREESHIP', 'error');
        return;
    }
    input.value = '';
    renderCart();
    renderCheckout();
}

function calculateOrderTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    let discountAmount = 0;
    let shipping = subtotal > 100 ? 0 : 9.99;

    if (activeCoupon) {
        if (activeCoupon.discountPercent) {
            discountAmount = subtotal * (activeCoupon.discountPercent / 100);
        }
        if (activeCoupon.freeShipping) {
            shipping = 0;
        }
    }

    const total = Math.max(0, subtotal - discountAmount + shipping);

    const itemCountEl = document.getElementById('summary-item-count');
    const subtotalEl = document.getElementById('summary-subtotal');
    const shippingEl = document.getElementById('summary-shipping');
    const totalEl = document.getElementById('summary-total');
    const freeShippingNote = document.getElementById('free-shipping-note');
    const discountRow = document.getElementById('summary-discount-row');
    const discountValEl = document.getElementById('summary-discount-value');

    if (itemCountEl) itemCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : '$' + shipping.toFixed(2);
    if (totalEl) totalEl.textContent = '$' + total.toFixed(2);

    if (discountRow && discountValEl) {
        if (discountAmount > 0) {
            discountRow.style.display = 'flex';
            discountValEl.textContent = '-$' + discountAmount.toFixed(2);
        } else {
            discountRow.style.display = 'none';
        }
    }

    if (freeShippingNote) {
        if (shipping > 0 && subtotal < 100) {
            freeShippingNote.textContent = `Add $${(100 - subtotal).toFixed(2)} more for free shipping`;
            freeShippingNote.style.display = 'block';
        } else {
            freeShippingNote.style.display = 'none';
        }
    }
}

// Checkout Functions
function renderCheckout() {
    const isEmpty = cart.length === 0;
    const emptyEl = document.getElementById('checkout-empty');
    const contentEl = document.getElementById('checkout-content');

    if (emptyEl) emptyEl.style.display = isEmpty ? 'block' : 'none';
    if (contentEl) contentEl.style.display = isEmpty ? 'none' : 'grid';

    if (isEmpty) return;

    const itemsHtml = cart.map(item => `
        <div class="checkout-item">
          <div class="checkout-item-image"><img src="${item.image}" alt="${item.name}"></div>
          <div class="checkout-item-info">
            <p class="checkout-item-name">${item.name}</p>
            <p class="checkout-item-variant">${item.color} / Size: ${item.size} × ${item.quantity}</p>
          </div>
          <span class="checkout-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    const reviewItemsEl = document.getElementById('checkout-items');
    const summaryItemsEl = document.getElementById('checkout-summary-items');
    if (reviewItemsEl) reviewItemsEl.innerHTML = itemsHtml;
    if (summaryItemsEl) summaryItemsEl.innerHTML = itemsHtml;

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let discountAmount = 0;
    let shipping = subtotal > 100 ? 0 : 9.99;

    if (activeCoupon) {
        if (activeCoupon.discountPercent) {
            discountAmount = subtotal * (activeCoupon.discountPercent / 100);
        }
        if (activeCoupon.freeShipping) {
            shipping = 0;
        }
    }

    const tax = Math.max(0, (subtotal - discountAmount) * 0.08);
    const total = Math.max(0, subtotal - discountAmount + shipping + tax);

    document.getElementById('checkout-subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('checkout-shipping').textContent = shipping === 0 ? 'Free' : '$' + shipping.toFixed(2);
    document.getElementById('checkout-tax').textContent = '$' + tax.toFixed(2);
    document.getElementById('checkout-total').textContent = '$' + total.toFixed(2);

    const discountRow = document.getElementById('checkout-discount-row');
    if (discountRow) {
        if (discountAmount > 0) {
            discountRow.style.display = 'flex';
            document.getElementById('checkout-discount-value').textContent = '-$' + discountAmount.toFixed(2);
        } else {
            discountRow.style.display = 'none';
        }
    }
}

function resetCheckoutSteps() {
    document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
    const shippingContent = document.getElementById('content-shipping');
    if (shippingContent) shippingContent.classList.add('active');

    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');

    if (step1) { step1.className = 'step-number active'; step1.textContent = '1'; }
    if (step2) { step2.className = 'step-number pending'; step2.textContent = '2'; }
    if (step3) { step3.className = 'step-number pending'; step3.textContent = '3'; }
}

function completeShipping(e) {
    e.preventDefault();
    document.getElementById('content-shipping')?.classList.remove('active');
    document.getElementById('content-payment')?.classList.add('active');
    
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    if (step1) { step1.className = 'step-number complete'; step1.textContent = '✓'; }
    if (step2) { step2.className = 'step-number active'; }
}

function completePayment(e) {
    e.preventDefault();
    document.getElementById('content-payment')?.classList.remove('active');
    document.getElementById('content-review')?.classList.add('active');
    
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');
    if (step2) { step2.className = 'step-number complete'; step2.textContent = '✓'; }
    if (step3) { step3.className = 'step-number active'; }
}

function placeOrder() {
    cart = [];
    activeCoupon = null;
    saveCart();
    updateCartBadge();
    showToast('🎉 Order placed successfully! Thank you for shopping at StyleSphere.', 'success');
    setTimeout(() => showPage('home'), 1500);
}

// Drawer & Sheets Helpers
function toggleMobileMenu() {
    document.getElementById('mobile-menu')?.classList.toggle('active');
}

function closeMobileMenu() {
    document.getElementById('mobile-menu')?.classList.remove('active');
}

function openFilterSheet() {
    const mobileContainer = document.getElementById('mobile-filters');
    const desktopSidebar = document.querySelector('.shop-sidebar');
    if (mobileContainer && desktopSidebar) {
        mobileContainer.innerHTML = desktopSidebar.innerHTML;
    }
    document.getElementById('filter-sheet')?.classList.add('active');
}

function closeFilterSheet() {
    document.getElementById('filter-sheet')?.classList.remove('active');
}

// Toast System
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let iconSvg = '';
    if (type === 'success') {
        iconSvg = `<svg width="18" height="18" fill="none" stroke="var(--success)" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else if (type === 'error') {
        iconSvg = `<svg width="18" height="18" fill="none" stroke="var(--destructive)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
    } else {
        iconSvg = `<svg width="18" height="18" fill="none" stroke="var(--primary)" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    }

    toast.innerHTML = `${iconSvg} <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
}
