window.IG_CLOUD_CONFIG = {
    // Set to your deployed API Gateway base URL, for example:
    // https://abc123.execute-api.us-east-1.amazonaws.com/prod
    apiBaseUrl: '',
    // Optional API key if your API Gateway stage requires one.
    apiKey: '',
    // Keep false by default to prevent failed requests during local-only use.
    enabled: false,
    // Keep true so admin-added products persist in this browser after refresh.
    allowLocalProductOverrides: true,
    // Request timeout for cloud reads/writes in milliseconds.
    timeoutMs: 7000
};
