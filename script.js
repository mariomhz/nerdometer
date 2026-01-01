// Quiz data structure
const quizData = [
    {
        category: "Anime y Manga",
        questions: [
            "¿Ves anime con regularidad?",
            "¿Lees manga?",
            "¿Conoces el anime de temporada (no solo clásicos)?",
            "¿Has llorado con un anime?",
            "¿Ves anime en japonés original?",
            "¿Sabes qué significan shōnen / seinen / shōjo?",
            "¿Tienes volúmenes físicos de manga?",
            "¿Tienes una lista de anime (MAL, AniList, etc.)?",
            "¿Dices 'el manga es mejor' sin ironía?",
            "¿Reconoces openings de anime solo por el sonido?"
        ]
    },
    {
        category: "Superhéroes y Cómics",
        questions: [
            "¿Lees cómics?",
            "¿Conoces la diferencia entre las líneas temporales de Marvel y DC?",
            "¿Discutes la fidelidad de los cómics en las películas?",
            "¿Tienes un guionista o dibujante favorito?",
            "¿Lees cómics independientes (Image, Dark Horse, etc.)?",
            "¿Conoces superhéroes poco conocidos?",
            "¿Tienes omnibuses o colecciones largas?",
            "¿Ves vídeos de análisis o lore?",
            "¿Dices 'en los cómics...' con frecuencia?",
            "¿Tienes opiniones fuertes sobre reboots?"
        ]
    },
    {
        category: "Videojuegos",
        questions: [
            "¿Juegas videojuegos con regularidad?",
            "¿Tienes consola o PC gaming?",
            "¿Rejuegas juegos varias veces?",
            "¿Te importa el lore?",
            "¿Juegas RPGs o juegos de estrategia?",
            "¿Conoces estudios de desarrollo por nombre?",
            "¿Te emocionas con tráilers de videojuegos?",
            "¿Has jugado juegos retro?",
            "¿Ves contenido de videojuegos en YouTube o Twitch?",
            "¿Tienes opiniones fuertes sobre la dificultad de los juegos?"
        ]
    },
    {
        category: "Fantasía y Ciencia Ficción",
        questions: [
            "¿Te gustan los mundos de fantasía?",
            "¿Te gustan los mundos de ciencia ficción?",
            "¿Conoces lore detallado de universos ficticios?",
            "¿Lees novelas de fantasía o ciencia ficción?",
            "¿Sabes que existen lenguajes inventados (o aprendes uno)?",
            "¿Puedes nombrar múltiples universos ficticios?",
            "¿Disfrutas del worldbuilding?",
            "¿Discutes sobre qué es o no canon?",
            "¿Te gustan las space operas?",
            "¿Te gustan las historias de viajes en el tiempo?"
        ]
    },
    {
        category: "Juegos de Mesa y Rol",
        questions: [
            "¿Juegas juegos de mesa más allá del Monopoly?",
            "¿Tienes varios juegos de mesa?",
            "¿Juegas juegos de rol de mesa (D&D, etc.)?",
            "¿Sabes qué es un DM o GM?",
            "¿Disfrutas leer reglamentos?",
            "¿Ves partidas de rol grabadas?",
            "¿Tienes hojas de personaje guardadas?",
            "¿Disfrutas juegos con mucha estrategia?",
            "¿Te gustan los juegos de cartas (MTG, Pokémon, etc.)?",
            "¿Has pasado horas seguidas en una noche de juego?"
        ]
    },
    {
        category: "Nerd Académico / del Conocimiento",
        questions: [
            "¿Disfrutas aprender por placer?",
            "¿Te gusta la física?",
            "¿Te gustan las matemáticas?",
            "¿Te gusta la informática?",
            "¿Te gusta la biología o la química?",
            "¿Ves YouTube educativo?",
            "¿Lees no ficción?",
            "¿Disfrutas documentales?",
            "¿Te gustan los acertijos o problemas lógicos?",
            "¿Tienes datos aleatorios siempre listos?"
        ]
    },
    {
        category: "Nerd Tecnológico e Internet",
        questions: [
            "¿Sabes programar o hacer scripts?",
            "¿Has programado algo 'por diversión'?",
            "¿Conoces jerga tecnológica?",
            "¿Montas o mejoras PCs?",
            "¿Usas Linux o la terminal?",
            "¿Conoces bien la historia de internet o los memes?",
            "¿Te importan las especificaciones técnicas?",
            "¿Te gusta la automatización?",
            "¿Tienes opiniones fuertes sobre software?",
            "¿Lees changelogs?"
        ]
    },
    {
        category: "Cine, Series y Medios",
        questions: [
            "¿Analizas películas o series en profundidad?",
            "¿Te fijas en la cinematografía?",
            "¿Te importan los directores o guionistas?",
            "¿Ves videoensayos?",
            "¿Haces maratones de series de forma intencional?",
            "¿Conoces el orden de estreno y el orden cronológico?",
            "¿Disfrutas historias lentas o complejas?",
            "¿Revisas tus obras favoritas?",
            "¿Conoces trivia?",
            "¿Citas frases constantemente?"
        ]
    },
    {
        category: "Coleccionismo y Merch",
        questions: [
            "¿Coleccionas figuras o merchandising?",
            "¿Tienes pósters o arte?",
            "¿Compras ediciones especiales?",
            "¿Mantienes las cosas en perfecto estado?",
            "¿Conoces marcas de figuras?",
            "¿Muestras tu colección con orgullo?",
            "¿Tienes estanterías dedicadas a fandoms?",
            "¿Coleccionas cartas?",
            "¿Coleccionas libros o cómics?",
            "¿Te emocionas con lanzamientos limitados?"
        ]
    },
    {
        category: "Comportamientos Meta-Nerd (Bonus)",
        questions: [
            "¿Corriges a la gente 'educadamente'?",
            "¿Haces tier lists?",
            "¿Llevas listas o bases de datos?",
            "¿Te hiperfijas?",
            "¿Haces infodumping cuando te dejan?",
            "¿Recuerdas detalles muy específicos?",
            "¿Disfrutas los debates?",
            "¿Te encantan los easter eggs?",
            "¿Te involucras emocionalmente?",
            "¿Dices 'esto es realmente interesante...'?"
        ]
    }
];

