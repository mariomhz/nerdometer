// API Configuration
const config = {
    // Development: Local server
    development: {
        apiUrl: 'http://localhost:3000/api'
    },

    // Production: Replace with your deployed backend URL
    production: {
        apiUrl: 'https://your-app.herokuapp.com/api'
        // Or: 'https://your-app.railway.app/api'
        // Or: 'https://your-app.onrender.com/api'
    }
};

// Auto-detect environment (change to 'production' when deploying)
const ENV = 'development';

// Export the active configuration
const API_CONFIG = config[ENV];
