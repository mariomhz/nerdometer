// Authentication state
let currentUser = null;
let authToken = null;

// Check authentication on page load
async function checkAuth() {
    authToken = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');

    if (authToken && userStr) {
        try {
            currentUser = JSON.parse(userStr);
            updateUIForLoggedInUser();
        } catch (error) {
            console.error('Error parsing user data:', error);
            logout();
        }
    } else {
        updateUIForGuest();
    }
}

function updateUIForLoggedInUser() {
    const userProfile = document.getElementById('user-profile');
    const guestProfile = document.getElementById('guest-profile');
    const usernameDisplay = document.getElementById('username-display');

    if (usernameDisplay && currentUser) {
        usernameDisplay.textContent = currentUser.username;
    }
    if (userProfile) userProfile.style.display = 'flex';
    if (guestProfile) guestProfile.style.display = 'none';
}

function updateUIForGuest() {
    const userProfile = document.getElementById('user-profile');
    const guestProfile = document.getElementById('guest-profile');

    if (userProfile) userProfile.style.display = 'none';
    if (guestProfile) guestProfile.style.display = 'block';
}

// Logout function
async function logout() {
    try {
        const API_URL = (typeof API_CONFIG !== 'undefined' && API_CONFIG.apiUrl)
            ? API_CONFIG.apiUrl
            : 'http://localhost:3000/api';

        if (authToken) {
            await fetch(`${API_URL}/auth/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authToken}`
                },
                credentials: 'include'
            });
        }
    } catch (error) {
        console.error('Logout error:', error);
    }

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    currentUser = null;
    authToken = null;
    updateUIForGuest();
}

// Add logout event listener
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
});

// Get current language quiz data based on selected language
function getCurrentQuizData() {
    const lang = languageUtils.currentLanguage;
    const categories = translations[lang].categories;
    const questions = translations[lang].questions;

    return categories.map((category, index) => {
        return {
            category: category,
            questions: questions[index]
        };
    });
}

// Quiz mode selection
let quizMode = 'detailed'; // 'quick' or 'detailed'
let allQuestions = [];

// Function to generate questions based on mode
function generateQuestions(mode) {
    const questions = [];
    const quizData = getCurrentQuizData();

    if (mode === 'quick') {
        // 1 question per category (10 total)
        quizData.forEach(category => {
            questions.push({
                category: category.category,
                question: category.questions[0] // First question from each category
            });
        });
    } else {
        // All questions (100 total)
        quizData.forEach(category => {
            category.questions.forEach(question => {
                questions.push({
                    category: category.category,
                    question: question
                });
            });
        });
    }

    return questions;
}

// State
let currentQuestionIndex = 0;
let answers = [];
let categoryScores = {};

// Initialize category scores
function initializeCategoryScores() {
    categoryScores = {};
    const quizData = getCurrentQuizData();
    quizData.forEach(category => {
        const total = quizMode === 'quick' ? 1 : category.questions.length;
        categoryScores[category.category] = { score: 0, total: total };
    });
}

// DOM Elements
const versionScreen = document.getElementById('version-screen');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const quickBtn = document.getElementById('quick-btn');
const detailedBtn = document.getElementById('detailed-btn');
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const progressFill = document.getElementById('progress-fill');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const categoryNameEl = document.getElementById('category-name');
const questionTextEl = document.getElementById('question-text');
const optionBtns = document.querySelectorAll('.option-btn');
const totalInfoEl = document.getElementById('total-info');

// Event Listeners
quickBtn.addEventListener('click', () => selectMode('quick'));
detailedBtn.addEventListener('click', () => selectMode('detailed'));
startBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', goBackToVersionSelection);
restartBtn.addEventListener('click', restartQuiz);
shareBtn.addEventListener('click', shareResults);
optionBtns.forEach(btn => {
    btn.addEventListener('click', handleAnswer);
});

// Language switching
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const newLang = btn.dataset.lang;
        languageUtils.setLanguage(newLang);
    });
});

// Mode selection
function selectMode(mode) {
    quizMode = mode;
    allQuestions = generateQuestions(mode);
    initializeCategoryScores();

    // Update UI
    const questionCount = mode === 'quick' ? languageUtils.t('quickModeDesc') : languageUtils.t('detailedModeDesc');
    totalInfoEl.textContent = `${languageUtils.t('totalInfo').replace('100 preguntas', questionCount).replace('100 questions', questionCount).replace('100 perguntas', questionCount)}`;

    // Show start screen
    versionScreen.classList.remove('active');
    startScreen.classList.add('active');
}

function goBackToVersionSelection() {
    startScreen.classList.remove('active');
    versionScreen.classList.add('active');
}

// Functions
function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    const currentQ = allQuestions[currentQuestionIndex];

    // Update UI
    categoryNameEl.textContent = currentQ.category;
    questionTextEl.textContent = currentQ.question;
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    totalQuestionsEl.textContent = allQuestions.length;

    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / allQuestions.length) * 100;
    progressFill.style.width = progress + '%';

    // Animate question
    const questionContainer = document.getElementById('question-container');
    questionContainer.style.animation = 'none';
    setTimeout(() => {
        questionContainer.style.animation = 'slideIn 0.3s ease-out';
    }, 10);
}

