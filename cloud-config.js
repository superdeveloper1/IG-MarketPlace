window.IG_CLOUD_CONFIG = {
    // Set to your deployed API Gateway base URL, for example:
    // https://abc123.execute-api.us-east-1.amazonaws.com/prod
    apiBaseUrl: '',
    // Optional API key if your API Gateway stage requires one.
    apiKey: '',
    // Keep false by default to prevent failed requests during local-only use.
    enabled: false,
    // Keep false so all visitors see the built-in catalog from script.js.
    allowLocalProductOverrides: false,
    // Request timeout for cloud reads/writes in milliseconds.
    timeoutMs: 7000
};
