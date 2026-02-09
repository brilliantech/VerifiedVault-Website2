# Render Deployment Guide

## ✅ Build Successful!

Your project is ready to deploy on Render.

## Steps to Deploy:

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy on Render

1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Render will auto-detect Next.js

**Settings:**
- **Name:** vaultverified
- **Environment:** Node
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm run start`
- **Instance Type:** Free (or paid for production)

### 3. Environment Variables (Optional)
Add in Render dashboard:
- `NODE_ENV` = `production`

### 4. Deploy
Click "Create Web Service" - Render will build and deploy automatically!

## Your site will be live at:
`https://vaultverified.onrender.com`

## Auto-Deploy
Every push to `main` branch will trigger automatic deployment.
