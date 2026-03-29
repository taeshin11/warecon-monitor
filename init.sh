#!/bin/bash
# WarEcon Monitor — Bootstrap Script
# Run this to set up the project from scratch

set -e

echo "🚀 Bootstrapping WarEcon Monitor..."

# Install dependencies
npm install

# Copy env template if .env.local doesn't exist
if [ ! -f .env.local ]; then
  cp .env.example .env.local 2>/dev/null || echo "No .env.example found, skipping..."
fi

# Run dev server
echo "Starting dev server..."
npm run dev
