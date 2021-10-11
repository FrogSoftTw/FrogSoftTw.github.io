#!/bin/bash

# Exit when error occur
set -e

# Remove the old dist folder if exists
if [ -d "dist" ]
then rm -Rf dist
fi

# Build
npm run build

# cd to /dist and push to deploy branch 
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/FrogSoftTw/FrogSoftTw.github.io.git master:deploy
cd ../