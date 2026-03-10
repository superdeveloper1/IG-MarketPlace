// Product Database
var products = [
    {
        id: 1,
        name: "On Cloudsurfer Max Running Shoes - Men's Premium Athletic Footwear",
        category: "sports",
        brand: "On",
        price: 180,
        originalPrice: 220,
        condition: "new",
        rating: 4.8,
        reviews: 1243,
        sold: 5420,
        shipping: "free",
        stock: 15,
        images: {
            "Ivory / Salmon": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
            "Black": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
            "Green": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
            "Blue": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=600&fit=crop"
        },
        mediaByColor: {
            "Ivory / Salmon": [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900&h=900&fit=crop"
            ],
            "Black": [
                "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&h=900&fit=crop"
            ],
            "Green": [
                "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=900&h=900&fit=crop"
            ],
            "Blue": [
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=900&h=900&fit=crop"
            ]
        },
        options: {
            Color: ["Ivory / Salmon", "Black", "Green", "Blue"],
            Size: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"]
        },
        description: "Experience the ultimate in cushioning and comfort with the On Cloudsurfer Max. Engineered with CloudTec Phase technology for seamless weight transfer and maximum energy return on every stride.",
        features: [
            "CloudTec Phase technology for smooth transitions",
            "Helion superfoam for responsive cushioning",
            "Engineered mesh upper for breathability",
            "Speedboard for explosive take-offs",
            "Sustainable materials and production"
        ],
        badge: "sale"
    },
    {
        id: 2,
        name: "Men's Essential Cotton T-Shirt - Premium Basic Tee",
        category: "fashion",
        brand: "Essentials",
        price: 48,
        originalPrice: 65,
        condition: "new",
        rating: 4.6,
        reviews: 892,
        sold: 3240,
        shipping: "free",
        stock: 50,
        images: {
            "White": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
            "Black": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop",
            "Navy": "https://images.unsplash.com/photo-1620799140408-edc6d5f93528?w=600&h=600&fit=crop"
        },
        mediaByColor: {
            "White": [
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&h=900&fit=crop"
            ],
            "Black": [
                "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=900&h=900&fit=crop"
            ],
            "Navy": [
                "https://images.unsplash.com/photo-1620799140408-edc6d5f93528?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1622445275576-721325763afe?w=900&h=900&fit=crop"
            ]
        },
        options: {
            Color: ["White", "Black", "Navy"],
            Size: ["S", "M", "L", "XL", "XXL"]
        },
        description: "Premium 100% cotton essential tee with minimal design. Pre-shrunk, soft-washed fabric for lasting comfort and durability.",
        features: [
            "100% premium cotton construction",
            "Pre-shrunk for perfect fit",
            "Reinforced shoulder seams",
            "Tag-free for comfort",
            "Machine washable"
        ],
        badge: "new"
    },
    {
        id: 3,
        name: "Canvas Backpack with Leather Trim - Travel & School Bag",
        category: "fashion",
        brand: "Heritage",
        price: 128,
        originalPrice: 175,
        condition: "new",
        rating: 4.7,
        reviews: 567,
        sold: 1823,
        shipping: "free",
        stock: 8,
        images: {
            "Khaki": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
            "Navy": "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=600&fit=crop"
        },
        options: {
            Color: ["Khaki", "Navy"]
        },
        description: "Durable canvas backpack with genuine leather accents. Features multiple compartments including padded laptop sleeve for 15-inch laptops.",
        features: [
            "Heavy-duty canvas construction",
            "Genuine leather trim details",
            "Padded laptop compartment (15\")",
            "Multiple organizing pockets",
            "Adjustable padded straps"
        ],
        badge: "sale"
    },
    {
        id: 4,
        name: "Classic Minimalist Watch - Swiss Movement Timepiece",
        category: "fashion",
        brand: "TimeClassic",
        price: 295,
        originalPrice: 450,
        condition: "new",
        rating: 4.9,
        reviews: 1456,
        sold: 2987,
        shipping: "free",
        stock: 5,
        images: {
            "Silver": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop",
            "Gold": "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600&h=600&fit=crop"
        },
        options: {
            Color: ["Silver", "Gold"]
        },
        description: "Elegant minimalist watch featuring Swiss-made movement, sapphire crystal glass, and genuine Italian leather strap. Water resistant to 50m.",
        features: [
            "Swiss quartz movement",
            "Sapphire crystal glass",
            "Genuine Italian leather strap",
            "Water resistant 50m (5 ATM)",
            "2-year international warranty"
        ]
    },
    {
        id: 5,
        name: "Wireless Noise Cancelling Headphones - Premium Audio",
        category: "electronics",
        brand: "AudioPro",
        price: 349,
        originalPrice: 499,
        condition: "new",
        rating: 4.8,
        reviews: 3421,
        sold: 8934,
        shipping: "free",
        stock: 12,
        images: {
            "Black": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
            "White": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&h=600&fit=crop",
            "Blue": "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=600&h=600&fit=crop"
        },
        mediaByColor: {
            "Black": [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=900&h=900&fit=crop"
            ],
            "White": [
                "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&h=900&fit=crop"
            ],
            "Blue": [
                "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1545127398-14699f92334b?w=900&h=900&fit=crop"
            ]
        },
        options: {
            Color: ["Black", "White", "Blue"]
        },
        video: {
            title: "Headphones Overview",
            thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=675&fit=crop",
            url: "https://www.youtube.com/watch?v=bNpx7gpSqbY"
        },
        model: {
            title: "Headphones 3D Model",
            thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
            url: "https://sketchfab.com/models/8a99a653c8f3432c8deca50ed6583f8f/embed"
        },
        description: "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and studio-quality sound. Perfect for travel and work.",
        features: [
            "Active noise cancellation (ANC)",
            "30-hour battery life",
            "Hi-Res audio certified",
            "Multi-point connectivity",
            "Foldable design with case"
        ],
        badge: "sale"
    },
    {
        id: 6,
        name: "Mechanical Gaming Keyboard - RGB Backlit",
        category: "electronics",
        brand: "GameTech",
        price: 159,
        originalPrice: 199,
        condition: "new",
        rating: 4.7,
        reviews: 2103,
        sold: 5629,
        shipping: "free",
        stock: 25,
        images: {
            "Black": "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&h=600&fit=crop"
        },
        description: "Professional mechanical gaming keyboard with Cherry MX switches, per-key RGB lighting, and aluminum frame. Includes detachable wrist rest.",
        features: [
            "Cherry MX Red switches",
            "Per-key RGB backlighting",
            "Aircraft-grade aluminum frame",
            "Detachable braided cable",
            "Programmable macro keys"
        ],
        badge: "new"
    },
    {
        id: 7,
        name: "Smart Fitness Watch - Health & Activity Tracker",
        category: "electronics",
        brand: "FitPro",
        price: 249,
        originalPrice: 329,
        condition: "new",
        rating: 4.6,
        reviews: 1876,
        sold: 4521,
        shipping: "free",
        stock: 18,
        images: {
            "Black": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=600&fit=crop",
            "Rose Gold": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop"
        },
        options: {
            Color: ["Black", "Rose Gold"]
        },
        video: {
            title: "Smart Watch Features",
            thumbnail: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1200&h=675&fit=crop",
            url: "https://www.youtube.com/watch?v=UFfJjS6gILM"
        },
        description: "Advanced fitness watch with heart rate monitoring, GPS tracking, sleep analysis, and 7-day battery life. Compatible with iOS and Android.",
        features: [
            "Built-in GPS tracking",
            "24/7 heart rate monitoring",
            "Sleep tracking & analysis",
            "50+ sport modes",
            "7-day battery life"
        ]
    },
    {
        id: 8,
        name: "Stainless Steel Water Bottle - Insulated 32oz",
        category: "home",
        brand: "HydroLife",
        price: 42,
        originalPrice: 55,
        condition: "new",
        rating: 4.9,
        reviews: 4521,
        sold: 12340,
        shipping: "free",
        stock: 100,
        images: {
            "Black": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop",
            "Blue": "https://images.unsplash.com/photo-1603833797131-3c0a0558b772?w=600&h=600&fit=crop"
        },
        options: {
            Color: ["Black", "Blue", "White", "Pink"]
        },
        description: "Double-wall vacuum insulated stainless steel water bottle. Keeps drinks cold for 24 hours, hot for 12 hours. BPA-free and eco-friendly.",
        features: [
            "32oz (946ml) capacity",
            "24hr cold / 12hr hot",
            "BPA-free materials",
            "Leak-proof lid",
            "Dishwasher safe"
        ],
        badge: "sale"
    },
    {
        id: 101,
        name: "UltraSlim 4K Action Camera - Waterproof Adventure Cam",
        category: "electronics",
        brand: "TrailVision",
        price: 219,
        originalPrice: 299,
        condition: "new",
        rating: 4.7,
        reviews: 1289,
        sold: 3610,
        shipping: "free",
        stock: 22,
        images: {
            "Black": "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=600&h=600&fit=crop",
            "Silver": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop"
        },
        options: {
            Color: ["Black", "Silver"]
        },
        description: "Compact 4K action camera with image stabilization, voice control, and waterproof housing for travel and sports capture.",
        features: [
            "4K/60fps recording",
            "6-axis image stabilization",
            "Waterproof to 33ft",
            "Wi-Fi app control",
            "Dual battery pack included"
        ],
        badge: "new"
    },
    {
        id: 102,
        name: "Oversized Denim Jacket - Relaxed Streetwear Fit",
        category: "fashion",
        brand: "Urban Thread",
        price: 89,
        originalPrice: 129,
        condition: "new",
        rating: 4.5,
        reviews: 742,
        sold: 1902,
        shipping: "free",
        stock: 34,
        images: {
            "Blue Wash": "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=600&h=600&fit=crop",
            "Black Wash": "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&h=600&fit=crop"
        },
        options: {
            Color: ["Blue Wash", "Black Wash"],
            Size: ["S", "M", "L", "XL"]
        },
        description: "Mid-weight denim jacket with a relaxed cut and reinforced stitching, designed for layering across all seasons.",
        features: [
            "Premium cotton denim",
            "Relaxed oversized silhouette",
            "Double-stitched seams",
            "Button-front closure",
            "Machine washable"
        ]
    },
    {
        id: 103,
        name: "Ceramic Air Fryer Oven 6QT - Digital Countertop Cooker",
        category: "home",
        brand: "HomeChef",
        price: 139,
        originalPrice: 189,
        condition: "new",
        rating: 4.8,
        reviews: 2140,
        sold: 4775,
        shipping: "free",
        stock: 19,
        images: {
            "Matte Black": "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?w=600&h=600&fit=crop",
            "Cream": "https://images.unsplash.com/photo-1585515656973-61f5e8bc9b6b?w=600&h=600&fit=crop"
        },
        options: {
            Color: ["Matte Black", "Cream"]
        },
        description: "Family-size air fryer with ceramic non-stick basket, 10 presets, and rapid circulation heating for crisp results.",
        features: [
            "6QT family capacity",
            "Touch display with 10 presets",
            "Ceramic non-stick basket",
            "Dishwasher-safe tray",
            "Auto shut-off safety"
        ],
        badge: "sale"
    },
    {
        id: 104,
        name: "Carbon Fiber Pickleball Paddle Set - Tournament Bundle",
        category: "sports",
        brand: "CourtDrive",
        price: 119,
        originalPrice: 169,
        condition: "new",
        rating: 4.6,
        reviews: 966,
        sold: 2587,
        shipping: "free",
        stock: 27,
        images: {
            "Graphite": "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=600&fit=crop",
            "Neon Blue": "https://images.unsplash.com/photo-1617083934551-6f50f3bb6f4f?w=600&h=600&fit=crop"
        },
        options: {
            Color: ["Graphite", "Neon Blue"]
        },
        description: "Two carbon fiber paddles with honeycomb cores, four outdoor balls, and a carry case for competitive and casual play.",
        features: [
            "Carbon fiber face",
            "Polymer honeycomb core",
            "Vibration-dampened grip",
            "USAPA-style dimensions",
            "Includes 4 balls and case"
        ]
    },
    {
        id: 105,
        name: "Smart Ring - Sleep, Recovery & Heart Rate Tracker",
        category: "wearable",
        brand: "PulseLoop",
        price: 279,
        originalPrice: 349,
        condition: "new",
        rating: 4.4,
        reviews: 538,
        sold: 1478,
        shipping: "free",
        stock: 16,
        images: {
            "Titanium": "https://images.unsplash.com/photo-1614851099511-773084f6911d?w=600&h=600&fit=crop",
            "Stealth Black": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop"
        },
        options: {
            Color: ["Titanium", "Stealth Black"],
            Size: ["7", "8", "9", "10", "11", "12"]
        },
        description: "Lightweight smart ring designed for all-day wear with advanced sleep tracking, recovery insights, and continuous heart-rate data.",
        features: [
            "24/7 heart-rate monitoring",
            "Sleep stage analysis",
            "Recovery readiness score",
            "5-day battery life",
            "Water resistant to 50m"
        ],
        badge: "new"
    },
    {
        id: 106,
        name: "Magnetic Blocks STEM Builder Kit - 120 Piece Set",
        category: "toys",
        brand: "BrightMinds",
        price: 64,
        originalPrice: 89,
        condition: "new",
        rating: 4.9,
        reviews: 1684,
        sold: 6201,
        shipping: "free",
        stock: 58,
        images: {
            "Multicolor": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=600&fit=crop"
        },
        description: "Educational magnetic tile set that encourages creativity, problem solving, and early engineering skills for kids ages 4+.",
        features: [
            "120 magnetic pieces",
            "STEM learning activity guide",
            "Rounded child-safe edges",
            "Durable ABS plastic",
            "Storage bag included"
        ],
        badge: "sale"
    },
    {
        id: 107,
        name: "Limited Edition Vinyl Figure - Collector Display Series",
        category: "collectibles",
        brand: "PrimeShelf",
        price: 79,
        originalPrice: 119,
        condition: "new",
        rating: 4.8,
        reviews: 432,
        sold: 903,
        shipping: "free",
        stock: 11,
        images: {
            "Midnight": "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop",
            "Pearl White": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=600&fit=crop"
        },
        options: {
            Color: ["Midnight", "Pearl White"]
        },
        description: "Numbered vinyl collector figure with premium paint finish and display stand. Ships in archival-safe packaging.",
        features: [
            "Limited numbered release",
            "Premium paint detailing",
            "Collector display stand",
            "Protective window box",
            "Certificate of authenticity"
        ]
    },
    {
        id: 108,
        name: "Portable Car Jump Starter 2000A - Power Bank & Compressor",
        category: "automotive",
        brand: "RoadGuard",
        price: 149,
        originalPrice: 209,
        condition: "new",
        rating: 4.7,
        reviews: 1115,
        sold: 2894,
        shipping: "free",
        stock: 24,
        images: {
            "Black / Orange": "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=600&fit=crop"
        },
        description: "High-power jump starter with built-in air compressor, USB-C fast charging, and emergency light for roadside safety.",
        features: [
            "2000A peak jump output",
            "Integrated tire compressor",
            "USB-C fast charge port",
            "LED emergency flashlight",
            "Safety clamp protection"
        ],
        badge: "new"
    }
];

products = (products || []).map(function (product) {
    return normalizeProduct(product);
});
var catalogSeedProducts = JSON.parse(JSON.stringify(products));

// Global State
var cart = [];
var wishlist = [];
var orders = [];
var users = [];
var currentUser = null;
var pendingAuthAction = '';
var adminActiveTab = 'dashboard';
var editingProductId = null;
var adminImageLineId = 0;
var adminColorLineId = 0;
var adminSpecialColorLineId = 0;
var currentView = 'grid';
var currentProduct = null;
var modalCarouselImages = [];
var modalCarouselIndex = 0;
var modalCarouselDirty = false;
var modalCarouselTimer = null;
var modalCarouselDelay = 3000;
var selectedVariants = {};
var quantity = 1;
var currentPage = 1;
var itemsPerPage = 8;
var searchTerms = [];
var heroCarouselIndex = 0;
var heroCarouselTimer = null;
var heroCarouselDelay = 3000;
var filteredProducts = [...products];
var currentFilters = {
    category: 'all',
    dailyDealsOnly: false
};
var customCategories = [];
var removedCategoryValues = [];
var categoryLabels = {
    electronics: 'Electronics',
    fashion: 'Fashion',
    home: 'Home & Garden',
    sports: 'Sporting Goods',
    wearable: 'Wearable',
    toys: 'Toys',
    collectibles: 'Collectibles',
    automotive: 'Automotive'
};
var modalFocusOrigin = {};
var pendingConfirmAction = null;
var APP_STATE_STORAGE_KEY = 'ig_app_state';
var APP_STATE_SCHEMA_VERSION = 1;
var BROWSE_UI_STORAGE_KEY = 'ig_browse_state';
var SESSION_CURRENT_USER_KEY = 'ig_current_user_session';
var PERSISTENT_CURRENT_USER_KEY = 'ig_current_user_persistent';
var CATALOG_EXPANSION_STATE_KEY = 'ig_catalog_expansion_extra8_v1';
var CATALOG_EXPANSION_PRODUCT_IDS = [101, 102, 103, 104, 105, 106, 107, 108];
var persistLoginAcrossSessions = false;
var cloudSyncConfig = (window.IG_CLOUD_CONFIG && typeof window.IG_CLOUD_CONFIG === 'object') ? window.IG_CLOUD_CONFIG : {};
var CLOUD_SYNC_REQUEST_TIMEOUT_MS = 7000;
var CLOUD_SYNC_DEBOUNCE_MS = 900;
var CLOUD_ANON_USER_ID_KEY = 'ig_cloud_anon_user_id_v1';
var cloudSyncTimer = null;
var cloudSyncInFlight = false;
var cloudSyncPending = false;
var cloudBootstrapAttempted = false;
var cloudBootstrapCompleted = false;
var cloudIdentityRefreshInFlight = false;
var cloudIdentityChangeRetryTimer = null;
var searchSuggestionTimer = null;
var SEARCH_SUGGESTION_DEBOUNCE_MS = 180;
var persistedBrowseUiState = null;
var productCardRotateTimer = null;
var PRODUCT_CARD_ROTATE_DELAY_MS = 3000;
var productCardImageIndexById = {};
var modalCarouselIndexByProductColor = {};
var modalCarouselSelectedImageByProductColor = {};
var adminUploadedVideoAsset = null;
var adminUploadedModelAsset = null;
var adminSaveAndCreateAnother = false;
var MAX_ADMIN_VIDEO_UPLOAD_BYTES = 2 * 1024 * 1024;
var MAX_ADMIN_MODEL_UPLOAD_BYTES = 2 * 1024 * 1024;
var USER_ROLE_ADMIN = 'admin';
var USER_ROLE_CUSTOMER = 'customer';
var toastTimer = null;
var undoTimer = null;
var pendingUndoAction = null;
var specialColorPickMode = false;
var specialColorSwatchStateByProductId = {};
var specialColorLastColorByProductKey = {};
var specialColorDirectPickByProductKey = {};
var specialColorImageAvailability = {};
var specialColorImageElementCache = {};
var specialColorImagePixelCache = {};
var SPECIAL_COLOR_SWATCH_DEFAULT_ZOOM = 280;
var SPECIAL_COLOR_STATE_STORAGE_KEY = 'ig_special_color_state_v1';
var SPECIAL_COLOR_DIRECT_PICK_STORAGE_KEY = 'ig_special_color_direct_pick_v1';
var SPECIAL_COLOR_OVERRIDE_STORAGE_KEY = 'ig_special_color_override_v1';
var SPECIAL_COLOR_SAMPLE_STATE_V3_STORAGE_KEY = 'ig_special_color_sample_state_v3';
var MODAL_CAROUSEL_INDEX_STORAGE_KEY = 'ig_modal_carousel_index_v1';
var MODAL_SELECTED_COLOR_STORAGE_KEY = 'ig_modal_selected_color_v1';
var MODAL_LAST_IMAGE_STORAGE_KEY = 'ig_modal_last_image_v1';
var MODAL_UI_STATE_STORAGE_KEY = 'ig_modal_ui_state_v1';
var MODAL_THUMB_STRICT_STORAGE_KEY = 'ig_modal_thumb_strict_v1';
var MODAL_PINNED_IMAGE_STORAGE_KEY = 'ig_modal_pinned_image_v1';
var MODAL_REOPEN_STATE_STORAGE_KEY = 'ig_modal_reopen_state_v1';
var MODAL_SELECTION_V2_STORAGE_KEY = 'ig_modal_selection_v2';
var MODAL_SELECTION_V3_STORAGE_KEY = 'ig_modal_selection_v3';
var SPECIAL_COLOR_DEBUG = false;
var BUILD_ID = '20260223-97';
var LEGACY_APP_STATE_KEYS = [
    'ig_cart',
    'ig_wishlist',
    'ig_products',
    'ig_orders',
    'ig_categories',
    'ig_removed_categories',
    'ig_users'
];
var hasShownStoragePersistWarning = false;
var specialColorOverrideByProductColor = {};
var specialColorSampleStateV3ByProductColor = {};
var modalThumbStrictByProductColor = {};
var modalPinnedImageByProductColor = {};
var modalReopenStateByProductKey = {};
var modalSelectedColorByProductKey = {};
var modalLastImageByProductKey = {};
var modalUiStateByProductKey = {};
var modalSelectionV2ByProductKey = {};
var modalSelectionV3ByProductId = {};
var modalThumbnailFallbackBound = false;


// Initialize
function init() {
    loadFromStorage();
    // Free duplicated legacy snapshot keys early so feature-specific saves have room.
    clearLegacyAppStateKeys();
    loadSpecialColorStateFromStorage();
    loadSpecialColorOverrideStateFromStorage();
    loadSpecialColorSampleStateV3FromStorage();
    hydrateSpecialColorStateFromV3Storage();
    loadModalCarouselIndexStateFromStorage();
    loadModalThumbStrictStateFromStorage();
    loadModalPinnedImageStateFromStorage();
    loadModalReopenStateFromStorage();
    loadModalSelectedColorStateFromStorage();
    loadModalLastImageStateFromStorage();
    loadModalUiStateFromStorage();
    loadModalSelectionV2FromStorage();
    loadModalSelectionV3FromStorage();
    applyCatalogExpansionOnce();
    renderCategoryUI();
    applyStoredBrowseUiState();
    buildSearchTerms();
    // Default home load should always show full catalog (no sticky filters/search).
    resetFilterInputs(false);
    resetSearchControls();
    currentFilters.category = 'all';
    currentFilters.dailyDealsOnly = false;
    updateDailyDealsUI();
    renderCategoryUI();
    applyFilters({ skipUrlSync: true });
    persistBrowseUiState({ includeSearch: false });
    clearBrowseQueryParamsFromUrl();
    hideSearchSuggestions();

    renderProducts();
    setupEventListeners();
    setupFooterInteractions();
    initializeModalAccessibility();
    initHeroCarousel();
    ensureAdminImageLinesInitialized();
    ensureAdminColorLinesInitialized();
    ensureAdminSpecialColorLinesInitialized();
    resetAdminVideoUploadState();
    resetAdminModelUploadState();
    renderAdminPanel();
    openProductFromUrlIfPresent();
}

function applyCatalogExpansionOnce() {
    var state = readStorageJson(CATALOG_EXPANSION_STATE_KEY);
    if (state && state.applied) return;

    var expansionIds = new Set(CATALOG_EXPANSION_PRODUCT_IDS.map(function (id) { return Number(id); }));
    var existingIds = new Set(products.map(function (product) { return Number(product.id); }));
    var addedCount = 0;

    catalogSeedProducts.forEach(function (seedProduct) {
        var seedId = Number(seedProduct && seedProduct.id);
        if (!expansionIds.has(seedId) || existingIds.has(seedId)) return;
        products.push(normalizeProduct(seedProduct));
        existingIds.add(seedId);
        addedCount++;
    });

    writeStorageJson(CATALOG_EXPANSION_STATE_KEY, {
        applied: true,
        appliedAt: new Date().toISOString(),
        addedCount: addedCount
    });

    if (addedCount > 0) {
        filteredProducts = products.slice();
        saveToStorage();
    }
}

function clearBrowseQueryParamsFromUrl() {
    if (!window.history || typeof window.history.replaceState !== 'function') return;
    var url = new URL(window.location.href);
    var params = url.searchParams;
    var keys = ['cat', 'deals', 'price', 'cond', 'brand', 'min', 'max', 'q', 'sc'];
    var changed = false;
    keys.forEach(function (key) {
        if (params.has(key)) {
            params.delete(key);
            changed = true;
        }
    });
    if (changed) {
        window.history.replaceState(window.history.state, '', url.toString());
    }
}

function rememberFocusForModal(modalId) {
    if (!modalId) return;
    modalFocusOrigin[modalId] = document.activeElement && typeof document.activeElement.focus === 'function'
        ? document.activeElement
        : null;
}

function restoreFocusForModal(modalId) {
    if (!modalId) return;
    var previous = modalFocusOrigin[modalId];
    modalFocusOrigin[modalId] = null;
    if (previous && typeof previous.focus === 'function') previous.focus();
}

function getFocusableElements(container) {
    if (!container) return [];
    var selectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])'
    ];
    return Array.from(container.querySelectorAll(selectors.join(','))).filter(function (el) {
        return !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true';
    });
}

function focusFirstElementIn(container, preferredSelector) {
    if (!container) return;
    var preferred = preferredSelector ? container.querySelector(preferredSelector) : null;
    if (preferred && typeof preferred.focus === 'function') {
        preferred.focus();
        return;
    }
    var focusable = getFocusableElements(container);
    if (focusable.length > 0) {
        focusable[0].focus();
        return;
    }
    container.setAttribute('tabindex', '-1');
    container.focus();
}

function getActiveFocusTrapContainer() {
    var prioritizedIds = ['confirmOverlay', 'profileOverlay', 'helpOverlay', 'authOverlay', 'videoModal', 'modelModal', 'adminPanel', 'cartPanel', 'productModal'];
    for (var i = 0; i < prioritizedIds.length; i++) {
        var el = document.getElementById(prioritizedIds[i]);
        if (el && el.classList.contains('open')) return el;
    }
    return null;
}

function trapFocusInContainer(event, container) {
    if (!container || event.key !== 'Tab') return;
    var focusable = getFocusableElements(container);
    if (focusable.length === 0) {
        event.preventDefault();
        container.focus();
        return;
    }

    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    var active = document.activeElement;

    if (event.shiftKey) {
        if (active === first || !container.contains(active)) {
            event.preventDefault();
            last.focus();
        }
    } else if (active === last || !container.contains(active)) {
        event.preventDefault();
        first.focus();
    }
}

function initializeModalAccessibility() {
    var configs = [
        { id: 'productModal', labelId: 'modalProductName', fallback: 'Product details' },
        { id: 'authOverlay', fallback: 'Account access' },
        { id: 'helpOverlay', fallback: 'Help and contact' },
        { id: 'profileOverlay', fallback: 'User profile' },
        { id: 'confirmOverlay', fallback: 'Confirm action' },
        { id: 'videoModal', fallback: 'Product video' },
        { id: 'modelModal', fallback: '3D model viewer' },
        { id: 'cartPanel', fallback: 'Shopping cart' },
        { id: 'adminPanel', fallback: 'Admin panel' }
    ];

    configs.forEach(function (config) {
        var el = document.getElementById(config.id);
        if (!el) return;
        el.setAttribute('role', 'dialog');
        el.setAttribute('aria-modal', 'true');
        if (config.labelId && document.getElementById(config.labelId)) {
            el.setAttribute('aria-labelledby', config.labelId);
        } else {
            el.setAttribute('aria-label', config.fallback);
        }
    });
}

function openConfirmModal(message, onConfirm, confirmLabel) {
    var overlay = document.getElementById('confirmOverlay');
    if (!overlay) return;

    var textEl = document.getElementById('confirmMessage');
    var confirmBtn = document.getElementById('confirmAcceptBtn');
    if (textEl) textEl.textContent = String(message || 'Are you sure?');
    if (confirmBtn) confirmBtn.textContent = String(confirmLabel || 'Confirm');

    pendingConfirmAction = typeof onConfirm === 'function' ? onConfirm : null;
    rememberFocusForModal('confirmOverlay');
    overlay.classList.add('open');
    focusFirstElementIn(overlay, '#confirmAcceptBtn');
}

