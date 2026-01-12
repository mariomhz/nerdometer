# Nerdometer

A retro 80s-styled quiz to measure your nerd level across different categories of geek culture.

## What is it?

An interactive quiz with 10 categories (anime, video games, tech, sci-fi, etc.) that gives you a nerd score and title. You can take a quick 10-question version or go deep with 100 questions.

## Features

- Two quiz modes: Quick (10 questions) or Detailed (100 questions)
- Multi-language support (English, Spanish, Portuguese)
- Optional user accounts to save your quiz history
- Retro arcade aesthetic with neon effects
- Works standalone or with backend for user accounts

## Running Locally

### Simple (no accounts)
Just open `index.html` in your browser.

### With accounts and history
1. Install MongoDB
2. Set up backend:
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your MongoDB URI, JWT secret, and SendGrid API key
npm start
```
3. Open `index.html`

## Tech Stack

Frontend: HTML, CSS, vanilla JavaScript
Backend: Node.js, Express, MongoDB
Auth: JWT with httpOnly cookies

## Customization

Questions are in `translations.js`. Score thresholds and titles are in the `getNerdTitle()` function in `script.js`. Colors and styling are CSS variables in `styles.css`.

## License

Open source. Do whatever you want with it.