function handleAnswer(e) {
    const answer = e.target.dataset.answer === 'yes';
    const currentQ = allQuestions[currentQuestionIndex];

    // Store answer
    answers.push({
        category: currentQ.category,
        question: currentQ.question,
        answer: answer
    });

    // Update category score
    if (answer) {
        categoryScores[currentQ.category].score++;
    }

    // Move to next question or show results
    currentQuestionIndex++;

    if (currentQuestionIndex < allQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function calculateTotalScore() {
    return answers.filter(a => a.answer).length;
}

function getNerdTitle(score) {
    const percentage = (score / allQuestions.length) * 100;
    const lang = languageUtils.currentLanguage;
    const titles = translations[lang].titles;

    if (percentage >= 90) {
        return titles[0]; // SUPREME OMNINERD
    } else if (percentage >= 80) {
        return titles[1]; // LEGENDARY NERD
    } else if (percentage >= 70) {
        return titles[2]; // ULTRA NERD
    } else if (percentage >= 60) {
        return titles[3]; // CERTIFIED NERD
    } else if (percentage >= 50) {
        return titles[4]; // NERD IN DEVELOPMENT
    } else if (percentage >= 40) {
        return titles[5]; // CASUAL NERD
    } else if (percentage >= 30) {
        return titles[6]; // SEMI-NERD
    } else if (percentage >= 20) {
        return titles[7]; // BEGINNER NERD
    } else if (percentage >= 10) {
        return titles[8]; // NOT SO NERDY
    } else {
        return titles[9]; // ANTI-NERD
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    const totalScore = calculateTotalScore();
    const nerdTitle = getNerdTitle(totalScore);

    // Display score
    document.getElementById('score-display').textContent = `${totalScore} / ${allQuestions.length}`;
    document.getElementById('title-display').textContent = nerdTitle.title;
    document.getElementById('title-description').textContent = nerdTitle.description;

    // Display category breakdown
    const categoryScoresEl = document.getElementById('category-scores');
    categoryScoresEl.innerHTML = '';

    Object.keys(categoryScores).forEach(category => {
        const categoryData = categoryScores[category];
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category-score';

        const percentage = Math.round((categoryData.score / categoryData.total) * 100);

        categoryDiv.innerHTML = `
            <span class="category-score-name">${category}</span>
            <span class="category-score-value">${categoryData.score}/${categoryData.total} (${percentage}%)</span>
        `;

        categoryScoresEl.appendChild(categoryDiv);
    });

    // Save results to backend
    saveResultsToBackend(totalScore, nerdTitle);
}

async function saveResultsToBackend(totalScore, nerdTitle) {
    // Use API_CONFIG from config.js (falls back to localhost if not defined)
    const API_URL = (typeof API_CONFIG !== 'undefined' && API_CONFIG.apiUrl)
        ? `${API_CONFIG.apiUrl}/quiz-results`
        : 'http://localhost:3000/api/quiz-results';

    const percentage = (totalScore / allQuestions.length) * 100;

    const data = {
        totalScore,
        maxScore: allQuestions.length,
        percentage,
        title: nerdTitle.title,
        quizMode: quizMode, // 'quick' or 'detailed'
        categoryScores,
        answers
    };

    try {
        const headers = {
            'Content-Type': 'application/json'
        };

        // Include auth token if user is logged in
        if (authToken) {
            headers['Authorization'] = `Bearer ${authToken}`;
        }

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: headers,
            credentials: 'include',
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            console.log('✅ Results saved successfully:', result.resultId);
        } else {
            console.error('❌ Failed to save results:', result.message);
        }
    } catch (error) {
        console.error('❌ Error saving results:', error);
        // Continue showing results even if save fails
    }
}

function restartQuiz() {
    // Reset state
    currentQuestionIndex = 0;
    answers = [];
    initializeCategoryScores();

    // Show version selection screen
    resultsScreen.classList.remove('active');
    versionScreen.classList.add('active');
}

function shareResults() {
    const totalScore = calculateTotalScore();
    const nerdTitle = getNerdTitle(totalScore);
    const percentage = Math.round((totalScore / allQuestions.length) * 100);

    const shareText = languageUtils.t('shareText')
        .replace('{title}', nerdTitle.title)
        .replace('{score}', totalScore)
        .replace('{total}', allQuestions.length)
        .replace('{percentage}', percentage);

    if (navigator.share) {
        navigator.share({
            title: languageUtils.t('shareTitle'),
            text: shareText
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert(languageUtils.t('shareCopied'));
        }).catch(err => {
            console.log('Error copying:', err);
            alert(languageUtils.t('shareError') + shareText);
        });
    }
}

// Initialize language and authentication on page load
languageUtils.init();
checkAuth();