function closeConfirmModal() {
    var overlay = document.getElementById('confirmOverlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    pendingConfirmAction = null;
    restoreFocusForModal('confirmOverlay');
}

function closeConfirmModalOnOverlay(event) {
    if (event.target && event.target.id === 'confirmOverlay') {
        closeConfirmModal();
    }
}

function confirmModalCancel() {
    closeConfirmModal();
}

function confirmModalAccept() {
    var action = pendingConfirmAction;
    closeConfirmModal();
    if (action) action();
}

function setCheckboxValues(selector, values) {
    var set = new Set(values || []);
    document.querySelectorAll(selector).forEach(function (cb) {
        cb.checked = set.has(String(cb.value));
    });
}

function getCheckedValues(selector) {
    return Array.from(document.querySelectorAll(selector)).map(function (cb) {
        return String(cb.value || '');
    });
}

function sanitizeBrowseUiState(rawState) {
    if (!rawState || typeof rawState !== 'object') return null;
    var state = {};
    var hasAny = false;

    if (typeof rawState.category === 'string') {
        state.category = String(rawState.category || '').trim().toLowerCase() || 'all';
        hasAny = true;
    }

    if (typeof rawState.dailyDealsOnly !== 'undefined') {
        state.dailyDealsOnly = Boolean(rawState.dailyDealsOnly);
        hasAny = true;
    }

    ['priceValues', 'conditionValues', 'brandValues'].forEach(function (key) {
        if (!Array.isArray(rawState[key])) return;
        state[key] = rawState[key]
            .map(function (value) { return String(value || '').trim(); })
            .filter(function (value) { return value.length > 0; });
        hasAny = true;
    });

    if (Object.prototype.hasOwnProperty.call(rawState, 'minPrice')) {
        state.minPrice = String(rawState.minPrice || '').trim();
        hasAny = true;
    }
    if (Object.prototype.hasOwnProperty.call(rawState, 'maxPrice')) {
        state.maxPrice = String(rawState.maxPrice || '').trim();
        hasAny = true;
    }

    if (Object.prototype.hasOwnProperty.call(rawState, 'searchQuery')) {
        state.searchQuery = String(rawState.searchQuery || '').trim();
        hasAny = true;
    }
    if (typeof rawState.searchCategory === 'string') {
        state.searchCategory = String(rawState.searchCategory || '').trim().toLowerCase() || 'all';
        hasAny = true;
    }

    if (typeof rawState.sortValue === 'string' && ['best', 'price-low', 'price-high', 'newest', 'popular'].includes(rawState.sortValue)) {
        state.sortValue = rawState.sortValue;
        hasAny = true;
    }

    if (typeof rawState.view === 'string' && ['grid', 'list'].includes(rawState.view)) {
        state.view = rawState.view;
        hasAny = true;
    }

    return hasAny ? state : null;
}

function getCurrentSortValue() {
    var sortSelect = document.getElementById('sortSelect');
    return sortSelect && sortSelect.value ? sortSelect.value : 'best';
}

function getCurrentBrowseUiState() {
    return sanitizeBrowseUiState({
        category: currentFilters.category,
        dailyDealsOnly: currentFilters.dailyDealsOnly,
        priceValues: getCheckedValues('.filter-option input[type="checkbox"][id^="price"]:checked'),
        conditionValues: getCheckedValues('.filter-option input[type="checkbox"][id^="condition"]:checked'),
        brandValues: getCheckedValues('.filter-option input[type="checkbox"][id^="brand"]:checked'),
        minPrice: String((document.getElementById('minPrice') || {}).value || '').trim(),
        maxPrice: String((document.getElementById('maxPrice') || {}).value || '').trim(),
        searchQuery: String((document.getElementById('searchInput') || {}).value || '').trim(),
        searchCategory: getSelectedSearchCategory(),
        sortValue: getCurrentSortValue(),
        view: currentView
    });
}

function applyCurrentViewToUi() {
    var container = document.getElementById('productsContainer');
    if (container) {
        container.className = currentView === 'list' ? 'products-list' : 'products-grid';
    }
    document.querySelectorAll('.view-btn').forEach(function (btn) {
        var handler = String(btn.getAttribute('onclick') || '');
        var isActive = handler.indexOf("setView('" + currentView + "'") >= 0;
        btn.classList.toggle('active', isActive);
    });
}

function applyBrowseUiState(rawState) {
    var state = sanitizeBrowseUiState(rawState);
    if (!state) return false;

    if (typeof state.category === 'string') {
        currentFilters.category = state.category || 'all';
    }
    if (typeof state.dailyDealsOnly === 'boolean') {
        currentFilters.dailyDealsOnly = state.dailyDealsOnly;
    }
    updateDailyDealsUI();

    if (Array.isArray(state.priceValues)) {
        setCheckboxValues('.filter-option input[type="checkbox"][id^="price"]', state.priceValues);
    }
    if (Array.isArray(state.conditionValues)) {
        setCheckboxValues('.filter-option input[type="checkbox"][id^="condition"]', state.conditionValues);
    }
    if (Array.isArray(state.brandValues)) {
        setCheckboxValues('.filter-option input[type="checkbox"][id^="brand"]', state.brandValues);
    }

    if (Object.prototype.hasOwnProperty.call(state, 'minPrice')) {
        var minPriceInput = document.getElementById('minPrice');
        if (minPriceInput) minPriceInput.value = state.minPrice;
    }
    if (Object.prototype.hasOwnProperty.call(state, 'maxPrice')) {
        var maxPriceInput = document.getElementById('maxPrice');
        if (maxPriceInput) maxPriceInput.value = state.maxPrice;
    }

    if (Object.prototype.hasOwnProperty.call(state, 'searchQuery')) {
        var searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = state.searchQuery;
    }
    if (typeof state.searchCategory === 'string') {
        var searchSelect = document.getElementById('searchCategory');
        if (searchSelect && Array.from(searchSelect.options).some(function (opt) { return opt.value === state.searchCategory; })) {
            searchSelect.value = state.searchCategory;
        }
    }

    if (state.sortValue) {
        var sortSelect = document.getElementById('sortSelect');
        if (sortSelect) sortSelect.value = state.sortValue;
    }

    if (state.view) {
        currentView = state.view;
        applyCurrentViewToUi();
    }

    return true;
}

function applyStoredBrowseUiState() {
    if (!persistedBrowseUiState) return false;
    return applyBrowseUiState(persistedBrowseUiState);
}

function loadSpecialColorStateFromStorage() {
    specialColorSwatchStateByProductId = {};
    specialColorLastColorByProductKey = {};
    specialColorDirectPickByProductKey = {};

    [readStorageJson(SPECIAL_COLOR_STATE_STORAGE_KEY), readSessionJson(SPECIAL_COLOR_STATE_STORAGE_KEY)].forEach(function (stored) {
        if (!stored || typeof stored !== 'object') return;
        var swatches = stored.swatches && typeof stored.swatches === 'object' ? stored.swatches : {};
        var lastColors = stored.lastColors && typeof stored.lastColors === 'object' ? stored.lastColors : {};

        Object.keys(swatches).forEach(function (key) {
            var sanitized = sanitizeSpecialColorSwatchMap(swatches[key]);
            if (sanitized) specialColorSwatchStateByProductId[key] = sanitized;
        });
        Object.keys(lastColors).forEach(function (key) {
            var value = String(lastColors[key] || '').trim();
            if (value) specialColorLastColorByProductKey[key] = value;
        });
    });

    [readStorageJson(SPECIAL_COLOR_DIRECT_PICK_STORAGE_KEY), readSessionJson(SPECIAL_COLOR_DIRECT_PICK_STORAGE_KEY)].forEach(function (directPick) {
        if (!directPick || typeof directPick !== 'object') return;
        Object.keys(directPick).forEach(function (productKey) {
            var colorMap = directPick[productKey];
            if (!colorMap || typeof colorMap !== 'object') return;
            var normalizedColorMap = specialColorDirectPickByProductKey[productKey] || {};
            Object.keys(colorMap).forEach(function (colorKey) {
                var entry = sanitizeSpecialColorSwatchEntry(colorMap[colorKey]);
                if (entry) normalizedColorMap[String(colorKey).trim().toLowerCase()] = entry;
            });
            if (Object.keys(normalizedColorMap).length > 0) {
                specialColorDirectPickByProductKey[productKey] = normalizedColorMap;
            }
        });
    });
}

function loadSpecialColorOverrideStateFromStorage() {
    specialColorOverrideByProductColor = {};
    [readStorageJson(SPECIAL_COLOR_OVERRIDE_STORAGE_KEY), readSessionJson(SPECIAL_COLOR_OVERRIDE_STORAGE_KEY)].forEach(function (source) {
        if (!source || typeof source !== 'object') return;
        Object.keys(source).forEach(function (productKey) {
            var colorMap = source[productKey];
            if (!colorMap || typeof colorMap !== 'object') return;
            var normalizedColorMap = specialColorOverrideByProductColor[productKey] || {};
            Object.keys(colorMap).forEach(function (colorKey) {
                var entry = sanitizeSpecialColorSwatchEntry(colorMap[colorKey]);
                if (!entry) return;
                normalizedColorMap[normalizeSpecialColorDirectKey(colorKey)] = entry;
            });
            if (Object.keys(normalizedColorMap).length > 0) {
                specialColorOverrideByProductColor[productKey] = normalizedColorMap;
            }
        });
    });
}

function saveSpecialColorOverrideStateToStorage() {
    var localSaved = writeStorageJson(SPECIAL_COLOR_OVERRIDE_STORAGE_KEY, specialColorOverrideByProductColor);
    writeSessionJson(SPECIAL_COLOR_OVERRIDE_STORAGE_KEY, specialColorOverrideByProductColor);
    if (!localSaved) maybeShowStoragePersistWarning();
}

function loadSpecialColorSampleStateV3FromStorage() {
    specialColorSampleStateV3ByProductColor = {};
    [readStorageJson(SPECIAL_COLOR_SAMPLE_STATE_V3_STORAGE_KEY), readSessionJson(SPECIAL_COLOR_SAMPLE_STATE_V3_STORAGE_KEY)].forEach(function (source) {
        if (!source || typeof source !== 'object') return;
        Object.keys(source).forEach(function (key) {
            var normalizedKey = sanitizeSpecialColorSampleStateStorageKey(key);
            if (!normalizedKey) return;
            var normalizedEntry = sanitizeSpecialColorSwatchEntry(source[key]);
            if (!normalizedEntry) return;
            specialColorSampleStateV3ByProductColor[normalizedKey] = normalizedEntry;
        });
    });
}

function saveSpecialColorSampleStateV3ToStorage() {
    writeStorageJsonWithSessionFallback(SPECIAL_COLOR_SAMPLE_STATE_V3_STORAGE_KEY, specialColorSampleStateV3ByProductColor);
}

function loadModalCarouselIndexStateFromStorage() {
    modalCarouselIndexByProductColor = {};
    modalCarouselSelectedImageByProductColor = {};
    [readStorageJson(MODAL_CAROUSEL_INDEX_STORAGE_KEY), readSessionJson(MODAL_CAROUSEL_INDEX_STORAGE_KEY)].forEach(function (stored) {
        if (!stored || typeof stored !== 'object') return;
        var indexMap = stored.indices && typeof stored.indices === 'object' ? stored.indices : stored;
        var imageMap = stored.images && typeof stored.images === 'object' ? stored.images : {};
        Object.keys(indexMap || {}).forEach(function (key) {
            var value = Number(indexMap[key]);
            if (!isFinite(value)) return;
            modalCarouselIndexByProductColor[key] = Math.max(0, Math.floor(value));
        });
        Object.keys(imageMap || {}).forEach(function (key) {
            var value = String(imageMap[key] || '').trim();
            if (!value) return;
            modalCarouselSelectedImageByProductColor[key] = value;
        });
    });
}

function saveModalCarouselIndexStateToStorage() {
    var payload = {
        indices: modalCarouselIndexByProductColor,
        images: modalCarouselSelectedImageByProductColor
    };
    var saved = writeStorageJson(MODAL_CAROUSEL_INDEX_STORAGE_KEY, payload);
    writeSessionJson(MODAL_CAROUSEL_INDEX_STORAGE_KEY, payload);
    if (!saved) maybeShowStoragePersistWarning();
}

function sanitizeModalThumbStrictEntry(entry) {
    if (!entry || typeof entry !== 'object') return null;
    var index = Number(entry.index);
    if (!isFinite(index)) return null;
    var normalized = {
        index: Math.max(0, Math.floor(index))
    };
    var image = String(entry.image || '').trim();
    if (image) normalized.image = image;
    var colorKey = String(entry.colorKey || '').trim().toLowerCase();
    if (colorKey) normalized.colorKey = colorKey;
    return normalized;
}

function loadModalThumbStrictStateFromStorage() {
    modalThumbStrictByProductColor = {};
    [readStorageJson(MODAL_THUMB_STRICT_STORAGE_KEY), readSessionJson(MODAL_THUMB_STRICT_STORAGE_KEY)].forEach(function (stored) {
        if (!stored || typeof stored !== 'object') return;
        Object.keys(stored).forEach(function (key) {
            var normalized = sanitizeModalThumbStrictEntry(stored[key]);
            if (!normalized) return;
            modalThumbStrictByProductColor[key] = normalized;
        });
    });
}

function saveModalThumbStrictStateToStorage() {
    var saved = writeStorageJson(MODAL_THUMB_STRICT_STORAGE_KEY, modalThumbStrictByProductColor);
    writeSessionJson(MODAL_THUMB_STRICT_STORAGE_KEY, modalThumbStrictByProductColor);
    if (!saved) maybeShowStoragePersistWarning();
}

function loadModalPinnedImageStateFromStorage() {
    modalPinnedImageByProductColor = {};
    [readStorageJson(MODAL_PINNED_IMAGE_STORAGE_KEY), readSessionJson(MODAL_PINNED_IMAGE_STORAGE_KEY)].forEach(function (stored) {
        if (!stored || typeof stored !== 'object') return;
        Object.keys(stored).forEach(function (key) {
            var value = String(stored[key] || '').trim();
            if (!value) return;
            modalPinnedImageByProductColor[key] = value;
        });
    });
}

function saveModalPinnedImageStateToStorage() {
    var saved = writeStorageJson(MODAL_PINNED_IMAGE_STORAGE_KEY, modalPinnedImageByProductColor);
    writeSessionJson(MODAL_PINNED_IMAGE_STORAGE_KEY, modalPinnedImageByProductColor);
    if (!saved) maybeShowStoragePersistWarning();
}

function loadModalReopenStateFromStorage() {
    modalReopenStateByProductKey = {};
    [readStorageJson(MODAL_REOPEN_STATE_STORAGE_KEY), readSessionJson(MODAL_REOPEN_STATE_STORAGE_KEY)].forEach(function (stored) {
        if (!stored || typeof stored !== 'object') return;
        Object.keys(stored).forEach(function (key) {
            var state = stored[key];
            if (!state || typeof state !== 'object') return;
            var normalized = {};
            if (state.color) normalized.color = String(state.color).trim();
            if (state.image) normalized.image = String(state.image).trim();
            if (isFinite(Number(state.index))) normalized.index = Math.max(0, Math.floor(Number(state.index)));
            if (!normalized.color && !normalized.image && typeof normalized.index === 'undefined') return;
            modalReopenStateByProductKey[key] = normalized;
        });
    });
}

function saveModalReopenStateToStorage() {
    var saved = writeStorageJson(MODAL_REOPEN_STATE_STORAGE_KEY, modalReopenStateByProductKey);
    writeSessionJson(MODAL_REOPEN_STATE_STORAGE_KEY, modalReopenStateByProductKey);
    if (!saved) maybeShowStoragePersistWarning();
}

function getModalSelectedColorStateKeys(product) {
    if (!product) return [];
    var keys = [];
    var idKey = String(product.id || '').trim();
    var nameKey = 'name:' + String(product.name || '').trim().toLowerCase();
    // Prefer stable numeric product id keys. Only fall back to name when id is missing.
    if (idKey) {
        keys.push(idKey);
    } else if (String(product.name || '').trim()) {
        keys.push(nameKey);
    }
    return Array.from(new Set(keys.filter(function (key) { return !!key; })));
}

function getModalReopenState(product) {
    var keys = getModalSelectedColorStateKeys(product);
    for (var i = 0; i < keys.length; i++) {
        var state = modalReopenStateByProductKey[keys[i]];
        if (state && typeof state === 'object') return state;
    }
    return null;
}

function updateModalReopenState(product, patch) {
    if (!product || !patch || typeof patch !== 'object') return;
    var keys = getModalSelectedColorStateKeys(product);
    if (!keys.length) return;
    var current = getModalReopenState(product) || {};
    var next = Object.assign({}, current, patch);
    keys.forEach(function (key) {
        modalReopenStateByProductKey[key] = clonePlainData(next);
    });
    saveModalReopenStateToStorage();
}

function getModalUiState(product) {
    var keys = getModalSelectedColorStateKeys(product);
    for (var i = 0; i < keys.length; i++) {
        var state = modalUiStateByProductKey[keys[i]];
        if (state && typeof state === 'object') return state;
    }
    return null;
}

function updateModalUiState(product, patch) {
    if (!product || !patch || typeof patch !== 'object') return;
    var keys = getModalSelectedColorStateKeys(product);
    if (!keys.length) return;
    var current = getModalUiState(product) || {};
    var next = Object.assign({}, current, patch);
    keys.forEach(function (key) {
        modalUiStateByProductKey[key] = clonePlainData(next);
    });
    saveModalUiStateToStorage();
}

function getCanonicalColorValue(product, color) {
    var raw = String(color || '').trim();
    if (!raw) return '';
    var target = raw.toLowerCase();
    var values = getSpecialColorVariantValues(product);
    var direct = values.find(function (value) {
        return String(value || '').trim().toLowerCase() === target;
    });
    if (direct) return String(direct).trim();

    var resolved = String(resolveColorKey(product, raw) || '').trim();
    if (resolved) {
        var resolvedTarget = resolved.toLowerCase();
        var byResolved = values.find(function (value) {
            return String(value || '').trim().toLowerCase() === resolvedTarget;
        });
        if (byResolved) return String(byResolved).trim();
        return resolved;
    }

    return raw;
}

function getModalCarouselStateKeyVariants(product, color) {
    if (!product) return [];
    var productKey = String(product.id || '').trim() || ('name:' + String(product.name || '').trim().toLowerCase());
    if (!productKey) return [];

    var raw = String(color || '').trim();
    var canonical = getCanonicalColorValue(product, raw);
    var resolved = String(resolveColorKey(product, raw) || '').trim();
    var candidates = [canonical, resolved, raw, 'Default']
        .map(function (value) { return String(value || '').trim().toLowerCase(); })
        .filter(function (value) { return !!value; });

    return Array.from(new Set(candidates.map(function (colorKey) {
        return productKey + '::' + colorKey;
    })));
}

function getSavedModalSelectedColor(product) {
    var keys = getModalSelectedColorStateKeys(product);
    for (var i = 0; i < keys.length; i++) {
        var value = String(modalSelectedColorByProductKey[keys[i]] || '').trim();
        if (value) return value;
    }
    return '';
}

function saveModalSelectedColor(product, color) {
    var value = getCanonicalColorValue(product, color);
    if (!value) return;
    var keys = getModalSelectedColorStateKeys(product);
    if (!keys.length) return;
    keys.forEach(function (key) {
        modalSelectedColorByProductKey[key] = value;
    });
    saveModalSelectedColorStateToStorage();
}

function loadModalSelectedColorStateFromStorage() {
    modalSelectedColorByProductKey = {};
    [readStorageJson(MODAL_SELECTED_COLOR_STORAGE_KEY), readSessionJson(MODAL_SELECTED_COLOR_STORAGE_KEY)].forEach(function (stored) {
        if (!stored || typeof stored !== 'object') return;
        Object.keys(stored).forEach(function (key) {
            var value = String(stored[key] || '').trim();
            if (!value) return;
            modalSelectedColorByProductKey[key] = value;
        });
    });
}

function saveModalSelectedColorStateToStorage() {
    var saved = writeStorageJson(MODAL_SELECTED_COLOR_STORAGE_KEY, modalSelectedColorByProductKey);
    writeSessionJson(MODAL_SELECTED_COLOR_STORAGE_KEY, modalSelectedColorByProductKey);
    if (!saved) maybeShowStoragePersistWarning();
}

function loadModalUiStateFromStorage() {
    modalUiStateByProductKey = {};
    [readStorageJson(MODAL_UI_STATE_STORAGE_KEY), readSessionJson(MODAL_UI_STATE_STORAGE_KEY)].forEach(function (stored) {
        if (!stored || typeof stored !== 'object') return;
        Object.keys(stored).forEach(function (key) {
            var state = stored[key];
            if (!state || typeof state !== 'object') return;
            var normalized = {};
            if (state.selectedColor) normalized.selectedColor = String(state.selectedColor).trim();
            if (state.selectedImage) normalized.selectedImage = String(state.selectedImage).trim();
            if (isFinite(Number(state.selectedIndex))) normalized.selectedIndex = Math.max(0, Math.floor(Number(state.selectedIndex)));
            if (!normalized.selectedColor && !normalized.selectedImage && typeof normalized.selectedIndex === 'undefined') return;
            modalUiStateByProductKey[key] = normalized;
        });
    });
}

function saveModalUiStateToStorage() {
    var saved = writeStorageJson(MODAL_UI_STATE_STORAGE_KEY, modalUiStateByProductKey);
    writeSessionJson(MODAL_UI_STATE_STORAGE_KEY, modalUiStateByProductKey);
    if (!saved) maybeShowStoragePersistWarning();
}

function sanitizeModalSelectionV2Entry(entry) {
    if (!entry || typeof entry !== 'object') return null;
    var normalized = { byColor: {} };
    var lastColor = String(entry.lastColor || '').trim();
    if (lastColor) normalized.lastColor = lastColor;
    var byColor = entry.byColor && typeof entry.byColor === 'object' ? entry.byColor : {};
    Object.keys(byColor).forEach(function (colorKey) {
        var key = String(colorKey || '').trim().toLowerCase();
        if (!key) return;
        var source = byColor[colorKey];
        if (!source || typeof source !== 'object') return;
        var index = Number(source.index);
        if (!isFinite(index)) return;
        var item = { index: Math.max(0, Math.floor(index)) };
        var image = String(source.image || '').trim();
        if (image) item.image = image;
        var color = String(source.color || '').trim();
        if (color) item.color = color;
        normalized.byColor[key] = item;
    });
    if (!normalized.lastColor && Object.keys(normalized.byColor).length === 0) return null;
    return normalized;
}

function loadModalSelectionV2FromStorage() {
    modalSelectionV2ByProductKey = {};
    [readStorageJson(MODAL_SELECTION_V2_STORAGE_KEY), readSessionJson(MODAL_SELECTION_V2_STORAGE_KEY)].forEach(function (stored) {
        if (!stored || typeof stored !== 'object') return;
        Object.keys(stored).forEach(function (productKey) {
            var normalized = sanitizeModalSelectionV2Entry(stored[productKey]);
            if (!normalized) return;
            modalSelectionV2ByProductKey[productKey] = normalized;
        });
    });
}

function saveModalSelectionV2ToStorage() {
    var saved = writeStorageJson(MODAL_SELECTION_V2_STORAGE_KEY, modalSelectionV2ByProductKey);
    writeSessionJson(MODAL_SELECTION_V2_STORAGE_KEY, modalSelectionV2ByProductKey);
    if (!saved) maybeShowStoragePersistWarning();
}

function getModalSelectionV2(product) {
    var keys = getModalSelectedColorStateKeys(product);
    for (var i = 0; i < keys.length; i++) {
        var entry = sanitizeModalSelectionV2Entry(modalSelectionV2ByProductKey[keys[i]]);
        if (entry) return entry;
    }
    return null;
}

function saveModalSelectionV2(product, color, index, imageUrl) {
    if (!product) return;
    var numericIndex = Number(index);
    if (!isFinite(numericIndex)) return;
    var clamped = Math.max(0, Math.floor(numericIndex));
    var normalizedColor = getCanonicalColorValue(product, color) || String(color || '').trim() || '';
    var colorKey = normalizeModalSelectionColorKey(product, normalizedColor || color);
    var keys = getModalSelectedColorStateKeys(product);
    if (!keys.length || !colorKey) return;

    var current = getModalSelectionV2(product) || { byColor: {} };
    if (!current.byColor || typeof current.byColor !== 'object') current.byColor = {};
    var item = { index: clamped };
    var image = String(imageUrl || '').trim();
    if (image) item.image = image;
    if (normalizedColor) item.color = normalizedColor;
    current.byColor[colorKey] = item;
    if (normalizedColor) current.lastColor = normalizedColor;

    keys.forEach(function (key) {
        modalSelectionV2ByProductKey[key] = clonePlainData(current);
    });
    saveModalSelectionV2ToStorage();
}

function getModalSelectionV2Index(product, color, images) {
    var entry = getModalSelectionV2(product);
    if (!entry || !entry.byColor || typeof entry.byColor !== 'object') return -1;
    var colorKey = normalizeModalSelectionColorKey(product, color);
    var item = entry.byColor[colorKey];
    if (!item || typeof item !== 'object') return -1;
    var list = Array.isArray(images) ? images : [];
    if (item.image && list.length > 0) {
        var byImage = findMediaIndexByUrl(list, String(item.image).trim());
        if (byImage >= 0) return byImage;
    }
    var idx = Number(item.index);
    if (!isFinite(idx)) return -1;
    if (!list.length) return Math.max(0, Math.floor(idx));
    return Math.max(0, Math.min(Math.floor(idx), list.length - 1));
}

function sanitizeModalSelectionV3Entry(entry) {
    if (!entry || typeof entry !== 'object') return null;
    var normalized = {};
    var color = String(entry.color || '').trim();
    if (color) normalized.color = color;
    if (isFinite(Number(entry.index))) normalized.index = Math.max(0, Math.floor(Number(entry.index)));
    var image = String(entry.image || '').trim();
    if (image) normalized.image = image;
    if (!normalized.color && typeof normalized.index === 'undefined' && !normalized.image) return null;
    return normalized;
}

function loadModalSelectionV3FromStorage() {
    modalSelectionV3ByProductId = {};
    [readStorageJson(MODAL_SELECTION_V3_STORAGE_KEY), readSessionJson(MODAL_SELECTION_V3_STORAGE_KEY)].forEach(function (stored) {
        if (!stored || typeof stored !== 'object') return;
        Object.keys(stored).forEach(function (productId) {
            var idKey = String(productId || '').trim();
            if (!idKey) return;
            var normalized = sanitizeModalSelectionV3Entry(stored[productId]);
            if (!normalized) return;
            modalSelectionV3ByProductId[idKey] = normalized;
        });
    });
}

function saveModalSelectionV3ToStorage() {
    var saved = writeStorageJson(MODAL_SELECTION_V3_STORAGE_KEY, modalSelectionV3ByProductId);
    writeSessionJson(MODAL_SELECTION_V3_STORAGE_KEY, modalSelectionV3ByProductId);
    if (!saved) maybeShowStoragePersistWarning();
}

function getModalSelectionV3(product) {
    if (!product) return null;
    var idKey = String(product.id || '').trim();
    if (!idKey) return null;
    return sanitizeModalSelectionV3Entry(modalSelectionV3ByProductId[idKey]);
}

function saveModalSelectionV3(product, color, index, imageUrl) {
    if (!product) return;
    var idKey = String(product.id || '').trim();
    if (!idKey) return;
    var numericIndex = Number(index);
    if (!isFinite(numericIndex)) return;
    var clamped = Math.max(0, Math.floor(numericIndex));
    var normalizedColor = getCanonicalColorValue(product, color) || String(color || '').trim() || '';
    var entry = { index: clamped };
    if (normalizedColor) entry.color = normalizedColor;
    var image = String(imageUrl || '').trim();
    if (image) entry.image = image;
    modalSelectionV3ByProductId[idKey] = entry;
    saveModalSelectionV3ToStorage();
}

function loadModalLastImageStateFromStorage() {
    modalLastImageByProductKey = {};
    [readStorageJson(MODAL_LAST_IMAGE_STORAGE_KEY), readSessionJson(MODAL_LAST_IMAGE_STORAGE_KEY)].forEach(function (stored) {
        if (!stored || typeof stored !== 'object') return;
        Object.keys(stored).forEach(function (key) {
            var value = String(stored[key] || '').trim();
            if (!value) return;
            modalLastImageByProductKey[key] = value;
        });
    });
}

function saveModalLastImageStateToStorage() {
    var saved = writeStorageJson(MODAL_LAST_IMAGE_STORAGE_KEY, modalLastImageByProductKey);
    writeSessionJson(MODAL_LAST_IMAGE_STORAGE_KEY, modalLastImageByProductKey);
    if (!saved) maybeShowStoragePersistWarning();
}

function saveModalLastImage(product, imageUrl) {
    var value = String(imageUrl || '').trim();
    if (!product || !value) return;
    var keys = getModalSelectedColorStateKeys(product);
    if (!keys.length) return;
    keys.forEach(function (key) {
        modalLastImageByProductKey[key] = value;
    });
    saveModalLastImageStateToStorage();
}

function getSavedModalLastImage(product) {
    var keys = getModalSelectedColorStateKeys(product);
    for (var i = 0; i < keys.length; i++) {
        var value = String(modalLastImageByProductKey[keys[i]] || '').trim();
        if (value) return value;
    }
    return '';
}

function buildCompactSpecialColorStoragePayload() {
    var compactSwatches = {};
    var compactLastColors = {};
    var compactDirect = {};

    (products || []).forEach(function (product) {
        if (!product || !isSpecialColorPickerEnabled(product)) return;
        var canonicalKey = getSpecialColorStateKey(product);
        if (!canonicalKey) return;

        var aliases = getSpecialColorStateAliases(product);
        var mergedSwatches = {};
        var mergedDirect = {};
        var lastColor = String(product.specialColorLastColor || '').trim();

        aliases.forEach(function (alias) {
            var swatchMap = sanitizeSpecialColorSwatchMap(specialColorSwatchStateByProductId[alias]) || {};
            mergedSwatches = Object.assign(mergedSwatches, swatchMap);

            var directMap = specialColorDirectPickByProductKey[alias];
            if (directMap && typeof directMap === 'object') {
                Object.keys(directMap).forEach(function (colorKey) {
                    var entry = sanitizeSpecialColorSwatchEntry(directMap[colorKey]);
                    if (!entry) return;
                    mergedDirect[normalizeSpecialColorDirectKey(colorKey)] = entry;
                });
            }

            if (!lastColor) {
                var aliasLast = String(specialColorLastColorByProductKey[alias] || '').trim();
                if (aliasLast) lastColor = aliasLast;
            }
        });

        var productSwatches = sanitizeSpecialColorSwatchMap(product.specialColorSwatches) || {};
        mergedSwatches = Object.assign(mergedSwatches, productSwatches);

        var normalizedSwatches = sanitizeSpecialColorSwatchMap(mergedSwatches);
        if (normalizedSwatches) compactSwatches[canonicalKey] = normalizedSwatches;
        if (lastColor) compactLastColors[canonicalKey] = lastColor;
        if (Object.keys(mergedDirect).length > 0) compactDirect[canonicalKey] = mergedDirect;
    });

    return {
        swatches: compactSwatches,
        lastColors: compactLastColors,
        direct: compactDirect
    };
}

function saveSpecialColorStateToStorage() {
    var payload = buildCompactSpecialColorStoragePayload();
    var statePayload = {
        swatches: payload.swatches,
        lastColors: payload.lastColors
    };
    var swatchesSaved = writeStorageJson(SPECIAL_COLOR_STATE_STORAGE_KEY, statePayload);
    var directSaved = writeStorageJson(SPECIAL_COLOR_DIRECT_PICK_STORAGE_KEY, payload.direct);
    writeSessionJson(SPECIAL_COLOR_STATE_STORAGE_KEY, statePayload);
    writeSessionJson(SPECIAL_COLOR_DIRECT_PICK_STORAGE_KEY, payload.direct);
    if (!swatchesSaved || !directSaved) {
        // Retry once after reclaiming space from deprecated duplicate keys.
        clearLegacyAppStateKeys();
        swatchesSaved = writeStorageJson(SPECIAL_COLOR_STATE_STORAGE_KEY, statePayload);
        directSaved = writeStorageJson(SPECIAL_COLOR_DIRECT_PICK_STORAGE_KEY, payload.direct);
    }
    if (!swatchesSaved || !directSaved) {
        maybeShowStoragePersistWarning();
        return;
    }

    // Keep runtime maps bounded and aligned with canonical product keys.
    specialColorSwatchStateByProductId = clonePlainData(payload.swatches);
    specialColorLastColorByProductKey = clonePlainData(payload.lastColors);
    specialColorDirectPickByProductKey = clonePlainData(payload.direct);
}

function specialColorDebugLog(eventName, details) {
    if (!SPECIAL_COLOR_DEBUG || !window.console || typeof console.log !== 'function') return;
    try {
        var snapshot = details || {};
        try {
            snapshot = JSON.parse(JSON.stringify(details || {}));
        } catch (e) {
            snapshot = details || {};
        }
        console.log('[SpecialColor][' + eventName + '] ' + JSON.stringify(snapshot));
    } catch (e) { }
}

function persistBrowseUiState(options) {
    var state = getCurrentBrowseUiState();
    if (!state) return;
    var includeSearch = !(options && options.includeSearch === false);
    if (!includeSearch) {
        state.searchQuery = '';
        state.searchCategory = 'all';
    }
    persistedBrowseUiState = state;
    writeStorageJson(BROWSE_UI_STORAGE_KEY, state);
}

function updateBrowseUrlState(options) {
    var includeSearch = Boolean(options && options.includeSearch);
    var url = new URL(window.location.href);
    var params = url.searchParams;
    ['cat', 'deals', 'price', 'cond', 'brand', 'min', 'max', 'q', 'sc'].forEach(function (key) {
        params.delete(key);
    });

    if (currentFilters.category && currentFilters.category !== 'all') params.set('cat', currentFilters.category);
    if (currentFilters.dailyDealsOnly) params.set('deals', '1');

    var priceValues = getCheckedValues('.filter-option input[type="checkbox"][id^="price"]:checked');
    if (priceValues.length > 0) params.set('price', priceValues.join(','));

    var conditionValues = getCheckedValues('.filter-option input[type="checkbox"][id^="condition"]:checked');
    if (!(conditionValues.length === 1 && conditionValues[0] === 'new') && conditionValues.length > 0) {
        params.set('cond', conditionValues.join(','));
    }

    var brandValues = getCheckedValues('.filter-option input[type="checkbox"][id^="brand"]:checked');
    if (brandValues.length > 0) params.set('brand', brandValues.join(','));

    var minPrice = String((document.getElementById('minPrice') || {}).value || '').trim();
    var maxPrice = String((document.getElementById('maxPrice') || {}).value || '').trim();
    if (minPrice) params.set('min', minPrice);
    if (maxPrice) params.set('max', maxPrice);

    if (includeSearch) {
        var query = String((document.getElementById('searchInput') || {}).value || '').trim();
        var searchCategory = getSelectedSearchCategory();
        if (query) params.set('q', query);
        if (searchCategory && searchCategory !== 'all') params.set('sc', searchCategory);
    }

    window.history.replaceState(window.history.state, '', url.toString());
    persistBrowseUiState({ includeSearch: includeSearch });
}

function setupEventListeners() {
    if (typeof bindNavAccountEvents === 'function') {
        bindNavAccountEvents();
    }
    if (typeof bindAuthOverlayEvents === 'function') {
        bindAuthOverlayEvents();
    }

    if (typeof bindSearchAndCategoryEvents === 'function') {
        bindSearchAndCategoryEvents();
    }
    if (typeof bindModalUiEvents === 'function') {
        bindModalUiEvents();
    }
    if (typeof bindAdminPanelEvents === 'function') {
        bindAdminPanelEvents();
    }
    if (typeof bindAppKeyboardEvents === 'function') {
        bindAppKeyboardEvents();
    }
    if (typeof bindFilterUiEvents === 'function') {
        bindFilterUiEvents();
    }
    if (typeof bindPrimaryActionEvents === 'function') {
        bindPrimaryActionEvents();
    }
    if (typeof bindCartAdminControls === 'function') {
        bindCartAdminControls();
    }
    if (typeof bindProductListEvents === 'function') {
        bindProductListEvents();
    }
    if (typeof bindAdminDynamicEvents === 'function') {
        bindAdminDynamicEvents();
    }
    if (typeof bindInlineReplacementEvents === 'function') {
        bindInlineReplacementEvents();
    }

}

function showWishlistProducts() {
    if (!Array.isArray(wishlist) || wishlist.length === 0) {
        showToast('Your watchlist is empty');
        return;
    }

    filteredProducts = products.filter(function (product) {
        return wishlist.includes(product.id);
    });
    currentPage = 1;
    sortProducts();
    scrollToResultsSection();
    showToast('Showing watchlist');
}

function getHeroSlides() {
    var carousel = document.getElementById('heroCarousel');
    if (!carousel) return [];
    return carousel.querySelectorAll('.hero-slide');
}

function initHeroCarousel() {
    var carousel = document.getElementById('heroCarousel');
    var slides = getHeroSlides();
    if (!carousel || !slides.length) return;

    var dotsContainer = document.getElementById('heroDots');
    if (dotsContainer) {
        var dotsHtml = '';
        slides.forEach(function (_, index) {
            dotsHtml += '<button class="hero-dot' + (index === 0 ? ' active' : '') + '" type="button" data-index="' + index + '" aria-label="Go to slide ' + (index + 1) + '"></button>';
        });
        dotsContainer.innerHTML = dotsHtml;
        dotsContainer.addEventListener('click', function (e) {
            var dot = e.target.closest('.hero-dot');
            if (!dot) return;
            var index = Number(dot.dataset.index);
            if (isNaN(index)) return;
            goToHeroSlide(index);
            resetHeroCarouselAutoplay();
        });
    }

    if (slides.length < 2) {
        var navButtons = carousel.querySelectorAll('.hero-nav-btn');
        navButtons.forEach(function (button) {
            button.style.display = 'none';
        });
    }

    // Removal of interactive stop/start listeners in favor of Persistent Heartbeat.
    // The heartbeat loop handles hover/focus pausing internally without killing the cycle.
    carousel.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            moveHeroSlide(-1);
        } else if (e.key === 'ArrowRight') {
            moveHeroSlide(1);
        }
    });

    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            stopHeroCarouselAutoplay();
            stopProductCardImageRotation();
            stopModalCarouselAutoplay();
        } else {
            // Heartbeat resume: Refresh the rhythm with a clean 600ms safety window.
            heroCarouselTimer = setTimeout(function () {
                startHeroCarouselAutoplay();
            }, 600);
            productCardRotateTimer = setTimeout(function () {
                startProductCardImageRotation();
            }, 610);
            if (document.getElementById('productModal').classList.contains('open')) {
                stopModalCarouselAutoplay();
            }
        }
    });

    showHeroSlide(0);
    startHeroCarouselAutoplay(true);
}

function showHeroSlide(index) {
    var slides = getHeroSlides();
    if (!slides.length) return;

    heroCarouselIndex = (index + slides.length) % slides.length;
    slides.forEach(function (slide, slideIndex) {
        var isActive = slideIndex === heroCarouselIndex;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });

    document.querySelectorAll('.hero-dot').forEach(function (dot, dotIndex) {
        dot.classList.toggle('active', dotIndex === heroCarouselIndex);
    });
}

function goToHeroSlide(index) {
    showHeroSlide(index);
}

function moveHeroSlide(direction) {
    showHeroSlide(heroCarouselIndex + direction);
    resetHeroCarouselAutoplay();
}

function startHeroCarouselAutoplay() {
    var slides = getHeroSlides();
    if (!slides.length || slides.length < 2) return;

    stopHeroCarouselAutoplay();
    heroCarouselTimer = setTimeout(function () {
        var isHidden = document.hidden;

        // Persistence: Unstoppable rotation (Pointer Immunity).
        // The Hero Carousel is now 100% independent and ignores pointer location.
        // It only pauses if the tab is hidden to save system resources.
        if (!isHidden) {
            showHeroSlide(heroCarouselIndex + 1);
        }

        startHeroCarouselAutoplay();
    }, heroCarouselDelay);
}

function stopHeroCarouselAutoplay() {
    if (heroCarouselTimer) {
        clearTimeout(heroCarouselTimer);
        heroCarouselTimer = null;
    }
}

function resetHeroCarouselAutoplay() {
    stopHeroCarouselAutoplay();
    // Tracking this timeout prevents it from colliding with a new loop.
    heroCarouselTimer = setTimeout(function () {
        startHeroCarouselAutoplay();
    }, 50);
}

function getCloudSyncBaseUrl() {
    if (!cloudSyncConfig || typeof cloudSyncConfig !== 'object') return '';
    var base = String(cloudSyncConfig.apiBaseUrl || '').trim();
    if (!base) return '';
    return base.replace(/\/+$/, '');
}

function isCloudSyncEnabled() {
    var base = getCloudSyncBaseUrl();
    if (!base) return false;
    if (typeof fetch !== 'function') return false;
    if (cloudSyncConfig && cloudSyncConfig.enabled === false) return false;
    return true;
}

function shouldApplyLocalProductState() {
    if (!cloudSyncConfig || typeof cloudSyncConfig !== 'object') return false;
    if (!Object.prototype.hasOwnProperty.call(cloudSyncConfig, 'allowLocalProductOverrides')) return false;
    return Boolean(cloudSyncConfig.allowLocalProductOverrides);
}

function getCloudSyncRequestHeaders(extraHeaders) {
    var headers = {
        'Content-Type': 'application/json'
    };
    if (cloudSyncConfig && typeof cloudSyncConfig === 'object') {
        var apiKey = String(cloudSyncConfig.apiKey || '').trim();
        if (apiKey) headers['x-api-key'] = apiKey;
    }
    if (extraHeaders && typeof extraHeaders === 'object') {
        Object.keys(extraHeaders).forEach(function (key) {
            if (!key) return;
            var value = extraHeaders[key];
            if (value === undefined || value === null || value === '') return;
            headers[key] = String(value);
        });
    }
    return headers;
}

function normalizeCloudEmail(value) {
    if (typeof normalizeAuthEmail === 'function') return normalizeAuthEmail(value);
    return String(value || '').trim().toLowerCase();
}

