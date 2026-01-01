# Nerdometer - Interactive Quiz

An interactive quiz application with a retro 80s arcade aesthetic that measures how much of a nerd you are based on questions across different categories of geek culture.

## Features

### Quiz Modes
- **Quick Mode**: 10 questions (one per category) - takes about 2 minutes
- **Detailed Mode**: 100 questions (10 per category) - takes about 10 minutes

### Multi-Language Support
- English
- Spanish (Español)
- Portuguese (Português)

All quiz questions, categories, titles, and UI text are fully translated. Language preference is saved in browser storage.

### User Accounts (Optional)
Users can take the quiz anonymously or create an account for additional features:

- **Account Registration**: Create account with email verification
- **Secure Authentication**: Password requirements, rate limiting, account lockout protection
- **Password Reset**: Email-based password recovery
- **Quiz History**: View all past quiz results with dates and scores
- **User Statistics**: Track total quizzes taken and highest score
- **Result Linking**: Automatically associate quiz results with your account

Taking the quiz does not require an account - users can choose to participate anonymously.

### Quiz Categories
1. Anime and Manga
2. Superheroes and Comics
3. Video Games
4. Fantasy and Science Fiction
5. Board Games and RPGs
6. Academic/Knowledge Nerd
7. Tech and Internet
8. Movies, Series, and Media
9. Collecting and Merchandise
10. Meta-Nerd Behaviors (Bonus)

### Scoring System
Results are categorized into 10 different titles based on your score:

- 90-100 points: Supreme Omninerd
- 80-89 points: Legendary Nerd
- 70-79 points: Ultra Nerd
- 60-69 points: Certified Nerd
- 50-59 points: Nerd in Development
- 40-49 points: Casual Nerd
- 30-39 points: Semi-Nerd
- 20-29 points: Beginner Nerd
- 10-19 points: Not So Nerdy
- 0-9 points: Anti-Nerd

### Design
- Retro 80s arcade aesthetic with neon effects
- Responsive design optimized for mobile devices
- CRT screen effects and animated grid background
- Category breakdown showing performance by topic
- Share results functionality

## Technology Stack

### Frontend
- HTML5
- CSS3 (CSS variables, Grid, Flexbox)
- Vanilla JavaScript (no frameworks)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- bcrypt password hashing
- SendGrid email integration

### Security Features
- Password hashing with bcrypt (12 rounds)
- JWT tokens with httpOnly cookies
- Rate limiting on authentication endpoints
- Account lockout after failed login attempts
- Input validation and sanitization
- Protection against XSS, CSRF, and NoSQL injection
- Express security middleware (helmet, hpp, mongo-sanitize)

## Local Installation

### Frontend Only (No Database)

1. Clone or download this repository
2. Open `index.html` in your browser
3. Quiz will work but results won't be saved

### Full Stack (With Database and User Accounts)

1. Clone this repository

2. Install and configure MongoDB (see `server/README.md`)

3. Set up backend:
```bash
cd server
npm install
cp .env.example .env
```

4. Edit `.env` file with your configuration:
```
MONGODB_URI=mongodb://localhost:27017/nerdometer
JWT_SECRET=your-secret-key-here
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com
FRONTEND_URL=http://localhost:3000
```

5. Start the server:
```bash
npm start
```

6. Open `index.html` in your browser

The application will now save quiz results, allow user registration, and provide quiz history.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login with email/password
- `GET /api/auth/verify-email/:token` - Verify email address
- `POST /api/auth/resend-verification` - Resend verification email
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password/:token` - Reset password
- `GET /api/auth/me` - Get current user info
- `PUT /api/auth/update-profile` - Update user profile
- `POST /api/auth/logout` - Logout

### Quiz
- `POST /api/quiz-results` - Save quiz result (anonymous or authenticated)
- `GET /api/user/quiz-history` - Get user's quiz history (authenticated)
- `GET /api/user/stats` - Get user statistics (authenticated)
- `GET /api/user/quiz/:id` - Get specific quiz details (authenticated)

## Deployment

### Frontend Deployment

The frontend is a static site that can be deployed to:

**Netlify**
1. Drag and drop the root folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deployments

**Vercel**
```bash
npm i -g vercel
vercel
```

**GitHub Pages**
1. Push to GitHub
2. Go to Settings > Pages
3. Select main branch as source

### Backend Deployment

**Railway.app**
1. Connect your GitHub repository
2. Add MongoDB plugin
3. Configure environment variables
4. Deploy automatically

**Render.com**
1. Create Web Service from GitHub
2. Set environment variables (MONGODB_URI, JWT_SECRET, etc.)
3. Deploy

**Heroku**
```bash
cd server
heroku create your-app-name
heroku addons:create mongolab:sandbox
git push heroku main
```

See `server/README.md` for detailed deployment guides.

## File Structure

```
Nerdometer/
├── index.html              # Main quiz page
├── auth.html               # Login/registration page
├── verify-email.html       # Email verification page
├── reset-password.html     # Password reset page
├── styles.css              # Main styles (arcade theme)
├── auth-styles.css         # Authentication page styles
├── script.js               # Quiz logic and API integration
├── auth.js                 # Authentication logic
├── translations.js         # Multi-language translations
├── config.js               # Frontend configuration
└── server/
    ├── server.js           # Express server
    ├── models/
    │   └── User.js         # User model
    ├── routes/
    │   ├── auth.js         # Authentication routes
    │   └── user.js         # User data routes
    ├── middleware/
    │   ├── auth.js         # Auth middleware
    │   ├── validation.js   # Input validation
    │   └── security.js     # Security middleware
    ├── utils/
    │   ├── email.js        # Email sending utilities
    │   └── tokens.js       # Token generation utilities
    └── package.json        # Backend dependencies
```

## Customization

### Adding or Modifying Questions

Edit the `translations.js` file. Each language has its own set of questions, categories, and titles. Make sure to keep the structure consistent across all languages.

### Changing Score Titles

Modify the `getNerdTitle()` function in `script.js` to adjust score ranges and corresponding titles.

### Customizing Visual Theme

Edit CSS variables in the `:root` section of `styles.css`:
```css
:root {
    --neon-pink: #ff00ff;
    --neon-cyan: #00ffff;
    --neon-yellow: #ffff00;
    --neon-green: #00ff00;
    --neon-orange: #ff6600;
    --dark-bg: #0a0a0a;
    --arcade-purple: #1a0033;
    --grid-color: #ff00ff33;
}
```

## Environment Variables

Required environment variables for the backend:

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `JWT_EXPIRE` - JWT expiration time (default: 7d)
- `JWT_COOKIE_EXPIRE` - Cookie expiration in days (default: 7)
- `SENDGRID_API_KEY` - SendGrid API key for emails
- `SENDGRID_FROM_EMAIL` - Sender email address
- `SENDGRID_FROM_NAME` - Sender name
- `FRONTEND_URL` - Frontend URL for email links
- `ALLOWED_ORIGINS` - Comma-separated list of allowed CORS origins

Optional:
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `BCRYPT_ROUNDS` - bcrypt hash rounds (default: 12)

## License

Open source project. Feel free to use, modify, and distribute.
