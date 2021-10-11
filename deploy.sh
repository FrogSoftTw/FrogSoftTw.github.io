#!/bin/bash

# Exit when error occur
set -e

# Build
npm run build

# cd to /dist and push to deploy branch 
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/FrogSoftTw/FrogSoftTw.github.io.git main:deploy
cd ../