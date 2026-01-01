const API_URL = (typeof API_CONFIG !== 'undefined' && API_CONFIG.apiUrl)
    ? API_CONFIG.apiUrl
    : 'http://localhost:3000/api';

// DOM Elements
const loginScreen = document.getElementById('login-screen');
const registerScreen = document.getElementById('register-screen');
const forgotPasswordScreen = document.getElementById('forgot-password-screen');

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const forgotPasswordForm = document.getElementById('forgot-password-form');

const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');
const showForgotPasswordLink = document.getElementById('show-forgot-password');
const backToLoginLink = document.getElementById('back-to-login');

// Show different screens
showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginScreen.classList.remove('active');
    registerScreen.classList.add('active');
    clearErrors();
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerScreen.classList.remove('active');
    loginScreen.classList.add('active');
    clearErrors();
});

showForgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginScreen.classList.remove('active');
    forgotPasswordScreen.classList.add('active');
    clearErrors();
});

backToLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    forgotPasswordScreen.classList.remove('active');
    loginScreen.classList.add('active');
    clearErrors();
});

function clearErrors() {
    document.querySelectorAll('.error-message, .success-message').forEach(el => {
        el.classList.remove('show');
        el.textContent = '';
    });
}

// Login Form
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorEl = document.getElementById('login-error');
    const submitBtn = loginForm.querySelector('button[type="submit"]');

    // Disable button
    submitBtn.disabled = true;
    errorEl.classList.remove('show');

    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (data.success) {
            // Store token and user data
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            // Redirect to main app
            window.location.href = 'index.html';
        } else {
            errorEl.textContent = data.message;
            errorEl.classList.add('show');
            submitBtn.disabled = false;
        }
    } catch (error) {
        console.error('Login error:', error);
        errorEl.textContent = 'Login failed. Please try again.';
        errorEl.classList.add('show');
        submitBtn.disabled = false;
    }
});

// Register Form
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const errorEl = document.getElementById('register-error');
    const submitBtn = registerForm.querySelector('button[type="submit"]');

    errorEl.classList.remove('show');

    // Validate passwords match
    if (password !== confirmPassword) {
        errorEl.textContent = 'Passwords do not match';
        errorEl.classList.add('show');
        return;
    }

    // Disable button
    submitBtn.disabled = true;

    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (data.success) {
            alert('Registration successful! Please check your email to verify your account.');
            registerScreen.classList.remove('active');
            loginScreen.classList.add('active');
            registerForm.reset();
        } else {
            errorEl.textContent = data.message || 'Registration failed. Please try again.';
            errorEl.classList.add('show');
            submitBtn.disabled = false;
        }
    } catch (error) {
        console.error('Registration error:', error);
        errorEl.textContent = 'Registration failed. Please try again.';
        errorEl.classList.add('show');
        submitBtn.disabled = false;
    }
});

// Forgot Password Form
forgotPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('forgot-email').value;
    const errorEl = document.getElementById('forgot-error');
    const successEl = document.getElementById('forgot-success');
    const submitBtn = forgotPasswordForm.querySelector('button[type="submit"]');

    errorEl.classList.remove('show');
    successEl.classList.remove('show');
    submitBtn.disabled = true;

    try {
        const response = await fetch(`${API_URL}/auth/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (data.success) {
            successEl.textContent = data.message;
            successEl.classList.add('show');
            forgotPasswordForm.reset();
        } else {
            errorEl.textContent = data.message;
            errorEl.classList.add('show');
        }
    } catch (error) {
        console.error('Forgot password error:', error);
        errorEl.textContent = 'Request failed. Please try again.';
        errorEl.classList.add('show');
    } finally {
        submitBtn.disabled = false;
    }
});

// Check if already logged in
if (localStorage.getItem('token')) {
    window.location.href = 'index.html';
}

// Initialize language
if (typeof languageUtils !== 'undefined') {
    languageUtils.init();
}
