# Render Deployment Guide

## Quick Deployment to Render (2-3 minutes)

### Prerequisites
- GitHub account
- Render.com account (free)
- MongoDB Atlas account (free)

## Step 1: Create MongoDB Atlas Cluster

1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Sign up and create a free cluster
3. Create a database user with a strong password
4. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/MyDB`
5. Add your IP to the network access list (allow 0.0.0.0/0 for development)

## Step 2: Push to GitHub

Run these commands in your project folder:

```bash
# Add remote repository (create repo on github.com first)
git remote add origin https://github.com/your-username/vsnod.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy on Render

1. Go to [render.com](https://render.com) and sign up
2. Click **New +** → **Web Service**
3. Select **Connect a Repository** → Choose your GitHub repo
4. Fill in the details:
   - **Name:** `user-api`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

5. Add Environment Variables:
   - Click **Environment** → **Add Variable**
   - Key: `MONGO_URI`
   - Value: `mongodb+srv://username:password@cluster.mongodb.net/MyDB` (from Atlas)
   - Key: `NODE_ENV`
   - Value: `production`

6. Click **Create Web Service** and wait for deployment (2-3 minutes)

## Your Live API URL

Once deployed, you'll get a URL like:
```
https://user-api-xxxx.onrender.com
```

## Test Your Live API

```bash
GET https://user-api-xxxx.onrender.com/api/health
```

## Use in Maui App

Replace your base URL in Maui:

```csharp
private const string BaseUrl = "https://user-api-xxxx.onrender.com/api";
```

## Updating Your API

After making changes:

```bash
git add .
git commit -m "Your message"
git push origin main
```

Render will automatically redeploy! 🚀

## Notes

- Free Render tier will sleep after 15 minutes of inactivity
- MongoDB Atlas free tier has storage limits
- For production, upgrade to paid tiers

---

**Your live API will be ready in 2-3 minutes!**
