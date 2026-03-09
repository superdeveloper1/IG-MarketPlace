window.IG_CLOUD_CONFIG = {
    // Vercel serverless API base path for shared state.
    apiBaseUrl: '/api',
    // Optional API key if your backend requires one.
    apiKey: '',
    // Enabled to persist shared products/state for all visitors.
    enabled: true,
    // Use cloud global state as source of truth for catalog across users.
    allowLocalProductOverrides: false,
    // Request timeout for cloud reads/writes in milliseconds.
    timeoutMs: 7000
};
