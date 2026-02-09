@echo off
REM Quick deployment setup script for Render.com (Windows)

echo =========================================
echo User API - Deployment Checklist
echo =========================================
echo.

echo Step 1: Create MongoDB Atlas Account
echo  URL: https://mongodb.com/atlas
echo  - Sign up (free)
echo  - Create a cluster (free tier)
echo  - Create database user
echo  - Get connection string
echo.

echo Step 2: GitHub Setup
echo  Create new repo on github.com, then run:
echo.
echo  git remote add origin https://github.com/YOUR_USERNAME/vsnod.git
echo  git branch -M main
echo  git push -u origin main
echo.

echo Step 3: Deploy on Render
echo  URL: https://render.com
echo  - Sign up (free)
echo  - New Web Service
echo  - Connect GitHub repo
echo  - Build: npm install
echo  - Start: npm start
echo.

echo Step 4: Environment Variables on Render
echo  MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/MyDB
echo  NODE_ENV=production
echo.

echo Your API will be live at:
echo  https://user-api-XXXX.onrender.com/api/users
echo.
echo =========================================
pause