// Quiz mode selection
let quizMode = 'detailed'; // 'quick' or 'detailed'
let allQuestions = [];

// Function to generate questions based on mode
function generateQuestions(mode) {
    const questions = [];

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

// Mode selection
function selectMode(mode) {
    quizMode = mode;
    allQuestions = generateQuestions(mode);
    initializeCategoryScores();

    // Update UI
    const questionCount = mode === 'quick' ? '10 preguntas' : '100 preguntas';
    totalInfoEl.textContent = `Total: ${questionCount}`;

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

    if (percentage >= 90) {
        return {
            title: "OMNINERD SUPREMO",
            description: "Eres la encarnación definitiva del nerd. Tu nivel de conocimiento y pasión por la cultura geek es extraordinario. Probablemente tengas Wikipedia memorizada."
        };
    } else if (percentage >= 80) {
        return {
            title: "NERD LEGENDARIO",
            description: "Tu nivel nerd es impresionante. Dominas múltiples áreas de la cultura geek y tu pasión es innegable. La gente te consulta antes que a Google."
        };
    } else if (percentage >= 70) {
        return {
            title: "ULTRA NERD",
            description: "Definitivamente eres un nerd de corazón. Tus conocimientos son vastos y tu entusiasmo es contagioso. Tus amigos saben que pueden contar contigo para cualquier dato freak."
        };
    } else if (percentage >= 60) {
        return {
            title: "NERD CERTIFICADO",
            description: "Eres oficialmente nerd. Tienes áreas bien definidas donde brillas y tu pasión por ellas es clara. El equilibrio perfecto entre nerd y vida social."
        };
    } else if (percentage >= 50) {
        return {
            title: "NERD EN DESARROLLO",
            description: "Estás en el camino del lado nerd. Tienes varios intereses geek pero aún hay mucho por explorar. Tu potencial es prometedor."
        };
    } else if (percentage >= 40) {
        return {
            title: "NERD CASUAL",
            description: "Disfrutas de algunas cosas nerds pero de forma más relajada. No eres obsesivo, pero sí tienes tus gustos específicos en la cultura geek."
        };
    } else if (percentage >= 30) {
        return {
            title: "SEMI-NERD",
            description: "Tienes algunos intereses nerds dispersos. Ocasionalmente te sumerges en temas geek, pero no es tu identidad principal."
        };
    } else if (percentage >= 20) {
        return {
            title: "NERD PRINCIPIANTE",
            description: "Apenas estás explorando el mundo nerd. Tienes curiosidad por ciertas áreas pero aún no te has sumergido completamente."
        };
    } else if (percentage >= 10) {
        return {
            title: "NO TAN NERD",
            description: "La cultura nerd no es realmente lo tuyo. Puede que tengas uno o dos intereses relacionados, pero en general prefieres otros pasatiempos."
        };
    } else {
        return {
            title: "ANTI-NERD",
            description: "El mundo nerd es completamente ajeno a ti. Y está bien, cada quien tiene sus propios intereses. Pero... ¿estás seguro que respondiste honestamente?"
        };
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
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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

    const shareText = `¡Hice el Nerdómetro! 🤓\n\nMi resultado: ${nerdTitle.title}\nPuntuación: ${totalScore}/${allQuestions.length} (${percentage}%)\n\n¿Qué tan nerd eres tú?`;

    if (navigator.share) {
        navigator.share({
            title: 'Mi resultado del Nerdómetro',
            text: shareText
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('¡Resultado copiado al portapapeles!');
        }).catch(err => {
            console.log('Error copying:', err);
            alert('No se pudo compartir. Intenta copiar manualmente:\n\n' + shareText);
        });
    }
}
