// Multi-language translations for Nerdometer
const translations = {
    en: {
        // HTML meta and title
        title: "Nerdometer - How nerdy are you?",

        // Header
        header: "NERDOMETER",
        subtitle: "Discover how nerdy you really are",

        // Version Selection Screen
        versionTitle: "Choose Your Mode",
        versionSubtitle: "How much time do you have?",
        quickMode: "QUICK MODE",
        quickModeDesc: "10 questions",
        quickModeTime: "2 minutes",
        detailedMode: "FULL MODE",
        detailedModeDesc: "100 questions",
        detailedModeTime: "10 minutes",

        // Start Screen
        intro1: "Answer honestly to the following questions about your interests and habits.",
        intro2: "Each category will explore different aspects of nerd culture.",
        totalInfo: "Total: 100 questions",
        startButton: "Start Quiz",
        backButton: "Change Mode",

        // Quiz Screen
        optionYes: "Yes",
        optionNo: "No",

        // Results Screen
        resultsTitle: "Results!",
        categoryBreakdownTitle: "Breakdown by Category",
        restartButton: "Take Quiz Again",
        shareButton: "Share Result",
        shareTitle: "My Nerdometer Result",
        shareText: "I took the Nerdometer!\n\nMy result: {title}\nScore: {score}/{total} ({percentage}%)\n\nHow nerdy are you?",
        shareCopied: "Result copied to clipboard!",
        shareError: "Could not share. Try copying manually:\n\n",

        // Authentication
        authSubtitle: "Authentication",
        loginTitle: "Login",
        registerTitle: "Create Account",
        forgotPasswordTitle: "Reset Password",
        forgotPasswordDesc: "Enter your email and we'll send you a reset link",
        emailLabel: "Email",
        passwordLabel: "Password",
        usernameLabel: "Username",
        confirmPasswordLabel: "Confirm Password",
        loginButton: "Login",
        registerButton: "Register",
        sendResetButton: "Send Reset Link",
        showRegisterLink: "Don't have an account? Register",
        showLoginLink: "Already have an account? Login",
        showForgotPasswordLink: "Forgot Password?",
        backToLoginLink: "Back to Login",
        continueAsGuestButton: "Continue as Guest",
        orDivider: "OR",
        passwordRequirements: "At least 8 characters, one uppercase, one lowercase, one number",
        passwordsNoMatch: "Passwords do not match",
        loginError: "Login failed. Please try again.",
        registerError: "Registration failed. Please try again.",
        registerSuccess: "Registration successful! Please check your email to verify your account.",
        forgotPasswordError: "Request failed. Please try again.",
        logoutButton: "Logout",
        loginRegisterButton: "Login / Register",

        // Categories
        categories: [
            "Anime and Manga",
            "Superheroes and Comics",
            "Video Games",
            "Fantasy and Sci-Fi",
            "Board Games and RPGs",
            "Academic Nerd",
            "Tech and Internet Nerd",
            "Movies, Series and Media",
            "Collecting and Merch",
            "Meta-Nerd Behaviors (Bonus)"
        ],

        // Quiz Questions (10 categories, 10 questions each)
        questions: [
            // Anime and Manga
            [
                "Do you watch anime regularly?",
                "Do you read manga?",
                "Do you know seasonal anime (not just classics)?",
                "Have you cried watching anime?",
                "Do you watch anime in original Japanese?",
                "Do you know what shōnen / seinen / shōjo mean?",
                "Do you own physical manga volumes?",
                "Do you have an anime list (MAL, AniList, etc.)?",
                "Do you say 'the manga is better' unironically?",
                "Can you recognize anime openings by sound alone?"
            ],
            // Superheroes and Comics
            [
                "Do you read comics?",
                "Do you know the difference between Marvel and DC timelines?",
                "Do you discuss comic accuracy in movies?",
                "Do you have a favorite writer or artist?",
                "Do you read indie comics (Image, Dark Horse, etc.)?",
                "Do you know obscure superheroes?",
                "Do you own omnibuses or long collections?",
                "Do you watch analysis or lore videos?",
                "Do you say 'in the comics...' frequently?",
                "Do you have strong opinions about reboots?"
            ],
            // Video Games
            [
                "Do you play video games regularly?",
                "Do you own a console or gaming PC?",
                "Do you replay games multiple times?",
                "Do you care about lore?",
                "Do you play RPGs or strategy games?",
                "Do you know development studios by name?",
                "Do you get excited about game trailers?",
                "Have you played retro games?",
                "Do you watch gaming content on YouTube or Twitch?",
                "Do you have strong opinions about game difficulty?"
            ],
            // Fantasy and Sci-Fi
            [
                "Do you like fantasy worlds?",
                "Do you like sci-fi worlds?",
                "Do you know detailed lore of fictional universes?",
                "Do you read fantasy or sci-fi novels?",
                "Do you know invented languages exist (or learn one)?",
                "Can you name multiple fictional universes?",
                "Do you enjoy worldbuilding?",
                "Do you discuss what is or isn't canon?",
                "Do you like space operas?",
                "Do you like time travel stories?"
            ],
            // Board Games and RPGs
            [
                "Do you play board games beyond Monopoly?",
                "Do you own multiple board games?",
                "Do you play tabletop RPGs (D&D, etc.)?",
                "Do you know what a DM or GM is?",
                "Do you enjoy reading rulebooks?",
                "Do you watch recorded RPG sessions?",
                "Do you have saved character sheets?",
                "Do you enjoy highly strategic games?",
                "Do you like card games (MTG, Pokemon, etc.)?",
                "Have you spent hours on a game night?"
            ],
            // Academic Nerd
            [
                "Do you enjoy learning for pleasure?",
                "Do you like physics?",
                "Do you like math?",
                "Do you like computer science?",
                "Do you like biology or chemistry?",
                "Do you watch educational YouTube?",
                "Do you read non-fiction?",
                "Do you enjoy documentaries?",
                "Do you like puzzles or logic problems?",
                "Do you always have random facts ready?"
            ],
            // Tech and Internet Nerd
            [
                "Do you know how to code or script?",
                "Have you programmed something 'for fun'?",
                "Do you know tech jargon?",
                "Do you build or upgrade PCs?",
                "Do you use Linux or the terminal?",
                "Do you know internet history or memes well?",
                "Do you care about technical specs?",
                "Do you like automation?",
                "Do you have strong opinions about software?",
                "Do you read changelogs?"
            ],
            // Movies, Series and Media
            [
                "Do you analyze movies or series in depth?",
                "Do you notice cinematography?",
                "Do you care about directors or writers?",
                "Do you watch video essays?",
                "Do you intentionally binge-watch series?",
                "Do you know release order vs chronological order?",
                "Do you enjoy slow or complex stories?",
                "Do you rewatch your favorites?",
                "Do you know trivia?",
                "Do you constantly quote things?"
            ],
            // Collecting and Merch
            [
                "Do you collect figures or merchandise?",
                "Do you have posters or art?",
                "Do you buy special editions?",
                "Do you keep things in perfect condition?",
                "Do you know figure brands?",
                "Do you proudly display your collection?",
                "Do you have shelves dedicated to fandoms?",
                "Do you collect cards?",
                "Do you collect books or comics?",
                "Do you get excited about limited releases?"
            ],
            // Meta-Nerd Behaviors (Bonus)
            [
                "Do you 'politely' correct people?",
                "Do you make tier lists?",
                "Do you keep lists or databases?",
                "Do you hyperfocus?",
                "Do you info-dump when allowed?",
                "Do you remember very specific details?",
                "Do you enjoy debates?",
                "Do you love easter eggs?",
                "Do you get emotionally invested?",
                "Do you say 'this is really interesting...'?"
            ]
        ],

        // Nerd Titles
        titles: [
            {
                title: "SUPREME OMNINERD",
                description: "You are the ultimate embodiment of nerd. Your level of knowledge and passion for geek culture is extraordinary. You probably have Wikipedia memorized."
            },
            {
                title: "LEGENDARY NERD",
                description: "Your nerd level is impressive. You master multiple areas of geek culture and your passion is undeniable. People consult you before Google."
            },
            {
                title: "ULTRA NERD",
                description: "You're definitely a nerd at heart. Your knowledge is vast and your enthusiasm is contagious. Your friends know they can count on you for any random fact."
            },
            {
                title: "CERTIFIED NERD",
                description: "You're officially a nerd. You have well-defined areas where you shine and your passion for them is clear. The perfect balance between nerd and social life."
            },
            {
                title: "NERD IN DEVELOPMENT",
                description: "You're on the nerd path. You have several geek interests but there's still much to explore. Your potential is promising."
            },
            {
                title: "CASUAL NERD",
                description: "You enjoy some nerdy things but in a more relaxed way. You're not obsessive, but you have your specific tastes in geek culture."
            },
            {
                title: "SEMI-NERD",
                description: "You have some scattered nerd interests. You occasionally dive into geek topics, but it's not your main identity."
            },
            {
                title: "BEGINNER NERD",
                description: "You're just exploring the nerd world. You're curious about certain areas but haven't fully immersed yourself yet."
            },
            {
                title: "NOT SO NERDY",
                description: "Nerd culture isn't really your thing. You might have one or two related interests, but generally prefer other hobbies."
            },
            {
                title: "ANTI-NERD",
                description: "The nerd world is completely foreign to you. And that's okay, everyone has their own interests. But... are you sure you answered honestly?"
            }
        ]
    },

    es: {
        // HTML meta and title
        title: "Nerdómetro - ¿Qué tan nerd eres?",

        // Header
        header: "NERDÓMETRO",
        subtitle: "Descubre qué tan nerd eres realmente",

        // Version Selection Screen
        versionTitle: "Elige tu Modo",
        versionSubtitle: "¿Cuánto tiempo tienes?",
        quickMode: "MODO RÁPIDO",
        quickModeDesc: "10 preguntas",
        quickModeTime: "2 minutos",
        detailedMode: "MODO COMPLETO",
        detailedModeDesc: "100 preguntas",
        detailedModeTime: "10 minutos",

        // Start Screen
        intro1: "Responde honestamente a las siguientes preguntas sobre tus intereses y hábitos.",
        intro2: "Cada categoría explorará diferentes aspectos de la cultura nerd.",
        totalInfo: "Total: 100 preguntas",
        startButton: "Comenzar Quiz",
        backButton: "Cambiar Modo",

        // Quiz Screen
        optionYes: "Sí",
        optionNo: "No",

        // Results Screen
        resultsTitle: "¡Resultados!",
        categoryBreakdownTitle: "Desglose por Categoría",
        restartButton: "Hacer el Quiz de Nuevo",
        shareButton: "Compartir Resultado",
        shareTitle: "Mi resultado del Nerdómetro",
        shareText: "¡Hice el Nerdómetro!\n\nMi resultado: {title}\nPuntuación: {score}/{total} ({percentage}%)\n\n¿Qué tan nerd eres tú?",
        shareCopied: "¡Resultado copiado al portapapeles!",
        shareError: "No se pudo compartir. Intenta copiar manualmente:\n\n",

        // Authentication
        authSubtitle: "Autenticación",
        loginTitle: "Iniciar Sesión",
        registerTitle: "Crear Cuenta",
        forgotPasswordTitle: "Restablecer Contraseña",
        forgotPasswordDesc: "Ingresa tu email y te enviaremos un enlace de restablecimiento",
        emailLabel: "Correo Electrónico",
        passwordLabel: "Contraseña",
        usernameLabel: "Nombre de Usuario",
        confirmPasswordLabel: "Confirmar Contraseña",
        loginButton: "Iniciar Sesión",
        registerButton: "Registrarse",
        sendResetButton: "Enviar Enlace",
        showRegisterLink: "¿No tienes cuenta? Regístrate",
        showLoginLink: "¿Ya tienes cuenta? Inicia sesión",
        showForgotPasswordLink: "¿Olvidaste tu contraseña?",
        backToLoginLink: "Volver al inicio de sesión",
        continueAsGuestButton: "Continuar como Invitado",
        orDivider: "O",
        passwordRequirements: "Mínimo 8 caracteres, una mayúscula, una minúscula, un número",
        passwordsNoMatch: "Las contraseñas no coinciden",
        loginError: "Error al iniciar sesión. Inténtalo de nuevo.",
        registerError: "Error al registrarse. Inténtalo de nuevo.",
        registerSuccess: "¡Registro exitoso! Por favor revisa tu email para verificar tu cuenta.",
        forgotPasswordError: "Error en la solicitud. Inténtalo de nuevo.",
        logoutButton: "Cerrar Sesión",
        loginRegisterButton: "Iniciar Sesión / Registrarse",

        // Categories
        categories: [
            "Anime y Manga",
            "Superhéroes y Cómics",
            "Videojuegos",
            "Fantasía y Ciencia Ficción",
            "Juegos de Mesa y Rol",
            "Nerd Académico",
            "Nerd Tecnológico e Internet",
            "Cine, Series y Medios",
            "Coleccionismo y Merch",
            "Comportamientos Meta-Nerd (Bonus)"
        ],

        // Quiz Questions (10 categories, 10 questions each)
        questions: [
            // Anime y Manga
            [
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
            ],
            // Superhéroes y Cómics
            [
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
            ],
            // Videojuegos
            [
                "¿Juegas videojuegos con regularidad?",
                "¿Tienes consola o PC gaming?",
                "¿Rejuegas juegos varias veces?",
                "¿Te importa el lore?",
                "¿Juegas RPGs o juegos de estrategia?",
                "¿Conoces estudios de desarrollo por nombre?",
                "¿Te emocionas con tráilers de videojuegos?",
                "¿Has jugado juegos retro?",
                "¿Ves contenido de videogames en YouTube o Twitch?",
                "¿Tienes opiniones fuertes sobre la dificultad de los juegos?"
            ],
            // Fantasía y Ciencia Ficción
            [
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
            ],
            // Juegos de Mesa y Rol
            [
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
            ],
            // Nerd Académico
            [
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
            ],
            // Nerd Tecnológico e Internet
            [
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
            ],
            // Cine, Series y Medios
            [
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
            ],
            // Coleccionismo y Merch
            [
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
            ],
            // Comportamientos Meta-Nerd (Bonus)
            [
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
        ],

        // Nerd Titles
        titles: [
            {
                title: "OMNINERD SUPREMO",
                description: "Eres la encarnación definitiva del nerd. Tu nivel de conocimiento y pasión por la cultura geek es extraordinario. Probablemente tengas Wikipedia memorizada."
            },
            {
                title: "NERD LEGENDARIO",
                description: "Tu nivel nerd es impresionante. Dominas múltiples áreas de la cultura geek y tu pasión es innegable. La gente te consulta antes que a Google."
            },
            {
                title: "ULTRA NERD",
                description: "Definitivamente eres un nerd de corazón. Tus conocimientos son vastos y tu entusiasmo es contagioso. Tus amigos saben que pueden contar contigo para cualquier dato freak."
            },
            {
                title: "NERD CERTIFICADO",
                description: "Eres oficialmente nerd. Tienes áreas bien definidas donde brillas y tu pasión por ellas es clara. El equilibrio perfecto entre nerd y vida social."
            },
            {
                title: "NERD EN DESARROLLO",
                description: "Estás en el camino del lado nerd. Tienes varios intereses geek pero aún hay mucho por explorar. Tu potencial es prometedor."
            },
            {
                title: "NERD CASUAL",
                description: "Disfrutas de algunas cosas nerds pero de forma más relajada. No eres obsesivo, pero sí tienes tus gustos específicos en la cultura geek."
            },
            {
                title: "SEMI-NERD",
                description: "Tienes algunos intereses nerds dispersos. Ocasionalmente te sumerges en temas geek, pero no es tu identidad principal."
            },
            {
                title: "NERD PRINCIPIANTE",
                description: "Apenas estás explorando el mundo nerd. Tienes curiosidad por ciertas áreas pero aún no te has sumergido completamente."
            },
            {
                title: "NO TAN NERD",
                description: "La cultura nerd no es realmente lo tuyo. Puede que tengas uno o dos intereses relacionados, pero en general prefieres otros pasatiempos."
            },
            {
                title: "ANTI-NERD",
                description: "El mundo nerd es completamente ajeno a ti. Y está bien, cada quien tiene sus propios intereses. Pero... ¿estás seguro que respondiste honestamente?"
            }
        ]
    },

    pt: {
        // HTML meta and title
        title: "Nerdômetro - Quão nerd você é?",

        // Header
        header: "NERDÔMETRO",
        subtitle: "Descubra o quão nerd você realmente é",

        // Version Selection Screen
        versionTitle: "Escolha Seu Modo",
        versionSubtitle: "Quanto tempo você tem?",
        quickMode: "MODO RÁPIDO",
        quickModeDesc: "10 perguntas",
        quickModeTime: "2 minutos",
        detailedMode: "MODO COMPLETO",
        detailedModeDesc: "100 perguntas",
        detailedModeTime: "10 minutos",

        // Start Screen
        intro1: "Responda honestamente às seguintes perguntas sobre seus interesses e hábitos.",
        intro2: "Cada categoria explorará diferentes aspectos da cultura nerd.",
        totalInfo: "Total: 100 perguntas",
        startButton: "Começar Quiz",
        backButton: "Mudar Modo",

        // Quiz Screen
        optionYes: "Sim",
        optionNo: "Não",

        // Results Screen
        resultsTitle: "Resultados!",
        categoryBreakdownTitle: "Divisão por Categoria",
        restartButton: "Fazer o Quiz Novamente",
        shareButton: "Compartilhar Resultado",
        shareTitle: "Meu resultado do Nerdômetro",
        shareText: "Eu fiz o Nerdômetro!\n\nMeu resultado: {title}\nPontuação: {score}/{total} ({percentage}%)\n\nQuão nerd você é?",
        shareCopied: "Resultado copiado para a área de transferência!",
        shareError: "Não foi possível compartilhar. Tente copiar manualmente:\n\n",

        // Authentication
        authSubtitle: "Autenticação",
        loginTitle: "Entrar",
        registerTitle: "Criar Conta",
        forgotPasswordTitle: "Redefinir Senha",
        forgotPasswordDesc: "Digite seu email e enviaremos um link de redefinição",
        emailLabel: "E-mail",
        passwordLabel: "Senha",
        usernameLabel: "Nome de Usuário",
        confirmPasswordLabel: "Confirmar Senha",
        loginButton: "Entrar",
        registerButton: "Registrar",
        sendResetButton: "Enviar Link",
        showRegisterLink: "Não tem uma conta? Registre-se",
        showLoginLink: "Já tem uma conta? Entre",
        showForgotPasswordLink: "Esqueceu a senha?",
        backToLoginLink: "Voltar para o login",
        continueAsGuestButton: "Continuar como Convidado",
        orDivider: "OU",
        passwordRequirements: "Mínimo 8 caracteres, uma maiúscula, uma minúscula, um número",
        passwordsNoMatch: "As senhas não coincidem",
        loginError: "Falha no login. Tente novamente.",
        registerError: "Falha no registro. Tente novamente.",
        registerSuccess: "Registro bem-sucedido! Por favor, verifique seu email para verificar sua conta.",
        forgotPasswordError: "Solicitação falhou. Tente novamente.",
        logoutButton: "Sair",
        loginRegisterButton: "Entrar / Registrar",

        // Categories
        categories: [
            "Anime e Mangá",
            "Super-heróis e Quadrinhos",
            "Videogames",
            "Fantasia e Ficção Científica",
            "Jogos de Tabuleiro e RPG",
            "Nerd Acadêmico",
            "Nerd Tecnológico e Internet",
            "Cinema, Séries e Mídia",
            "Colecionismo e Merch",
            "Comportamentos Meta-Nerd (Bônus)"
        ],

        // Quiz Questions (10 categories, 10 questions each)
        questions: [
            // Anime e Mangá
            [
                "Você assiste anime regularmente?",
                "Você lê mangá?",
                "Você conhece anime da temporada (não apenas clássicos)?",
                "Você já chorou assistindo anime?",
                "Você assiste anime em japonês original?",
                "Você sabe o que significam shōnen / seinen / shōjo?",
                "Você tem volumes físicos de mangá?",
                "Você tem uma lista de anime (MAL, AniList, etc.)?",
                "Você diz 'o mangá é melhor' sem ironia?",
                "Você reconhece openings de anime apenas pelo som?"
            ],
            // Super-heróis e Quadrinhos
            [
                "Você lê quadrinhos?",
                "Você conhece a diferença entre as linhas temporais da Marvel e DC?",
                "Você discute a fidelidade dos quadrinhos nos filmes?",
                "Você tem um roteirista ou desenhista favorito?",
                "Você lê quadrinhos independentes (Image, Dark Horse, etc.)?",
                "Você conhece super-heróis obscuros?",
                "Você tem omnibus ou coleções longas?",
                "Você assiste vídeos de análise ou lore?",
                "Você diz 'nos quadrinhos...' frequentemente?",
                "Você tem opiniões fortes sobre reboots?"
            ],
            // Videogames
            [
                "Você joga videogames regularmente?",
                "Você tem console ou PC gamer?",
                "Você rejoga jogos várias vezes?",
                "Você se importa com o lore?",
                "Você joga RPGs ou jogos de estratégia?",
                "Você conhece estúdios de desenvolvimento pelo nome?",
                "Você se empolga com trailers de videogames?",
                "Você já jogou jogos retrô?",
                "Você assiste conteúdo de videogames no YouTube ou Twitch?",
                "Você tem opiniões fortes sobre a dificuldade dos jogos?"
            ],
            // Fantasia e Ficção Científica
            [
                "Você gosta de mundos de fantasia?",
                "Você gosta de mundos de ficção científica?",
                "Você conhece lore detalhado de universos fictícios?",
                "Você lê romances de fantasia ou ficção científica?",
                "Você sabe que existem línguas inventadas (ou aprende uma)?",
                "Você consegue nomear múltiplos universos fictícios?",
                "Você gosta de worldbuilding?",
                "Você discute sobre o que é ou não canônico?",
                "Você gosta de space operas?",
                "Você gosta de histórias de viagem no tempo?"
            ],
            // Jogos de Tabuleiro e RPG
            [
                "Você joga jogos de tabuleiro além de Banco Imobiliário?",
                "Você tem vários jogos de tabuleiro?",
                "Você joga RPG de mesa (D&D, etc.)?",
                "Você sabe o que é um Mestre ou GM?",
                "Você gosta de ler manuais de regras?",
                "Você assiste sessões de RPG gravadas?",
                "Você tem fichas de personagem salvas?",
                "Você gosta de jogos com muita estratégia?",
                "Você gosta de jogos de cartas (MTG, Pokémon, etc.)?",
                "Você já passou horas seguidas em uma noite de jogos?"
            ],
            // Nerd Acadêmico
            [
                "Você gosta de aprender por prazer?",
                "Você gosta de física?",
                "Você gosta de matemática?",
                "Você gosta de ciência da computação?",
                "Você gosta de biologia ou química?",
                "Você assiste YouTube educativo?",
                "Você lê não-ficção?",
                "Você gosta de documentários?",
                "Você gosta de enigmas ou problemas de lógica?",
                "Você sempre tem fatos aleatórios prontos?"
            ],
            // Nerd Tecnológico e Internet
            [
                "Você sabe programar ou fazer scripts?",
                "Você já programou algo 'por diversão'?",
                "Você conhece jargão tecnológico?",
                "Você monta ou melhora PCs?",
                "Você usa Linux ou o terminal?",
                "Você conhece bem a história da internet ou memes?",
                "Você se importa com especificações técnicas?",
                "Você gosta de automação?",
                "Você tem opiniões fortes sobre software?",
                "Você lê changelogs?"
            ],
            // Cinema, Séries e Mídia
            [
                "Você analisa filmes ou séries em profundidade?",
                "Você repara na cinematografia?",
                "Você se importa com diretores ou roteiristas?",
                "Você assiste videoensaios?",
                "Você faz maratonas de séries intencionalmente?",
                "Você conhece a ordem de lançamento vs ordem cronológica?",
                "Você gosta de histórias lentas ou complexas?",
                "Você reassiste seus favoritos?",
                "Você conhece trivias?",
                "Você cita frases constantemente?"
            ],
            // Colecionismo e Merch
            [
                "Você coleciona action figures ou merchandising?",
                "Você tem pôsteres ou arte?",
                "Você compra edições especiais?",
                "Você mantém as coisas em perfeito estado?",
                "Você conhece marcas de action figures?",
                "Você exibe sua coleção com orgulho?",
                "Você tem prateleiras dedicadas a fandoms?",
                "Você coleciona cartas?",
                "Você coleciona livros ou quadrinhos?",
                "Você se empolga com lançamentos limitados?"
            ],
            // Comportamentos Meta-Nerd (Bônus)
            [
                "Você corrige as pessoas 'educadamente'?",
                "Você faz tier lists?",
                "Você mantém listas ou bancos de dados?",
                "Você tem hiperfoco?",
                "Você faz info-dumping quando deixam?",
                "Você lembra de detalhes muito específicos?",
                "Você gosta de debates?",
                "Você ama easter eggs?",
                "Você se envolve emocionalmente?",
                "Você diz 'isso é realmente interessante...'?"
            ]
        ],

        // Nerd Titles
        titles: [
            {
                title: "OMNINERD SUPREMO",
                description: "Você é a personificação definitiva do nerd. Seu nível de conhecimento e paixão pela cultura geek é extraordinário. Provavelmente você tem a Wikipedia memorizada."
            },
            {
                title: "NERD LENDÁRIO",
                description: "Seu nível nerd é impressionante. Você domina múltiplas áreas da cultura geek e sua paixão é inegável. As pessoas te consultam antes do Google."
            },
            {
                title: "ULTRA NERD",
                description: "Você definitivamente é um nerd de coração. Seu conhecimento é vasto e seu entusiasmo é contagiante. Seus amigos sabem que podem contar com você para qualquer curiosidade."
            },
            {
                title: "NERD CERTIFICADO",
                description: "Você é oficialmente nerd. Você tem áreas bem definidas onde você brilha e sua paixão por elas é clara. O equilíbrio perfeito entre nerd e vida social."
            },
            {
                title: "NERD EM DESENVOLVIMENTO",
                description: "Você está no caminho nerd. Você tem vários interesses geek, mas ainda há muito a explorar. Seu potencial é promissor."
            },
            {
                title: "NERD CASUAL",
                description: "Você gosta de algumas coisas nerds, mas de forma mais relaxada. Você não é obcecado, mas tem seus gostos específicos na cultura geek."
            },
            {
                title: "SEMI-NERD",
                description: "Você tem alguns interesses nerds dispersos. Ocasionalmente você mergulha em tópicos geek, mas não é sua identidade principal."
            },
            {
                title: "NERD INICIANTE",
                description: "Você está apenas explorando o mundo nerd. Você tem curiosidade sobre certas áreas, mas ainda não mergulhou completamente."
            },
            {
                title: "NÃO TÃO NERD",
                description: "A cultura nerd não é realmente sua praia. Você pode ter um ou dois interesses relacionados, mas geralmente prefere outros hobbies."
            },
            {
                title: "ANTI-NERD",
                description: "O mundo nerd é completamente estranho para você. E tudo bem, cada um tem seus próprios interesses. Mas... tem certeza que respondeu honestamente?"
            }
        ]
    }
};

// Language utilities
const languageUtils = {
    currentLanguage: 'es',

    // Initialize language from localStorage or default to Spanish
    init() {
        const savedLang = localStorage.getItem('nerdometer-language');
        this.currentLanguage = savedLang || 'es';
        this.setLanguage(this.currentLanguage);
    },

    // Set current language
    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('nerdometer-language', lang);
            this.updateUI();
        }
    },

    // Get translation for a key
    t(key) {
        return translations[this.currentLanguage][key] || key;
    },

    // Update all UI elements
    updateUI() {
        // Update document title
        document.title = this.t('title');

        // Update header
        const headerEl = document.querySelector('header h1');
        if (headerEl) headerEl.textContent = this.t('header');

        const subtitleEl = document.querySelector('.subtitle');
        if (subtitleEl) subtitleEl.textContent = this.t('subtitle');

        // Update version screen
        const versionTitleEl = document.querySelector('.version-title');
        if (versionTitleEl) versionTitleEl.textContent = this.t('versionTitle');

        const versionSubtitleEl = document.querySelector('#version-screen .intro p');
        if (versionSubtitleEl) versionSubtitleEl.textContent = this.t('versionSubtitle');

        // Quick mode button
        const quickModeNameEl = document.querySelector('#quick-btn .version-name');
        if (quickModeNameEl) quickModeNameEl.textContent = this.t('quickMode');

        const quickModeDescEl = document.querySelector('#quick-btn .version-desc');
        if (quickModeDescEl) quickModeDescEl.textContent = this.t('quickModeDesc');

        const quickModeTimeEl = document.querySelector('#quick-btn .version-time');
        if (quickModeTimeEl) quickModeTimeEl.textContent = this.t('quickModeTime');

        // Detailed mode button
        const detailedModeNameEl = document.querySelector('#detailed-btn .version-name');
        if (detailedModeNameEl) detailedModeNameEl.textContent = this.t('detailedMode');

        const detailedModeDescEl = document.querySelector('#detailed-btn .version-desc');
        if (detailedModeDescEl) detailedModeDescEl.textContent = this.t('detailedModeDesc');

        const detailedModeTimeEl = document.querySelector('#detailed-btn .version-time');
        if (detailedModeTimeEl) detailedModeTimeEl.textContent = this.t('detailedModeTime');

        // Start screen
        const intro1El = document.querySelector('#start-screen .intro p:nth-of-type(1)');
        if (intro1El) intro1El.textContent = this.t('intro1');

        const intro2El = document.querySelector('#start-screen .intro p:nth-of-type(2)');
        if (intro2El) intro2El.textContent = this.t('intro2');

        const startBtnEl = document.getElementById('start-btn');
        if (startBtnEl) startBtnEl.textContent = this.t('startButton');

        const backBtnEl = document.getElementById('back-btn');
        if (backBtnEl) backBtnEl.textContent = this.t('backButton');

        // Quiz screen
        const yesBtn = document.querySelector('.option-btn[data-answer="yes"]');
        if (yesBtn) yesBtn.textContent = this.t('optionYes');

        const noBtn = document.querySelector('.option-btn[data-answer="no"]');
        if (noBtn) noBtn.textContent = this.t('optionNo');

        // Results screen
        const resultsTitleEl = document.querySelector('#results-screen h2');
        if (resultsTitleEl) resultsTitleEl.textContent = this.t('resultsTitle');

        const categoryBreakdownTitleEl = document.querySelector('#category-breakdown h3');
        if (categoryBreakdownTitleEl) categoryBreakdownTitleEl.textContent = this.t('categoryBreakdownTitle');

        const restartBtnEl = document.getElementById('restart-btn');
        if (restartBtnEl) restartBtnEl.textContent = this.t('restartButton');

        const shareBtnEl = document.getElementById('share-btn');
        if (shareBtnEl) shareBtnEl.textContent = this.t('shareButton');

        // Update language selector
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.currentLanguage);
        });

        // Update auth page elements if they exist
        const authSubtitleEl = document.querySelector('header .subtitle');
        if (authSubtitleEl && window.location.pathname.includes('auth')) {
            authSubtitleEl.textContent = this.t('authSubtitle');
        }

        const loginTitleEl = document.querySelector('#login-screen .auth-title');
        if (loginTitleEl) loginTitleEl.textContent = this.t('loginTitle');

        const registerTitleEl = document.querySelector('#register-screen .auth-title');
        if (registerTitleEl) registerTitleEl.textContent = this.t('registerTitle');

        const forgotPasswordTitleEl = document.querySelector('#forgot-password-screen .auth-title');
        if (forgotPasswordTitleEl) forgotPasswordTitleEl.textContent = this.t('forgotPasswordTitle');

        const forgotPasswordDescEl = document.querySelector('#forgot-password-screen .auth-description');
        if (forgotPasswordDescEl) forgotPasswordDescEl.textContent = this.t('forgotPasswordDesc');

        // Update labels
        const labels = {
            'login-email': 'emailLabel',
            'login-password': 'passwordLabel',
            'register-username': 'usernameLabel',
            'register-email': 'emailLabel',
            'register-password': 'passwordLabel',
            'register-confirm-password': 'confirmPasswordLabel',
            'forgot-email': 'emailLabel'
        };

        Object.keys(labels).forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                const label = document.querySelector(`label[for="${id}"]`);
                if (label) label.textContent = this.t(labels[id]);
            }
        });

        // Update buttons
        const loginBtnEl = document.querySelector('#login-form button[type="submit"]');
        if (loginBtnEl) loginBtnEl.textContent = this.t('loginButton');

        const registerBtnEl = document.querySelector('#register-form button[type="submit"]');
        if (registerBtnEl) registerBtnEl.textContent = this.t('registerButton');

        const forgotBtnEl = document.querySelector('#forgot-password-form button[type="submit"]');
        if (forgotBtnEl) forgotBtnEl.textContent = this.t('sendResetButton');

        // Update links
        const showRegisterEl = document.getElementById('show-register');
        if (showRegisterEl) showRegisterEl.textContent = this.t('showRegisterLink');

        const showLoginEl = document.getElementById('show-login');
        if (showLoginEl) showLoginEl.textContent = this.t('showLoginLink');

        const showForgotPasswordEl = document.getElementById('show-forgot-password');
        if (showForgotPasswordEl) showForgotPasswordEl.textContent = this.t('showForgotPasswordLink');

        const backToLoginEl = document.getElementById('back-to-login');
        if (backToLoginEl) backToLoginEl.textContent = this.t('backToLoginLink');

        const continueAsGuestEl = document.querySelector('.auth-container .btn-secondary');
        if (continueAsGuestEl) continueAsGuestEl.textContent = this.t('continueAsGuestButton');

        const orDividerEl = document.querySelector('.auth-divider span');
        if (orDividerEl) orDividerEl.textContent = this.t('orDivider');

        const passwordRequirementsEl = document.querySelector('.password-requirements small');
        if (passwordRequirementsEl) passwordRequirementsEl.textContent = this.t('passwordRequirements');

        // Update user profile button text
        const logoutBtnEl = document.getElementById('logout-btn');
        if (logoutBtnEl) logoutBtnEl.textContent = this.t('logoutButton');

        const guestProfileLinkEl = document.querySelector('.guest-profile a');
        if (guestProfileLinkEl) guestProfileLinkEl.textContent = this.t('loginRegisterButton');
    }
};
