# Deploy to Railway & Netlify - Step by Step

## Part 1: Deploy Backend to Railway ⚡

### Step 1: Create Railway Account & Project

1. **Go to Railway:**
   - Open: https://railway.app
   - Click "Login" (top right)
   - Sign in with GitHub (recommended)

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Click "Configure GitHub App"
   - Give Railway access to your repositories
   - Select the Nerdometer repository

3. **Add MongoDB Database:**
   - In your Railway project dashboard
   - Click "New" → "Database" → "Add MongoDB"
   - Railway will provision a MongoDB database automatically

### Step 2: Configure Environment Variables

1. **Click on your service (nerdometer)**
2. **Go to "Variables" tab**
3. **Add these variables:**
   - `PORT` = `3000` (Railway will override this automatically)
   - `MONGODB_URI` = (copy from MongoDB service)

   To get MONGODB_URI:
   - Click on the MongoDB service in your project
   - Go to "Connect" tab
   - Copy the connection string (starts with `mongodb://`)
   - Paste it as MONGODB_URI value

### Step 3: Configure Root Directory

1. **Go to "Settings" tab**
2. **Find "Root Directory"**
3. **Set it to:** `server`
4. **Click "Save"**

### Step 4: Deploy

1. **Railway will automatically deploy**
2. **Wait 2-3 minutes for build to complete**
3. **Check "Deployments" tab for progress**

### Step 5: Get Your Backend URL

1. **Go to "Settings" tab**
2. **Find "Domains" section**
3. **Click "Generate Domain"**
4. **Copy the URL** (something like: `https://nerdometer-production.up.railway.app`)

**✅ Save this URL! You'll need it for the frontend.**

---

## Part 2: Update Frontend Config

### Step 6: Update config.js

1. **Open:** `config.js` in your Nerdometer folder
2. **Change the production apiUrl:**

```javascript
production: {
    apiUrl: 'https://YOUR-RAILWAY-URL.up.railway.app/api'
}
```

Replace `YOUR-RAILWAY-URL` with your actual Railway domain.

3. **Change ENV to production:**

```javascript
const ENV = 'production';  // Changed from 'development'
```

4. **Save the file**

### Step 7: Commit Changes

```bash
git add config.js
git commit -m "Update API URL for production"
```

---

## Part 3: Deploy Frontend to Netlify 🌐

### Step 8: Deploy to Netlify

**Option A: Drag & Drop (Easiest)**

1. **Go to:** https://app.netlify.com/drop
2. **Drag the ENTIRE Nerdometer folder** onto the page
3. **Wait for upload** (30 seconds)
4. **Get your URL** (something like: `https://random-name.netlify.app`)
5. **Done!**

**Option B: From Git (Better for updates)**

1. **Go to:** https://app.netlify.com
2. **Click "Add new site" → "Import an existing project"**
3. **Connect to GitHub**
4. **Select Nerdometer repository**
5. **Configure:**
   - Build command: (leave empty)
   - Publish directory: `/` (root)
6. **Click "Deploy site"**

---

## Part 4: Test Everything

### Step 9: Test Your Live Site

1. **Open your Netlify URL**
2. **Take the quiz**
3. **Complete all 100 questions**
4. **Check browser console (F12):**
   - Should see: "✅ Results saved successfully"

### Step 10: Verify Database

**Check if results were saved:**

Go to: `https://YOUR-RAILWAY-URL.up.railway.app/api/stats`

You should see:
```json
{
  "success": true,
  "stats": {
    "totalAttempts": 1,
    "averageScore": 75,
    ...
  }
}
```

---

## 🎉 Success!

Your quiz is now live:
- **Frontend:** https://your-site.netlify.app
- **Backend API:** https://your-app.railway.app/api
- **Database:** MongoDB on Railway

---

## Troubleshooting

**Backend not connecting:**
- Check Railway logs: Project → Service → Deployments → Click latest → View logs
- Verify MONGODB_URI is set correctly
- Make sure Root Directory is set to `server`

**Frontend can't reach backend:**
- Open browser console (F12)
- Check for CORS errors
- Verify `config.js` has correct Railway URL
- Make sure ENV is set to 'production'

**Database connection error:**
- Check MongoDB service is running in Railway
- Verify MONGODB_URI in backend environment variables
- Check connection string format

---

## Need Help?

If you get stuck, check the logs:
- **Railway:** Project → Service → Deployments → View Logs
- **Netlify:** Site → Deploys → Click deploy → Deploy log
- **Browser:** F12 → Console tab
