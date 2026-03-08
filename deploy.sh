#!/bin/bash

# Configuration
APP_NAME="aporto"
PORT=3001

echo "========================================"
echo " Starting deployment for $APP_NAME"
echo "========================================"

# 1. Pull the latest code from GitHub
echo "[1/5] Pulling latest changes from GitHub..."
git pull

# 2. Install dependencies
echo "[2/5] Installing dependencies..."
npm install

# 3. Build the Next.js application
echo "[3/5] Building the application..."
npm run build

# 4. Free up the port if it's already in use
echo "[4/5] Checking if port $PORT is occupied..."
PID=$(lsof -ti:$PORT)
if [ ! -z "$PID" ]; then
  echo "      Port $PORT is occupied by PID $PID. Terminating process..."
  kill -9 $PID
  echo "      Process terminated."
else
  echo "      Port $PORT is free."
fi

# 5. Start or reload the application using PM2
echo "[5/5] Starting/Restarting application with PM2..."
# Check if PM2 already has this process
if pm2 show $APP_NAME > /dev/null 2>&1; then
  echo "      App '$APP_NAME' is already managed by PM2. Restarting..."
  # Use PORT env variable to ensure it runs on 3001
  PORT=$PORT pm2 restart $APP_NAME --update-env
else
  echo "      Starting new PM2 process for '$APP_NAME'..."
  PORT=$PORT pm2 start npm --name "$APP_NAME" -- start
fi

echo "========================================"
echo " Deployment completed successfully! "
echo " Use 'pm2 logs $APP_NAME' to view logs."
echo "========================================"
