# Nerdómetro - Live URLs

Your quiz is now live and ready to share!

---

## Frontend (Quiz Website)

**Vercel (Production):**
https://nerdometer.vercel.app/

Share this URL with anyone to take the quiz!

---

## Backend API

**Railway:**
https://nerdometer-production.up.railway.app/api

### API Endpoints:

**Statistics:**
https://nerdometer-production.up.railway.app/api/stats

**All Quiz Results:**
https://nerdometer-production.up.railway.app/api/quiz-results

**Health Check:**
https://nerdometer-production.up.railway.app/api/health

---

## GitHub Repository

https://github.com/mariomhz/nerdometer

---

## Features Live:

- 80s arcade retro design (no emojis)
- Two quiz modes:
  - Quick Mode: 10 questions, 2 minutes
  - Detailed Mode: 100 questions, 10 minutes
- Mobile-optimized (readable on phones)
- Results saved to MongoDB database
- Share functionality
- 10 nerd level rankings

---

## Auto-Deploy Setup:

**Vercel:** Auto-deploys from GitHub (main branch)
**Railway:** Auto-deploys from GitHub (server folder)

Every time you push to GitHub, both services automatically deploy!

---

## How to Update:

1. Make changes locally
2. Commit and push:
```bash
git add .
git commit -m "Your update message"
git push
```

3. Vercel and Railway automatically deploy (takes ~1 minute)

---

## Test Everything:

1. Open: https://nerdometer.vercel.app/
2. Choose a quiz mode (Quick or Detailed)
3. Take the quiz
4. Check stats: https://nerdometer-production.up.railway.app/api/stats

Your quiz should appear in the stats!

---

## Share Your Quiz:

**URL to share:**
```
https://nerdometer.vercel.app/
```

Perfect for:
- Social media posts
- WhatsApp/Telegram groups
- Email signatures
- QR codes

---

## Performance:

- Frontend: Vercel CDN (global edge network)
- Backend: Railway (fast API responses)
- Database: MongoDB (scalable storage)

All on free tiers with excellent performance!
