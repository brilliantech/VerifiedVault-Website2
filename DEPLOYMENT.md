# Deployment Guide

## Option 1: Vercel (Recommended - Easiest)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts and your site will be live in minutes.

## Option 2: Build for Production Server

1. Build the project:
```bash
npm run build
```

2. Start production server:
```bash
npm run start
```

3. Server runs on port 3000 by default.

## Option 3: Docker Deployment

1. Create Dockerfile (already provided below)
2. Build image:
```bash
docker build -t vaultverified .
```

3. Run container:
```bash
docker run -p 3000:3000 vaultverified
```

## Option 4: PM2 (Production Server)

1. Install PM2:
```bash
npm install -g pm2
```

2. Build project:
```bash
npm run build
```

3. Start with PM2:
```bash
pm2 start npm --name "vaultverified" -- start
pm2 save
pm2 startup
```

## Environment Variables

Create `.env.production` file:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Server Requirements

- Node.js 18+
- 512MB RAM minimum
- Port 3000 (or configure custom port)