function sanitizeCloudUserIdSegment(value) {
    return String(value || '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9._:@-]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 180);
}

function readCloudAnonUserId() {
    try {
        var stored = localStorage.getItem(CLOUD_ANON_USER_ID_KEY);
        var normalized = sanitizeCloudUserIdSegment(stored);
        return normalized || '';
    } catch (error) {
        return '';
    }
}

function writeCloudAnonUserId(value) {
    var normalized = sanitizeCloudUserIdSegment(value);
    if (!normalized) return '';
    try {
        localStorage.setItem(CLOUD_ANON_USER_ID_KEY, normalized);
    } catch (error) { }
    return normalized;
}

function createCloudAnonUserId() {
    return sanitizeCloudUserIdSegment(
        'anon-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10)
    );
}

function getOrCreateCloudAnonUserId() {
    var existing = readCloudAnonUserId();
    if (existing) return existing;
    return writeCloudAnonUserId(createCloudAnonUserId());
}

function getCurrentCloudUserId() {
    if (currentUser && currentUser.email) {
        var email = sanitizeCloudUserIdSegment(normalizeCloudEmail(currentUser.email));
        if (email) return 'user:' + email;
    }
    var anon = getOrCreateCloudAnonUserId();
    if (anon) return 'anon:' + anon;
    return 'anon:guest';
}

function getCloudUserScopeHeaders(userId) {
    return {
        'x-ig-user-id': String(userId || getCurrentCloudUserId() || 'anon:guest')
    };
}

function extractCloudStateData(payload) {
    if (!payload || typeof payload !== 'object') return null;
    var data = payload.data && typeof payload.data === 'object'
        ? payload.data
        : payload;
    return data && typeof data === 'object' ? data : null;
}

function getPersistableGlobalCloudState() {
    return {
        products: products,
        customCategories: customCategories,
        removedCategoryValues: removedCategoryValues,
        users: users
    };
}

function getPersistableUserCloudState() {
    var browseUiState = persistedBrowseUiState || getCurrentBrowseUiState();
    if (browseUiState) persistedBrowseUiState = browseUiState;
    return {
        cart: cart,
        wishlist: wishlist,
        orders: orders,
        ui: {
            browse: browseUiState || null
        }
    };
}

function resetUserScopedState() {
    cart = [];
    wishlist = [];
    orders = [];
    persistedBrowseUiState = null;
}

async function cloudSyncFetchJson(path, options) {
    if (!isCloudSyncEnabled()) return null;
    var method = (options && options.method) ? String(options.method).toUpperCase() : 'GET';
    var body = options && options.body ? options.body : null;
    var extraHeaders = options && options.headers && typeof options.headers === 'object'
        ? options.headers
        : null;
    var url = getCloudSyncBaseUrl() + path;
    var timeoutMs = Number(cloudSyncConfig.timeoutMs);
    if (!isFinite(timeoutMs) || timeoutMs <= 0) timeoutMs = CLOUD_SYNC_REQUEST_TIMEOUT_MS;

    var controller = null;
    var timeoutId = null;
    if (typeof AbortController === 'function') {
        controller = new AbortController();
        timeoutId = setTimeout(function () {
            controller.abort();
        }, timeoutMs);
    }

    try {
        var requestInit = {
            method: method,
            headers: getCloudSyncRequestHeaders(extraHeaders),
            signal: controller ? controller.signal : undefined
        };
        if (body && method !== 'GET' && method !== 'HEAD') {
            requestInit.body = body;
        }
        var response = await fetch(url, {
            method: requestInit.method,
            headers: requestInit.headers,
            body: requestInit.body,
            signal: requestInit.signal
        });
        var text = await response.text();
        var payload = text ? JSON.parse(text) : null;
        if (!response.ok) {
            var message = payload && payload.message ? String(payload.message) : ('Cloud request failed (' + response.status + ')');
            throw new Error(message);
        }
        return payload;
    } finally {
        if (timeoutId) clearTimeout(timeoutId);
    }
}

function queueCloudStateSync() {
    if (!isCloudSyncEnabled()) return;
    cloudSyncPending = true;
    if (!cloudBootstrapCompleted) return;
    if (cloudSyncTimer) {
        clearTimeout(cloudSyncTimer);
        cloudSyncTimer = null;
    }
    cloudSyncTimer = setTimeout(function () {
        syncStateToCloud();
    }, CLOUD_SYNC_DEBOUNCE_MS);
}

async function syncGlobalStateToCloud() {
    await cloudSyncFetchJson('/state/global', {
        method: 'PUT',
        body: JSON.stringify({
            version: APP_STATE_SCHEMA_VERSION,
            updatedAt: new Date().toISOString(),
            data: getPersistableGlobalCloudState()
        })
    });
}

async function syncUserStateToCloud(userId) {
    await cloudSyncFetchJson('/state/user', {
        method: 'PUT',
        headers: getCloudUserScopeHeaders(userId),
        body: JSON.stringify({
            version: APP_STATE_SCHEMA_VERSION,
            updatedAt: new Date().toISOString(),
            data: getPersistableUserCloudState()
        })
    });
}

async function syncStateToCloud() {
    if (!isCloudSyncEnabled()) return;
    if (cloudSyncInFlight) {
        cloudSyncPending = true;
        return;
    }
    cloudSyncInFlight = true;
    cloudSyncPending = false;
    try {
        var userId = getCurrentCloudUserId();
        await syncGlobalStateToCloud();
        await syncUserStateToCloud(userId);
    } catch (error) {
        console.warn('Cloud state sync failed:', error);
    } finally {
        cloudSyncInFlight = false;
        if (cloudSyncPending) queueCloudStateSync();
    }
}

function refreshUiAfterCloudStateLoad() {
    filteredProducts = products.slice();
    renderCategoryUI();
    buildSearchTerms();
    applyFilters({ skipUrlSync: true });
    renderProducts();
    updateCartUI();
    updateAuthUI();
    if (document.getElementById('cartPanel') && document.getElementById('cartPanel').classList.contains('open')) {
        renderCart();
    }
    renderAdminPanel();
}

async function hydrateUserStateFromCloud(options) {
    if (!isCloudSyncEnabled()) return false;
    var userId = options && options.userId ? String(options.userId) : getCurrentCloudUserId();
    var resetOnMissing = Boolean(options && options.resetOnMissing);
    try {
        var payload = await cloudSyncFetchJson('/state/user', {
            method: 'GET',
            headers: getCloudUserScopeHeaders(userId)
        });
        var stateData = extractCloudStateData(payload);
        if (stateData) {
            var applied = applyPersistedStateData(stateData, { source: 'cloud' });
            if (applied) {
                refreshUiAfterCloudStateLoad();
                saveToStorage({ skipCloudSync: true });
                return true;
            }
        }
    } catch (error) {
        console.warn('Cloud user-state load failed:', error);
    }

    if (resetOnMissing) {
        resetUserScopedState();
        refreshUiAfterCloudStateLoad();
        saveToStorage({ skipCloudSync: true });
    }
    return false;
}

function handleCloudIdentityChange() {
    if (!isCloudSyncEnabled()) return;
    if (!cloudBootstrapCompleted) {
        if (cloudIdentityChangeRetryTimer) return;
        cloudIdentityChangeRetryTimer = setTimeout(function () {
            cloudIdentityChangeRetryTimer = null;
            handleCloudIdentityChange();
        }, 160);
        return;
    }
    if (cloudIdentityRefreshInFlight) return;

    cloudIdentityRefreshInFlight = true;
    hydrateUserStateFromCloud({ resetOnMissing: true })
        .then(function (loaded) {
            if (!loaded) queueCloudStateSync();
        })
        .catch(function (error) {
            console.warn('Cloud identity change sync failed:', error);
        })
        .finally(function () {
            cloudIdentityRefreshInFlight = false;
        });
}

async function hydrateStateFromCloud() {
    if (cloudBootstrapAttempted) return false;
    cloudBootstrapAttempted = true;
    if (!isCloudSyncEnabled()) {
        cloudBootstrapCompleted = true;
        return false;
    }

    try {
        var applied = false;

        var globalPayload = await cloudSyncFetchJson('/state/global', { method: 'GET' });
        var globalData = extractCloudStateData(globalPayload);
        if (globalData) {
            applied = applyPersistedStateData(globalData, { source: 'cloud' }) || applied;
        }

        var userPayload = await cloudSyncFetchJson('/state/user', {
            method: 'GET',
            headers: getCloudUserScopeHeaders()
        });
        var userData = extractCloudStateData(userPayload);
        if (userData) {
            applied = applyPersistedStateData(userData, { source: 'cloud' }) || applied;
        }

        if (!applied) return false;
        refreshUiAfterCloudStateLoad();
        saveToStorage({ skipCloudSync: true });
        return true;
    } catch (error) {
        console.warn('Cloud bootstrap failed. Falling back to local state.', error);
        return false;
    } finally {
        cloudBootstrapCompleted = true;
        if (cloudSyncPending) queueCloudStateSync();
    }
}

function readStorageJson(key) {
    try {
        var raw = localStorage.getItem(key);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

function isStorageQuotaError(error) {
    if (!error) return false;
    var name = String(error.name || '').toLowerCase();
    var code = Number(error.code);
    return name === 'quotaexceedederror' || name === 'nserror_dom_quota_reached' || code === 22 || code === 1014;
}

function clearLegacyAppStateKeys() {
    LEGACY_APP_STATE_KEYS.forEach(function (key) {
        removeStorageKey(key);
    });
}

function maybeShowStoragePersistWarning() {
    if (hasShownStoragePersistWarning) return;
    hasShownStoragePersistWarning = true;
    showToast('Storage is full. Recent changes may not persist.');
}

function writeStorageJson(key, value, options) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        var suppressQuotaWarning = Boolean(options && options.suppressQuotaWarning);
        if (isStorageQuotaError(e) && !suppressQuotaWarning) maybeShowStoragePersistWarning();
        return false;
    }
}

function readSessionJson(key) {
    try {
        var raw = sessionStorage.getItem(key);
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

function writeSessionJson(key, value) {
    try {
        sessionStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        return false;
    }
}

function writeStorageJsonWithSessionFallback(key, value) {
    var localSaved = writeStorageJson(key, value, { suppressQuotaWarning: true });
    var sessionSaved = writeSessionJson(key, value);
    if (!localSaved && !sessionSaved) maybeShowStoragePersistWarning();
    return {
        localSaved: localSaved,
        sessionSaved: sessionSaved
    };
}

function removeStorageKey(key) {
    try {
        localStorage.removeItem(key);
    } catch (e) { }
}

function removeSessionKey(key) {
    try {
        sessionStorage.removeItem(key);
    } catch (e) { }
}

function applyPersistedStateData(data, options) {
    if (!data || typeof data !== 'object') return false;
    var source = options && options.source ? String(options.source).toLowerCase() : '';
    var allowProductState = source === 'local' ? shouldApplyLocalProductState() : true;
    var loadedAny = false;

    if (Array.isArray(data.cart)) {
        cart = data.cart;
        loadedAny = true;
    }
    if (Array.isArray(data.wishlist)) {
        wishlist = data.wishlist;
        loadedAny = true;
    }

    if (allowProductState && Array.isArray(data.products) && data.products.length > 0) {
        products = data.products.map(normalizeProduct);
        loadedAny = true;
    }

    if (Array.isArray(data.orders)) {
        orders = data.orders;
        loadedAny = true;
    }

    if (Array.isArray(data.customCategories)) {
        customCategories = data.customCategories.filter(function (item) {
            return item && item.value && item.label;
        });
        loadedAny = true;
    }

    if (Array.isArray(data.removedCategoryValues)) {
        removedCategoryValues = data.removedCategoryValues
            .map(function (value) { return String(value || '').trim(); })
            .filter(function (value) { return value.length > 0; });
        loadedAny = true;
    }

    if (Array.isArray(data.users)) {
        users = data.users
            .filter(function (item) {
                return item && item.email && item.password;
            })
            .map(function (item) {
                return {
                    name: String(item.name || '').trim() || getDisplayName('', item.email),
                    email: normalizeAuthEmail(item.email),
                    password: String(item.password),
                    role: normalizeUserRole(item.role)
                };
            });
        loadedAny = true;
    }

    if (data.currentUser && data.currentUser.email) {
        currentUser = {
            name: String(data.currentUser.name || '').trim() || getDisplayName('', data.currentUser.email),
            email: normalizeAuthEmail(data.currentUser.email),
            role: normalizeUserRole(data.currentUser.role)
        };
        loadedAny = true;
    } else if (data.currentUser === null) {
        currentUser = null;
        loadedAny = true;
    }

    if (data.ui && data.ui.browse) {
        var browseUi = sanitizeBrowseUiState(data.ui.browse);
        if (browseUi) {
            persistedBrowseUiState = browseUi;
        }
    }

    ensureAtLeastOneAdminUser();
    if (currentUser && !currentUser.role) {
        var linkedUser = users.find(function (item) { return item.email === currentUser.email; });
        currentUser.role = linkedUser ? normalizeUserRole(linkedUser.role) : USER_ROLE_CUSTOMER;
    }

    return loadedAny;
}

function getPersistableAppState() {
    var browseUiState = persistedBrowseUiState || getCurrentBrowseUiState();
    if (browseUiState) persistedBrowseUiState = browseUiState;
    return {
        cart: cart,
        wishlist: wishlist,
        products: products,
        orders: orders,
        customCategories: customCategories,
        removedCategoryValues: removedCategoryValues,
        users: users,
        // Auth session is stored separately (session/persistent keys), not in app snapshot.
        currentUser: null,
        ui: {
            browse: browseUiState || null
        }
    };
}

function loadFromStorage() {
    var didLoad = false;
    var appState = readStorageJson(APP_STATE_STORAGE_KEY);

    if (appState && typeof appState === 'object') {
        var stateData = appState.data && typeof appState.data === 'object'
            ? appState.data
            : appState;
        didLoad = applyPersistedStateData(stateData, { source: 'local' });
    }

    if (!didLoad) {
        didLoad = applyPersistedStateData({
            cart: readStorageJson('ig_cart'),
            wishlist: readStorageJson('ig_wishlist'),
            products: readStorageJson('ig_products'),
            orders: readStorageJson('ig_orders'),
            customCategories: readStorageJson('ig_categories'),
            removedCategoryValues: readStorageJson('ig_removed_categories'),
            users: readStorageJson('ig_users'),
            currentUser: readStorageJson('ig_current_user')
        }, { source: 'local' });
    }

    if (!persistedBrowseUiState) {
        var legacyBrowseUi = sanitizeBrowseUiState(readStorageJson(BROWSE_UI_STORAGE_KEY));
        if (legacyBrowseUi) persistedBrowseUiState = legacyBrowseUi;
    }

    // Restore auth from session by default, or from persistent storage when
    // "Keep me signed in" was selected.
    var sessionUser = readSessionJson(SESSION_CURRENT_USER_KEY);
    var persistentUser = readStorageJson(PERSISTENT_CURRENT_USER_KEY);
    if (sessionUser && sessionUser.email) {
        currentUser = {
            name: String(sessionUser.name || '').trim() || getDisplayName('', sessionUser.email),
            email: normalizeAuthEmail(sessionUser.email),
            role: normalizeUserRole(sessionUser.role)
        };
        persistLoginAcrossSessions = Boolean(
            persistentUser &&
            persistentUser.email &&
            normalizeAuthEmail(persistentUser.email) === normalizeAuthEmail(sessionUser.email)
        );
    } else if (persistentUser && persistentUser.email) {
        currentUser = {
            name: String(persistentUser.name || '').trim() || getDisplayName('', persistentUser.email),
            email: normalizeAuthEmail(persistentUser.email),
            role: normalizeUserRole(persistentUser.role)
        };
        persistLoginAcrossSessions = true;
    } else {
        currentUser = null;
        persistLoginAcrossSessions = false;
    }
    // Clean up old legacy auth key.
    removeStorageKey('ig_current_user');

    updateCartUI();
    updateAuthUI();
}

function saveToStorage(options) {
    var appState = {
        version: APP_STATE_SCHEMA_VERSION,
        updatedAt: new Date().toISOString(),
        data: getPersistableAppState()
    };

    var appStateSaved = writeStorageJson(APP_STATE_STORAGE_KEY, appState);
    // Old keys duplicate large payloads and can push localStorage over quota.
    // Keep migration read path only; do not keep rewriting legacy snapshots.
    clearLegacyAppStateKeys();
    if (!appStateSaved) {
        appStateSaved = writeStorageJson(APP_STATE_STORAGE_KEY, appState);
        if (!appStateSaved) maybeShowStoragePersistWarning();
    }
    // Legacy key intentionally cleared.
    removeStorageKey('ig_current_user');
    if (currentUser && currentUser.email) {
        var authUserPayload = {
            name: String(currentUser.name || '').trim() || getDisplayName('', currentUser.email),
            email: normalizeAuthEmail(currentUser.email),
            role: normalizeUserRole(currentUser.role)
        };
        writeSessionJson(SESSION_CURRENT_USER_KEY, authUserPayload);
        if (persistLoginAcrossSessions) {
            writeStorageJson(PERSISTENT_CURRENT_USER_KEY, authUserPayload);
        } else {
            removeStorageKey(PERSISTENT_CURRENT_USER_KEY);
        }
    } else {
        removeSessionKey(SESSION_CURRENT_USER_KEY);
        removeStorageKey(PERSISTENT_CURRENT_USER_KEY);
    }
    if (persistedBrowseUiState) {
        writeStorageJson(BROWSE_UI_STORAGE_KEY, persistedBrowseUiState);
    }
    if (!(options && options.skipCloudSync)) {
        queueCloudStateSync();
    }
}

function slugifyCategory(name) {
    return String(name || '')
        .trim()
        .toLowerCase()
        .replace(/&/g, ' and ')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .replace(/-+/g, '-');
}

function getAllCategories() {
    var map = {};
    Object.keys(categoryLabels).forEach(function (value) {
        if (removedCategoryValues.includes(value)) return;
        map[value] = categoryLabels[value];
    });
    customCategories.forEach(function (item) {
        map[item.value] = item.label;
    });
    products.forEach(function (product) {
        if (!product || !product.category) return;
        if (!map[product.category]) {
            map[product.category] = toTitleCase(product.category.replace(/-/g, ' '));
        }
    });
    return map;
}

function getOrderedCategoryValues(categoryMap) {
    var preferred = ['electronics', 'fashion', 'home', 'sports', 'wearable', 'toys', 'collectibles', 'automotive'];
    var values = [];
    preferred.forEach(function (value) {
        if (categoryMap[value]) values.push(value);
    });
    customCategories.forEach(function (item) {
        if (categoryMap[item.value] && !values.includes(item.value)) values.push(item.value);
    });
    Object.keys(categoryMap).sort().forEach(function (value) {
        if (!values.includes(value)) values.push(value);
    });
    return values;
}

function renderCategoryUI() {
    var categoryMap = getAllCategories();
    var ordered = getOrderedCategoryValues(categoryMap);
    if (currentFilters.category !== 'all' && !categoryMap[currentFilters.category]) {
        currentFilters.category = 'all';
    }

    renderHeaderCategories(ordered, categoryMap);
    renderSearchCategories(ordered, categoryMap);
    renderAdminCategorySelect(ordered, categoryMap);
    renderAdminCategoryList(ordered, categoryMap);
    renderFooterCategories(ordered, categoryMap);
}

function renderHeaderCategories(ordered, categoryMap) {
    var container = document.getElementById('categoriesList');
    if (!container) return;
    var html = '<div class="category-item' + (currentFilters.category === 'all' ? ' active' : '') + '" data-category="all">All</div>';
    ordered.forEach(function (value) {
        html += '<div class="category-item' + (currentFilters.category === value ? ' active' : '') + '" data-category="' + value + '">' + escapeHtml(categoryMap[value]) + '</div>';
    });
    container.innerHTML = html;
}

function renderSearchCategories(ordered, categoryMap) {
    var searchSelect = document.getElementById('searchCategory');
    if (!searchSelect) return;
    var previous = searchSelect.value || 'all';
    var html = '<option value="all">All Categories</option>';
    ordered.forEach(function (value) {
        html += '<option value="' + value + '">' + escapeHtml(categoryMap[value]) + '</option>';
    });
    searchSelect.innerHTML = html;
    searchSelect.value = ordered.includes(previous) || previous === 'all' ? previous : 'all';
}

function renderAdminCategorySelect(ordered, categoryMap) {
    var select = document.getElementById('adminCategory');
    if (!select) return;
    var previous = select.value;
    var html = '';
    ordered.forEach(function (value) {
        html += '<option value="' + value + '">' + escapeHtml(categoryMap[value]) + '</option>';
    });
    select.innerHTML = html;
    if (previous && ordered.includes(previous)) {
        select.value = previous;
    }
}

function renderAdminCategoryList(ordered, categoryMap) {
    var container = document.getElementById('adminCategoryList');
    if (!container) return;
    var html = '<div class="admin-category-list">';
    ordered.forEach(function (value) {
        var inUse = products.some(function (product) { return product.category === value; });
        var canDelete = !inUse;
        html += '<div class="admin-category-item">';
        html += '<span>' + escapeHtml(categoryMap[value]) + '</span>';
        html += canDelete
            ? '<button type="button" data-admin-category-action="delete" data-category-value="' + escapeHtml(value) + '">Delete</button>'
            : '<button type="button" disabled title="Category in use">Used</button>';
        html += '</div>';
    });
    html += '</div>';
    container.innerHTML = html;
}

function renderFooterCategories(ordered, categoryMap) {
    var container = document.getElementById('footerCategoryLinks');
    if (!container) return;

    var html = '<a href="#" class="footer-category-link" data-category="all">All Categories</a>';
    ordered.forEach(function (value) {
        html += '<a href="#" class="footer-category-link" data-category="' + escapeHtml(value) + '">' + escapeHtml(categoryMap[value]) + '</a>';
    });
    container.innerHTML = html;
}

function sanitizeModalSelectionByColorMap(map) {
    if (!map || typeof map !== 'object') return null;
    var normalized = {};
    Object.keys(map).forEach(function (colorKey) {
        var key = String(colorKey || '').trim().toLowerCase();
        if (!key) return;
        var idx = Number(map[colorKey]);
        if (!isFinite(idx)) return;
        normalized[key] = Math.max(0, Math.floor(idx));
    });
    return Object.keys(normalized).length > 0 ? normalized : null;
}

function sanitizeModalImageByColorMap(map) {
    if (!map || typeof map !== 'object') return null;
    var normalized = {};
    Object.keys(map).forEach(function (colorKey) {
        var key = String(colorKey || '').trim().toLowerCase();
        if (!key) return;
        var url = String(map[colorKey] || '').trim();
        if (!url) return;
        normalized[key] = url;
    });
    return Object.keys(normalized).length > 0 ? normalized : null;
}

function sanitizeSpecialColorSampleMap(map) {
    if (!map || typeof map !== 'object') return null;
    var normalized = {};
    Object.keys(map).forEach(function (colorKey) {
        var key = String(colorKey || '').trim().toLowerCase();
        if (!key) return;
        var hex = String(map[colorKey] || '').trim();
        if (!/^#[0-9a-fA-F]{6}$/.test(hex)) return;
        normalized[key] = hex.toUpperCase();
    });
    return Object.keys(normalized).length > 0 ? normalized : null;
}

function normalizeProduct(product) {
    var safeProduct = product || {};
    var normalizedImages = safeProduct.images && Object.keys(safeProduct.images).length > 0
        ? safeProduct.images
        : { Default: 'https://via.placeholder.com/600?text=Product' };
    var normalizedMediaByColor = null;
    if (safeProduct.mediaByColor && typeof safeProduct.mediaByColor === 'object') {
        normalizedMediaByColor = {};
        Object.keys(safeProduct.mediaByColor).forEach(function (color) {
            var value = safeProduct.mediaByColor[color];
            if (Array.isArray(value)) {
                normalizedMediaByColor[color] = value.filter(function (url) { return !!url; });
            } else if (typeof value === 'string' && value.trim()) {
                normalizedMediaByColor[color] = [value.trim()];
            }
        });
        if (Object.keys(normalizedMediaByColor).length === 0) {
            normalizedMediaByColor = null;
        }
    }
    if (!normalizedMediaByColor) {
        normalizedMediaByColor = getDemoMediaByColorById(Number(safeProduct.id)) || null;
    }

    var normalizedMainImagesByColor = null;
    if (safeProduct.mainImagesByColor && typeof safeProduct.mainImagesByColor === 'object') {
        normalizedMainImagesByColor = {};
        Object.keys(safeProduct.mainImagesByColor).forEach(function (color) {
            var value = safeProduct.mainImagesByColor[color];
            if (Array.isArray(value)) {
                normalizedMainImagesByColor[color] = value.filter(function (url) { return !!url; });
            }
        });
        if (Object.keys(normalizedMainImagesByColor).length === 0) {
            normalizedMainImagesByColor = null;
        }
    }
    var normalizedOptions = safeProduct.options && Object.keys(safeProduct.options).length > 0
        ? safeProduct.options
        : null;
    var normalizedDailyDeal = typeof safeProduct.dailyDeal === 'boolean'
        ? safeProduct.dailyDeal
        : safeProduct.badge === 'sale';
    var normalizedColorHexByName = null;
    if (safeProduct.colorHexByName && typeof safeProduct.colorHexByName === 'object') {
        normalizedColorHexByName = {};
        Object.keys(safeProduct.colorHexByName).forEach(function (colorName) {
            var hex = String(safeProduct.colorHexByName[colorName] || '').trim();
            if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
                normalizedColorHexByName[colorName] = hex.toLowerCase();
            }
        });
        if (Object.keys(normalizedColorHexByName).length === 0) {
            normalizedColorHexByName = null;
        }
    }
    var normalizedColorStyleByName = null;
    if (safeProduct.colorStyleByName && typeof safeProduct.colorStyleByName === 'object') {
        normalizedColorStyleByName = {};
        Object.keys(safeProduct.colorStyleByName).forEach(function (colorName) {
            var style = sanitizeColorStyleConfig(safeProduct.colorStyleByName[colorName]);
            if (style) normalizedColorStyleByName[colorName] = style;
        });
        if (Object.keys(normalizedColorStyleByName).length === 0) {
            normalizedColorStyleByName = null;
        }
    }
    var normalizedSpecialColorPicker = typeof safeProduct.specialColorPicker === 'boolean'
        ? safeProduct.specialColorPicker
        : null;

    // v13: Image Deletion Integrity
    // Build a master pool of all valid URLs from core media sources to prune ghosts from swatches.
    var validImagePool = [];
    var poolSeen = new Set();
    var addToPool = function (u) {
        if (u && typeof u === 'string' && !poolSeen.has(u)) {
            validImagePool.push(u);
            poolSeen.add(u);
        }
    };
    if (normalizedImages) Object.keys(normalizedImages).forEach(function (k) { addToPool(normalizedImages[k]); });
    if (normalizedMediaByColor) Object.keys(normalizedMediaByColor).forEach(function (k) {
        if (Array.isArray(normalizedMediaByColor[k])) normalizedMediaByColor[k].forEach(addToPool);
    });
    if (normalizedMainImagesByColor) Object.keys(normalizedMainImagesByColor).forEach(function (k) {
        if (Array.isArray(normalizedMainImagesByColor[k])) normalizedMainImagesByColor[k].forEach(addToPool);
    });

    var normalizedSpecialColorSwatches = sanitizeSpecialColorSwatchMap(safeProduct.specialColorSwatches, validImagePool);
    var normalizedSpecialColorLastColor = typeof safeProduct.specialColorLastColor === 'string'
        ? String(safeProduct.specialColorLastColor).trim()
        : '';
    var normalizedSpecialColorSampleByColor = sanitizeSpecialColorSampleMap(safeProduct.specialColorSampleByColor);
    var normalizedModalLastColor = typeof safeProduct.modalLastColor === 'string'
        ? String(safeProduct.modalLastColor).trim()
        : '';
    var normalizedModalSelectionByColor = sanitizeModalSelectionByColorMap(safeProduct.modalSelectionByColor);
    var normalizedModalImageByColor = sanitizeModalImageByColorMap(safeProduct.modalImageByColor);
    var normalizedModalLastImage = typeof safeProduct.modalLastImage === 'string'
        ? String(safeProduct.modalLastImage).trim()
        : '';
    var normalizedModalLastIndex = safeProduct.modalLastIndex === null || typeof safeProduct.modalLastIndex === 'undefined'
        ? null
        : (Number.isFinite(Number(safeProduct.modalLastIndex))
            ? Math.max(0, Math.floor(Number(safeProduct.modalLastIndex)))
            : null);
    var hasExplicitColorOptions = safeProduct.options
        && Array.isArray(safeProduct.options.Color)
        && safeProduct.options.Color.length > 0;

    if (!normalizedOptions && normalizedMediaByColor) {
        normalizedOptions = { Color: Object.keys(normalizedMediaByColor) };
    } else if (normalizedOptions && !normalizedOptions.Color && normalizedMediaByColor) {
        normalizedOptions.Color = Object.keys(normalizedMediaByColor);
    }

    if (normalizedOptions && normalizedOptions.Color) {
        normalizedOptions.Color = sanitizeAdminList(
            Array.isArray(normalizedOptions.Color) ? normalizedOptions.Color : [normalizedOptions.Color],
            30,
            40
        );
        if (normalizedOptions.Color.length === 0) {
            delete normalizedOptions.Color;
        }
    }

    if (normalizedOptions && normalizedOptions.Color && !hasExplicitColorOptions) {
        var colorSet = new Set();
        normalizedOptions.Color.forEach(function (color) { colorSet.add(color); });
        Object.keys(normalizedImages || {}).forEach(function (color) { colorSet.add(color); });
        Object.keys(normalizedMediaByColor || {}).forEach(function (color) { colorSet.add(color); });
        normalizedOptions.Color = Array.from(colorSet);
    }

    if (normalizedOptions && normalizedOptions.Color && Array.isArray(normalizedOptions.Color)) {
        normalizedOptions.Color.forEach(function (color) {
            if (!normalizedImages[color] && normalizedMediaByColor && normalizedMediaByColor[color] && normalizedMediaByColor[color][0]) {
                normalizedImages[color] = normalizedMediaByColor[color][0];
            }
            if (!normalizedMediaByColor) {
                normalizedMediaByColor = {};
            }
            if (!normalizedMediaByColor[color] || normalizedMediaByColor[color].length === 0) {
                if (normalizedImages[color]) {
                    normalizedMediaByColor[color] = [normalizedImages[color]];
                }
            }
        });
        if (Object.keys(normalizedMediaByColor).length === 0) {
            normalizedMediaByColor = null;
        }
    }

    var normalizedVideo = null;
    if (safeProduct.videoDisabled) {
        normalizedVideo = null;
    } else if (Object.prototype.hasOwnProperty.call(safeProduct, 'video')) {
        normalizedVideo = safeProduct.video;
    } else {
        normalizedVideo = getDemoVideoById(Number(safeProduct.id));
    }

    var normalizedModel = null;
    if (safeProduct.modelDisabled) {
        normalizedModel = null;
    } else if (Object.prototype.hasOwnProperty.call(safeProduct, 'model')) {
        normalizedModel = safeProduct.model;
    } else {
        normalizedModel = getDemoModelById(Number(safeProduct.id));
    }

    return {
        id: Number(safeProduct.id) || Date.now(),
        name: safeProduct.name || 'Untitled Product',
        category: safeProduct.category || 'electronics',
        brand: safeProduct.brand || 'Generic',
        price: Number(safeProduct.price) || 0,
        originalPrice: Number(safeProduct.originalPrice) || Number(safeProduct.price) || 0,
        condition: safeProduct.condition || 'new',
        rating: Math.max(0, Math.min(5, Number(safeProduct.rating) || 4.5)),
        reviews: Number(safeProduct.reviews) || 0,
        sold: Number(safeProduct.sold) || 0,
        shipping: safeProduct.shipping || 'free',
        stock: Number(safeProduct.stock) || 0,
        images: normalizedImages,
        mediaByColor: normalizedMediaByColor,
        mainImagesByColor: normalizedMainImagesByColor,
        colorHexByName: normalizedColorHexByName,
        colorStyleByName: normalizedColorStyleByName,
        specialColorPicker: normalizedSpecialColorPicker,
        specialColorSwatches: normalizedSpecialColorSwatches,
        specialColorLastColor: normalizedSpecialColorLastColor || null,
        specialColorSampleByColor: normalizedSpecialColorSampleByColor || {},
        modalLastColor: normalizedModalLastColor || null,
        modalSelectionByColor: normalizedModalSelectionByColor || {},
        modalImageByColor: normalizedModalImageByColor || {},
        modalLastImage: normalizedModalLastImage || '',
        modalLastIndex: normalizedModalLastIndex,
        video: normalizedVideo,
        videoDisabled: Boolean(safeProduct.videoDisabled),
        model: normalizedModel,
        modelDisabled: Boolean(safeProduct.modelDisabled),
        options: normalizedOptions,
        dailyDeal: Boolean(normalizedDailyDeal),
        description: safeProduct.description || '',
        features: Array.isArray(safeProduct.features) ? safeProduct.features : [],
        badge: safeProduct.badge || ''
    };
}

function getDemoVideoById(productId) {
    if (productId === 5) {
        return {
            title: "Headphones Overview",
            thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=675&fit=crop",
            url: "https://www.youtube.com/watch?v=bNpx7gpSqbY"
        };
    }
    if (productId === 7) {
        return {
            title: "Smart Watch Features",
            thumbnail: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1200&h=675&fit=crop",
            url: "https://www.youtube.com/watch?v=UFfJjS6gILM"
        };
    }
    return null;
}

function getDemoModelById(productId) {
    if (productId === 1) {
        return {
            title: "Running Shoe 3D Model",
            thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
            url: "https://sketchfab.com/models/6f13a1f6f8cf4e35807a2a7a6a8a8f61/embed"
        };
    }
    if (productId === 5) {
        return {
            title: "Headphones 3D Model",
            thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
            url: "https://sketchfab.com/models/8a99a653c8f3432c8deca50ed6583f8f/embed"
        };
    }
    return null;
}

function getDemoMediaByColorById(productId) {
    if (productId === 1) {
        return {
            "Ivory / Salmon": [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900&h=900&fit=crop"
            ],
            "Black": [
                "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&h=900&fit=crop"
            ],
            "Green": [
                "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=900&h=900&fit=crop"
            ],
            "Blue": [
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=900&h=900&fit=crop"
            ]
        };
    }
    if (productId === 2) {
        return {
            "White": [
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&h=900&fit=crop"
            ],
            "Black": [
                "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=900&h=900&fit=crop"
            ],
            "Navy": [
                "https://images.unsplash.com/photo-1620799140408-edc6d5f93528?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1622445275576-721325763afe?w=900&h=900&fit=crop"
            ]
        };
    }
    if (productId === 5) {
        return {
            "Black": [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=900&h=900&fit=crop"
            ],
            "White": [
                "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=900&h=900&fit=crop"
            ],
            "Blue": [
                "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&h=900&fit=crop",
                "https://images.unsplash.com/photo-1545127398-14699f92334b?w=900&h=900&fit=crop"
            ]
        };
    }
    return null;
}

function normalizePlainText(value, maxLength) {
    var normalized = String(value || '')
        .replace(/\s+/g, ' ')
        .trim();
    if (typeof maxLength === 'number' && maxLength > 0) {
        return normalized.slice(0, maxLength);
    }
    return normalized;
}

function sanitizeAdminList(items, maxItems, maxItemLength) {
    var seen = {};
    var safe = [];
    (items || []).forEach(function (item) {
        var value = normalizePlainText(item, maxItemLength || 80);
        if (!value) return;
        var key = value.toLowerCase();
        if (seen[key]) return;
        seen[key] = true;
        safe.push(value);
    });
    if (typeof maxItems === 'number' && maxItems > 0) {
        return safe.slice(0, maxItems);
    }
    return safe;
}

function sanitizeAdminOptions(options) {
    if (!options || typeof options !== 'object') return null;
    var clean = {};
    Object.keys(options).forEach(function (name) {
        var safeName = normalizePlainText(name, 30);
        if (!safeName) return;
        var values = Array.isArray(options[name]) ? options[name] : [options[name]];
        var safeValues = sanitizeAdminList(values, 30, 40);
        if (safeValues.length > 0) clean[safeName] = safeValues;
    });
    return Object.keys(clean).length > 0 ? clean : null;
}

function sanitizeColorHexByNameMap(map) {
    if (!map || typeof map !== 'object') return null;
    var clean = {};
    Object.keys(map).forEach(function (name) {
        var safeName = normalizePlainText(name, 40);
        var hex = String(map[name] || '').trim().toLowerCase();
        if (!safeName || !/^#[0-9a-f]{6}$/.test(hex)) return;
        clean[safeName] = hex;
    });
    return Object.keys(clean).length > 0 ? clean : null;
}

function sanitizeColorStyleByNameMap(map) {
    if (!map || typeof map !== 'object') return null;
    var clean = {};
    Object.keys(map).forEach(function (name) {
        var safeName = normalizePlainText(name, 40);
        var style = sanitizeColorStyleConfig(map[name]);
        if (!safeName || !style) return;
        clean[safeName] = style;
    });
    return Object.keys(clean).length > 0 ? clean : null;
}

function buildColorNameAliasMap(colorValues) {
    var aliases = {};
    (Array.isArray(colorValues) ? colorValues : []).forEach(function (colorValue) {
        var safeName = normalizePlainText(colorValue, 40);
        if (!safeName) return;
        var key = safeName.toLowerCase();
        if (!Object.prototype.hasOwnProperty.call(aliases, key)) {
            aliases[key] = safeName;
        }
    });
    return aliases;
}

function pruneColorKeyedMapToKnownColors(map, colorAliasMap, keepDefaultKey) {
    if (!map || typeof map !== 'object') return null;
    var aliases = colorAliasMap && typeof colorAliasMap === 'object' ? colorAliasMap : {};
    if (Object.keys(aliases).length === 0) return map;

    var pruned = {};
    Object.keys(map).forEach(function (rawName) {
        var safeName = normalizePlainText(rawName, 40);
        if (!safeName) return;
        var key = safeName.toLowerCase();
        if (keepDefaultKey && key === 'default') {
            pruned.Default = map[rawName];
            return;
        }
        var canonical = aliases[key];
        if (!canonical) return;
        pruned[canonical] = map[rawName];
    });
    return Object.keys(pruned).length > 0 ? pruned : null;
}

function isValidHttpUrl(value) {
    var text = String(value || '').trim();
    if (!text) return false;
    try {
        var parsed = new URL(text);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch (e) {
        return false;
    }
}

function isValidMediaUrl(value) {
    var text = String(value || '').trim();
    if (!text) return false;
    if (isValidHttpUrl(text)) return true;
    if (/^(\/|\.\/|\.\.\/)/.test(text)) return true;
    if (/^data:image\//i.test(text)) return true;
    return false;
}

function isDirectVideoSource(url) {
    var value = String(url || '').trim().toLowerCase();
    if (!value) return false;
    if (value.indexOf('data:video/') === 0) return true;
    return /\.(mp4|webm|ogg)(\?|#|$)/i.test(value);
}

function isDirectModelSource(url) {
    var value = String(url || '').trim().toLowerCase();
    if (!value) return false;
    if (value.indexOf('data:model/gltf-binary') === 0) return true;
    if (value.indexOf('data:application/octet-stream') === 0) return true;
    return /\.(glb|gltf|usdz)(\?|#|$)/i.test(value);
}

function formatBytes(bytes) {
    var value = Number(bytes) || 0;
    if (value < 1024) return value + ' B';
    if (value < 1024 * 1024) return (value / 1024).toFixed(1).replace(/\.0$/, '') + ' KB';
    return (value / (1024 * 1024)).toFixed(1).replace(/\.0$/, '') + ' MB';
}

function clonePlainData(value) {
    try {
        return JSON.parse(JSON.stringify(value));
    } catch (e) {
        return value;
    }
}

function setAdminUploadStatus(elementId, message, isError) {
    var node = document.getElementById(elementId);
    if (!node) return;
    node.textContent = message || '';
    node.classList.toggle('error', Boolean(isError));
}

function resetAdminVideoUploadState(options) {
    var preserveSavedAsset = Boolean(options && options.preserveSavedAsset);
    if (!preserveSavedAsset) adminUploadedVideoAsset = null;
    var fileInput = document.getElementById('adminVideoFile');
    if (fileInput) fileInput.value = '';
    if (!preserveSavedAsset) setAdminUploadStatus('adminVideoUploadStatus', 'No video file uploaded.', false);
}

function resetAdminModelUploadState(options) {
    var preserveSavedAsset = Boolean(options && options.preserveSavedAsset);
    if (!preserveSavedAsset) adminUploadedModelAsset = null;
    var fileInput = document.getElementById('adminModelFile');
    if (fileInput) fileInput.value = '';
    if (!preserveSavedAsset) setAdminUploadStatus('adminModelUploadStatus', 'No 3D model file uploaded.', false);
}

function readFileAsDataUrl(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { resolve(String(reader.result || '')); };
        reader.onerror = function () { reject(new Error('Unable to read file')); };
        reader.readAsDataURL(file);
    });
}

function getFileExtension(fileName) {
    var name = String(fileName || '').trim().toLowerCase();
    if (!name || name.indexOf('.') < 0) return '';
    return name.split('.').pop();
}

function isSupportedModelFile(file) {
    if (!file) return false;
    return getFileExtension(file.name) === 'glb';
}

function getAdminFileFromEvent(event, inputId) {
    var input = event && event.target ? event.target : document.getElementById(inputId);
    return input && input.files && input.files[0] ? input.files[0] : null;
}

function createLocalUploadedAsset(file, dataUrl, fallbackMimeType) {
    return {
        kind: 'file',
        url: dataUrl,
        fileName: file.name,
        mimeType: file.type || fallbackMimeType,
        size: file.size
    };
}

function hydrateSavedAdminUploadedAsset(sourceMedia, config) {
    if (!sourceMedia || sourceMedia.kind !== 'file' || !sourceMedia.url) return false;
    var asset = {
        kind: 'file',
        url: sourceMedia.url,
        fileName: sourceMedia.fileName || config.fallbackFileName,
        mimeType: sourceMedia.mimeType || config.fallbackMimeType,
        size: Number(sourceMedia.size) || 0
    };
    if (typeof config.setAsset === 'function') config.setAsset(asset);
    setAdminUploadStatus(config.statusElementId, config.statusPrefix + asset.fileName, false);
    return true;
}

async function handleAdminMediaFileChange(event, options) {
    if (!ensureAdminAccess(options.permissionAction)) return;
    var file = getAdminFileFromEvent(event, options.inputId);
    if (!file) {
        if (typeof options.setAsset === 'function') options.setAsset(null);
        setAdminUploadStatus(options.statusElementId, options.emptyMessage, false);
        return;
    }

    if (typeof options.validateFile === 'function') {
        var validation = options.validateFile(file);
        if (validation) {
            if (typeof options.resetState === 'function') options.resetState();
            setAdminUploadStatus(options.statusElementId, validation.statusMessage, true);
            if (validation.toastMessage) showToast(validation.toastMessage);
            return;
        }
    }

    try {
        if (file.size > options.maxBytes) {
            if (typeof options.resetState === 'function') options.resetState();
            setAdminUploadStatus(
                options.statusElementId,
                options.tooLargeStatusPrefix + formatBytes(options.maxBytes) + '.',
                true
            );
            showToast(options.tooLargeToastPrefix + formatBytes(options.maxBytes));
            return;
        }
        setAdminUploadStatus(options.statusElementId, options.readingMessage, false);
        var dataUrl = await readFileAsDataUrl(file);
        if (typeof options.setAsset === 'function') {
            options.setAsset(createLocalUploadedAsset(file, dataUrl, options.fallbackMimeType));
        }
        var urlInput = document.getElementById(options.urlInputId);
        if (urlInput) urlInput.value = '';
        setAdminUploadStatus(
            options.statusElementId,
            'Uploaded: ' + file.name + ' (' + formatBytes(file.size) + ')',
            false
        );
    } catch (e) {
        if (typeof options.resetState === 'function') options.resetState();
        var message = String(e && e.message ? e.message : options.errorMessage);
        setAdminUploadStatus(options.statusElementId, message, true);
        showToast(message);
    }
}

async function handleAdminVideoFileChange(event) {
    await handleAdminMediaFileChange(event, {
        permissionAction: 'upload product videos',
        inputId: 'adminVideoFile',
        statusElementId: 'adminVideoUploadStatus',
        emptyMessage: 'No video file uploaded.',
        tooLargeStatusPrefix: 'Video is too large. Max ',
        tooLargeToastPrefix: 'Video file exceeds ',
        readingMessage: 'Reading video...',
        fallbackMimeType: 'video/mp4',
        maxBytes: MAX_ADMIN_VIDEO_UPLOAD_BYTES,
        urlInputId: 'adminVideoUrl',
        errorMessage: 'Could not process video file.',
        resetState: resetAdminVideoUploadState,
        setAsset: function (asset) { adminUploadedVideoAsset = asset; },
        validateFile: function (file) {
            if (!String(file.type || '').toLowerCase().startsWith('video/')) {
                return {
                    statusMessage: 'Please upload a valid video file.',
                    toastMessage: 'Please upload a valid video file'
                };
            }
            return null;
        }
    });
}

async function handleAdminModelFileChange(event) {
    await handleAdminMediaFileChange(event, {
        permissionAction: 'upload 3D models',
        inputId: 'adminModelFile',
        statusElementId: 'adminModelUploadStatus',
        emptyMessage: 'No 3D model file uploaded.',
        tooLargeStatusPrefix: '3D model is too large. Max ',
        tooLargeToastPrefix: '3D model exceeds ',
        readingMessage: 'Reading 3D model...',
        fallbackMimeType: 'model/gltf-binary',
        maxBytes: MAX_ADMIN_MODEL_UPLOAD_BYTES,
        urlInputId: 'adminModelUrl',
        errorMessage: 'Could not process 3D model file.',
        resetState: resetAdminModelUploadState,
        setAsset: function (asset) { adminUploadedModelAsset = asset; },
        validateFile: function (file) {
            if (!isSupportedModelFile(file)) {
                return {
                    statusMessage: 'Only .glb files are supported.',
                    toastMessage: 'Only .glb 3D files are supported'
                };
            }
            return null;
        }
    });
}

function sanitizeImagePayload(parsedImageInput) {
    var sourceImages = parsedImageInput && parsedImageInput.images ? parsedImageInput.images : {};
    var sourceMedia = parsedImageInput && parsedImageInput.mediaByColor ? parsedImageInput.mediaByColor : null;
    var sourceMains = parsedImageInput && parsedImageInput.mainImagesByColor ? parsedImageInput.mainImagesByColor : null;

    var images = {};
    var mediaByColor = {};
    var mainImagesByColor = {};
    var invalidUrlCount = 0;

    // v11.1: Standardize all inputs into clean arrays first.
    var colorSet = new Set();
    Object.keys(sourceImages).forEach(function (c) { colorSet.add(c); });
    if (sourceMedia) Object.keys(sourceMedia).forEach(function (c) { colorSet.add(c); });
    if (sourceMains) Object.keys(sourceMains).forEach(function (c) { colorSet.add(c); });

    colorSet.forEach(function (colorName) {
        var safeColor = normalizePlainText(colorName, 40);
        if (!safeColor) return;

        var mains = [];
        var all = [];

        // Collect mains from images map (might be pipe-sep string)
        if (sourceImages[colorName]) {
            String(sourceImages[colorName]).split('|').forEach(function (u) {
                var trimmed = u.trim();
                if (trimmed && !mains.includes(trimmed)) mains.push(trimmed);
            });
        }
        // Collect mains from mainImagesByColor (if any)
        if (sourceMains && Array.isArray(sourceMains[colorName])) {
            sourceMains[colorName].forEach(function (u) {
                if (u && !mains.includes(u)) mains.push(u);
            });
        }

        // Collect all from mediaByColor
        if (sourceMedia && Array.isArray(sourceMedia[colorName])) {
            sourceMedia[colorName].forEach(function (u) {
                if (u && !all.includes(u)) all.push(u);
            });
        }
        // Ensure all mains are in the 'all' list
        mains.forEach(function (u) { if (!all.includes(u)) all.push(u); });

        // Validate
        var validMains = mains.filter(function (u) {
            if (isValidMediaUrl(u)) return true;
            invalidUrlCount++;
            return false;
        });
        var validAll = all.filter(function (u) {
            if (isValidMediaUrl(u)) return true;
            // only count invalid once if shared
            if (!mains.includes(u)) invalidUrlCount++;
            return false;
        });

        if (validAll.length > 0) {
            images[safeColor] = validMains.length > 0 ? validMains[0] : validAll[0];
            mediaByColor[safeColor] = validAll;
            if (validMains.length > 0) mainImagesByColor[safeColor] = validMains;
        }
    });

    return {
        images: images,
        mediaByColor: Object.keys(mediaByColor).length > 0 ? mediaByColor : null,
        mainImagesByColor: Object.keys(mainImagesByColor).length > 0 ? mainImagesByColor : null,
        invalidUrlCount: invalidUrlCount
    };
}

function triggerAdminSaveAndNew() {
    if (!ensureAdminAccess('save products')) return;
    var form = document.getElementById('adminProductForm');
    if (!form) return;
    adminSaveAndCreateAnother = true;
    if (typeof form.requestSubmit === 'function') {
        form.requestSubmit();
        return;
    }
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
}

function submitAdminProduct(event) {
    if (!ensureAdminAccess('save products')) return;
    event.preventDefault();
    var saveAndCreateAnother = Boolean(adminSaveAndCreateAnother);
    adminSaveAndCreateAnother = false;
    syncAdminImageTextareasFromLines();
    syncAdminColorFieldsFromLines();
    syncAdminSpecialColorFieldsFromLines();

    var idValue = document.getElementById('adminProductId').value;
    var name = normalizePlainText(document.getElementById('adminName').value, 140);
    var category = document.getElementById('adminCategory').value;
    var brand = normalizePlainText(document.getElementById('adminBrand').value, 60);
    var condition = document.getElementById('adminCondition').value;
    var price = Number(document.getElementById('adminPrice').value);
    var originalPrice = Number(document.getElementById('adminOriginalPrice').value);
    var stock = Number(document.getElementById('adminStock').value);
    var shipping = document.getElementById('adminShipping').value;
    var badge = document.getElementById('adminBadge').value;
    var dailyDeal = document.getElementById('adminDailyDeal').checked;
    var specialColorPickerMode = String((document.getElementById('adminSpecialColorPicker') || {}).value || 'regular').toLowerCase();
    var specialColorPickerEnabled = specialColorPickerMode === 'special';
    var parsedSpecialColorSwatches = parseAdminSpecialColorSwatchesInput((document.getElementById('adminSpecialColorSwatches') || {}).value);
    var rating = Number(document.getElementById('adminRating').value);
    var reviews = Number(document.getElementById('adminReviews').value);
    var sold = Number(document.getElementById('adminSold').value);
    var description = normalizePlainText(document.getElementById('adminDescription').value, 1200);
    var features = sanitizeAdminList(parseCommaList(document.getElementById('adminFeatures').value), 20, 120);
    var parsedMainImages = parseMainImages(document.getElementById('adminMainImages').value);
    var parsedAngleImages = parseAngleImages(document.getElementById('adminAngleImages').value);
    var parsedImageInput = sanitizeImagePayload(combineMainAndAngleImages(parsedMainImages, parsedAngleImages));
    var images = parsedImageInput.images;
    var mediaByColor = parsedImageInput.mediaByColor;
    var mainImagesByColor = parsedImageInput.mainImagesByColor;
    var options = sanitizeAdminOptions(parseOptions(document.getElementById('adminOptions').value));
    var colorHexByName = sanitizeColorHexByNameMap(parseColorMap(document.getElementById('adminColorMap').value));
    var colorStyleByName = sanitizeColorStyleByNameMap(parseColorStyleMap(document.getElementById('adminColorStyleMap').value));
    var colorNameAliases = buildColorNameAliasMap(options && options.Color);
    var videoUrl = String(document.getElementById('adminVideoUrl').value || '').trim();
    var videoThumb = String(document.getElementById('adminVideoThumb').value || '').trim();
    var videoUpload = adminUploadedVideoAsset;
    var videoData = null;
    var videoDisabled = true;
    var modelUrl = String(document.getElementById('adminModelUrl').value || '').trim();
    var modelThumb = String(document.getElementById('adminModelThumb').value || '').trim();
    var modelUpload = adminUploadedModelAsset;
    var modelData = null;
    var modelDisabled = true;

    if (!name || !brand || !description) {
        showToast('Please fill in required fields');
        return;
    }

    if (description.length < 12) {
        showToast('Description must be at least 12 characters');
        return;
    }

    var categoryMap = getAllCategories();
    if (!categoryMap[category]) {
        showToast('Select a valid category');
        return;
    }

    if (!['new', 'used', 'refurbished'].includes(condition)) {
        showToast('Select a valid condition');
        return;
    }

    if (!['free', 'fast', 'standard'].includes(shipping)) {
        showToast('Select a valid shipping option');
        return;
    }

    if (!['', 'new', 'sale'].includes(badge)) {
        showToast('Select a valid badge');
        return;
    }
    if (parsedSpecialColorSwatches.error) {
        showToast(parsedSpecialColorSwatches.error);
        return;
    }
    if (Object.keys(colorNameAliases).length > 0) {
        colorHexByName = sanitizeColorHexByNameMap(
            pruneColorKeyedMapToKnownColors(colorHexByName, colorNameAliases, false)
        );
        colorStyleByName = sanitizeColorStyleByNameMap(
            pruneColorKeyedMapToKnownColors(colorStyleByName, colorNameAliases, false)
        );
        parsedSpecialColorSwatches.map = sanitizeSpecialColorSwatchMap(
            pruneColorKeyedMapToKnownColors(parsedSpecialColorSwatches.map, colorNameAliases, true)
        );
    }

    if (!isFinite(price) || price <= 0) {
        showToast('Price must be greater than 0');
        return;
    }
    if (!isFinite(originalPrice) || originalPrice <= 0) {
        originalPrice = price;
    }
    if (originalPrice < price) {
        originalPrice = price;
    }

    if (!isFinite(stock) || stock < 0) {
        showToast('Stock must be 0 or higher');
        return;
    }
    stock = Math.floor(stock);

    rating = Math.max(0, Math.min(5, isFinite(rating) ? rating : 4.5));
    reviews = Math.max(0, Math.floor(isFinite(reviews) ? reviews : 0));
    sold = Math.max(0, Math.floor(isFinite(sold) ? sold : 0));

    if (parsedImageInput.invalidUrlCount > 0) {
        showToast('Use valid http(s) URLs for images');
        return;
    }

    if (!images || Object.keys(images).length === 0) {
        images = { Default: 'https://via.placeholder.com/600?text=Product' };
        mediaByColor = null;
    }

    if (!videoUpload && videoUrl && !isValidHttpUrl(videoUrl) && !isDirectVideoSource(videoUrl)) {
        showToast('Enter a valid video URL or upload a video file');
        return;
    }
    if (videoThumb && !isValidHttpUrl(videoThumb)) {
        showToast('Enter a valid video thumbnail URL');
        return;
    }
    if (!modelUpload && modelUrl && !isValidHttpUrl(modelUrl) && !isDirectModelSource(modelUrl)) {
        showToast('Enter a valid 3D model URL or upload a .glb model');
        return;
    }
    if (modelThumb && !isValidHttpUrl(modelThumb)) {
        showToast('Enter a valid 3D model thumbnail URL');
        return;
    }

    if (videoUpload && videoUpload.url) {
        videoData = {
            title: name ? (name + ' video') : 'Product video',
            thumbnail: videoThumb || (images && Object.values(images)[0]) || '',
            url: videoUpload.url,
            kind: videoUpload.kind || (isDirectVideoSource(videoUpload.url) ? 'file' : 'url'),
            fileName: videoUpload.fileName || 'uploaded-video',
            mimeType: videoUpload.mimeType || 'video/mp4',
            size: Number(videoUpload.size) || 0
        };
        videoDisabled = false;
    } else if (videoUrl) {
        videoData = {
            title: name ? (name + ' video') : 'Product video',
            thumbnail: videoThumb || (images && Object.values(images)[0]) || '',
            url: videoUrl,
            kind: 'url'
        };
        videoDisabled = false;
    }
    if (modelUpload && modelUpload.url) {
        modelData = {
            title: name ? (name + ' 3D model') : '3D model',
            thumbnail: modelThumb || (images && Object.values(images)[0]) || '',
            url: modelUpload.url,
            kind: modelUpload.kind || (isDirectModelSource(modelUpload.url) ? 'file' : 'url'),
            fileName: modelUpload.fileName || 'uploaded-model.glb',
            mimeType: modelUpload.mimeType || 'model/gltf-binary',
            size: Number(modelUpload.size) || 0
        };
        modelDisabled = false;
    } else if (modelUrl) {
        modelData = {
            title: name ? (name + ' 3D model') : '3D model',
            thumbnail: modelThumb || (images && Object.values(images)[0]) || '',
            url: modelUrl,
            kind: 'url'
        };
        modelDisabled = false;
    }

    var resolvedId = editingProductId !== null
        ? Number(editingProductId)
        : (idValue ? Number(idValue) : getNextProductId());
    var existingProduct = products.find(function (product) {
        return Number(product.id) === Number(resolvedId);
    });

    var productPayload = normalizeProduct({
        id: resolvedId,
        name: name,
        category: category,
        brand: brand,
        condition: condition,
        price: price,
        originalPrice: originalPrice || price,
        stock: stock,
        shipping: shipping,
        badge: badge,
        dailyDeal: dailyDeal,
        rating: rating,
        reviews: reviews,
        sold: sold,
        description: description,
        features: features,
        images: images,
        mediaByColor: mediaByColor,
        mainImagesByColor: mainImagesByColor,
        colorHexByName: colorHexByName,
        colorStyleByName: colorStyleByName,
        specialColorPicker: specialColorPickerEnabled,
        specialColorSwatches: parsedSpecialColorSwatches.map,
        specialColorLastColor: existingProduct && existingProduct.specialColorLastColor
            ? String(existingProduct.specialColorLastColor)
            : null,
        video: videoData,
        videoDisabled: videoDisabled,
        model: modelData,
        modelDisabled: modelDisabled,
        options: options
    });

    var existingIndex = products.findIndex(function (product) {
        return Number(product.id) === Number(productPayload.id);
    });
    if (existingIndex >= 0) {
        products[existingIndex] = productPayload;
    } else {
        products.unshift(productPayload);
    }
    var savedSpecialColorAliases = getSpecialColorStateAliases(productPayload);
    if (!productPayload.specialColorPicker) {
        savedSpecialColorAliases.forEach(function (key) {
            delete specialColorSwatchStateByProductId[key];
            delete specialColorLastColorByProductKey[key];
            delete specialColorDirectPickByProductKey[key];
        });
        clearSpecialColorOverrideForProduct(productPayload);
        clearSpecialColorSampleStateV3ForProduct(productPayload);
    } else {
        var normalizedSavedSwatches = sanitizeSpecialColorSwatchMap(productPayload.specialColorSwatches) || {};
        savedSpecialColorAliases.forEach(function (key) {
            specialColorSwatchStateByProductId[key] = clonePlainData(normalizedSavedSwatches);
            if (productPayload.specialColorLastColor) {
                specialColorLastColorByProductKey[key] = String(productPayload.specialColorLastColor).trim();
            }
        });
    }
    saveSpecialColorStateToStorage();

    saveToStorage();
    // Force immediate cloud write for admin product changes so refresh does not
    // race the debounced sync timer.
    if (isCloudSyncEnabled()) {
        syncStateToCloud().catch(function (error) {
            console.warn('Immediate cloud sync after product save failed:', error);
        });
    }
    buildSearchTerms();
    applyFilters();
    renderProducts();
    renderAdminPanel();
    if (saveAndCreateAnother) {
        resetAdminProductForm();
        if (typeof setAdminProductFormSection === 'function') setAdminProductFormSection('basic');
        var nameInput = document.getElementById('adminName');
        if (nameInput) nameInput.focus();
        showToast('Product saved. Ready for next.');
        return;
    }
    if (typeof editAdminProduct === 'function') {
        editAdminProduct(productPayload.id);
    }
    showToast('Product saved');
}

function resetAdminProductForm() {
    if (!ensureAdminAccess('reset product form')) return;
    adminSaveAndCreateAnother = false;
    document.getElementById('adminProductForm').reset();
    document.getElementById('adminProductId').value = '';
    editingProductId = null;
    document.getElementById('adminRating').value = 4.5;
    document.getElementById('adminReviews').value = 0;
    document.getElementById('adminSold').value = 0;
    document.getElementById('adminDailyDeal').checked = false;
    document.getElementById('adminSpecialColorPicker').value = 'regular';
    clearAdminSpecialColorLines();
    document.getElementById('adminMainImages').value = '';
    document.getElementById('adminAngleImages').value = '';
    document.getElementById('adminColorMap').value = '';
    document.getElementById('adminColorStyleMap').value = '';
    clearAdminColorLines();
    addAdminColorLine('', '#d9d9d9', 'solid', '#d9d9d9', '#d9d9d9', '#d9d9d9', 'to bottom');
    document.getElementById('adminVideoUrl').value = '';
    document.getElementById('adminVideoThumb').value = '';
    document.getElementById('adminModelUrl').value = '';
    document.getElementById('adminModelThumb').value = '';
    resetAdminVideoUploadState();
    resetAdminModelUploadState();
    clearAdminImageLines();
    addAdminImageLine('main');
    syncAdminSpecialColorSectionState();
    setAdminFormMode(false);
}

function clearAdminMediaFields(permissionAction, urlInputId, thumbInputId, resetStateFn) {
    if (!ensureAdminAccess(permissionAction)) return;
    var urlInput = document.getElementById(urlInputId);
    var thumbInput = document.getElementById(thumbInputId);
    if (urlInput) urlInput.value = '';
    if (thumbInput) thumbInput.value = '';
    if (typeof resetStateFn === 'function') resetStateFn();
}

function ensureAdminColorLinesInitialized() {
    var container = document.getElementById('adminColorLines');
    if (!container) return;
    if (container.children.length === 0) {
        addAdminColorLine('', '#d9d9d9', 'solid', '#d9d9d9', '#d9d9d9', '#d9d9d9', 'to bottom');
    }
}

function ensureAdminImageLinesInitialized() {
    var container = document.getElementById('adminImageLines');
    if (!container) return;
    if (container.children.length === 0) {
        addAdminImageLine('main');
    }
}

function ensureAdminSpecialColorLinesInitialized() {
    var container = document.getElementById('adminSpecialColorLines');
    if (!container) return;
    if (container.children.length === 0) {
        addAdminSpecialColorLine('Default', '', '#d9d9d9', '#d9d9d9', 50, 50, 280);
    }
    syncAdminSpecialColorSectionState();
    syncAdminSpecialColorFieldsFromLines();
}

function clearAdminColorLines() {
    var container = document.getElementById('adminColorLines');
    if (!container) return;
    container.innerHTML = '';
}

function addAdminColorLine(name, color1, mode, color2, color3, color4, direction) {
    var container = document.getElementById('adminColorLines');
    if (!container) return;

    adminColorLineId += 1;
    var lineId = adminColorLineId;

    var line = document.createElement('div');
    line.className = 'admin-color-line';
    line.dataset.lineId = String(lineId);

    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Color name';
    nameInput.value = name || '';
    nameInput.className = 'admin-color-name';
    nameInput.oninput = function () { syncAdminColorFieldsFromLines(); };

    var modeSelect = document.createElement('select');
    modeSelect.className = 'admin-color-mode';
    modeSelect.innerHTML = '<option value="solid">Solid</option><option value="split-2">Split Combo 2</option><option value="split-3">Split Combo 3</option><option value="split-4">Split Combo 4</option><option value="gradient">Gradient Blend</option>';
    modeSelect.value = normalizeColorMode(mode);
    modeSelect.onchange = function () {
        updateAdminColorLineVisibility(line);
        syncAdminColorFieldsFromLines();
    };

    var color1Input = document.createElement('input');
    color1Input.type = 'color';
    color1Input.className = 'admin-color-1';
    color1Input.value = /^#[0-9a-fA-F]{6}$/.test(String(color1 || '').trim()) ? String(color1).toLowerCase() : '#d9d9d9';
    color1Input.oninput = function () { syncAdminColorFieldsFromLines(); };

    var color2Input = document.createElement('input');
    color2Input.type = 'color';
    color2Input.className = 'admin-color-2';
    color2Input.value = /^#[0-9a-fA-F]{6}$/.test(String(color2 || '').trim()) ? String(color2).toLowerCase() : color1Input.value;
    color2Input.oninput = function () {
        if (modeSelect && modeSelect.value === 'solid') {
            modeSelect.value = 'split-2';
        }
        syncAdminColorFieldsFromLines();
    };

    var color3Input = document.createElement('input');
    color3Input.type = 'color';
    color3Input.className = 'admin-color-3';
    color3Input.value = /^#[0-9a-fA-F]{6}$/.test(String(color3 || '').trim()) ? String(color3).toLowerCase() : color1Input.value;
    color3Input.oninput = function () {
        if (modeSelect && ['solid', 'split-2'].includes(modeSelect.value)) {
            modeSelect.value = 'split-3';
        }
        syncAdminColorFieldsFromLines();
    };

    var color4Input = document.createElement('input');
    color4Input.type = 'color';
    color4Input.className = 'admin-color-4';
    color4Input.value = /^#[0-9a-fA-F]{6}$/.test(String(color4 || '').trim()) ? String(color4).toLowerCase() : color1Input.value;
    color4Input.oninput = function () {
        if (modeSelect && ['solid', 'split-2', 'split-3'].includes(modeSelect.value)) {
            modeSelect.value = 'split-4';
        }
        syncAdminColorFieldsFromLines();
    };

    var directionSelect = document.createElement('select');
    directionSelect.className = 'admin-color-direction';
    directionSelect.innerHTML = '<option value="to bottom">Top to Bottom</option><option value="to right">Left to Right</option><option value="45deg">Diagonal 45</option><option value="135deg">Diagonal 135</option>';
    directionSelect.value = ['to bottom', 'to right', '45deg', '135deg'].includes(direction) ? direction : 'to bottom';
    directionSelect.onchange = function () { syncAdminColorFieldsFromLines(); };

    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'admin-action-btn admin-danger-btn';
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () { removeAdminColorLine(lineId); };

    line.appendChild(nameInput);
    line.appendChild(modeSelect);
    line.appendChild(color1Input);
    line.appendChild(color2Input);
    line.appendChild(color3Input);
    line.appendChild(color4Input);
    line.appendChild(directionSelect);
    line.appendChild(removeButton);
    container.appendChild(line);
    updateAdminColorLineVisibility(line);
    syncAdminColorFieldsFromLines();
}

function removeAdminColorLine(lineId) {
    var line = document.querySelector('.admin-color-line[data-line-id="' + lineId + '"]');
    if (!line) return;
    line.remove();
    syncAdminColorFieldsFromLines();
}

function syncAdminColorFieldsFromLines() {
    var lines = document.querySelectorAll('.admin-color-line');
    var colorMap = {};
    var styleMap = {};
    var colors = [];

    lines.forEach(function (line) {
        var nameInput = line.querySelector('.admin-color-name');
        var modeSelect = line.querySelector('.admin-color-mode');
        var color1Input = line.querySelector('.admin-color-1');
        var color2Input = line.querySelector('.admin-color-2');
        var color3Input = line.querySelector('.admin-color-3');
        var color4Input = line.querySelector('.admin-color-4');
        var directionSelect = line.querySelector('.admin-color-direction');
        var name = nameInput ? nameInput.value.trim() : '';
        var mode = modeSelect ? normalizeColorMode(modeSelect.value) : 'solid';
        if (modeSelect && modeSelect.value !== mode) modeSelect.value = mode;
        updateAdminColorLineVisibility(line);
        var color1 = color1Input ? color1Input.value.trim().toLowerCase() : '';
        var color2 = color2Input ? color2Input.value.trim().toLowerCase() : '';
        var color3 = color3Input ? color3Input.value.trim().toLowerCase() : '';
        var color4 = color4Input ? color4Input.value.trim().toLowerCase() : '';
        var direction = directionSelect ? directionSelect.value : 'to bottom';
        if (!name) return;
        var tones = [color1, color2, color3, color4].filter(function (hex) {
            return /^#[0-9a-fA-F]{6}$/.test(hex);
        });
        tones = tones.slice(0, getToneCountForMode(mode));
        if (tones.length === 0) return;
        colors.push(name);
        colorMap[name] = tones[0];

        var config = sanitizeColorStyleConfig({
            mode: mode,
            tones: tones,
            direction: direction
        });
        if (config) styleMap[name] = config;
    });

    document.getElementById('adminColorMap').value = serializeColorMap(colorMap);
    document.getElementById('adminColorStyleMap').value = serializeColorStyleMap(styleMap);

    var options = parseOptions(document.getElementById('adminOptions').value) || {};
    if (colors.length > 0) {
        options.Color = colors;
    } else if (options.Color) {
        delete options.Color;
    }
    document.getElementById('adminOptions').value = serializeOptions(options);
}

function populateAdminColorLinesFromProduct(product) {
    clearAdminColorLines();
    var colors = [];
    var seen = new Set();
    if (product && product.options && Array.isArray(product.options.Color)) {
        product.options.Color.forEach(function (color) { pushUniqueColorValue(colors, seen, color); });
    }
    if (colors.length === 0) {
        Object.keys((product && product.colorHexByName) || {}).forEach(function (color) {
            pushUniqueColorValue(colors, seen, color);
        });
    }

    if (colors.length === 0) {
        addAdminColorLine('', '#d9d9d9', 'solid', '#d9d9d9', '#d9d9d9', '#d9d9d9', 'to bottom');
        return;
    }

    colors.forEach(function (color) {
        var hex = product && product.colorHexByName ? product.colorHexByName[color] : '#d9d9d9';
        if (!/^#[0-9a-fA-F]{6}$/.test(String(hex || '').trim())) {
            hex = inferHexFromColorName(color);
        }
        var style = product && product.colorStyleByName ? sanitizeColorStyleConfig(product.colorStyleByName[color]) : null;
        var tones = style && Array.isArray(style.tones) && style.tones.length > 0
            ? style.tones.slice(0, 4)
            : [style ? style.color1 : hex, style ? style.color2 : hex, hex, hex];
        while (tones.length < 4) {
            tones.push(tones[tones.length - 1] || hex);
        }
        addAdminColorLine(
            color,
            tones[0],
            style ? style.mode : 'solid',
            tones[1],
            tones[2],
            tones[3],
            style ? style.direction : 'to bottom'
        );
    });

    syncAdminColorFieldsFromLines();
}

function clearAdminImageLines() {
    var container = document.getElementById('adminImageLines');
    if (!container) return;
    container.innerHTML = '';
}

function addAdminImageLine(type, color, url) {
    var container = document.getElementById('adminImageLines');
    if (!container) return;

    adminImageLineId += 1;
    var lineId = adminImageLineId;
    var line = document.createElement('div');
    line.className = 'admin-image-line';
    line.dataset.lineId = String(lineId);

    // Multiple 'main' rows per color are now fully supported \u2014 they all stack.
    var resolvedType = type === 'angle' ? 'angle' : 'main';

    var select = document.createElement('select');
    select.className = 'admin-image-type';
    select.innerHTML = '<option value="main">Main</option><option value="angle">Angle</option>';
    select.value = resolvedType;
    select.onchange = function () { syncAdminImageTextareasFromLines(); };

    var colorInput = document.createElement('input');
    colorInput.type = 'text';
    colorInput.className = 'admin-image-color';
    colorInput.placeholder = 'Color';
    colorInput.value = color || '';
    colorInput.oninput = function () { syncAdminImageTextareasFromLines(); };

    var urlInput = document.createElement('input');
    urlInput.type = 'text';
    urlInput.className = 'admin-image-url';
    urlInput.placeholder = 'https://image-url';
    urlInput.value = url || '';
    urlInput.oninput = function () { handleAdminImageLineChange(lineId); };

    var preview = document.createElement('img');
    preview.className = 'admin-image-preview';
    preview.alt = 'Preview';
    preview.src = url || '';

    var upButton = document.createElement('button');
    upButton.type = 'button';
    upButton.className = 'admin-action-btn admin-remove-line';
    upButton.textContent = 'Up';
    upButton.onclick = function () { moveAdminImageLine(lineId, -1); };

    var downButton = document.createElement('button');
    downButton.type = 'button';
    downButton.className = 'admin-action-btn admin-remove-line';
    downButton.textContent = 'Down';
    downButton.onclick = function () { moveAdminImageLine(lineId, 1); };

    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'admin-action-btn admin-danger-btn admin-remove-line';
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () { removeAdminImageLine(lineId); };

    line.appendChild(select);
    line.appendChild(colorInput);
    line.appendChild(urlInput);
    line.appendChild(preview);
    line.appendChild(upButton);
    line.appendChild(downButton);
    line.appendChild(removeButton);
    container.appendChild(line);

    handleAdminImageLineChange(lineId);
}

function removeAdminImageLine(lineId) {
    var line = document.querySelector('.admin-image-line[data-line-id="' + lineId + '"]');
    if (!line) return;
    line.remove();
    syncAdminImageTextareasFromLines();
}

function moveAdminImageLine(lineId, direction) {
    var line = document.querySelector('.admin-image-line[data-line-id="' + lineId + '"]');
    if (!line || !line.parentElement) return;
    var sibling = direction < 0 ? line.previousElementSibling : line.nextElementSibling;
    if (!sibling) return;

    if (direction < 0) {
        line.parentElement.insertBefore(line, sibling);
    } else {
        line.parentElement.insertBefore(sibling, line);
    }
    syncAdminImageTextareasFromLines();
}

function handleAdminImageLineChange(lineId) {
    var line = document.querySelector('.admin-image-line[data-line-id="' + lineId + '"]');
    if (!line) return;
    var urlInput = line.querySelector('.admin-image-url');
    var preview = line.querySelector('.admin-image-preview');
    if (preview) {
        preview.src = (urlInput && urlInput.value.trim()) || '';
    }
    syncAdminImageTextareasFromLines();
}

function syncAdminImageTextareasFromLines() {
    var lines = document.querySelectorAll('.admin-image-line');
    var mainImages = {}; // { color: [url, url, ...] } — all Main rows per color
    var angleImages = {};

    lines.forEach(function (line) {
        var type = line.querySelector('.admin-image-type');
        var color = line.querySelector('.admin-image-color');
        var url = line.querySelector('.admin-image-url');
        var lineType = type ? type.value : 'main';
        var lineColor = color ? color.value.trim() : '';
        var lineUrl = url ? url.value.trim() : '';
        if (!lineColor || !lineUrl) return;

        if (lineType === 'main') {
            // All 'main' rows per color stack — multiple mains are supported.
            if (!mainImages[lineColor]) mainImages[lineColor] = [];
            if (!mainImages[lineColor].includes(lineUrl)) mainImages[lineColor].push(lineUrl);
        } else {
            if (!angleImages[lineColor]) angleImages[lineColor] = [];
            if (!angleImages[lineColor].includes(lineUrl)) angleImages[lineColor].push(lineUrl);
        }
    });

    // Serialize main images — multiple URLs per color joined with '|'
    document.getElementById('adminMainImages').value = Object.keys(mainImages).map(function (color) {
        return color + ':' + mainImages[color].join('|');
    }).join(';');

    document.getElementById('adminAngleImages').value = Object.keys(angleImages).map(function (color) {
        return color + ':' + angleImages[color].join('|');
    }).join(';');
}

function populateAdminImageLinesFromProduct(product) {
    clearAdminImageLines();

    var mainImages = product && product.images ? product.images : {};
    var mediaByColor = product && product.mediaByColor ? product.mediaByColor : {};
    var colorSet = new Set();
    Object.keys(mainImages).forEach(function (color) { colorSet.add(color); });
    Object.keys(mediaByColor).forEach(function (color) { colorSet.add(color); });

    colorSet.forEach(function (color) {
        var allUrls = Array.isArray(mediaByColor[color]) ? mediaByColor[color].slice() : [];
        if (allUrls.length === 0) {
            // No mediaByColor entry — fall back to single images map
            var single = mainImages[color];
            if (single) addAdminImageLine('main', color, single);
            return;
        }

        // v11.1: Correctly identify 'main' vs 'angle' by checking mainImagesByColor or fallback to images.
        var mains = product && product.mainImagesByColor && Array.isArray(product.mainImagesByColor[color])
            ? product.mainImagesByColor[color]
            : [];
        if (mains.length === 0 && mainImages && mainImages[color]) {
            mains = String(mainImages[color]).split('|').map(function (u) { return u.trim(); }).filter(Boolean);
        }

        allUrls.forEach(function (url) {
            if (!url) return;
            var isMain = mains.includes(url);
            addAdminImageLine(isMain ? 'main' : 'angle', color, url);
        });
    });

    if (document.querySelectorAll('.admin-image-line').length === 0) {
        addAdminImageLine('main');
    }

    syncAdminImageTextareasFromLines();
}

function clearAdminSpecialColorLines() {
    var container = document.getElementById('adminSpecialColorLines');
    if (!container) return;
    container.innerHTML = '';
    syncAdminSpecialColorFieldsFromLines();
}

function addAdminSpecialColorLine(colorName, image, fallbackColor, sampleColor, focusX, focusY, zoom, media, angles) {
    var container = document.getElementById('adminSpecialColorLines');
    if (!container) return;

    adminSpecialColorLineId += 1;
    var lineId = adminSpecialColorLineId;

    var line = document.createElement('div');
    line.className = 'admin-special-color-line';
    line.dataset.lineId = String(lineId);

    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'admin-special-color-name';
    nameInput.placeholder = 'Color name';
    nameInput.value = String(colorName || '').trim();
    nameInput.oninput = function () { handleAdminSpecialColorLineChange(lineId); };

    var imageInput = document.createElement('input');
    imageInput.type = 'text';
    imageInput.className = 'admin-special-color-image';
    imageInput.placeholder = 'Main Image URL(s) (use | to separate)';
    var displayImage = (Array.isArray(media) && media.length > 0) ? media.join('|') : String(image || '').trim();
    imageInput.value = displayImage;
    imageInput.oninput = function () { handleAdminSpecialColorLineChange(lineId); };

    var anglesInput = document.createElement('input');
    anglesInput.type = 'text';
    anglesInput.className = 'admin-special-color-angles';
    anglesInput.placeholder = 'Angle URL(s) (use | to separate)';
    var displayAngles = (Array.isArray(angles) && angles.length > 0) ? angles.join('|') : '';
    anglesInput.value = displayAngles;
    anglesInput.oninput = function () { handleAdminSpecialColorLineChange(lineId); };

    var fallbackInput = document.createElement('input');
    fallbackInput.type = 'color';
    fallbackInput.className = 'admin-special-color-fallback';
    fallbackInput.value = /^#[0-9a-fA-F]{6}$/.test(String(fallbackColor || '').trim()) ? String(fallbackColor).toLowerCase() : '#d9d9d9';
    fallbackInput.oninput = function () { handleAdminSpecialColorLineChange(lineId); };

    var sampleInput = document.createElement('input');
    sampleInput.type = 'color';
    sampleInput.className = 'admin-special-color-sample';
    sampleInput.value = /^#[0-9a-fA-F]{6}$/.test(String(sampleColor || '').trim()) ? String(sampleColor).toLowerCase() : fallbackInput.value;
    sampleInput.oninput = function () { handleAdminSpecialColorLineChange(lineId); };

    var focusXInput = document.createElement('input');
    focusXInput.type = 'number';
    focusXInput.className = 'admin-special-color-focus-x';
    focusXInput.placeholder = 'Focus X';
    focusXInput.min = '0';
    focusXInput.max = '100';
    focusXInput.step = 'any';
    focusXInput.value = String(clampNumber(focusX, 0, 100));
    focusXInput.oninput = function () { handleAdminSpecialColorLineChange(lineId); };
    focusXInput.onblur = function () {
        normalizeAdminSpecialColorNumericInput(focusXInput, 0, 100, 50, 4);
        handleAdminSpecialColorLineChange(lineId);
    };

    var focusYInput = document.createElement('input');
    focusYInput.type = 'number';
    focusYInput.className = 'admin-special-color-focus-y';
    focusYInput.placeholder = 'Focus Y';
    focusYInput.min = '0';
    focusYInput.max = '100';
    focusYInput.step = 'any';
    focusYInput.value = String(clampNumber(focusY, 0, 100));
    focusYInput.oninput = function () { handleAdminSpecialColorLineChange(lineId); };
    focusYInput.onblur = function () {
        normalizeAdminSpecialColorNumericInput(focusYInput, 0, 100, 50, 4);
        handleAdminSpecialColorLineChange(lineId);
    };

    var zoomInput = document.createElement('input');
    zoomInput.type = 'number';
    zoomInput.className = 'admin-special-color-zoom';
    zoomInput.placeholder = 'Zoom %';
    zoomInput.min = '100';
    zoomInput.max = '600';
    zoomInput.step = '1';
    zoomInput.value = String(Math.max(100, Number(zoom) || SPECIAL_COLOR_SWATCH_DEFAULT_ZOOM));
    zoomInput.oninput = function () { handleAdminSpecialColorLineChange(lineId); };
    zoomInput.onblur = function () {
        normalizeAdminSpecialColorNumericInput(zoomInput, 100, 600, SPECIAL_COLOR_SWATCH_DEFAULT_ZOOM, 0);
        handleAdminSpecialColorLineChange(lineId);
    };

    var preview = document.createElement('span');
    preview.className = 'admin-special-color-preview';
    preview.title = 'Swatch preview';

    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'admin-action-btn admin-danger-btn';
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () { removeAdminSpecialColorLine(lineId); };

    line.appendChild(nameInput);
    line.appendChild(imageInput);
    line.appendChild(anglesInput);
    line.appendChild(fallbackInput);
    line.appendChild(sampleInput);
    line.appendChild(focusXInput);
    line.appendChild(focusYInput);
    line.appendChild(zoomInput);
    line.appendChild(preview);
    line.appendChild(removeButton);
    container.appendChild(line);

    handleAdminSpecialColorLineChange(lineId);
    syncAdminSpecialColorSectionState();
}

function removeAdminSpecialColorLine(lineId) {
    var line = document.querySelector('.admin-special-color-line[data-line-id="' + lineId + '"]');
    if (!line) return;
    line.remove();
    syncAdminSpecialColorFieldsFromLines();
    syncAdminSpecialColorSectionState();
}

function normalizeAdminSpecialColorNumericInput(input, min, max, fallback, decimals) {
    if (!input) return;
    var value = Number(input.value);
    if (!isFinite(value)) value = Number(fallback);
    value = clampNumber(value, Number(min), Number(max));
    if (Number(decimals) <= 0) {
        value = Math.round(value);
    } else {
        value = Number(value.toFixed(Number(decimals)));
    }
    input.value = String(value);
}

function handleAdminSpecialColorLineChange(lineId) {
    var line = document.querySelector('.admin-special-color-line[data-line-id="' + lineId + '"]');
    if (!line) return;

    var imageInput = line.querySelector('.admin-special-color-image');
    var fallbackInput = line.querySelector('.admin-special-color-fallback');
    var sampleInput = line.querySelector('.admin-special-color-sample');
    var focusXInput = line.querySelector('.admin-special-color-focus-x');
    var focusYInput = line.querySelector('.admin-special-color-focus-y');
    var zoomInput = line.querySelector('.admin-special-color-zoom');
    var preview = line.querySelector('.admin-special-color-preview');

    if (preview) {
        var image = String((imageInput && imageInput.value) || '').trim();
        var fallback = String((fallbackInput && fallbackInput.value) || '#d9d9d9').trim();
        var sample = String((sampleInput && sampleInput.value) || fallback || '#d9d9d9').trim();
        var fx = clampNumber((focusXInput && focusXInput.value) || 50, 0, 100);
        var fy = clampNumber((focusYInput && focusYInput.value) || 50, 0, 100);
        var z = Math.max(100, Number((zoomInput && zoomInput.value) || SPECIAL_COLOR_SWATCH_DEFAULT_ZOOM));

        preview.style.backgroundColor = sample || fallback || '#d9d9d9';
        if (image) {
            preview.style.backgroundImage = 'url("' + escapeCssUrl(image) + '")';
            preview.style.backgroundSize = z + '%';
            preview.style.backgroundPosition = formatPercent(fx) + '% ' + formatPercent(fy) + '%';
        } else {
            preview.style.backgroundImage = 'none';
            preview.style.backgroundSize = 'cover';
            preview.style.backgroundPosition = 'center';
        }
    }

    syncAdminSpecialColorFieldsFromLines();
}

function syncAdminSpecialColorFieldsFromLines() {
    var hiddenInput = document.getElementById('adminSpecialColorSwatches');
    if (!hiddenInput) return;

    var map = {};
    document.querySelectorAll('.admin-special-color-line').forEach(function (line) {
        var nameInput = line.querySelector('.admin-special-color-name');
        var imageInput = line.querySelector('.admin-special-color-image');
        var anglesInput = line.querySelector('.admin-special-color-angles');
        var fallbackInput = line.querySelector('.admin-special-color-fallback');
        var sampleInput = line.querySelector('.admin-special-color-sample');
        var focusXInput = line.querySelector('.admin-special-color-focus-x');
        var focusYInput = line.querySelector('.admin-special-color-focus-y');
        var zoomInput = line.querySelector('.admin-special-color-zoom');

        var colorName = String((nameInput && nameInput.value) || '').trim();
        if (!colorName) return;

        var entry = sanitizeSpecialColorSwatchEntry({
            image: String((imageInput && imageInput.value) || '').trim(),
            media: String((imageInput && imageInput.value) || '').trim(),
            angles: String((anglesInput && anglesInput.value) || '').trim(),
            fallbackColor: String((fallbackInput && fallbackInput.value) || '#d9d9d9').trim(),
            sampleColor: String((sampleInput && sampleInput.value) || (fallbackInput && fallbackInput.value) || '#d9d9d9').trim(),
            focusX: clampNumber((focusXInput && focusXInput.value) || 50, 0, 100),
            focusY: clampNumber((focusYInput && focusYInput.value) || 50, 0, 100),
            zoom: Math.max(100, Number((zoomInput && zoomInput.value) || SPECIAL_COLOR_SWATCH_DEFAULT_ZOOM))
        });
        if (!entry) return;
        map[colorName] = entry;
    });

    hiddenInput.value = serializeAdminSpecialColorSwatches(map);
}

function populateAdminSpecialColorLinesFromProduct(product) {
    clearAdminSpecialColorLines();
    var map = sanitizeSpecialColorSwatchMap(product && product.specialColorSwatches);
    if (!map) {
        syncAdminSpecialColorSectionState();
        return;
    }

    Object.keys(map).forEach(function (colorName) {
        var entry = map[colorName];
        addAdminSpecialColorLine(
            colorName,
            entry.image,
            entry.fallbackColor,
            entry.sampleColor,
            entry.focusX,
            entry.focusY,
            entry.zoom,
            entry.media,
            entry.angles
        );
    });

    syncAdminSpecialColorFieldsFromLines();
    syncAdminSpecialColorSectionState();
}

function syncAdminSpecialColorSectionState() {
    var modeInput = document.getElementById('adminSpecialColorPicker');
    var section = document.querySelector('.admin-special-color-section');
    if (!section) return;

    var isSpecial = modeInput && modeInput.value === 'special';
    section.classList.toggle('is-disabled', !isSpecial);

    section.querySelectorAll('button, input, select, textarea').forEach(function (control) {
        if (control.id === 'adminSpecialColorPicker' || control.id === 'adminSpecialColorSwatches') return;
        control.disabled = !isSpecial;
    });
}

function setAdminFormMode(isEditing, productName) {
    var title = document.getElementById('adminProductFormTitle');
    var submitButton = document.querySelector('#adminProductForm .admin-primary-btn');
    if (!title || !submitButton) return;

    if (isEditing) {
        title.textContent = 'Edit Product' + (productName ? ': ' + productName : '');
        submitButton.textContent = 'Update Product';
    } else {
        title.textContent = 'Add Product';
        submitButton.textContent = 'Save Product';
    }
}

function getNextProductId() {
    var maxId = products.reduce(function (max, item) {
        return Math.max(max, Number(item.id) || 0);
    }, 0);
    return maxId + 1;
}

function parseCommaList(value) {
    return String(value || '')
        .split(',')
        .map(function (part) { return part.trim(); })
        .filter(function (part) { return part.length > 0; });
}

function parseMainImages(value) {
    // Returns { color: [url, url, ...] } — supports multiple mains per color
    // via pipe-separator so products without color variants can have galleries.
    var images = {};
    String(value || '').split(/[\n;]+/).forEach(function (entry) {
        var trimmed = entry.trim();
        if (!trimmed) return;
        var splitAt = trimmed.indexOf(':');
        if (splitAt <= 0) return;
        var label = trimmed.slice(0, splitAt).trim();
        var rawUrls = trimmed.slice(splitAt + 1).split('|').map(function (u) { return u.trim(); }).filter(Boolean);
        if (!label || rawUrls.length === 0) return;
        if (!images[label]) images[label] = [];
        rawUrls.forEach(function (url) {
            if (!images[label].includes(url)) images[label].push(url);
        });
    });
    return images;
}

function parseAngleImages(value) {
    var mediaByColor = {};
    String(value || '').split(/[\n;]+/).forEach(function (entry) {
        var trimmed = entry.trim();
        if (!trimmed) return;
        var splitAt = trimmed.indexOf(':');
        if (splitAt <= 0) return;
        var label = trimmed.slice(0, splitAt).trim();
        var urls = trimmed
            .slice(splitAt + 1)
            .split('|')
            .map(function (part) { return part.trim(); })
            .filter(function (part) { return part.length > 0; });
        if (!label || urls.length === 0) return;
        if (!mediaByColor[label]) mediaByColor[label] = [];
        urls.forEach(function (url) {
            if (!mediaByColor[label].includes(url)) mediaByColor[label].push(url);
        });
    });
    return mediaByColor;
}

function combineMainAndAngleImages(mainImages, angleImages) {
    var images = {};
    var mediaByColor = {};
    var mainImagesByColor = {}; // v11.1: Dedicated store for multiple mains to avoid string-fusion bugs
    var colorSet = new Set();

    Object.keys(mainImages || {}).forEach(function (color) { colorSet.add(color); });
    Object.keys(angleImages || {}).forEach(function (color) { colorSet.add(color); });

    colorSet.forEach(function (color) {
        // mainImages[color] is now an array (multiple mains supported).
        var mains = Array.isArray(mainImages && mainImages[color])
            ? mainImages[color]
            : (mainImages && mainImages[color] ? [mainImages[color]] : []);
        var angles = angleImages && Array.isArray(angleImages[color]) ? angleImages[color] : [];
        var list = [];

        mains.forEach(function (url) {
            if (url && !list.includes(url)) list.push(url);
        });
        angles.forEach(function (url) {
            if (url && !list.includes(url)) list.push(url);
        });

        if (list.length === 0) return;
        // v11.1: product.images stays a clean single-URL map for maximum compatibility.
        images[color] = mains.length > 0 ? mains[0] : list[0];
        mediaByColor[color] = list;
        mainImagesByColor[color] = mains;
    });

    return {
        images: images,
        mediaByColor: Object.keys(mediaByColor).length > 0 ? mediaByColor : null,
        mainImagesByColor: Object.keys(mainImagesByColor).length > 0 ? mainImagesByColor : null
    };
}

function serializeMainImages(images, mediaByColor, mainImagesByColor) {
    var parts = [];
    var colorSet = new Set();
    Object.keys(mainImagesByColor || {}).forEach(function (color) { colorSet.add(color); });
    // Fallback for legacy products
    if (colorSet.size === 0) {
        Object.keys(images || {}).forEach(function (color) { colorSet.add(color); });
    }

    colorSet.forEach(function (color) {
        var mains = mainImagesByColor && mainImagesByColor[color] ? mainImagesByColor[color] : [];
        if (mains.length === 0 && images && images[color]) {
            mains = [images[color]];
        }
        if (mains.length > 0) {
            parts.push(color + ':' + mains.join('|'));
        }
    });
    return parts.join(';');
}

function serializeAngleImages(images, mediaByColor, mainImagesByColor) {
    var parts = [];
    var colorSet = new Set();
    Object.keys(mediaByColor || {}).forEach(function (color) { colorSet.add(color); });

    colorSet.forEach(function (color) {
        var mains = mainImagesByColor && mainImagesByColor[color] ? mainImagesByColor[color] : [];
        if (mains.length === 0 && images && images[color]) {
            mains = String(images[color]).split('|').map(function (u) { return u.trim(); }).filter(Boolean);
        }

        var list = mediaByColor && Array.isArray(mediaByColor[color]) ? mediaByColor[color].slice() : [];

        var angles = list.filter(function (url) {
            if (!url) return false;
            // Angle is anything in mediaByColor that IS NOT in the main list
            return !mains.includes(url);
        });

        if (angles.length > 0) {
            parts.push(color + ':' + angles.join('|'));
        }
    });

    return parts.join(';');
}

function parseColorMap(value) {
    var map = {};
    String(value || '').split(';').forEach(function (entry) {
        var trimmed = entry.trim();
        if (!trimmed) return;
        var splitAt = trimmed.indexOf(':');
        if (splitAt <= 0) return;
        var name = trimmed.slice(0, splitAt).trim();
        var hex = trimmed.slice(splitAt + 1).trim();
        if (name && /^#[0-9a-fA-F]{6}$/.test(hex)) {
            map[name] = hex.toLowerCase();
        }
    });
    return Object.keys(map).length > 0 ? map : null;
}

function sanitizeColorStyleConfig(config) {
    if (!config || typeof config !== 'object') return null;
    var mode = normalizeColorMode(config.mode);
    var direction = ['to bottom', 'to right', '45deg', '135deg'].includes(config.direction) ? config.direction : 'to bottom';
    var tones = [];

    if (Array.isArray(config.tones)) {
        config.tones.forEach(function (tone) {
            var normalized = String(tone || '').trim().toLowerCase();
            if (/^#[0-9a-fA-F]{6}$/.test(normalized)) {
                tones.push(normalized);
            }
        });
    }

    if (tones.length === 0) {
        var legacyTones = [config.color1, config.color2, config.color3, config.color4];
        legacyTones.forEach(function (tone) {
            var normalized = String(tone || '').trim().toLowerCase();
            if (/^#[0-9a-fA-F]{6}$/.test(normalized)) {
                tones.push(normalized);
            }
        });
    }

    if (tones.length === 0) return null;

    if (mode === 'solid') {
        tones = tones.slice(0, 1);
    } else if (mode === 'split-2') {
        tones = tones.slice(0, 2);
    } else if (mode === 'split-3') {
        tones = tones.slice(0, 3);
    } else if (mode === 'split-4') {
        tones = tones.slice(0, 4);
    } else {
        tones = tones.slice(0, 4);
    }
    var color1 = tones[0];
    var color2 = tones[1] || tones[0];
    var color3 = tones[2] || tones[tones.length - 1];
    var color4 = tones[3] || tones[tones.length - 1];

    return {
        mode: mode,
        direction: direction,
        tones: tones,
        color1: color1,
        color2: color2,
        color3: color3,
        color4: color4
    };
}

function normalizeColorMode(mode) {
    var normalized = String(mode || '').trim().toLowerCase();
    if (normalized === 'split') return 'split-2';
    if (['solid', 'split-2', 'split-3', 'split-4', 'gradient'].includes(normalized)) return normalized;
    return 'solid';
}

function getToneCountForMode(mode) {
    var normalized = normalizeColorMode(mode);
    if (normalized === 'solid') return 1;
    if (normalized === 'split-2') return 2;
    if (normalized === 'split-3') return 3;
    return 4;
}

function updateAdminColorLineVisibility(line) {
    if (!line) return;
    var modeSelect = line.querySelector('.admin-color-mode');
    if (!modeSelect) return;

    var mode = normalizeColorMode(modeSelect.value);
    if (modeSelect.value !== mode) modeSelect.value = mode;
    var visibleToneCount = getToneCountForMode(mode);

    ['.admin-color-1', '.admin-color-2', '.admin-color-3', '.admin-color-4'].forEach(function (selector, index) {
        var input = line.querySelector(selector);
        if (!input) return;
        var show = index < visibleToneCount;
        input.style.display = show ? '' : 'none';
        input.disabled = !show;
    });
}

function isSplitColorMode(mode) {
    var normalized = normalizeColorMode(mode);
    return normalized === 'split-2' || normalized === 'split-3' || normalized === 'split-4';
}

function parseColorStyleMap(value) {
    if (!value) return null;
    try {
        var parsed = JSON.parse(value);
        if (!parsed || typeof parsed !== 'object') return null;
        var map = {};
        Object.keys(parsed).forEach(function (name) {
            var config = sanitizeColorStyleConfig(parsed[name]);
            if (config) map[name] = config;
        });
        return Object.keys(map).length > 0 ? map : null;
    } catch (e) {
        return null;
    }
}

function serializeColorStyleMap(map) {
    if (!map || typeof map !== 'object') return '';
    var sanitized = {};
    Object.keys(map).forEach(function (name) {
        var config = sanitizeColorStyleConfig(map[name]);
        if (config) sanitized[name] = config;
    });
    return Object.keys(sanitized).length > 0 ? JSON.stringify(sanitized) : '';
}

function serializeColorMap(map) {
    if (!map) return '';
    var parts = [];
    Object.keys(map).forEach(function (name) {
        var hex = String(map[name] || '').trim();
        if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
            parts.push(name + ':' + hex.toLowerCase());
        }
    });
    return parts.join(';');
}

function addAdminSwatch() {
    var nameInput = document.getElementById('adminSwatchName');
    var colorInput = document.getElementById('adminSwatchPicker');
    var mapInput = document.getElementById('adminColorMap');
    if (!nameInput || !colorInput || !mapInput) return;

    var name = nameInput.value.trim();
    var hex = String(colorInput.value || '').trim().toLowerCase();
    if (!name) {
        showToast('Enter a color name first');
        return;
    }
    if (!/^#[0-9a-fA-F]{6}$/.test(hex)) {
        showToast('Pick a valid color');
        return;
    }

    var lines = Array.from(document.querySelectorAll('.admin-color-line'));
    var existingLine = lines.find(function (line) {
        var n = line.querySelector('.admin-color-name');
        return n && n.value.trim().toLowerCase() === name.toLowerCase();
    });
    if (existingLine) {
        var existingHex = existingLine.querySelector('.admin-color-1');
        if (existingHex) existingHex.value = hex;
        var existingHex2 = existingLine.querySelector('.admin-color-2');
        if (existingHex2) existingHex2.value = hex;
        var existingHex3 = existingLine.querySelector('.admin-color-3');
        if (existingHex3) existingHex3.value = hex;
        var existingHex4 = existingLine.querySelector('.admin-color-4');
        if (existingHex4) existingHex4.value = hex;
        var existingMode = existingLine.querySelector('.admin-color-mode');
        if (existingMode) existingMode.value = 'solid';
        syncAdminColorFieldsFromLines();
    } else {
        addAdminColorLine(name, hex, 'solid', hex, hex, hex, 'to bottom');
    }
    nameInput.value = '';
}

function parseOptions(value) {
    var options = {};
    String(value || '').split(';').forEach(function (entry) {
        var trimmed = entry.trim();
        if (!trimmed) return;
        var splitAt = trimmed.indexOf(':');
        if (splitAt <= 0) return;
        var name = trimmed.slice(0, splitAt).trim();
        var values = trimmed.slice(splitAt + 1).split('|').map(function (part) {
            return part.trim();
        }).filter(function (part) {
            return part.length > 0;
        });
        if (name && values.length > 0) options[name] = values;
    });
    return Object.keys(options).length > 0 ? options : null;
}

function serializeOptions(options) {
    if (!options) return '';
    var parts = [];
    Object.keys(options).forEach(function (name) {
        var value = options[name];
        if (Array.isArray(value)) {
            parts.push(name + ':' + value.join('|'));
        } else if (value) {
            parts.push(name + ':' + String(value));
        }
    });
    return parts.join(';');
}

function formatDate(isoDate) {
    var date = new Date(isoDate);
    if (isNaN(date.getTime())) return '-';
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Sorting
function sortProducts() {
    var sortValue = document.getElementById('sortSelect').value;
    if (sortValue === 'best') {
        persistBrowseUiState();
        renderProducts();
        return;
    }

    filteredProducts.sort(function (a, b) {
        switch (sortValue) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'newest':
                return b.id - a.id;
            case 'popular':
                return b.sold - a.sold;
            default:
                return 0;
        }
    });

    persistBrowseUiState();
    renderProducts();
}

// View Toggle
function setView(view) {
    currentView = view === 'list' ? 'list' : 'grid';
    applyCurrentViewToUi();
    persistBrowseUiState();
    renderProducts();
}

// Image Helpers
function getProductImagePool(product) {
    if (!product) return [];
    var pool = [];
    var seen = new Set();
    var add = function (u) {
        if (u && typeof u === 'string' && !seen.has(u)) {
            pool.push(u);
            seen.add(u);
        }
    };
    if (product.images) Object.keys(product.images).forEach(function (k) { add(product.images[k]); });
    if (product.mediaByColor) Object.keys(product.mediaByColor).forEach(function (k) {
        if (Array.isArray(product.mediaByColor[k])) product.mediaByColor[k].forEach(add);
    });
    if (product.mainImagesByColor) Object.keys(product.mainImagesByColor).forEach(function (k) {
        if (Array.isArray(product.mainImagesByColor[k])) product.mainImagesByColor[k].forEach(add);
    });
    return pool;
}

function getProductMainImagesForColor(product, color) {
    if (!product) return [];
    var resolvedColor = resolveColorKey(product, color);
    var pool = getProductImagePool(product);
    var mains = [];
    var seen = new Set();
    var add = function (url) {
        if (!url || typeof url !== 'string') return;
        if (!pool.includes(url) || seen.has(url)) return;
        mains.push(url);
        seen.add(url);
    };

    var specConfig = getSpecialColorSwatchConfig(product, resolvedColor || color);
    if (specConfig && Array.isArray(specConfig.media)) {
        specConfig.media.forEach(add);
    }

    if (resolvedColor && product.mainImagesByColor && Array.isArray(product.mainImagesByColor[resolvedColor])) {
        product.mainImagesByColor[resolvedColor].forEach(add);
    }

    if (resolvedColor && product.images && product.images[resolvedColor]) {
        add(product.images[resolvedColor]);
    }

    return mains;
}

function getProductMainImages(product) {
    if (!product) return [];

    // v13: Filter against live image pool to prevent ghost images
    var pool = getProductImagePool(product);

    // v11.7: Improved Special Color Card Rotation
    var swatches = product.specialColorSwatches || null;
    if (swatches && typeof swatches === 'object') {
        var swatchKeys = Object.keys(swatches);
        if (swatchKeys.length > 1) {
            // Multi-color Special: 1 image per swatch
            return swatchKeys.map(function (k) {
                var mainList = getProductMainImagesForColor(product, k);
                if (mainList.length > 0) return mainList[0];
                var entry = swatches[k];
                var img = entry && entry.image ? entry.image : '';
                return (img && pool.includes(img)) ? img : '';
            }).filter(Boolean);
        } else if (swatchKeys.length === 1) {
            // Single-color Special: rotate through mains only (exclude angles).
            var specialMains = getProductMainImagesForColor(product, swatchKeys[0]);
            if (specialMains.length > 0) return specialMains;
        }
    }

    var images = (product && product.images) || {};
    var allMain = [];
    var seenMain = new Set();

    if (product.mainImagesByColor) {
        Object.keys(product.mainImagesByColor).forEach(function (color) {
            var mainList = product.mainImagesByColor[color];
            if (!Array.isArray(mainList)) return;
            mainList.forEach(function (url) {
                if (url && !seenMain.has(url) && pool.includes(url)) {
                    allMain.push(url);
                    seenMain.add(url);
                }
            });
        });
    }

    Object.keys(images).forEach(function (color) {
        var url = images[color];
        if (url && !seenMain.has(url) && pool.includes(url)) {
            allMain.push(url);
            seenMain.add(url);
        }
    });

    return allMain.length > 0 ? allMain : [images.Default || 'https://via.placeholder.com/600?text=Product'];
}

function getProductCardImageIndex(productId, imageCount) {
    var key = String(productId);
    var current = productCardImageIndexById[key];
    if (typeof current !== 'number' || isNaN(current)) {
        current = imageCount > 1 ? (Number(productId) % imageCount) : 0;
    }
    current = ((current % imageCount) + imageCount) % imageCount;
    productCardImageIndexById[key] = current;
    return current;
}

function stopProductCardImageRotation() {
    if (productCardRotateTimer) {
        clearTimeout(productCardRotateTimer);
        productCardRotateTimer = null;
    }
}

function rotateOneProductCardImage(img) {
    if (!img) return;
    var productId = Number(img.dataset.productId);
    if (isNaN(productId)) return;
    var product = products.find(function (item) { return Number(item.id) === productId; });
    if (!product) return;

    var images = getProductMainImages(product);
    if (images.length <= 1) return;

    var current = Number(img.dataset.imageIndex);
    if (isNaN(current)) current = getProductCardImageIndex(productId, images.length);
    var next = (current + 1) % images.length;
    var nextSrc = images[next];
    if (!nextSrc) return;

    img.classList.add('is-switching');
    setTimeout(function () {
        img.src = nextSrc;
        img.dataset.imageIndex = String(next);
        productCardImageIndexById[String(productId)] = next;
        img.classList.remove('is-switching');
    }, 130);
}

function startProductCardImageRotation() {
    stopProductCardImageRotation();
    var images = Array.from(document.querySelectorAll('.js-rotating-product-image'));
    if (!images.length) return;

    var hasAnyMultiImageProduct = images.some(function (img) {
        var productId = Number(img.dataset.productId);
        if (isNaN(productId)) return false;
        var product = products.find(function (item) { return Number(item.id) === productId; });
        return product && getProductMainImages(product).length > 1;
    });
    if (!hasAnyMultiImageProduct) return;

    productCardRotateTimer = setTimeout(function () {
        // Persistence: Ticks even if advancement is skipped due to hidden tab.
        if (!document.hidden) {
            try {
                images.forEach(rotateOneProductCardImage);
            } catch (e) {
                console.error('Product card rotation error:', e);
            }
        }
        startProductCardImageRotation();
    }, PRODUCT_CARD_ROTATE_DELAY_MS);
}

// Product Modal
function openProductModal(id) {
    var modalProductId = Number(id);
    if (isFinite(modalProductId)) {
        currentProduct = products.find(function (p) { return Number(p.id) === modalProductId; });
    } else {
        currentProduct = products.find(function (p) { return String(p.id) === String(id); });
    }
    if (!currentProduct) return;
    hydrateProductSpecialColorStateFromDirect(currentProduct);

    selectedVariants = {};
    quantity = 1;
    modalCarouselDirty = false;
    setSpecialColorPickMode(false);
    var stateKey = getSpecialColorStateKey(currentProduct);
    var defaultColor = getDefaultColor(currentProduct);
    var reopenState = getModalReopenState(currentProduct);
    var modalUiState = getModalUiState(currentProduct);
    var modalV2State = getModalSelectionV2(currentProduct);
    var modalV3State = getModalSelectionV3(currentProduct);
    var savedLastImage = getSavedModalLastImage(currentProduct);
    var pinnedImage = getModalPinnedImage(currentProduct, defaultColor);
    if (reopenState && reopenState.image && !savedLastImage) {
        savedLastImage = String(reopenState.image).trim();
    }
    if (currentProduct && currentProduct.modalLastColor) {
        defaultColor = String(currentProduct.modalLastColor).trim() || defaultColor;
    }
    if (stateKey && specialColorLastColorByProductKey[stateKey]) {
        defaultColor = String(specialColorLastColorByProductKey[stateKey]).trim() || defaultColor;
    }
    if (isSpecialColorPickerEnabled(currentProduct) && currentProduct.specialColorLastColor) {
        defaultColor = String(currentProduct.specialColorLastColor).trim() || defaultColor;
    }
    if (modalUiState && modalUiState.selectedColor) {
        defaultColor = String(modalUiState.selectedColor).trim() || defaultColor;
    }
    var persistedModalColor = getSavedModalSelectedColor(currentProduct);
    if (persistedModalColor) {
        defaultColor = persistedModalColor;
    }
    if (!persistedModalColor && reopenState && reopenState.color) {
        defaultColor = String(reopenState.color).trim() || defaultColor;
    }
    var hasV2Color = false;
    if (modalV2State && modalV2State.lastColor) {
        defaultColor = String(modalV2State.lastColor).trim() || defaultColor;
        hasV2Color = true;
    }
    if (modalV3State && modalV3State.color) {
        defaultColor = String(modalV3State.color).trim() || defaultColor;
    }
    var inferredColorFromUiImage = (!hasV2Color && modalUiState && modalUiState.selectedImage)
        ? findColorForMediaImage(currentProduct, String(modalUiState.selectedImage).trim())
        : '';
    if (inferredColorFromUiImage) {
        defaultColor = inferredColorFromUiImage;
    }
    defaultColor = getCanonicalColorValue(currentProduct, defaultColor) || defaultColor;
    if (defaultColor) {
        selectedVariants.Color = defaultColor;
    } else if (isSpecialColorPickerEnabled(currentProduct)) {
        var specialDefaultColor = getDefaultSpecialColorValue(currentProduct);
        if (specialDefaultColor) {
            selectedVariants.Color = specialDefaultColor;
            defaultColor = specialDefaultColor;
        }
    }
    applySavedSpecialColorOnOpen(currentProduct, selectedVariants.Color || defaultColor);
    specialColorDebugLog('openModal', {
        productId: currentProduct.id,
        productName: currentProduct.name,
        defaultColor: defaultColor,
        selectedColor: selectedVariants.Color || null,
        lastColor: currentProduct.specialColorLastColor || null,
        stateKey: getSpecialColorStateKey(currentProduct),
        persistedModalColor: persistedModalColor || null,
        reopenState: reopenState || null,
        modalUiState: modalUiState || null,
        pinnedImage: pinnedImage || null,
        savedLastImage: savedLastImage || null
    });

    document.getElementById('modalProductName').textContent = currentProduct.name;
    document.getElementById('modalCategory').textContent = currentProduct.category;
    document.getElementById('modalBreadcrumbName').textContent = currentProduct.name;
    document.getElementById('modalPrice').textContent = '$' + currentProduct.price;
    document.getElementById('modalOriginalPrice').textContent = '$' + currentProduct.originalPrice;

    var savings = currentProduct.originalPrice - currentProduct.price;
    var savingsPercent = Math.round((savings / currentProduct.originalPrice) * 100);
    document.getElementById('modalSavings').textContent = 'Save $' + savings + ' (' + savingsPercent + '% off)';

    var stars = '*'.repeat(Math.floor(currentProduct.rating)) + '-'.repeat(5 - Math.floor(currentProduct.rating));
    document.getElementById('modalStars').textContent = stars;
    document.getElementById('modalRatingCount').textContent = currentProduct.reviews + ' reviews';
    document.getElementById('modalSoldCount').textContent = currentProduct.sold + ' sold';
    document.getElementById('modalItemNumber').textContent = '#' + currentProduct.id.toString().padStart(6, '0');
    document.getElementById('qtyDisplay').textContent = quantity;

    updateStockInfo();

    // Images and carousel
    var initialMedia = getProductMediaForColor(currentProduct, defaultColor);
    var initialIndex = -1;
    if (modalV3State && Array.isArray(initialMedia) && initialMedia.length > 0) {
        if (modalV3State.image) {
            var v3ByImage = findMediaIndexByUrl(initialMedia, String(modalV3State.image).trim());
            if (v3ByImage >= 0) initialIndex = v3ByImage;
        }
        if (initialIndex < 0 && isFinite(Number(modalV3State.index))) {
            initialIndex = Math.max(0, Math.min(Number(modalV3State.index), Math.max(0, initialMedia.length - 1)));
        }
    }
    var v2Index = getModalSelectionV2Index(currentProduct, defaultColor, initialMedia);
    if (v2Index >= 0) initialIndex = v2Index;
    var uiStateColor = modalUiState && modalUiState.selectedColor
        ? String(getCanonicalColorValue(currentProduct, modalUiState.selectedColor) || modalUiState.selectedColor || '').trim().toLowerCase()
        : '';
    var activeColorKey = String(getCanonicalColorValue(currentProduct, defaultColor) || defaultColor || '').trim().toLowerCase();
    var uiStateMatchesColor = !uiStateColor || !activeColorKey || uiStateColor === activeColorKey;
    if (uiStateMatchesColor && modalUiState && isFinite(Number(modalUiState.selectedIndex)) && Array.isArray(initialMedia) && initialMedia.length > 0) {
        initialIndex = Math.max(0, Math.min(Number(modalUiState.selectedIndex), Math.max(0, initialMedia.length - 1)));
    }
    if (initialIndex < 0 && uiStateMatchesColor && modalUiState && modalUiState.selectedImage && Array.isArray(initialMedia) && initialMedia.length > 0) {
        var uiImageIndex = findMediaIndexByUrl(initialMedia, String(modalUiState.selectedImage).trim());
        if (uiImageIndex >= 0) initialIndex = uiImageIndex;
    }
    if (initialIndex < 0 && reopenState && reopenState.color && String(reopenState.color).trim().toLowerCase() === String(defaultColor || '').trim().toLowerCase() && reopenState.image && Array.isArray(initialMedia) && initialMedia.length > 0) {
        var reopenImageIndex = findMediaIndexByUrl(initialMedia, String(reopenState.image).trim());
        if (reopenImageIndex >= 0) initialIndex = reopenImageIndex;
    }
    if (initialIndex < 0) {
        initialIndex = getSavedModalCarouselIndex(currentProduct, defaultColor, initialMedia);
    }
    if (initialIndex < 0 && reopenState && reopenState.color && String(reopenState.color).trim().toLowerCase() === String(defaultColor || '').trim().toLowerCase() && isFinite(Number(reopenState.index))) {
        initialIndex = Math.max(0, Math.min(Number(reopenState.index), Math.max(0, initialMedia.length - 1)));
    }
    if (initialIndex < 0) initialIndex = 0;
    setModalCarouselImages(initialMedia, initialIndex, { persist: false });
    modalCarouselDirty = false;

    // Description
    document.getElementById('modalDescription').textContent = currentProduct.description;

    if (currentProduct.features) {
        var featHtml = '';
        currentProduct.features.forEach(function (feature) {
            featHtml += '<li>' + feature + '</li>';
        });
        document.getElementById('modalFeatures').innerHTML = featHtml;
    }

    renderRelatedItems(currentProduct);

    // Variants
    var hasColorOptions = false;
    if (currentProduct.options) {
        var varHtml = '';
        Object.keys(currentProduct.options).forEach(function (optionName) {
            var values = currentProduct.options[optionName];
            varHtml += '<div class="variant-section">';
            varHtml += '<div class="variant-title">';
            varHtml += '<span>' + optionName + '</span>';
            varHtml += '<span class="variant-selected" id="selected' + optionName + '">Please select</span>';
            varHtml += '</div>';

            if (optionName === 'Color' && Array.isArray(values) && values.length > 0) {
                hasColorOptions = true;
                varHtml += '<div class="color-options">';
                values.forEach(function (value) {
                    var img = getColorPreviewImage(currentProduct, value);
                    var swatchStyle = getColorOptionStyle(currentProduct, value, img);
                    var isActiveColor = defaultColor && value === defaultColor;
                    varHtml += '<button type="button" class="color-option' + (isActiveColor ? ' active' : '') + '" style="' + swatchStyle + '" data-option="' + optionName + '" data-value="' + value + '" title="' + value + '"></button>';
                });
                varHtml += '</div>';
            } else {
                varHtml += '<div class="variant-options">';
                values.forEach(function (value) {
                    var unavailable = optionName === 'Size' && currentProduct.stock < 3;
                    varHtml += '<button class="variant-btn' + (unavailable ? ' unavailable' : '') + '" data-option="' + optionName + '" data-value="' + value + '">' + value + '</button>';
                });
                varHtml += '</div>';
            }
            varHtml += '</div>';
        });
        document.getElementById('modalVariants').innerHTML = varHtml;
        if (defaultColor && document.getElementById('selectedColor')) {
            document.getElementById('selectedColor').textContent = defaultColor;
        }
    } else {
        document.getElementById('modalVariants').innerHTML = '';
    }
    renderSpecialColorPicker(defaultColor);

    syncProductQueryParam(currentProduct.id);
    rememberFocusForModal('productModal');
    document.getElementById('productModal').classList.add('open');
    document.body.style.overflow = 'hidden';
    focusFirstElementIn(document.getElementById('productModal'), '.modal-header .close-btn');

    // Hero Carousel is now completely independent and manages its own heartbeat.
    stopModalCarouselAutoplay();
}

function closeProductModal() {
    if (currentProduct) {
        var selectedColor = getCurrentSpecialColorValue(currentProduct);
        var mainImageNode = document.getElementById('mainImage');
        var activeMainImage = mainImageNode && (mainImageNode.currentSrc || mainImageNode.src)
            ? String(mainImageNode.currentSrc || mainImageNode.src).trim()
            : '';
        var activeColor = selectedColor || selectedVariants.Color || getDefaultColor(currentProduct);
        if (activeMainImage) {
            var inferredFromMainImage = findColorForMediaImage(currentProduct, activeMainImage);
            if (inferredFromMainImage) activeColor = inferredFromMainImage;
        }
        saveModalCarouselIndex(
            currentProduct,
            activeColor,
            modalCarouselIndex
        );
        saveModalSelectedColor(currentProduct, activeColor);
        if (activeMainImage) {
            var mediaForActiveColor = getProductMediaForColor(currentProduct, activeColor);
            var resolvedIndex = findMediaIndexByUrl(mediaForActiveColor, activeMainImage);
            if (resolvedIndex >= 0 && resolvedIndex !== modalCarouselIndex) {
                saveModalCarouselIndex(currentProduct, activeColor, resolvedIndex);
            }
            saveModalPinnedImage(currentProduct, activeColor, activeMainImage);
            saveModalLastImage(currentProduct, activeMainImage);
            updateModalUiState(currentProduct, {
                selectedColor: activeColor,
                selectedImage: activeMainImage
            });
        }
        var hexNode = document.getElementById('specialColorSampleHex');
        var visibleHex = hexNode ? String(hexNode.textContent || '').trim() : '';
        if (selectedColor && /^#[0-9a-fA-F]{6}$/.test(visibleHex)) {
            var visibleConfig = ensureSpecialColorSwatchConfig(currentProduct, selectedColor);
            if (visibleConfig) {
                visibleConfig.sampleColor = visibleHex.toUpperCase();
                setSpecialColorSampleStateV3Entry(currentProduct, [selectedColor, resolveColorKey(currentProduct, selectedColor), 'Default', 'default'], visibleConfig);
            }
        }
        specialColorDebugLog('closeModal.beforePersist', {
            productId: currentProduct.id,
            selectedColor: selectedColor,
            lastColor: currentProduct.specialColorLastColor || null
        });
        persistSpecialColorStateForProduct(currentProduct);
    }
    document.getElementById('productModal').classList.remove('open');
    syncProductQueryParam(null);
    document.body.style.overflow = '';
    setSpecialColorPickMode(false);
    modalCarouselDirty = false;
    closeProductVideo();
    closeProductModel();
    stopModalCarouselAutoplay();
    // Heavy-duty re-kick for Product Cards only: 650ms safety window.
    // Hero heartbeat continues independently without explicit re-kick.
    productCardRotateTimer = setTimeout(function () {
        startProductCardImageRotation();
    }, 650);
    restoreFocusForModal('productModal');
}

function syncProductQueryParam(productId) {
    if (!window.history || typeof window.history.replaceState !== 'function') return;
    var url = new URL(window.location.href);
    if (productId === null || typeof productId === 'undefined' || productId === '') {
        url.searchParams.delete('product');
    } else {
        url.searchParams.set('product', String(productId));
    }
    window.history.replaceState(window.history.state, '', url.toString());
}

function buildProductShareUrl(product) {
    var url = new URL(window.location.href);
    if (product && product.id) {
        url.searchParams.set('product', String(product.id));
    }
    return url.toString();
}

async function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (e) { }
    }

    var textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();

    var copied = false;
    try {
        copied = document.execCommand('copy');
    } catch (e) {
        copied = false;
    }

    document.body.removeChild(textArea);
    return copied;
}

async function shareCurrentProduct() {
    if (!currentProduct) return;

    var shareUrl = buildProductShareUrl(currentProduct);
    var shareData = {
        title: currentProduct.name,
        text: 'Check out this item on IG: ' + currentProduct.name + ' - $' + Number(currentProduct.price).toFixed(2),
        url: shareUrl
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
            showToast('Product shared');
            return;
        } catch (error) {
            if (error && error.name === 'AbortError') return;
        }
    }

    var copied = await copyTextToClipboard(shareUrl);
    if (copied) {
        showToast('Share link copied');
        return;
    }

    showToast('Unable to copy share link');
}

function openProductFromUrlIfPresent() {
    var params = new URLSearchParams(window.location.search);
    var productParam = params.get('product');
    if (!productParam) return;

    if (!/^\d+$/.test(productParam)) {
        syncProductQueryParam(null);
        return;
    }
    var productId = Number(productParam);

    var productExists = products.some(function (product) { return Number(product.id) === productId; });
    if (!productExists) {
        syncProductQueryParam(null);
        return;
    }

    openProductModal(productId);
}

function selectVariant(optionName, value) {
    selectedVariants[optionName] = value;

    var label = document.getElementById('selected' + optionName);
    if (label) label.textContent = value;

    document.querySelectorAll('[data-option="' + optionName + '"]').forEach(function (btn) {
        btn.classList.remove('active');
        if (btn.dataset.value === value) {
            btn.classList.add('active');
        }
    });

    if (optionName === 'Color') {
        saveModalSelectedColor(currentProduct, value);
        updateModalUiState(currentProduct, { selectedColor: value });
        var media = getProductMediaForColor(currentProduct, value);
        saveModalSelectionV3(currentProduct, value, 0, (Array.isArray(media) && media[0]) ? media[0] : '');
        var startIndex = getModalSelectionV2Index(currentProduct, value, media);
        var v3State = getModalSelectionV3(currentProduct);
        if (v3State && (String(getCanonicalColorValue(currentProduct, v3State.color || value) || '').toLowerCase() === String(getCanonicalColorValue(currentProduct, value) || value).toLowerCase())) {
            if (v3State.image && Array.isArray(media) && media.length > 0) {
                var v3ImageIndex = findMediaIndexByUrl(media, String(v3State.image).trim());
                if (v3ImageIndex >= 0) startIndex = v3ImageIndex;
            } else if (isFinite(Number(v3State.index))) {
                startIndex = Math.max(0, Math.min(Number(v3State.index), Math.max(0, media.length - 1)));
            }
        }
        if (startIndex < 0) {
            startIndex = getSavedModalCarouselIndex(currentProduct, value, media);
        }
        setModalCarouselImages(media, startIndex, { persist: false });
        modalCarouselDirty = false;
        if (isSpecialColorPickerEnabled(currentProduct)) {
            currentProduct.specialColorLastColor = value;
            var key = getSpecialColorStateKey(currentProduct);
            if (key) {
                specialColorLastColorByProductKey[key] = value;
                var aliases = getSpecialColorStateAliases(currentProduct);
                aliases.forEach(function (alias) {
                    specialColorLastColorByProductKey[alias] = value;
                });
                saveSpecialColorStateToStorage();
            }
            setSpecialColorPickMode(false);
            syncSpecialColorPickerUI();
        }
    }
}

function getColorPreviewImage(product, color) {
    if (!product) return 'https://via.placeholder.com/120?text=Color';
    var resolvedColor = resolveColorKey(product, color);

    // Special color check first — they may have their own specific gallery
    var specConfig = getSpecialColorSwatchConfig(product, resolvedColor || color);
    if (specConfig && Array.isArray(specConfig.media) && specConfig.media.length > 0) {
        return specConfig.media[0];
    }

    // v11.2: Check mainImagesByColor map first (supported multiple mains)
    if (resolvedColor && product.mainImagesByColor && Array.isArray(product.mainImagesByColor[resolvedColor]) && product.mainImagesByColor[resolvedColor].length > 0) {
        return product.mainImagesByColor[resolvedColor][0];
    }

    if (resolvedColor && product.mediaByColor && Array.isArray(product.mediaByColor[resolvedColor]) && product.mediaByColor[resolvedColor].length > 0) {
        return product.mediaByColor[resolvedColor][0];
    }
    if (resolvedColor && product.images && product.images[resolvedColor]) {
        return product.images[resolvedColor];
    }
    var fallback = (product.mainImagesByColor && Object.values(product.mainImagesByColor)[0] && Object.values(product.mainImagesByColor)[0][0]) || Object.values(product.images || {})[0];
    return fallback || 'https://via.placeholder.com/120?text=Color';
}

function resolveSpecialColorImage(product, color, config) {
    var savedImage = config && config.image ? String(config.image).trim() : '';
    if (savedImage) return savedImage;
    var previewImage = getColorPreviewImage(product, color);
    return String(previewImage || '').trim();
}

function getColorOptionStyle(product, color, previewImage) {
    var resolvedColor = resolveColorKey(product, color);
    var specialConfig = getSpecialColorSwatchConfig(product, resolvedColor || color);
    if (specialConfig) {
        // Render the picked sample region (focus + zoom) for special color swatches.
        var baseHex = String(specialConfig.sampleColor || getFallbackColorHex(product, color, resolvedColor || color) || '#D9D9D9').trim().toUpperCase();
        if (!/^#[0-9A-F]{6}$/.test(baseHex)) baseHex = '#D9D9D9';
        var samplePreview = resolveSpecialColorImage(product, resolvedColor || color, specialConfig)
            || String(previewImage || getColorPreviewImage(product, resolvedColor || color) || '').trim();
        var focusX = clampNumber(specialConfig.focusX, 0, 100);
        var focusY = clampNumber(specialConfig.focusY, 0, 100);
        var zoom = Math.max(100, Number(specialConfig.zoom) || SPECIAL_COLOR_SWATCH_DEFAULT_ZOOM);
        var style = 'background-color:' + baseHex + ';';
        if (samplePreview) {
            style += 'background-image:url("' + escapeCssUrl(samplePreview) + '");';
            style += 'background-size:' + formatPercent(zoom) + '%;';
            style += 'background-position:' + formatPercent(focusX) + '% ' + formatPercent(focusY) + '%;';
            style += 'background-repeat:no-repeat;';
        } else {
            style += 'background-image:none;';
        }
        return style;
    }
    var styleConfig = product && product.colorStyleByName && resolvedColor
        ? sanitizeColorStyleConfig(product.colorStyleByName[resolvedColor])
        : null;

    if (styleConfig) {
        var tones = Array.isArray(styleConfig.tones) && styleConfig.tones.length > 0
            ? styleConfig.tones
            : [styleConfig.color1, styleConfig.color2].filter(Boolean);
        if (tones.length === 0) {
            tones = ['#d9d9d9'];
        }
        if (isSplitColorMode(styleConfig.mode)) {
            return 'background-image:linear-gradient(' + styleConfig.direction + ', ' + buildSplitColorStops(tones) + ');background-color:' + tones[0] + ';';
        }
        if (styleConfig.mode === 'gradient') {
            return 'background-image:linear-gradient(' + styleConfig.direction + ', ' + buildGradientColorStops(tones) + ');background-color:' + tones[0] + ';';
        }
        return 'background-color:' + tones[0] + ';background-image:none;';
    }

    var hex = product && product.colorHexByName && resolvedColor ? product.colorHexByName[resolvedColor] : '';
    if (!hex || !/^#[0-9a-fA-F]{6}$/.test(hex)) {
        hex = inferHexFromColorName(resolvedColor || color);
    }
    return 'background-color:' + hex + ';background-image:none;';
}

function clampNumber(value, min, max) {
    var numeric = Number(value);
    if (!isFinite(numeric)) numeric = min;
    return Math.min(max, Math.max(min, numeric));
}

function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(function (channel) {
        return Number(channel).toString(16).padStart(2, '0');
    }).join('').toUpperCase();
}

function escapeCssUrl(value) {
    return String(value || '')
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"');
}

function sanitizeSpecialColorSwatchEntry(entry, validUrls) {
    if (!entry || typeof entry !== 'object') return null;

    var getCleanUrls = function (input) {
        var urls = [];
        if (Array.isArray(input)) {
            urls = input.filter(Boolean).map(function (u) { return String(u).trim(); });
        } else {
            urls = String(input || '').split('|').map(function (u) { return u.trim(); }).filter(Boolean);
        }
        if (validUrls && Array.isArray(validUrls)) {
            return urls.filter(function (u) { return validUrls.includes(u); });
        }
        return urls;
    };

    var media = getCleanUrls(entry.media);
    var images = getCleanUrls(entry.image);
    var angles = getCleanUrls(entry.angles);

    images.reverse().forEach(function (u) {
        if (u && !media.includes(u)) media.unshift(u);
    });

    var fallbackColor = String(entry.fallbackColor || '').trim();
    var sampleColor = String(entry.sampleColor || '').trim();
    if (!/^#[0-9a-fA-F]{6}$/.test(fallbackColor)) fallbackColor = '#d9d9d9';
    if (!/^#[0-9a-fA-F]{6}$/.test(sampleColor)) sampleColor = fallbackColor;

    return {
        image: media.length > 0 ? media[0] : '',
        media: media,
        angles: angles,
        fallbackColor: fallbackColor.toUpperCase(),
        sampleColor: sampleColor.toUpperCase(),
        focusX: clampNumber(entry.focusX, 0, 100),
        focusY: clampNumber(entry.focusY, 0, 100),
        zoom: Math.max(100, Number(entry.zoom) || SPECIAL_COLOR_SWATCH_DEFAULT_ZOOM)
    };
}

function sanitizeSpecialColorSwatchMap(map, validUrls) {
    if (!map || typeof map !== 'object') return null;
    var normalized = {};
    Object.keys(map).forEach(function (colorName) {
        var parsed = sanitizeSpecialColorSwatchEntry(map[colorName], validUrls);
        if (parsed) normalized[colorName] = parsed;
    });
    return Object.keys(normalized).length > 0 ? normalized : null;
}

function parseAdminSpecialColorSwatchesInput(value) {
    var text = String(value || '').trim();
    if (!text) {
        return { map: null, error: '' };
    }
    var parsed = null;
    try {
        parsed = JSON.parse(text);
    } catch (e) {
        return { map: null, error: 'Special color config must be valid JSON' };
    }
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
        return { map: null, error: 'Special color config must be a JSON object' };
    }
    var sanitized = sanitizeSpecialColorSwatchMap(parsed);
    if (!sanitized && Object.keys(parsed).length > 0) {
        return { map: null, error: 'Special color config contains no valid swatches' };
    }
    return { map: sanitized, error: '' };
}

function serializeAdminSpecialColorSwatches(map) {
    var sanitized = sanitizeSpecialColorSwatchMap(map);
    if (!sanitized) return '';
    return JSON.stringify(sanitized, null, 2);
}

function isSpecialColorPickerEnabled(product) {
    if (!product) return false;
    return product.specialColorPicker === true;
}

function pushUniqueColorValue(list, seen, value) {
    var text = String(value || '').trim();
    if (!text) return;
    var key = text.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    list.push(text);
}

function getSpecialColorVariantValues(product) {
    if (!product) return [];
    var values = [];
    var seen = new Set();
    var hasExplicitOptions = false;

    if (product.options && Array.isArray(product.options.Color)) {
        product.options.Color.forEach(function (colorName) {
            pushUniqueColorValue(values, seen, colorName);
        });
        hasExplicitOptions = values.length > 0;
    }

    if (!hasExplicitOptions && product.mediaByColor && typeof product.mediaByColor === 'object') {
        Object.keys(product.mediaByColor).forEach(function (colorName) {
            pushUniqueColorValue(values, seen, colorName);
        });
    }

    if (!hasExplicitOptions && product.images && typeof product.images === 'object') {
        Object.keys(product.images).forEach(function (colorName) {
            pushUniqueColorValue(values, seen, colorName);
        });
    }

    if (values.length === 0) values.push('Default');
    return values;
}

function getDefaultSpecialColorValue(product) {
    var values = getSpecialColorVariantValues(product);
    return values.length > 0 ? values[0] : null;
}

function getCurrentSpecialColorValue(product) {
    var values = getSpecialColorVariantValues(product);
    if (values.length === 0) return null;

    var current = String(selectedVariants.Color || '').trim().toLowerCase();
    if (current) {
        var direct = values.find(function (value) {
            return String(value).trim().toLowerCase() === current;
        });
        if (direct) return direct;
    }

    var resolved = resolveColorKey(product, selectedVariants.Color);
    if (resolved) {
        var byResolved = values.find(function (value) {
            return String(value).trim().toLowerCase() === String(resolved).trim().toLowerCase();
        });
        if (byResolved) return byResolved;
    }

    return values[0];
}

function getFallbackColorHex(product, color, resolvedColor) {
    var key = resolvedColor || resolveColorKey(product, color);
    var hex = product && product.colorHexByName && key ? String(product.colorHexByName[key] || '').trim() : '';
    if (!/^#[0-9a-fA-F]{6}$/.test(hex)) hex = inferHexFromColorName(key || color);
    return String(hex || '#d9d9d9').toUpperCase();
}

function getSpecialColorStateKey(product) {
    if (!product) return '';
    var rawId = String(product.id || '').trim();
    if (rawId) return rawId;
    return 'name:' + String(product.name || '').trim().toLowerCase();
}

function getSpecialColorStateAliases(product) {
    if (!product) return [];
    var aliases = [];
    var idKey = String(product.id || '').trim();
    var nameKey = 'name:' + String(product.name || '').trim().toLowerCase();
    if (idKey) aliases.push(idKey);
    if (String(product.name || '').trim()) aliases.push(nameKey);
    if (aliases.length === 0) {
        var fallback = getSpecialColorStateKey(product);
        if (fallback) aliases.push(fallback);
    }
    return Array.from(new Set(aliases.filter(function (key) { return !!key; })));
}

function getProductSpecialColorState(product) {
    if (!product) return null;
    var aliases = getSpecialColorStateAliases(product);
    if (aliases.length === 0) return null;

    var merged = sanitizeSpecialColorSwatchMap(product.specialColorSwatches) || {};
    aliases.forEach(function (key) {
        var fromCache = sanitizeSpecialColorSwatchMap(specialColorSwatchStateByProductId[key]) || {};
        // Product object holds latest in-session edits; cache is fallback only.
        merged = Object.assign({}, fromCache, merged);
    });
    // Direct pick storage can contain newer edits than app/product snapshots.
    getSpecialColorVariantValues(product).forEach(function (colorName) {
        var resolved = String(resolveColorKey(product, colorName) || colorName || '').trim();
        var direct = getDirectSpecialColorEntry(product, [resolved, colorName]);
        if (!direct) return;
        if (resolved) merged[resolved] = clonePlainData(direct);
        if (colorName && colorName.toLowerCase() !== resolved.toLowerCase()) {
            merged[colorName] = clonePlainData(direct);
        }
    });
    var defaultDirect = getDirectSpecialColorEntry(product, ['Default']);
    if (defaultDirect && !merged.Default) {
        merged.Default = clonePlainData(defaultDirect);
    }

    var normalized = sanitizeSpecialColorSwatchMap(merged) || {};
    aliases.forEach(function (key) {
        specialColorSwatchStateByProductId[key] = clonePlainData(normalized);
    });
    return normalized;
}

function hydrateProductSpecialColorStateFromDirect(product) {
    if (!product || !isSpecialColorPickerEnabled(product)) return;
    var aliases = getSpecialColorStateAliases(product);
    if (aliases.length === 0) return;

    var map = sanitizeSpecialColorSwatchMap(product.specialColorSwatches) || {};
    var colors = getSpecialColorVariantValues(product);
    var changed = false;

    colors.forEach(function (colorName) {
        var resolved = String(resolveColorKey(product, colorName) || colorName || '').trim();
        var direct = getDirectSpecialColorEntry(product, [resolved, colorName]);
        if (!direct) return;

        if (resolved) {
            map[resolved] = clonePlainData(direct);
        }
        if (colorName && String(colorName).trim().toLowerCase() !== resolved.toLowerCase()) {
            map[colorName] = clonePlainData(direct);
        }
        changed = true;
    });

    var defaultDirect = getDirectSpecialColorEntry(product, ['Default']);
    if (defaultDirect && !map.Default) {
        map.Default = clonePlainData(defaultDirect);
        changed = true;
    }

    if (!changed) return;

    var sanitized = sanitizeSpecialColorSwatchMap(map);
    product.specialColorSwatches = sanitized ? clonePlainData(sanitized) : null;

    var productIndex = findProductIndexForSpecialColorSave(product);
    if (productIndex >= 0) {
        products[productIndex].specialColorSwatches = product.specialColorSwatches
            ? clonePlainData(product.specialColorSwatches)
            : null;
        products[productIndex].specialColorLastColor = product.specialColorLastColor || null;
    }

    var normalized = sanitizeSpecialColorSwatchMap(product.specialColorSwatches) || {};
    aliases.forEach(function (key) {
        specialColorSwatchStateByProductId[key] = clonePlainData(normalized);
    });
    saveSpecialColorStateToStorage();
}

function applySavedSpecialColorOnOpen(product, color) {
    if (!product || !isSpecialColorPickerEnabled(product) || !color) return;
    var resolvedColor = resolveColorKey(product, color);
    var resolvedConfig = getSpecialColorSwatchConfig(product, resolvedColor || color);
    if (!resolvedConfig) return;
    setSpecialColorEntryForAliases(product, resolvedColor || color, resolvedConfig);
    applySpecialColorConfigToProduct(product, resolvedColor || color, resolvedConfig);
}

function findSpecialColorEntryKey(state, colorKey) {
    if (!state || !colorKey) return '';
    var target = String(colorKey).trim().toLowerCase();
    if (!target) return '';
    var direct = Object.keys(state).find(function (key) {
        return String(key).trim().toLowerCase() === target;
    });
    return direct || '';
}

function normalizeSpecialColorDirectKey(value) {
    return String(value || '').trim().toLowerCase();
}

function sanitizeSpecialColorSampleStateStorageKey(key) {
    var raw = String(key || '').trim();
    if (!raw) return '';
    var parts = raw.split('::');
    if (parts.length !== 2) return '';
    var productKey = String(parts[0] || '').trim();
    var colorKey = normalizeSpecialColorDirectKey(parts[1]);
    if (!productKey || !colorKey) return '';
    return productKey + '::' + colorKey;
}

function normalizeSpecialColorMatchKey(value) {
    return String(value || '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '');
}

function getSpecialColorCandidateMatchKeys(colorCandidates) {
    return (colorCandidates || [])
        .map(normalizeSpecialColorDirectKey)
        .filter(function (value) { return !!value; })
        .map(normalizeSpecialColorMatchKey)
        .filter(function (value) { return !!value; });
}

function findSpecialColorMapValue(map, colorCandidates) {
    if (!map || typeof map !== 'object') return null;
    var candidates = (colorCandidates || [])
        .map(normalizeSpecialColorDirectKey)
        .filter(function (value) { return !!value; });
    for (var i = 0; i < candidates.length; i++) {
        var exact = map[candidates[i]];
        if (typeof exact !== 'undefined' && exact !== null) return exact;
    }

    var candidateMatchKeys = getSpecialColorCandidateMatchKeys(candidates);
    if (!candidateMatchKeys.length) return null;
    var keys = Object.keys(map);
    for (var j = 0; j < keys.length; j++) {
        var storedKey = String(keys[j] || '').trim();
        if (!storedKey) continue;
        var storedMatch = normalizeSpecialColorMatchKey(storedKey);
        if (!storedMatch || candidateMatchKeys.indexOf(storedMatch) < 0) continue;
        var fuzzy = map[storedKey];
        if (typeof fuzzy !== 'undefined' && fuzzy !== null) return fuzzy;
    }
    return null;
}

function getSpecialColorSampleStateCandidateColors(product, colorCandidates) {
    if (!product) return [];
    var rawCandidates = Array.isArray(colorCandidates) ? colorCandidates : [colorCandidates];
    var normalized = rawCandidates.map(function (candidate) {
        var canonicalColor = getCanonicalColorValue(product, candidate)
            || resolveColorKey(product, candidate)
            || String(candidate || '').trim();
        return normalizeSpecialColorDirectKey(canonicalColor);
    }).filter(function (value) { return !!value; });

    if (normalized.length === 0) {
        var defaultColor = normalizeSpecialColorDirectKey(getDefaultSpecialColorValue(product));
        if (defaultColor) normalized.push(defaultColor);
    }
    return Array.from(new Set(normalized));
}

function buildSpecialColorSampleStateV3Key(product, color) {
    if (!product) return '';
    var productId = String(product.id || '').trim();
    if (!productId) return '';
    var canonicalColor = getCanonicalColorValue(product, color)
        || resolveColorKey(product, color)
        || String(color || '').trim()
        || getDefaultSpecialColorValue(product)
        || 'default';
    var colorKey = normalizeSpecialColorMatchKey(canonicalColor);
    if (!colorKey) return '';
    return productId + '::' + colorKey;
}

function getSpecialColorSampleStateV3Entry(product, colorCandidates) {
    var candidates = getSpecialColorSampleStateCandidateColors(product, colorCandidates);
    for (var i = 0; i < candidates.length; i++) {
        var key = buildSpecialColorSampleStateV3Key(product, candidates[i]);
        if (!key) continue;
        var entry = sanitizeSpecialColorSwatchEntry(specialColorSampleStateV3ByProductColor[key]);
        if (entry) return entry;
    }
    return null;
}

function setSpecialColorSampleStateV3Entry(product, colorCandidates, entry) {
    var normalizedEntry = sanitizeSpecialColorSwatchEntry(entry);
    if (!product || !normalizedEntry) return;
    var candidates = getSpecialColorSampleStateCandidateColors(product, colorCandidates);
    if (!candidates.length) return;
    var wrote = false;
    candidates.forEach(function (candidate) {
        var key = buildSpecialColorSampleStateV3Key(product, candidate);
        if (!key) return;
        specialColorSampleStateV3ByProductColor[key] = clonePlainData(normalizedEntry);
        wrote = true;
    });
    if (!wrote) return;
    saveSpecialColorSampleStateV3ToStorage();
}

function clearSpecialColorSampleStateV3ForProduct(product) {
    if (!product) return;
    var productId = String(product.id || '').trim();
    if (!productId) return;
    Object.keys(specialColorSampleStateV3ByProductColor).forEach(function (key) {
        if (String(key).indexOf(productId + '::') === 0) {
            delete specialColorSampleStateV3ByProductColor[key];
        }
    });
    saveSpecialColorSampleStateV3ToStorage();
}

function hydrateSpecialColorStateFromV3Storage() {
    if (!Array.isArray(products) || products.length === 0) return;
    products.forEach(function (product) {
        // Ensure special color maps are merged into each product at startup so all users
        // see the latest admin-edited special color state stored in local/session storage.
        if (!product || !isSpecialColorPickerEnabled(product)) return;
        var aliases = getSpecialColorStateAliases(product);
        if (!aliases.length) return;

        var values = getSpecialColorVariantValues(product);
        var map = sanitizeSpecialColorSwatchMap(product.specialColorSwatches) || {};
        var changed = false;

        values.forEach(function (colorValue) {
            var resolvedColor = resolveColorKey(product, colorValue) || colorValue;
            var entry = getSpecialColorSampleStateV3Entry(product, [resolvedColor, colorValue, 'Default', 'default']);
            if (!entry) return;
            var normalizedEntry = sanitizeSpecialColorSwatchEntry(entry);
            if (!normalizedEntry) return;
            map[resolvedColor] = clonePlainData(normalizedEntry);
            if (String(colorValue || '').trim().toLowerCase() !== String(resolvedColor || '').trim().toLowerCase()) {
                map[colorValue] = clonePlainData(normalizedEntry);
            }
            changed = true;
        });

        if (!changed) {
            var defaultEntry = getSpecialColorSampleStateV3Entry(product, ['Default', 'default']);
            if (defaultEntry) {
                var normalizedDefault = sanitizeSpecialColorSwatchEntry(defaultEntry);
                if (normalizedDefault) {
                    map.Default = clonePlainData(normalizedDefault);
                    changed = true;
                }
            }
        }
        if (!changed) return;

        var sanitizedMap = sanitizeSpecialColorSwatchMap(map) || {};
        product.specialColorSwatches = clonePlainData(sanitizedMap);
        aliases.forEach(function (alias) {
            specialColorSwatchStateByProductId[alias] = clonePlainData(sanitizedMap);
        });
    });
}

function getSpecialColorOverrideEntry(product, colorCandidates) {
    var aliases = getSpecialColorStateAliases(product);
    if (!aliases.length) return null;
    var candidates = (colorCandidates || [])
        .map(normalizeSpecialColorDirectKey)
        .filter(function (value) { return !!value; });
    if (!candidates.length) return null;

    for (var i = 0; i < aliases.length; i++) {
        var productMap = specialColorOverrideByProductColor[aliases[i]];
        if (!productMap || typeof productMap !== 'object') continue;
        var entry = findSpecialColorMapValue(productMap, candidates);
        if (entry) return sanitizeSpecialColorSwatchEntry(entry);
    }
    return null;
}

function setSpecialColorOverrideEntry(product, colorCandidates, entry) {
    var aliases = getSpecialColorStateAliases(product);
    var normalizedEntry = sanitizeSpecialColorSwatchEntry(entry);
    if (!aliases.length || !normalizedEntry) return;
    var candidates = (colorCandidates || [])
        .map(normalizeSpecialColorDirectKey)
        .filter(function (value) { return !!value; });
    if (!candidates.length) return;

    aliases.forEach(function (alias) {
        if (!specialColorOverrideByProductColor[alias]) {
            specialColorOverrideByProductColor[alias] = {};
        }
        candidates.forEach(function (colorKey) {
            specialColorOverrideByProductColor[alias][colorKey] = clonePlainData(normalizedEntry);
        });
    });
    saveSpecialColorOverrideStateToStorage();
}

function clearSpecialColorOverrideForProduct(product) {
    var aliases = getSpecialColorStateAliases(product);
    aliases.forEach(function (alias) {
        delete specialColorOverrideByProductColor[alias];
    });
    saveSpecialColorOverrideStateToStorage();
}

function getDirectSpecialColorEntry(product, colorCandidates) {
    var aliases = getSpecialColorStateAliases(product);
    if (!aliases.length) return null;
    var candidates = (colorCandidates || [])
        .map(normalizeSpecialColorDirectKey)
        .filter(function (value) { return !!value; });
    if (!candidates.length) return null;

    for (var i = 0; i < aliases.length; i++) {
        var productMap = specialColorDirectPickByProductKey[aliases[i]];
        if (!productMap) continue;
        var entry = findSpecialColorMapValue(productMap, candidates);
        if (entry) return sanitizeSpecialColorSwatchEntry(entry);
    }
    return null;
}

function setDirectSpecialColorEntry(product, colorCandidates, entry) {
    var aliases = getSpecialColorStateAliases(product);
    var normalizedEntry = sanitizeSpecialColorSwatchEntry(entry);
    if (!aliases.length || !normalizedEntry) return;
    var candidates = (colorCandidates || [])
        .map(normalizeSpecialColorDirectKey)
        .filter(function (value) { return !!value; });
    if (!candidates.length) return;

    aliases.forEach(function (alias) {
        if (!specialColorDirectPickByProductKey[alias]) {
            specialColorDirectPickByProductKey[alias] = {};
        }
        candidates.forEach(function (colorKey) {
            specialColorDirectPickByProductKey[alias][colorKey] = clonePlainData(normalizedEntry);
        });
    });
    setSpecialColorSampleStateV3Entry(product, candidates.concat(['Default', 'default']), normalizedEntry);
    saveSpecialColorStateToStorage();
}

function setSpecialColorEntryForAliases(product, selectedColor, entry) {
    if (!product || !entry) return;
    var state = getProductSpecialColorState(product);
    if (!state) return;

    var normalized = sanitizeSpecialColorSwatchEntry(entry);
    if (!normalized) return;
    var snapshot = clonePlainData(normalized);

    var selected = String(selectedColor || '').trim();
    var resolved = String(resolveColorKey(product, selectedColor) || selected || '').trim();

    if (resolved) state[resolved] = clonePlainData(snapshot);
    if (selected && String(selected).toLowerCase() !== String(resolved).toLowerCase()) {
        state[selected] = clonePlainData(snapshot);
    }

    var variants = getSpecialColorVariantValues(product);
    if (variants.length === 1) {
        state[variants[0]] = clonePlainData(snapshot);
        if (!state.Default) state.Default = clonePlainData(snapshot);
    }
}

function findProductIndexForSpecialColorSave(product) {
    var index = products.indexOf(product);
    if (index >= 0) return index;

    index = products.findIndex(function (item) {
        return String(item.id || '') === String(product.id || '');
    });
    if (index >= 0) return index;

    return products.findIndex(function (item) {
        return String(item.name || '').trim().toLowerCase() === String(product.name || '').trim().toLowerCase();
    });
}

function writeSpecialColorSnapshot(product, preferredColor) {
    if (!product) return;
    var aliases = getSpecialColorStateAliases(product);
    if (aliases.length === 0) return;

    var cachedState = {};
    aliases.forEach(function (key) {
        cachedState = Object.assign(cachedState, sanitizeSpecialColorSwatchMap(specialColorSwatchStateByProductId[key]) || {});
    });
    var persistedState = sanitizeSpecialColorSwatchMap(product.specialColorSwatches) || {};
    // Product object is the source of truth for most recent edits in-session.
    // Keep cache as a fallback, but never let stale cache override product state.
    var mergedState = Object.assign({}, cachedState, persistedState);
    var activeColor = String(preferredColor || getCurrentSpecialColorValue(product) || product.specialColorLastColor || '').trim();
    var activeResolvedColor = String(resolveColorKey(product, activeColor) || activeColor || '').trim();
    var directActiveEntry = getDirectSpecialColorEntry(product, [activeResolvedColor, activeColor]);
    if (directActiveEntry) {
        if (activeResolvedColor) mergedState[activeResolvedColor] = clonePlainData(directActiveEntry);
        if (activeColor && activeColor.toLowerCase() !== activeResolvedColor.toLowerCase()) {
            mergedState[activeColor] = clonePlainData(directActiveEntry);
        }
        if (!mergedState.Default) mergedState.Default = clonePlainData(directActiveEntry);
    }
    var sanitized = sanitizeSpecialColorSwatchMap(mergedState);
    product.specialColorSwatches = sanitized ? clonePlainData(sanitized) : null;
    product.specialColorLastColor = preferredColor || getCurrentSpecialColorValue(product) || product.specialColorLastColor || null;
    if (product.specialColorLastColor) {
        aliases.forEach(function (key) {
            specialColorLastColorByProductKey[key] = product.specialColorLastColor;
        });
    }

    var productIndex = findProductIndexForSpecialColorSave(product);
    if (productIndex >= 0) {
        products[productIndex].specialColorSwatches = product.specialColorSwatches
            ? clonePlainData(product.specialColorSwatches)
            : null;
        products[productIndex].specialColorLastColor = product.specialColorLastColor || null;
    }

    var normalized = sanitizeSpecialColorSwatchMap(product.specialColorSwatches) || {};
    aliases.forEach(function (key) {
        specialColorSwatchStateByProductId[key] = clonePlainData(normalized);
    });
    saveSpecialColorStateToStorage();
}

function applySpecialColorConfigToProduct(product, selectedColor, config) {
    if (!product || !config) return;
    var normalized = sanitizeSpecialColorSwatchEntry(config);
    if (!normalized) return;

    var resolved = String(resolveColorKey(product, selectedColor) || selectedColor || '').trim();
    if (!resolved) return;

    var selected = String(selectedColor || '').trim();
    var map = sanitizeSpecialColorSwatchMap(product.specialColorSwatches) || {};

    map[resolved] = clonePlainData(normalized);
    if (selected && selected.toLowerCase() !== resolved.toLowerCase()) {
        map[selected] = clonePlainData(normalized);
    }

    product.specialColorSwatches = sanitizeSpecialColorSwatchMap(map) || null;
    product.specialColorLastColor = selected || resolved;

    var productIndex = findProductIndexForSpecialColorSave(product);
    if (productIndex >= 0) {
        products[productIndex].specialColorSwatches = product.specialColorSwatches
            ? clonePlainData(product.specialColorSwatches)
            : null;
        products[productIndex].specialColorLastColor = product.specialColorLastColor;
    }

    var stateKey = getSpecialColorStateKey(product);
    if (stateKey) {
        specialColorSwatchStateByProductId[stateKey] = sanitizeSpecialColorSwatchMap(product.specialColorSwatches) || {};
        specialColorLastColorByProductKey[stateKey] = product.specialColorLastColor;
        var aliases = getSpecialColorStateAliases(product);
        aliases.forEach(function (key) {
            specialColorSwatchStateByProductId[key] = sanitizeSpecialColorSwatchMap(product.specialColorSwatches) || {};
            specialColorLastColorByProductKey[key] = product.specialColorLastColor;
        });
        saveSpecialColorStateToStorage();
    }
}

function persistSpecialColorStateForProduct(product) {
    if (!product) return;
    var activeColor = getCurrentSpecialColorValue(product);
    if (isSpecialColorPickerEnabled(product) && activeColor) {
        var activeConfig = getSpecialColorSwatchConfig(product, activeColor);
        if (activeConfig) {
            var resolvedImage = resolveSpecialColorImage(product, activeColor, activeConfig);
            if (resolvedImage) activeConfig.image = resolvedImage;
            setSpecialColorSampleStateV3Entry(product, [activeColor, resolveColorKey(product, activeColor), 'Default', 'default'], activeConfig);
            setSpecialColorEntryForAliases(product, activeColor, activeConfig);
            applySpecialColorConfigToProduct(product, activeColor, activeConfig);
            setDirectSpecialColorEntry(product, [activeColor, resolveColorKey(product, activeColor)], activeConfig);
        }
    }
    specialColorDebugLog('persistState', {
        productId: product.id,
        activeColor: activeColor || null,
        config: activeColor ? getSpecialColorSwatchConfig(product, activeColor) : null
    });
    writeSpecialColorSnapshot(product, activeColor);
    saveToStorage();
}

function ensureSpecialColorSampleStateV3Entry(product, colorCandidates, entry) {
    var normalizedEntry = sanitizeSpecialColorSwatchEntry(entry);
    if (!product || !normalizedEntry) return;
    if (getSpecialColorSampleStateV3Entry(product, colorCandidates)) return;
    setSpecialColorSampleStateV3Entry(product, colorCandidates, normalizedEntry);
}

function getSpecialColorSwatchConfig(product, color) {
    if (!isSpecialColorPickerEnabled(product) || !color) return null;
    var resolvedColor = resolveColorKey(product, color);
    var v3Entry = getSpecialColorSampleStateV3Entry(product, [resolvedColor, color, 'Default', 'default']);
    if (v3Entry) return v3Entry;
    var directEntry = getDirectSpecialColorEntry(product, [resolvedColor, color, 'Default']);
    if (directEntry) {
        ensureSpecialColorSampleStateV3Entry(product, [resolvedColor, color], directEntry);
        return directEntry;
    }
    var overrideEntry = getSpecialColorOverrideEntry(product, [resolvedColor, color, 'Default']);
    if (overrideEntry) {
        ensureSpecialColorSampleStateV3Entry(product, [resolvedColor, color], overrideEntry);
        return overrideEntry;
    }
    var state = getProductSpecialColorState(product);
    if (state) {
        var lookupKey = findSpecialColorEntryKey(state, resolvedColor);
        if (!lookupKey) lookupKey = findSpecialColorEntryKey(state, color);
        if (!lookupKey) lookupKey = findSpecialColorEntryKey(state, 'Default');
        if (!lookupKey && Object.keys(state).length === 1) lookupKey = Object.keys(state)[0];
        if (lookupKey) {
            var stateEntry = sanitizeSpecialColorSwatchEntry(state[lookupKey]);
            ensureSpecialColorSampleStateV3Entry(product, [resolvedColor, color], stateEntry);
            return stateEntry;
        }
    }
    return null;
}

function ensureSpecialColorSwatchConfig(product, color) {
    if (!isSpecialColorPickerEnabled(product) || !color) return null;
    var resolvedColor = resolveColorKey(product, color);
    var existing = getSpecialColorSwatchConfig(product, resolvedColor || color);
    if (existing) return existing;

    return sanitizeSpecialColorSwatchEntry({
        image: getColorPreviewImage(product, resolvedColor || color),
        fallbackColor: getFallbackColorHex(product, color, resolvedColor || color),
        sampleColor: getFallbackColorHex(product, color, resolvedColor || color),
        zoom: SPECIAL_COLOR_SWATCH_DEFAULT_ZOOM,
        focusX: 50,
        focusY: 50
    });
}

function buildSpecialColorPickerMarkup() {
    return '' +
        '<div class="variant-section special-color-picker" id="specialColorPicker">' +
        '<div class="variant-title">' +
        '<span>Pattern sample</span>' +
        '<span class="variant-selected" id="specialColorSelected">Please select</span>' +
        '</div>' +
        '<div class="special-color-row">' +
        '<span class="special-color-chip" id="specialColorSampleChip"></span>' +
        '<span>Picked pixel:</span>' +
        '<span class="special-color-hex" id="specialColorSampleHex">#D9D9D9</span>' +
        '</div>' +
        '<div id="specialColorAdminControls">' +
        '<div class="special-color-actions">' +
        '<button type="button" class="variant-btn active special-color-btn" id="specialPickColorBtn">Pick Area From Preview</button>' +
        '<button type="button" class="variant-btn special-color-btn" id="specialResetColorBtn">Reset Sample</button>' +
        '</div>' +
        '<div class="special-color-manual">' +
        '<label for="specialManualColorInput">Set sample color</label>' +
        '<input type="color" id="specialManualColorInput" value="#d9d9d9" aria-label="Set pattern sample color">' +
        '</div>' +
        '<p class="special-color-hint" id="specialColorPickHint">Click "Pick Area From Preview", then click the main image.</p>' +
        '</div>' +
        '</div>';
}

function renderSpecialColorPicker(defaultColor) {
    var container = document.getElementById('modalVariants');
    if (!container) return;

    var previous = document.getElementById('specialColorPicker');
    if (previous) previous.remove();

    if (!currentProduct || !isSpecialColorPickerEnabled(currentProduct)) {
        setSpecialColorPickMode(false);
        return;
    }
    if (!isCurrentUserAdmin()) {
        setSpecialColorPickMode(false);
        updateSpecialColorOptionStyles();
        return;
    }

    var colorValues = getSpecialColorVariantValues(currentProduct);
    if (colorValues.length === 0) {
        setSpecialColorPickMode(false);
        return;
    }

    container.insertAdjacentHTML('beforeend', buildSpecialColorPickerMarkup());
    if (!selectedVariants.Color) {
        selectedVariants.Color = defaultColor || getDefaultSpecialColorValue(currentProduct);
    } else {
        selectedVariants.Color = getCurrentSpecialColorValue(currentProduct);
    }
    syncSpecialColorPickerUI();
    setSpecialColorPickMode(false);
}

function syncSpecialColorPickerUI(statusText) {
    var panel = document.getElementById('specialColorPicker');
    if (!panel || !currentProduct || !isSpecialColorPickerEnabled(currentProduct)) return;

    var selectedColor = getCurrentSpecialColorValue(currentProduct);
    var selectedNode = document.getElementById('specialColorSelected');
    var chipNode = document.getElementById('specialColorSampleChip');
    var hexNode = document.getElementById('specialColorSampleHex');
    var pickButton = document.getElementById('specialPickColorBtn');
    var resetButton = document.getElementById('specialResetColorBtn');
    var manualInput = document.getElementById('specialManualColorInput');
    var adminControls = document.getElementById('specialColorAdminControls');
    var adminVisible = isCurrentUserAdmin();
    if (adminControls) adminControls.style.display = adminVisible ? '' : 'none';

    if (!selectedColor) {
        if (selectedNode) selectedNode.textContent = 'Please select';
        if (chipNode) chipNode.style.backgroundColor = '#d9d9d9';
        if (hexNode) hexNode.textContent = '#D9D9D9';
        if (pickButton) pickButton.disabled = true;
        if (resetButton) resetButton.disabled = true;
        if (manualInput) {
            manualInput.value = '#d9d9d9';
            manualInput.disabled = true;
        }
        setSpecialColorPickMode(false, statusText);
        return;
    }
    selectedVariants.Color = selectedColor;

    var config = getSpecialColorSwatchConfig(currentProduct, selectedColor);
    var colorHex = config && config.sampleColor ? config.sampleColor.toUpperCase() : '#D9D9D9';
    specialColorDebugLog('syncPickerUi', {
        productId: currentProduct.id,
        selectedColor: selectedColor,
        image: config && config.image ? String(config.image) : null,
        sampleColor: config && config.sampleColor ? String(config.sampleColor).toUpperCase() : null,
        fallbackColor: config && config.fallbackColor ? String(config.fallbackColor).toUpperCase() : null,
        focusX: config ? Number(config.focusX) : null,
        focusY: config ? Number(config.focusY) : null,
        zoom: config ? Number(config.zoom) : null,
        hint: statusText || null
    });

    if (selectedNode) selectedNode.textContent = selectedColor;
    if (chipNode) {
        chipNode.style.backgroundColor = colorHex;
        var chipImage = resolveSpecialColorImage(currentProduct, selectedColor, config);
        if (chipImage) {
            var chipFocusX = clampNumber(config.focusX, 0, 100);
            var chipFocusY = clampNumber(config.focusY, 0, 100);
            var chipZoom = Math.max(100, Number(config.zoom) || SPECIAL_COLOR_SWATCH_DEFAULT_ZOOM);
            chipNode.style.backgroundImage = 'url("' + escapeCssUrl(chipImage) + '")';
            chipNode.style.backgroundSize = chipZoom + '%';
            chipNode.style.backgroundPosition = formatPercent(chipFocusX) + '% ' + formatPercent(chipFocusY) + '%';
            chipNode.style.backgroundRepeat = 'no-repeat';
        } else {
            chipNode.style.backgroundImage = 'none';
            chipNode.style.backgroundSize = 'cover';
            chipNode.style.backgroundPosition = 'center';
            chipNode.style.backgroundRepeat = 'no-repeat';
        }
    }
    if (hexNode) hexNode.textContent = colorHex;
    if (pickButton) pickButton.disabled = false;
    if (resetButton) resetButton.disabled = false;
    if (manualInput) {
        manualInput.disabled = false;
        manualInput.value = /^#[0-9a-fA-F]{6}$/.test(colorHex) ? colorHex.toLowerCase() : '#d9d9d9';
    }
    // Re-apply swatch styles after picker sync so persisted sample focus/zoom is reflected.
    updateSpecialColorOptionStyles();
    if (!adminVisible) {
        setSpecialColorPickMode(false);
    }
    if (statusText) {
        setSpecialColorPickMode(false, statusText);
    }
}

function setSpecialColorPickMode(enabled, statusText) {
    if (!currentProduct || !isSpecialColorPickerEnabled(currentProduct)) {
        specialColorPickMode = false;
    } else {
        specialColorPickMode = Boolean(enabled);
    }

    var mainImage = document.getElementById('mainImage');
    var pickButton = document.getElementById('specialPickColorBtn');
    var hintNode = document.getElementById('specialColorPickHint');

    if (mainImage) {
        mainImage.classList.toggle('special-pick-mode', specialColorPickMode);
    }
    if (pickButton) {
        pickButton.textContent = specialColorPickMode ? 'Cancel Picking' : 'Pick Area From Preview';
    }
    if (hintNode) {
        if (statusText) {
            hintNode.textContent = statusText;
        } else if (specialColorPickMode) {
            hintNode.textContent = 'Pick mode active: click the main image where the pattern looks best.';
        } else {
            hintNode.textContent = 'Click "Pick Area From Preview", then click the main image.';
        }
    }
}

function toggleSpecialColorPickMode() {
    if (!isCurrentUserAdmin()) return;
    if (!currentProduct || !isSpecialColorPickerEnabled(currentProduct)) return;
    var selectedColor = getCurrentSpecialColorValue(currentProduct);
    if (!selectedColor) {
        syncSpecialColorPickerUI('Select a color first.');
        return;
    }
    selectedVariants.Color = selectedColor;
    setSpecialColorPickMode(!specialColorPickMode);
}

function resetSpecialColorSample() {
    if (!isCurrentUserAdmin()) return;
    if (!currentProduct || !isSpecialColorPickerEnabled(currentProduct)) return;
    var selectedColor = getCurrentSpecialColorValue(currentProduct);
    if (!selectedColor) return;
    selectedVariants.Color = selectedColor;

    var config = ensureSpecialColorSwatchConfig(currentProduct, selectedColor);
    if (!config) return;

    config.focusX = 50;
    config.focusY = 50;
    config.zoom = SPECIAL_COLOR_SWATCH_DEFAULT_ZOOM;
    config.sampleColor = getFallbackColorHex(currentProduct, selectedColor).toUpperCase();
    setSpecialColorSampleStateV3Entry(currentProduct, [selectedColor, resolveColorKey(currentProduct, selectedColor), 'Default', 'default'], config);
    config.image = getColorPreviewImage(currentProduct, selectedColor) || config.image;
    setSpecialColorEntryForAliases(currentProduct, selectedColor, config);
    applySpecialColorConfigToProduct(currentProduct, selectedColor, config);
    setDirectSpecialColorEntry(currentProduct, [selectedColor, resolveColorKey(currentProduct, selectedColor)], config);
    specialColorDebugLog('resetSample', {
        productId: currentProduct.id,
        selectedColor: selectedColor,
        config: config
    });

    writeSpecialColorSnapshot(currentProduct, selectedColor);
    persistSpecialColorStateForProduct(currentProduct);
    updateSpecialColorOptionStyles();
    syncSpecialColorPickerUI();
    setSpecialColorPickMode(false, 'Sample reset to centered pattern.');
}

function updateSpecialColorSampleFromManual(rawHex, options) {
    if (!isCurrentUserAdmin()) return;
    if (!currentProduct || !isSpecialColorPickerEnabled(currentProduct)) return;
    var selectedColor = getCurrentSpecialColorValue(currentProduct);
    if (!selectedColor) return;
    selectedVariants.Color = selectedColor;

    var hex = String(rawHex || '').trim();
    if (!/^#[0-9a-fA-F]{6}$/.test(hex)) return;
    hex = hex.toUpperCase();

    var config = ensureSpecialColorSwatchConfig(currentProduct, selectedColor);
    if (!config) return;
    if (String(config.sampleColor || '').toUpperCase() === hex) {
        syncSpecialColorPickerUI((options && options.statusText) || 'Pattern sample updated manually.');
        return;
    }

    config.sampleColor = hex;
    setSpecialColorSampleStateV3Entry(currentProduct, [selectedColor, resolveColorKey(currentProduct, selectedColor), 'Default', 'default'], config);
    config.image = resolveSpecialColorImage(currentProduct, selectedColor, config) || config.image;
    setSpecialColorEntryForAliases(currentProduct, selectedColor, config);
    applySpecialColorConfigToProduct(currentProduct, selectedColor, config);
    setDirectSpecialColorEntry(currentProduct, [selectedColor, resolveColorKey(currentProduct, selectedColor)], config);

    writeSpecialColorSnapshot(currentProduct, selectedColor);
    persistSpecialColorStateForProduct(currentProduct);
    updateSpecialColorOptionStyles();
    syncSpecialColorPickerUI();
    setSpecialColorPickMode(false, (options && options.statusText) || 'Pattern sample updated manually.');
}

function updateSpecialColorOptionStyles() {
    if (!currentProduct) return;
    document.querySelectorAll('#modalVariants .color-option[data-option="Color"]').forEach(function (button) {
        var value = button.getAttribute('data-value') || '';
        var previewImage = getColorPreviewImage(currentProduct, value);
        button.setAttribute('style', getColorOptionStyle(currentProduct, value, previewImage));
    });
}

function canUseSpecialColorImage(path) {
    if (!path) return Promise.resolve(false);
    if (Object.prototype.hasOwnProperty.call(specialColorImageAvailability, path)) {
        return Promise.resolve(specialColorImageAvailability[path]);
    }

    return new Promise(function (resolve) {
        var testImage = new Image();
        testImage.crossOrigin = 'anonymous';
        testImage.onload = function () {
            specialColorImageAvailability[path] = true;
            resolve(true);
        };
        testImage.onerror = function () {
            specialColorImageAvailability[path] = false;
            resolve(false);
        };
        testImage.src = path;
    });
}

function loadSpecialColorImageElement(path) {
    if (!path) return Promise.resolve(null);
    if (specialColorImageElementCache[path]) return specialColorImageElementCache[path];

    specialColorImageElementCache[path] = new Promise(function (resolve) {
        var image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = function () { resolve(image); };
        image.onerror = function () { resolve(null); };
        image.src = path;
    });
    return specialColorImageElementCache[path];
}

async function loadSpecialColorPixelData(path) {
    if (!path) return null;
    if (specialColorImagePixelCache[path]) return specialColorImagePixelCache[path];

    specialColorImagePixelCache[path] = (async function () {
        var image = await loadSpecialColorImageElement(path);
        if (!image) return null;

        var width = image.naturalWidth || image.width;
        var height = image.naturalHeight || image.height;
        if (!width || !height) return null;

        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return null;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(image, 0, 0, width, height);

        return { image: image, ctx: ctx, width: width, height: height };
    })();

    return specialColorImagePixelCache[path];
}

function getPointerClientPoint(event) {
    if (!event) return null;
    if (isFinite(Number(event.clientX)) && isFinite(Number(event.clientY))) {
        return { x: Number(event.clientX), y: Number(event.clientY) };
    }
    if (event.touches && event.touches[0] && isFinite(Number(event.touches[0].clientX)) && isFinite(Number(event.touches[0].clientY))) {
        return { x: Number(event.touches[0].clientX), y: Number(event.touches[0].clientY) };
    }
    if (event.changedTouches && event.changedTouches[0] && isFinite(Number(event.changedTouches[0].clientX)) && isFinite(Number(event.changedTouches[0].clientY))) {
        return { x: Number(event.changedTouches[0].clientX), y: Number(event.changedTouches[0].clientY) };
    }
    return null;
}

function parseObjectPositionComponent(token, axis) {
    var raw = String(token || '').trim().toLowerCase();
    var keywordMap = axis === 'x'
        ? { left: 0, center: 50, right: 100 }
        : { top: 0, center: 50, bottom: 100 };
    if (Object.prototype.hasOwnProperty.call(keywordMap, raw)) {
        return { unit: 'percent', value: keywordMap[raw] };
    }
    if (/^-?\d+(\.\d+)?%$/.test(raw)) {
        return { unit: 'percent', value: Number(raw.replace('%', '')) };
    }
    if (/^-?\d+(\.\d+)?px$/.test(raw)) {
        return { unit: 'px', value: Number(raw.replace('px', '')) };
    }
    return { unit: 'percent', value: 50 };
}

function parseObjectPosition(value) {
    var tokens = String(value || '')
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .filter(function (token) { return !!token; });
    if (tokens.length === 0) {
        tokens = ['50%', '50%'];
    }

    var horizontalKeywords = ['left', 'right'];
    var verticalKeywords = ['top', 'bottom'];
    var xToken = tokens[0];
    var yToken = tokens.length > 1 ? tokens[1] : '50%';

    if (tokens.length === 1) {
        if (xToken === 'center') {
            yToken = 'center';
        } else if (verticalKeywords.indexOf(xToken) >= 0) {
            yToken = xToken;
            xToken = 'center';
        } else {
            yToken = 'center';
        }
    } else {
        var firstIsVertical = verticalKeywords.indexOf(tokens[0]) >= 0;
        var secondIsHorizontal = horizontalKeywords.indexOf(tokens[1]) >= 0;
        if (firstIsVertical || secondIsHorizontal) {
            xToken = tokens[1];
            yToken = tokens[0];
        }
    }

    return {
        x: parseObjectPositionComponent(xToken, 'x'),
        y: parseObjectPositionComponent(yToken, 'y')
    };
}

function resolveObjectPositionOffset(position, containerSize, renderedSize) {
    var freeSpace = Number(containerSize) - Number(renderedSize);
    if (!isFinite(freeSpace)) freeSpace = 0;
    if (!position || typeof position !== 'object') return freeSpace * 0.5;
    if (position.unit === 'px') return Number(position.value) || 0;
    return freeSpace * ((Number(position.value) || 50) / 100);
}

function getObjectFitRenderGeometry(element, imageWidth, imageHeight) {
    if (!element || !imageWidth || !imageHeight) return null;
    var rect = element.getBoundingClientRect();
    var borderLeft = Number(element.clientLeft) || 0;
    var borderTop = Number(element.clientTop) || 0;
    var displayW = Number(element.clientWidth) || 0;
    var displayH = Number(element.clientHeight) || 0;
    var left = rect.left + borderLeft;
    var top = rect.top + borderTop;
    if (!displayW || !displayH) {
        displayW = Number(rect.width) || 0;
        displayH = Number(rect.height) || 0;
        left = rect.left;
        top = rect.top;
    }
    if (!displayW || !displayH) return null;

    var fit = 'fill';
    var objectPosition = '50% 50%';
    try {
        var style = window.getComputedStyle(element);
        fit = String((style && style.objectFit) || '').trim().toLowerCase() || 'fill';
        objectPosition = String((style && style.objectPosition) || '').trim().toLowerCase() || '50% 50%';
    } catch (e) { }

    var renderedW = displayW;
    var renderedH = displayH;
    if (fit === 'contain' || fit === 'cover' || fit === 'scale-down' || fit === 'none') {
        var ratioX = displayW / imageWidth;
        var ratioY = displayH / imageHeight;
        if (fit === 'contain') {
            var containScale = Math.min(ratioX, ratioY);
            renderedW = imageWidth * containScale;
            renderedH = imageHeight * containScale;
        } else if (fit === 'cover') {
            var coverScale = Math.max(ratioX, ratioY);
            renderedW = imageWidth * coverScale;
            renderedH = imageHeight * coverScale;
        } else if (fit === 'scale-down') {
            if (imageWidth <= displayW && imageHeight <= displayH) {
                renderedW = imageWidth;
                renderedH = imageHeight;
            } else {
                var scaleDownScale = Math.min(ratioX, ratioY);
                renderedW = imageWidth * scaleDownScale;
                renderedH = imageHeight * scaleDownScale;
            }
        } else if (fit === 'none') {
            renderedW = imageWidth;
            renderedH = imageHeight;
        }
    }

    var position = parseObjectPosition(objectPosition);
    var offsetX = resolveObjectPositionOffset(position.x, displayW, renderedW);
    var offsetY = resolveObjectPositionOffset(position.y, displayH, renderedH);
    return {
        left: left,
        top: top,
        displayW: displayW,
        displayH: displayH,
        renderedW: renderedW,
        renderedH: renderedH,
        offsetX: offsetX,
        offsetY: offsetY
    };
}

function mapImageClickToSourcePoint(event, element, imageWidth, imageHeight) {
    var pointer = getPointerClientPoint(event);
    if (!pointer || !element || !imageWidth || !imageHeight) return null;
    var geometry = getObjectFitRenderGeometry(element, imageWidth, imageHeight);
    if (!geometry) return null;

    var clickX = pointer.x - geometry.left;
    var clickY = pointer.y - geometry.top;
    if (clickX < 0 || clickY < 0 || clickX > geometry.displayW || clickY > geometry.displayH) {
        return null;
    }

    if (
        clickX < geometry.offsetX ||
        clickY < geometry.offsetY ||
        clickX > geometry.offsetX + geometry.renderedW ||
        clickY > geometry.offsetY + geometry.renderedH
    ) {
        return null;
    }

    var sourceX = Math.floor(((clickX - geometry.offsetX) / Math.max(1, geometry.renderedW)) * imageWidth);
    var sourceY = Math.floor(((clickY - geometry.offsetY) / Math.max(1, geometry.renderedH)) * imageHeight);
    sourceX = clampNumber(sourceX, 0, imageWidth - 1);
    sourceY = clampNumber(sourceY, 0, imageHeight - 1);
    return { x: sourceX, y: sourceY };
}

function readPixelHexFromSourcePoint(imageData, point) {
    if (!imageData || !point) return null;
    try {
        var pixel = imageData.ctx.getImageData(point.x, point.y, 1, 1).data;
        if (!pixel || pixel[3] === 0) return null;
        return rgbToHex(pixel[0], pixel[1], pixel[2]);
    } catch (e) {
        return null;
    }
}

async function handleSpecialColorPreviewPick(event) {
    if (!isCurrentUserAdmin()) return;
    if (!specialColorPickMode || !currentProduct || !isSpecialColorPickerEnabled(currentProduct)) return;

    var selectedColor = getCurrentSpecialColorValue(currentProduct);
    if (!selectedColor) {
        setSpecialColorPickMode(false, 'Select a color first.');
        return;
    }
    selectedVariants.Color = selectedColor;

    var mainImage = document.getElementById('mainImage');
    var sourcePath = mainImage && (mainImage.currentSrc || mainImage.src) ? String(mainImage.currentSrc || mainImage.src) : '';
    if (!sourcePath) {
        setSpecialColorPickMode(false, 'Image not available for this color.');
        return;
    }

    var imageOk = await canUseSpecialColorImage(sourcePath);
    if (!imageOk) {
        setSpecialColorPickMode(false, 'Image not available for pixel sampling.');
        return;
    }

    var imageData = await loadSpecialColorPixelData(sourcePath);
    if (!imageData || !mainImage) {
        setSpecialColorPickMode(false, 'Could not load image for sampling.');
        return;
    }

    var sourceWidth = Number(mainImage.naturalWidth) || Number(imageData.width) || 0;
    var sourceHeight = Number(mainImage.naturalHeight) || Number(imageData.height) || 0;
    var sourcePoint = mapImageClickToSourcePoint(event, mainImage, sourceWidth, sourceHeight);
    if (!sourcePoint) {
        setSpecialColorPickMode(false, 'Could not map selection point.');
        return;
    }
    if (sourceWidth !== imageData.width || sourceHeight !== imageData.height) {
        var scaledX = Math.floor((sourcePoint.x / Math.max(1, sourceWidth - 1)) * Math.max(1, imageData.width - 1));
        var scaledY = Math.floor((sourcePoint.y / Math.max(1, sourceHeight - 1)) * Math.max(1, imageData.height - 1));
        sourcePoint.x = clampNumber(scaledX, 0, imageData.width - 1);
        sourcePoint.y = clampNumber(scaledY, 0, imageData.height - 1);
    }

    var pickedHex = readPixelHexFromSourcePoint(imageData, sourcePoint);
    if (!pickedHex) {
        setSpecialColorPickMode(false, 'Could not sample that point. Try another area.');
        return;
    }

    var config = ensureSpecialColorSwatchConfig(currentProduct, selectedColor);
    if (!config) {
        setSpecialColorPickMode(false, 'Special color config is unavailable.');
        return;
    }

    config.image = sourcePath;
    config.sampleColor = pickedHex.toUpperCase();
    config.focusX = (sourcePoint.x / Math.max(1, imageData.width - 1)) * 100;
    config.focusY = (sourcePoint.y / Math.max(1, imageData.height - 1)) * 100;
    config.zoom = Math.max(100, Number(config.zoom) || SPECIAL_COLOR_SWATCH_DEFAULT_ZOOM);
    setSpecialColorSampleStateV3Entry(currentProduct, [selectedColor, resolveColorKey(currentProduct, selectedColor), 'Default', 'default'], config);
    setSpecialColorEntryForAliases(currentProduct, selectedColor, config);
    applySpecialColorConfigToProduct(currentProduct, selectedColor, config);
    setDirectSpecialColorEntry(currentProduct, [selectedColor, resolveColorKey(currentProduct, selectedColor)], config);
    specialColorDebugLog('pickSample', {
        productId: currentProduct.id,
        selectedColor: selectedColor,
        pickedColor: config.sampleColor,
        focusX: config.focusX,
        focusY: config.focusY,
        zoom: config.zoom
    });

    writeSpecialColorSnapshot(currentProduct, selectedColor);
    persistSpecialColorStateForProduct(currentProduct);
    updateSpecialColorOptionStyles();
    syncSpecialColorPickerUI();
    setSpecialColorPickMode(false, 'Pattern sample updated at ' + config.sampleColor + '.');
}

function buildSplitColorStops(tones) {
    var safeTones = (tones || []).filter(function (tone) {
        return /^#[0-9a-fA-F]{6}$/.test(String(tone || ''));
    });
    if (safeTones.length === 0) return '#d9d9d9 0%, #d9d9d9 100%';
    if (safeTones.length === 1) return safeTones[0] + ' 0%, ' + safeTones[0] + ' 100%';

    var step = 100 / safeTones.length;
    var stops = [];
    safeTones.forEach(function (tone, index) {
        var start = formatPercent(index * step);
        var end = formatPercent((index + 1) * step);
        stops.push(tone + ' ' + start + '%');
        stops.push(tone + ' ' + end + '%');
    });
    return stops.join(', ');
}

function buildGradientColorStops(tones) {
    var safeTones = (tones || []).filter(function (tone) {
        return /^#[0-9a-fA-F]{6}$/.test(String(tone || ''));
    });
    if (safeTones.length === 0) return '#d9d9d9 0%, #d9d9d9 100%';
    if (safeTones.length === 1) return safeTones[0] + ' 0%, ' + safeTones[0] + ' 100%';

    var step = 100 / (safeTones.length - 1);
    return safeTones.map(function (tone, index) {
        return tone + ' ' + formatPercent(index * step) + '%';
    }).join(', ');
}

function formatPercent(value) {
    return Number(value).toFixed(2).replace(/\.00$/, '').replace(/(\.\d*[1-9])0$/, '$1');
}

function inferHexFromColorName(colorName) {
    var key = String(colorName || '').trim().toLowerCase();
    var map = {
        black: '#111111',
        white: '#f5f5f5',
        blue: '#2f6fe5',
        navy: '#1f2b5f',
        green: '#2f9e44',
        red: '#cc3333',
        pink: '#e78ac3',
        purple: '#7b61c8',
        yellow: '#f4c430',
        orange: '#f28e2b',
        gray: '#9ea3ab',
        grey: '#9ea3ab',
        silver: '#c0c0c0',
        gold: '#d4af37',
        khaki: '#b8a66a',
        ivory: '#f3ead7',
        salmon: '#f29a8b',
        rose: '#d08ba0'
    };

    if (map[key]) return map[key];

    var matched = Object.keys(map).find(function (name) {
        return key.indexOf(name) >= 0;
    });
    return matched ? map[matched] : '#d9d9d9';
}

function resolveColorKey(product, color) {
    if (!product || !color) return null;
    var target = String(color).trim().toLowerCase();
    var candidateKeys = [];
    if (product.mediaByColor) candidateKeys = candidateKeys.concat(Object.keys(product.mediaByColor));
    if (product.images) candidateKeys = candidateKeys.concat(Object.keys(product.images));
    if (product.options && Array.isArray(product.options.Color)) candidateKeys = candidateKeys.concat(product.options.Color);
    var unique = Array.from(new Set(candidateKeys));
    for (var i = 0; i < unique.length; i++) {
        if (String(unique[i]).trim().toLowerCase() === target) return unique[i];
    }
    return color;
}

function getDefaultColor(product) {
    if (!product || !product.options || !Array.isArray(product.options.Color) || product.options.Color.length === 0) {
        return null;
    }
    return product.options.Color[0];
}

function getProductMediaForColor(product, color) {
    if (!product) return [];
    var resolvedColor = resolveColorKey(product, color);

    // 1. Get General Media (mains + angles) for this color
    var generalMedia = [];
    if (resolvedColor && product.mediaByColor && Array.isArray(product.mediaByColor[resolvedColor])) {
        generalMedia = product.mediaByColor[resolvedColor].slice();
    } else if (resolvedColor && product.mainImagesByColor && Array.isArray(product.mainImagesByColor[resolvedColor])) {
        generalMedia = product.mainImagesByColor[resolvedColor].slice();
    }

    // 2. Check Special Color config
    var specConfig = getSpecialColorSwatchConfig(product, resolvedColor || color);
    var pool = getProductImagePool(product);

    if (specConfig) {
        var merged = [];
        var specMains = Array.isArray(specConfig.media) ? specConfig.media : [];
        var specAngles = Array.isArray(specConfig.angles) ? specConfig.angles : [];

        // Start with Special Mains
        specMains.forEach(function (u) { if (u && !merged.includes(u) && pool.includes(u)) merged.push(u); });

        // Add General Media (maintaining order, ensuring no duplicates)
        generalMedia.forEach(function (u) { if (u && !merged.includes(u) && pool.includes(u)) merged.push(u); });

        // Add Special Angles
        specAngles.forEach(function (u) { if (u && !merged.includes(u) && pool.includes(u)) merged.push(u); });

        if (merged.length > 0) return merged;
    }

    // 3. Fallback to General Media if no specConfig or specConfig produced nothing
    if (generalMedia.length > 0) {
        return generalMedia.filter(function (u) { return pool.includes(u); });
    }

    // "All" fallback – when no specific color is matched or desired.
    // v11.2: Use mediaByColor for full Mains+Angles set instead of truncated 'images' map.
    var allMedia = [];
    if (product.mediaByColor) {
        Object.keys(product.mediaByColor).forEach(function (variantColor) {
            var colorImages = product.mediaByColor[variantColor];
            if (Array.isArray(colorImages)) {
                colorImages.forEach(function (url) {
                    if (url && !allMedia.includes(url) && pool.includes(url)) allMedia.push(url);
                });
            }
        });
    }

    if (allMedia.length === 0 && product.images) {
        Object.keys(product.images).forEach(function (variantColor) {
            var url = product.images[variantColor];
            if (url && !allMedia.includes(url) && pool.includes(url)) allMedia.push(url);
        });
    }

    return allMedia;
}

function normalizeMediaUrlForMatch(value) {
    var raw = String(value || '').trim();
    if (!raw) return '';
    try {
        var parsed = new URL(raw, window.location.href);
        return String(parsed.origin + parsed.pathname).toLowerCase();
    } catch (e) {
        var withoutHash = raw.split('#')[0];
        var withoutQuery = withoutHash.split('?')[0];
        return String(withoutQuery || raw).trim().toLowerCase();
    }
}

function findMediaIndexByUrl(images, targetUrl) {
    var list = Array.isArray(images) ? images : [];
    if (!list.length) return -1;
    var target = String(targetUrl || '').trim();
    if (!target) return -1;

    var exact = list.indexOf(target);
    if (exact >= 0) return exact;

    var targetNormalized = normalizeMediaUrlForMatch(target);
    if (!targetNormalized) return -1;
    for (var i = 0; i < list.length; i++) {
        if (normalizeMediaUrlForMatch(list[i]) === targetNormalized) return i;
    }
    return -1;
}

function normalizeModalSelectionColorKey(product, color) {
    var canonical = getCanonicalColorValue(product, color);
    var resolved = String(resolveColorKey(product, canonical || color) || canonical || color || 'Default').trim().toLowerCase();
    return resolved || 'default';
}

function getProductSavedModalIndex(product, color, imagesLength) {
    var length = Number(imagesLength);
    if (!isFinite(length) || length <= 0) return -1;
    var map = sanitizeModalSelectionByColorMap(product && product.modalSelectionByColor);
    if (!map) return -1;
    var key = normalizeModalSelectionColorKey(product, color);
    var value = Number(map[key]);
    if (!isFinite(value)) return -1;
    value = Math.max(0, Math.floor(value));
    if (value > length - 1) value = length - 1;
    return value;
}

function getProductSavedModalImage(product, color) {
    var map = sanitizeModalImageByColorMap(product && product.modalImageByColor);
    if (!map) return '';
    var key = normalizeModalSelectionColorKey(product, color);
    var value = String(map[key] || '').trim();
    return value || '';
}

function saveProductModalSelection(product, color, index) {
    if (!product) return;
    var numericIndex = Number(index);
    if (!isFinite(numericIndex)) return;
    var key = normalizeModalSelectionColorKey(product, color);
    if (!product.modalSelectionByColor || typeof product.modalSelectionByColor !== 'object') {
        product.modalSelectionByColor = {};
    }
    product.modalSelectionByColor[key] = Math.max(0, Math.floor(numericIndex));
    var canonicalColor = getCanonicalColorValue(product, color);
    if (canonicalColor) product.modalLastColor = canonicalColor;
    product.modalLastIndex = Math.max(0, Math.floor(numericIndex));
    var activeImage = modalCarouselImages && modalCarouselImages[product.modalLastIndex]
        ? String(modalCarouselImages[product.modalLastIndex]).trim()
        : '';
    if (activeImage) product.modalLastImage = activeImage;
    if (!product.modalImageByColor || typeof product.modalImageByColor !== 'object') {
        product.modalImageByColor = {};
    }
    if (activeImage) product.modalImageByColor[key] = activeImage;

    var productIndex = findProductIndexForSpecialColorSave(product);
    if (productIndex >= 0) {
        if (!products[productIndex].modalSelectionByColor || typeof products[productIndex].modalSelectionByColor !== 'object') {
            products[productIndex].modalSelectionByColor = {};
        }
        products[productIndex].modalSelectionByColor[key] = product.modalSelectionByColor[key];
        if (!products[productIndex].modalImageByColor || typeof products[productIndex].modalImageByColor !== 'object') {
            products[productIndex].modalImageByColor = {};
        }
        if (activeImage) products[productIndex].modalImageByColor[key] = activeImage;
        products[productIndex].modalLastColor = product.modalLastColor || null;
        products[productIndex].modalLastIndex = product.modalLastIndex;
        products[productIndex].modalLastImage = product.modalLastImage || '';
    }
}

function findColorForMediaImage(product, imageUrl) {
    if (!product || !imageUrl) return '';
    var target = String(imageUrl || '').trim();
    if (!target) return '';
    var colors = getSpecialColorVariantValues(product);
    for (var i = 0; i < colors.length; i++) {
        var color = colors[i];
        var media = getProductMediaForColor(product, color);
        if (Array.isArray(media) && findMediaIndexByUrl(media, target) >= 0) {
            return String(color || '').trim();
        }
    }
    return '';
}

function getModalCarouselStateKey(product, color) {
    var variants = getModalCarouselStateKeyVariants(product, color);
    return variants.length > 0 ? variants[0] : '';
}

function getModalCarouselProductStateKey(product) {
    if (!product) return '';
    var productKey = String(product.id || '').trim() || ('name:' + String(product.name || '').trim().toLowerCase());
    if (!productKey) return '';
    return productKey + '::any';
}

function getModalThumbStrictKey(product, color) {
    if (!product) return '';
    var productKey = String(product.id || '').trim() || ('name:' + String(product.name || '').trim().toLowerCase());
    if (!productKey) return '';
    var colorKey = normalizeModalSelectionColorKey(product, color);
    if (!colorKey) return '';
    return productKey + '::' + colorKey;
}

function getModalThumbStrictAnyKey(product) {
    if (!product) return '';
    var productKey = String(product.id || '').trim() || ('name:' + String(product.name || '').trim().toLowerCase());
    if (!productKey) return '';
    return productKey + '::any';
}

function getModalPinnedImageKey(product, color) {
    if (!product) return '';
    var productKey = String(product.id || '').trim() || ('name:' + String(product.name || '').trim().toLowerCase());
    if (!productKey) return '';
    var colorKey = normalizeModalSelectionColorKey(product, color);
    if (!colorKey) return '';
    return productKey + '::' + colorKey;
}

function getModalPinnedImageAnyKey(product) {
    if (!product) return '';
    var productKey = String(product.id || '').trim() || ('name:' + String(product.name || '').trim().toLowerCase());
    if (!productKey) return '';
    return productKey + '::any';
}

function getModalPinnedImage(product, color) {
    var key = getModalPinnedImageKey(product, color);
    if (key) {
        var exact = String(modalPinnedImageByProductColor[key] || '').trim();
        if (exact) return exact;
    }
    return '';
}

function saveModalPinnedImage(product, color, imageUrl) {
    var image = String(imageUrl || '').trim();
    if (!product || !image) return;
    var key = getModalPinnedImageKey(product, color);
    if (key) modalPinnedImageByProductColor[key] = image;
    var anyKey = getModalPinnedImageAnyKey(product);
    if (anyKey) modalPinnedImageByProductColor[anyKey] = image;
    saveModalPinnedImageStateToStorage();
}

function getSavedModalCarouselIndexFromStrict(product, color, imagesOrLength) {
    var images = Array.isArray(imagesOrLength) ? imagesOrLength : [];
    var imagesLength = Array.isArray(imagesOrLength) ? images.length : Number(imagesOrLength);
    if (!isFinite(imagesLength) || imagesLength <= 0) return -1;
    var key = getModalThumbStrictKey(product, color);
    if (!key) return -1;
    function resolveEntryIndex(entry, requireImageMatch) {
        var normalized = sanitizeModalThumbStrictEntry(entry);
        if (!normalized) return -1;
        if (normalized.image && images.length > 0) {
            var byImage = findMediaIndexByUrl(images, String(normalized.image).trim());
            if (byImage >= 0) return byImage;
            if (requireImageMatch) return -1;
        } else if (requireImageMatch) {
            return -1;
        }
        var value = Number(normalized.index);
        if (!isFinite(value)) return -1;
        value = Math.max(0, Math.floor(value));
        if (value > imagesLength - 1) value = imagesLength - 1;
        return value;
    }

    var exact = resolveEntryIndex(modalThumbStrictByProductColor[key], false);
    if (exact >= 0) return exact;
    return -1;
}

function saveModalCarouselIndexToStrict(product, color, index) {
    var key = getModalThumbStrictKey(product, color);
    if (!key) return;
    var numeric = Number(index);
    if (!isFinite(numeric)) return;
    var clamped = Math.max(0, Math.floor(numeric));
    var selectedImage = modalCarouselImages && modalCarouselImages[clamped]
        ? String(modalCarouselImages[clamped]).trim()
        : '';
    var colorKey = normalizeModalSelectionColorKey(product, color);
    var entry = { index: clamped };
    if (selectedImage) entry.image = selectedImage;
    if (colorKey) entry.colorKey = colorKey;
    modalThumbStrictByProductColor[key] = entry;
    var anyKey = getModalThumbStrictAnyKey(product);
    if (anyKey) {
        modalThumbStrictByProductColor[anyKey] = clonePlainData(entry);
    }
    saveModalThumbStrictStateToStorage();
}

function getSavedModalCarouselIndexByKey(key, imagesOrLength) {
    var images = Array.isArray(imagesOrLength) ? imagesOrLength : [];
    var imagesLength = Array.isArray(imagesOrLength) ? images.length : Number(imagesOrLength);
    if (!isFinite(imagesLength)) imagesLength = 0;
    if (!key || !imagesLength || imagesLength <= 0) return -1;

    var savedImage = String(modalCarouselSelectedImageByProductColor[key] || '').trim();
    if (savedImage && images.length > 0) {
        var byImage = findMediaIndexByUrl(images, savedImage);
        if (byImage >= 0) return byImage;
    }

    var saved = Number(modalCarouselIndexByProductColor[key]);
    if (!isFinite(saved)) return -1;
    saved = Math.floor(saved);
    if (saved < 0) saved = 0;
    if (saved > imagesLength - 1) saved = imagesLength - 1;
    return saved;
}

function getSavedModalCarouselIndex(product, color, imagesOrLength) {
    var imagesLength = Array.isArray(imagesOrLength) ? imagesOrLength.length : Number(imagesOrLength);
    var images = Array.isArray(imagesOrLength) ? imagesOrLength : [];
    var strictSaved = getSavedModalCarouselIndexFromStrict(product, color, imagesOrLength);
    if (strictSaved >= 0) return strictSaved;
    var productSavedImage = getProductSavedModalImage(product, color);
    if (productSavedImage && images.length > 0) {
        var byImage = findMediaIndexByUrl(images, productSavedImage);
        if (byImage >= 0) return byImage;
    }
    var savedFromProduct = getProductSavedModalIndex(product, color, imagesLength);
    if (savedFromProduct >= 0) return savedFromProduct;
    return 0;
}

function saveModalCarouselIndex(product, color, index) {
    if (!product) return;
    var value = Number(index);
    if (!isFinite(value)) return;
    var clamped = Math.max(0, Math.floor(value));
    var normalizedColor = getCanonicalColorValue(product, color) || String(color || '').trim() || '';
    saveProductModalSelection(product, color, clamped);
    saveModalCarouselIndexToStrict(product, color, clamped);
    var selectedImage = modalCarouselImages && modalCarouselImages[clamped]
        ? String(modalCarouselImages[clamped]).trim()
        : '';
    saveModalSelectionV2(product, normalizedColor || color, clamped, selectedImage);
    saveModalSelectionV3(product, normalizedColor || color, clamped, selectedImage);
    var reopenPatch = { index: clamped };
    if (normalizedColor) reopenPatch.color = normalizedColor;
    if (selectedImage) {
        saveModalPinnedImage(product, color, selectedImage);
        saveModalLastImage(product, selectedImage);
        reopenPatch.image = selectedImage;
        updateModalUiState(product, {
            selectedColor: normalizedColor || color || '',
            selectedImage: selectedImage,
            selectedIndex: clamped
        });
    } else if (normalizedColor) {
        updateModalUiState(product, { selectedColor: normalizedColor, selectedIndex: clamped });
    }
    updateModalReopenState(product, reopenPatch);
    saveToStorage();
}

function setModalCarouselImages(images, startIndex, options) {
    modalCarouselImages = (images || []).filter(function (src) { return !!src; });
    if (modalCarouselImages.length === 0) {
        modalCarouselImages = ['https://via.placeholder.com/800?text=No+Image'];
    }

    modalCarouselIndex = Math.max(0, Math.min(startIndex || 0, modalCarouselImages.length - 1));
    var shouldPersist = !(options && options.persist === false);
    if (currentProduct && shouldPersist) {
        saveModalCarouselIndex(currentProduct, selectedVariants.Color || getDefaultColor(currentProduct), modalCarouselIndex);
        var selectedImage = modalCarouselImages && modalCarouselImages[modalCarouselIndex]
            ? String(modalCarouselImages[modalCarouselIndex]).trim()
            : '';
        if (selectedImage) {
            updateModalUiState(currentProduct, {
                selectedColor: selectedVariants.Color || getDefaultColor(currentProduct),
                selectedImage: selectedImage
            });
        }
    }
    updateModalCarouselUI();
}

function moveModalCarousel(step) {
    if (!modalCarouselImages.length) return;
    var nextIndex = modalCarouselIndex + step;
    if (nextIndex < 0) nextIndex = modalCarouselImages.length - 1;
    if (nextIndex >= modalCarouselImages.length) nextIndex = 0;
    goToModalCarouselIndex(nextIndex);
    resetModalCarouselAutoplay();
}

function selectModalThumbnail(index) {
    var numericIndex = Number(index);
    if (!isFinite(numericIndex)) return;
    numericIndex = Math.floor(numericIndex);
    if (numericIndex < 0 || numericIndex >= modalCarouselImages.length) return;
    modalCarouselIndex = numericIndex;
    modalCarouselDirty = true;
    if (currentProduct) {
        var activeColor = selectedVariants.Color || getDefaultColor(currentProduct);
        saveModalCarouselIndex(currentProduct, activeColor, modalCarouselIndex);
        var selectedImage = modalCarouselImages && modalCarouselImages[modalCarouselIndex]
            ? String(modalCarouselImages[modalCarouselIndex]).trim()
            : '';
        specialColorDebugLog('thumbSelect', {
            productId: currentProduct.id,
            color: activeColor || null,
            index: modalCarouselIndex,
            image: selectedImage || null
        });
    }
    updateModalCarouselUI();
    resetModalCarouselAutoplay();
}

function handleModalThumbnailActivate(index, event) {
    if (event) {
        if (typeof event.preventDefault === 'function') event.preventDefault();
        if (typeof event.stopPropagation === 'function') event.stopPropagation();
    }
    selectModalThumbnail(index);
    return false;
}

function goToModalCarouselIndex(index) {
    selectModalThumbnail(index);
}

function startModalCarouselAutoplay() {
    if (modalCarouselImages.length < 2) return;

    stopModalCarouselAutoplay();
    modalCarouselTimer = setTimeout(function () {
        var container = document.querySelector('#productModal .main-image-container');
        var isHidden = document.hidden;
        var isInteracting = container && (container.matches(':hover') || container.matches(':focus-within'));

        if (!isHidden && !isInteracting) {
            moveModalCarousel(1);
        }
        startModalCarouselAutoplay();
    }, modalCarouselDelay);
}

function stopModalCarouselAutoplay() {
    if (modalCarouselTimer) {
        clearTimeout(modalCarouselTimer);
        modalCarouselTimer = null;
    }
}

function resetModalCarouselAutoplay() {
    stopModalCarouselAutoplay();
}

function updateModalCarouselUI() {
    var mainImage = document.getElementById('mainImage');
    var thumbs = document.getElementById('thumbnails');
    var imageIndexControls = document.getElementById('modalImageIndexControls');
    if (!mainImage || !thumbs) return;

    mainImage.src = modalCarouselImages[modalCarouselIndex];

    var thumbHtml = '';
    modalCarouselImages.forEach(function (img, idx) {
        thumbHtml += '<button type="button" data-index="' + idx + '" class="thumbnail' + (idx === modalCarouselIndex ? ' active' : '') + '" aria-label="View image ' + (idx + 1) + '" style="background-image:url(&quot;' + escapeCssUrl(img) + '&quot;);"></button>';
    });
    if (currentProduct && currentProduct.model && currentProduct.model.url) {
        var modelThumb = currentProduct.model.thumbnail || modalCarouselImages[0];
        thumbHtml += '<button type="button" class="thumbnail-model" aria-label="Open 3D model" style="background-image:url(' + modelThumb + ');"></button>';
    }
    if (currentProduct && currentProduct.video && currentProduct.video.url) {
        var videoThumb = currentProduct.video.thumbnail || modalCarouselImages[0];
        thumbHtml += '<button type="button" class="thumbnail-video" aria-label="Open product video" style="background-image:url(' + videoThumb + ');"></button>';
    }
    thumbs.innerHTML = thumbHtml;

    if (imageIndexControls) {
        var controlsHtml = '';
        modalCarouselImages.forEach(function (_img, idx) {
            controlsHtml += '<button type="button" class="image-index-btn' + (idx === modalCarouselIndex ? ' active' : '') + '" data-index="' + idx + '" aria-label="Select image ' + (idx + 1) + '">Image ' + (idx + 1) + '</button>';
        });
        imageIndexControls.innerHTML = controlsHtml;
    }
}

function openProductVideo() {
    if (!currentProduct || !currentProduct.video || !currentProduct.video.url) return;
    var frame = document.getElementById('productVideoFrame');
    var player = document.getElementById('productVideoPlayer');
    var modal = document.getElementById('videoModal');
    if (!frame || !player || !modal) return;

    var videoUrl = String(currentProduct.video.url || '').trim();
    var useNativeVideo = currentProduct.video.kind === 'file' || isDirectVideoSource(videoUrl);
    if (useNativeVideo) {
        frame.style.display = 'none';
        frame.src = '';
        player.style.display = 'block';
        player.src = videoUrl;
    } else {
        var embedVideoUrl = toEmbeddableVideoUrl(videoUrl);
        if (!isValidHttpUrl(embedVideoUrl)) {
            showToast('This video link cannot be embedded here. Opening in a new tab.');
            window.open(videoUrl, '_blank', 'noopener');
            return;
        }
        player.pause();
        player.removeAttribute('src');
        player.load();
        player.style.display = 'none';
        frame.style.display = 'block';
        frame.src = embedVideoUrl;
    }
    rememberFocusForModal('videoModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    focusFirstElementIn(modal, '.close-btn');
}

function closeProductVideo() {
    var frame = document.getElementById('productVideoFrame');
    var player = document.getElementById('productVideoPlayer');
    var modal = document.getElementById('videoModal');
    if (frame) frame.src = '';
    if (frame) frame.style.display = 'block';
    if (player) {
        player.pause();
        player.removeAttribute('src');
        player.load();
        player.style.display = 'none';
    }
    if (modal) modal.classList.remove('open');
    restoreFocusForModal('videoModal');
}

function closeProductVideoOnOverlay(event) {
    if (event.target && event.target.id === 'videoModal') {
        closeProductVideo();
    }
}

function openProductModel() {
    if (!currentProduct || !currentProduct.model || !currentProduct.model.url) return;
    var frame = document.getElementById('productModelFrame');
    var viewer = document.getElementById('productModelViewer');
    var modal = document.getElementById('modelModal');
    if (!frame || !viewer || !modal) return;

    var modelUrl = String(currentProduct.model.url || '').trim();
    var useModelViewer = currentProduct.model.kind === 'file' || isDirectModelSource(modelUrl);
    if (useModelViewer) {
        frame.style.display = 'none';
        frame.src = '';
        viewer.style.display = 'block';
        viewer.setAttribute('src', modelUrl);
        viewer.setAttribute('poster', String((currentProduct.model && currentProduct.model.thumbnail) || ''));
    } else {
        var embedModelUrl = toEmbeddableModelUrl(modelUrl);
        if (!isValidHttpUrl(embedModelUrl)) {
            showToast('This 3D model link cannot be embedded here. Opening in a new tab.');
            window.open(modelUrl, '_blank', 'noopener');
            return;
        }
        viewer.style.display = 'none';
        viewer.removeAttribute('src');
        viewer.removeAttribute('poster');
        frame.style.display = 'block';
        frame.src = embedModelUrl;
    }
    rememberFocusForModal('modelModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    focusFirstElementIn(modal, '.close-btn');
}

function closeProductModel() {
    var frame = document.getElementById('productModelFrame');
    var viewer = document.getElementById('productModelViewer');
    var modal = document.getElementById('modelModal');
    if (frame) frame.src = '';
    if (frame) frame.style.display = 'block';
    if (viewer) {
        viewer.style.display = 'none';
        viewer.removeAttribute('src');
        viewer.removeAttribute('poster');
    }
    if (modal) modal.classList.remove('open');
    restoreFocusForModal('modelModal');
}

function closeProductModelOnOverlay(event) {
    if (event.target && event.target.id === 'modelModal') {
        closeProductModel();
    }
}

function toEmbeddableVideoUrl(url) {
    var value = String(url || '').trim();
    if (!value) return '';
    if (isDirectVideoSource(value)) return value;

    var parsed = null;
    try {
        parsed = new URL(value);
    } catch (e) {
        parsed = null;
    }
    if (!parsed) return value;

    var host = String(parsed.hostname || '').trim().toLowerCase().replace(/^www\./, '');
    var pathParts = String(parsed.pathname || '')
        .split('/')
        .filter(function (part) { return !!part; });
    var firstPart = pathParts[0] || '';
    var secondPart = pathParts[1] || '';

    if (host === 'youtu.be') {
        if (firstPart) return 'https://www.youtube.com/embed/' + firstPart;
        return value;
    }

    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
        if (firstPart === 'watch') {
            var videoId = parsed.searchParams.get('v');
            if (videoId) return 'https://www.youtube.com/embed/' + videoId;
        }
        if ((firstPart === 'shorts' || firstPart === 'live') && secondPart) {
            return 'https://www.youtube.com/embed/' + secondPart;
        }
        if (firstPart === 'embed' && secondPart) {
            return 'https://www.youtube.com/embed/' + secondPart;
        }
    }

    if (host === 'vimeo.com' || host === 'player.vimeo.com') {
        var videoPart = '';
        if (host === 'player.vimeo.com' && firstPart === 'video' && secondPart) {
            videoPart = secondPart;
        } else if (/^\d+$/.test(firstPart)) {
            videoPart = firstPart;
        }
        if (videoPart) return 'https://player.vimeo.com/video/' + videoPart;
    }

    return value;
}

function toEmbeddableModelUrl(url) {
    var value = String(url || '').trim();
    if (!value) return '';
    if (isDirectModelSource(value)) return value;

    var parsed = null;
    try {
        parsed = new URL(value);
    } catch (e) {
        parsed = null;
    }
    if (!parsed) return value;

    var host = String(parsed.hostname || '').trim().toLowerCase().replace(/^www\./, '');
    var pathParts = String(parsed.pathname || '')
        .split('/')
        .filter(function (part) { return !!part; });

    if (host === 'sketchfab.com') {
        var modelIndex = pathParts.indexOf('models');
        if (modelIndex >= 0 && pathParts[modelIndex + 1]) {
            return 'https://sketchfab.com/models/' + pathParts[modelIndex + 1] + '/embed';
        }
    }

    return value;
}

function changeQuantity(delta) {
    quantity = Math.max(1, Math.min(currentProduct.stock, quantity + delta));
    document.getElementById('qtyDisplay').textContent = quantity;
    updateStockInfo();
}

function updateStockInfo() {
    var stockEl = document.getElementById('stockInfo');
    if (currentProduct.stock > 10) {
        stockEl.textContent = 'In stock (' + currentProduct.stock + ' available)';
        stockEl.className = 'stock-info';
    } else if (currentProduct.stock > 0) {
        stockEl.textContent = 'Only ' + currentProduct.stock + ' left in stock!';
        stockEl.className = 'stock-info low';
    } else {
        stockEl.textContent = 'Out of stock';
        stockEl.className = 'stock-info out';
    }
}

function toggleWishlistModal() {
    if (!currentProduct) return;
    toggleWishlist(currentProduct.id);
    if (!currentUser) return;
    var btn = document.getElementById('wishlistBtnText');
    var isWishlisted = wishlist.includes(currentProduct.id);
    btn.innerHTML = isWishlisted ? '&#9829; Added to watchlist' : '&#9825; Add to watchlist';
}

// Wishlist
function toggleWishlist(productId) {
    if (!ensureAuthenticatedForShopping('save items to your watchlist')) return false;
    var index = wishlist.indexOf(productId);
    if (index >= 0) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(productId);
    }
    saveToStorage();
    renderProducts();
    return true;
}

function clearToastTimers() {
    if (toastTimer) {
        clearTimeout(toastTimer);
        toastTimer = null;
    }
    if (undoTimer) {
        clearTimeout(undoTimer);
        undoTimer = null;
    }
}

function clearPendingUndoAction() {
    pendingUndoAction = null;
    if (undoTimer) {
        clearTimeout(undoTimer);
        undoTimer = null;
    }
    var undoBtn = document.getElementById('toastUndoBtn');
    if (undoBtn) undoBtn.style.display = 'none';
}

function renderToast(message, options) {
    var toast = document.getElementById('toast');
    var messageNode = document.getElementById('toastMessage');
    var undoBtn = document.getElementById('toastUndoBtn');
    if (!toast || !messageNode || !undoBtn) return;

    var withUndo = Boolean(options && typeof options.onUndo === 'function');
    var durationMs = Number(options && options.durationMs) || (withUndo ? 7000 : 3000);

    clearToastTimers();
    messageNode.textContent = String(message || '');

    if (withUndo) {
        pendingUndoAction = options.onUndo;
        undoBtn.textContent = String((options && options.undoLabel) || 'Undo');
        undoBtn.style.display = 'inline-flex';
        undoTimer = setTimeout(function () {
            clearPendingUndoAction();
        }, durationMs);
    } else {
        clearPendingUndoAction();
    }

    toast.classList.add('show');
    toastTimer = setTimeout(function () {
        toast.classList.remove('show');
        if (withUndo) clearPendingUndoAction();
    }, durationMs);
}

// Toast
function showToast(message) {
    renderToast(message, { durationMs: 3000 });
}

function showUndoToast(message, onUndo, durationMs) {
    if (typeof onUndo !== 'function') {
        showToast(message);
        return;
    }
    renderToast(message, {
        onUndo: onUndo,
        undoLabel: 'Undo',
        durationMs: durationMs || 8000
    });
}

function triggerUndoAction() {
    if (typeof pendingUndoAction !== 'function') return;
    var undo = pendingUndoAction;
    clearPendingUndoAction();
    clearToastTimers();
    var toast = document.getElementById('toast');
    if (toast) toast.classList.remove('show');
    try {
        undo();
        showToast('Action undone');
    } catch (e) {
        showToast('Could not undo action');
    }
}

function showStartupError(error) {
    var message = '';
    if (error && error.message) {
        message = String(error.message);
    } else {
        message = String(error || 'Unknown startup error');
    }
    console.error('App startup failed:', error);
    try {
        showToast('Startup error: ' + message);
    } catch (toastError) {
        alert('Startup error: ' + message);
    }
}

function bootApp() {
    try {
        init();
        hydrateStateFromCloud();
    } catch (error) {
        showStartupError(error);
    }
}

// Initialize on load
window.addEventListener('load', bootApp);
