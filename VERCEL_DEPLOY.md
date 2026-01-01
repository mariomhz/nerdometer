# Deploy to Vercel - Quick Guide

I've installed Vercel CLI and added the configuration file. Now let's deploy!

## Deploy Now (Interactive)

Run this command:

```bash
vercel
```

### What will happen:

1. **Login to Vercel:**
   - Browser will open
   - Sign in with GitHub (recommended)
   - Authorize Vercel CLI

2. **Project Setup (first time only):**
   - "Set up and deploy?" → **Yes**
   - "Which scope?" → Select your account
   - "Link to existing project?" → **No**
   - "What's your project's name?" → **nerdometer** (or press Enter)
   - "In which directory is your code located?" → **./** (press Enter)
   - Vercel will auto-detect settings → press Enter to confirm

3. **Deploy:**
   - Vercel will build and deploy
   - You'll get a URL like: `https://nerdometer.vercel.app`
   - Takes about 30 seconds

## Deploy to Production

After the first deploy, run:

```bash
vercel --prod
```

This deploys to your production URL.

## Commands

- `vercel` - Deploy to preview (testing)
- `vercel --prod` - Deploy to production
- `vercel ls` - List deployments
- `vercel rm [deployment-url]` - Remove deployment

## Auto-Deploy from GitHub (Optional)

For automatic deployments when you push to GitHub:

1. Go to: https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import your GitHub repo: `mariomhz/nerdometer`
4. Vercel will auto-deploy on every push!

## Your URLs

After deploying, you'll get:
- **Production:** `https://nerdometer.vercel.app`
- **Preview:** `https://nerdometer-xyz.vercel.app` (for testing)

## Next Steps

1. Run `vercel` in your terminal (I can't do this interactively)
2. Follow the prompts above
3. Get your Vercel URL
4. Share it!

Much simpler than Netlify drag-and-drop!
