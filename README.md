# Nerdómetro - Quiz Interactivo 🤓

Un quiz interactivo con estilo retro de arcade de los 80s que mide qué tan nerd eres basándose en 100 preguntas sobre diferentes categorías de la cultura geek.

## Características

- Diseño retro estilo arcade de los 80s con efectos neón
- Backend completo con Node.js/Express y MongoDB
- Almacenamiento de resultados en base de datos
- API para análisis de datos
- 10 categorías diferentes:
  - Anime y Manga
  - Superhéroes y Cómics
  - Videojuegos
  - Fantasía y Ciencia Ficción
  - Juegos de Mesa y Rol
  - Nerd Académico / del Conocimiento
  - Nerd Tecnológico e Internet
  - Cine, Series y Medios
  - Coleccionismo y Merch
  - Comportamientos Meta-Nerd (Bonus)

- 100 preguntas en total
- Sistema de puntuación y títulos personalizados
- Desglose por categoría
- Diseño responsivo y moderno
- Función para compartir resultados

## Títulos según puntuación

- 90-100 puntos: OMNINERD SUPREMO
- 80-89 puntos: NERD LEGENDARIO
- 70-79 puntos: ULTRA NERD
- 60-69 puntos: NERD CERTIFICADO
- 50-59 puntos: NERD EN DESARROLLO
- 40-49 puntos: NERD CASUAL
- 30-39 puntos: SEMI-NERD
- 20-29 puntos: NERD PRINCIPIANTE
- 10-19 puntos: NO TAN NERD
- 0-9 puntos: ANTI-NERD

## Instalación Local

### Solo Frontend (Sin almacenamiento de datos)

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en tu navegador

### Frontend + Backend (Con almacenamiento en base de datos)

1. Clona o descarga este repositorio

2. Instala MongoDB (ver opciones en `server/README.md`)

3. Configura el backend:
```bash
cd server
npm install
cp .env.example .env
# Edita .env con tu configuración de MongoDB
npm start
```

4. Abre `index.html` en tu navegador

5. Los resultados se guardarán automáticamente en la base de datos

Ver `server/README.md` para más detalles sobre la configuración del backend.

## Deployment (Despliegue)

### Frontend

El frontend es un sitio estático que puede desplegarse en múltiples plataformas:

**Netlify (Recomendado)**
1. Arrastra la carpeta raíz a [Netlify Drop](https://app.netlify.com/drop)
2. O conecta tu repositorio de GitHub

**Vercel**
1. `npm i -g vercel`
2. `vercel`

**GitHub Pages**
1. Sube a GitHub
2. Settings > Pages > Selecciona rama main

### Backend

Para desplegar el backend con base de datos:

**Heroku**
```bash
cd server
heroku create nerdometer-api
heroku addons:create mongolab:sandbox
git push heroku main
```

**Railway.app**
1. Conecta tu repositorio
2. Añade plugin de MongoDB
3. Despliega automáticamente

**Render.com**
1. Crea Web Service desde GitHub
2. Configura variables de entorno (MONGODB_URI)
3. Despliega

Ver `server/README.md` para guías detalladas de deployment del backend.

## Estructura de Archivos

```
Nerdometer/
├── index.html          # Estructura HTML
├── styles.css          # Estilos retro arcade
├── script.js           # Lógica del quiz y conexión API
├── package.json        # Configuración NPM frontend
├── netlify.toml        # Configuración Netlify
├── README.md           # Este archivo
├── DEPLOYMENT.md       # Guía de despliegue
└── server/
    ├── server.js       # Servidor Express
    ├── package.json    # Dependencias backend
    ├── .env.example    # Template de configuración
    └── README.md       # Documentación backend
```

## Personalización

### Modificar preguntas

Edita el array `quizData` en `script.js`. Cada categoría tiene un nombre y un array de preguntas.

### Modificar títulos

Edita la función `getNerdTitle()` en `script.js` para cambiar los rangos de puntuación y títulos.

### Modificar estilos

Edita las variables CSS en `:root` al inicio de `styles.css` para cambiar colores y temas.

## Tecnologías

- HTML5
- CSS3 (con variables CSS y Grid/Flexbox)
- JavaScript vanilla (sin frameworks)

## Licencia

Proyecto de código abierto. Siéntete libre de usar, modificar y distribuir.
