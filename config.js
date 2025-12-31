// API Configuration
const config = {
    // Development: Local server
    development: {
        apiUrl: 'http://localhost:3000/api'
    },

    // Production: Railway backend
    production: {
        apiUrl: 'https://nerdometer-production.up.railway.app/api'
    }
};

// Auto-detect environment (change to 'production' when deploying)
const ENV = 'production';

// Export the active configuration
const API_CONFIG = config[ENV];
