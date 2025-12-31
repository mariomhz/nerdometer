# Nerdómetro Backend Server

Node.js/Express backend with MongoDB for storing quiz results.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Edit `.env` and configure your MongoDB connection:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/nerdometer
```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:3000`

## MongoDB Setup

### Option 1: Local MongoDB

1. Install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)

2. Start MongoDB:
```bash
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

3. Verify connection:
```bash
mongosh
```

### Option 2: MongoDB Atlas (Cloud - Free Tier)

1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

2. Create a free cluster

3. Get your connection string (looks like):
```
mongodb+srv://username:password@cluster.mongodb.net/nerdometer?retryWrites=true&w=majority
```

4. Update `.env` with your connection string

5. Whitelist your IP address in Atlas Network Access

## API Endpoints

### Save Quiz Result
```http
POST /api/quiz-results
Content-Type: application/json

{
  "totalScore": 75,
  "maxScore": 100,
  "percentage": 75,
  "title": "ULTRA NERD",
  "categoryScores": {
    "Anime y Manga": { "score": 8, "total": 10 },
    ...
  },
  "answers": [
    { "category": "Anime y Manga", "question": "...", "answer": true },
    ...
  ]
}
```

### Get All Results
```http
GET /api/quiz-results
```

Returns last 100 quiz results.

### Get Statistics
```http
GET /api/stats
```

Returns:
- Total attempts
- Average score
- Average percentage
- Title distribution

### Health Check
```http
GET /api/health
```

Check server and database status.

## Deployment

### Deploy to Heroku

1. Install Heroku CLI:
```bash
npm install -g heroku
```

2. Login and create app:
```bash
heroku login
heroku create nerdometer-api
```

3. Add MongoDB addon:
```bash
heroku addons:create mongolab:sandbox
```

4. Deploy:
```bash
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

### Deploy to Railway

1. Create account at [railway.app](https://railway.app)

2. Create new project

3. Add MongoDB plugin

4. Deploy from GitHub or local directory

5. Set environment variables in Railway dashboard

### Deploy to Render

1. Create account at [render.com](https://render.com)

2. Create new Web Service

3. Connect GitHub repository

4. Set environment variables:
   - Add MongoDB Atlas connection string

5. Deploy

## Connecting Frontend

Update `script.js` in the frontend to point to your deployed API:

```javascript
const API_URL = 'https://your-app.herokuapp.com/api/quiz-results';
```

For production, replace `http://localhost:3000` with your deployed URL.

## Security Considerations

- The server uses CORS to allow cross-origin requests
- IP addresses and user agents are stored for analytics
- For production, consider adding:
  - Rate limiting
  - Authentication
  - Input validation
  - HTTPS only

## Troubleshooting

**MongoDB connection failed:**
- Check if MongoDB is running: `mongosh`
- Verify connection string in `.env`
- For Atlas: check IP whitelist

**CORS errors:**
- Make sure server is running
- Check browser console for exact error
- Verify API_URL in frontend matches server URL

**Port already in use:**
- Change PORT in `.env`
- Or kill process using port 3000:
  ```bash
  # Windows
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F

  # macOS/Linux
  lsof -ti:3000 | xargs kill
  ```

## Database Schema

Each quiz result includes:
- `totalScore`: Points earned
- `maxScore`: Total possible points (100)
- `percentage`: Score as percentage
- `title`: Nerd level title
- `categoryScores`: Score breakdown by category
- `answers`: All user responses
- `userAgent`: Browser info
- `ipAddress`: User IP
- `completedAt`: Timestamp
- `createdAt`: Auto-generated
- `updatedAt`: Auto-generated

## Analytics

View statistics by accessing:
```
http://localhost:3000/api/stats
```

This shows:
- How many people took the quiz
- Average scores
- Most common nerd levels
