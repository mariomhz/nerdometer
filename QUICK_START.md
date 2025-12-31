# Quick Start Guide 🚀

## Test Locally (No Database)

1. **Open the quiz:**
   - Just double-click `index.html`
   - That's it! The quiz works immediately
   - Results won't be saved anywhere

## Run with Database (Local Development)

### Step 1: Install MongoDB

**Windows:**
```bash
# Download from https://www.mongodb.com/try/download/community
# Or use chocolatey:
choco install mongodb
```

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongod
```

### Step 2: Start the Backend

```bash
# Navigate to server folder
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start server
npm start
```

You should see:
```
🚀 Server running on http://localhost:3000
✅ Connected to MongoDB
```

### Step 3: Open the Quiz

1. Open `index.html` in your browser
2. Complete the quiz
3. Results automatically save to database

### Step 4: View Saved Results

Open in browser:
- All results: `http://localhost:3000/api/quiz-results`
- Statistics: `http://localhost:3000/api/stats`

## Deploy to Production

### Frontend Only (Easiest)

**Netlify (30 seconds):**
1. Go to https://app.netlify.com/drop
2. Drag the entire Nerdometer folder
3. Get your URL
4. Done!

### Frontend + Backend

**Option 1: Railway (Recommended)**
1. Create account at https://railway.app
2. New Project > Deploy from GitHub
3. Add MongoDB plugin
4. Copy your Railway URL
5. Update `script.js`:
   ```javascript
   const API_URL = 'https://your-app.railway.app/api/quiz-results';
   ```
6. Deploy frontend to Netlify

**Option 2: Render + MongoDB Atlas**
1. Create MongoDB Atlas account (free): https://www.mongodb.com/cloud/atlas
2. Create cluster and get connection string
3. Deploy backend to Render: https://render.com
4. Set MONGODB_URI environment variable
5. Update frontend API_URL
6. Deploy frontend to Netlify

## Troubleshooting

**Quiz loads but results don't save:**
- Check if backend server is running on http://localhost:3000
- Open browser console (F12) to see errors
- Verify MongoDB is running: `mongosh` in terminal

**MongoDB connection failed:**
```bash
# Check if MongoDB is running
mongosh

# If not, start it:
# Windows: net start MongoDB
# macOS: brew services start mongodb-community
# Linux: sudo systemctl start mongod
```

**Port 3000 already in use:**
```bash
# Change PORT in server/.env file
PORT=3001

# Or kill the process using port 3000:
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill
```

**CORS errors in browser:**
- Make sure backend is running
- Check that API_URL in script.js matches your backend URL
- For production, update CORS settings in server.js

## Next Steps

- Customize colors in `styles.css`
- Add more questions in `script.js`
- Modify nerd titles in `getNerdTitle()` function
- Add analytics dashboard (see server/README.md)
- Set up custom domain

## Need Help?

- Backend setup: See `server/README.md`
- Deployment: See `DEPLOYMENT.md`
- Full docs: See `README.md`
