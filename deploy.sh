#!/usr/bin/env sh
set -e

npm run build
cd dist
git init
git add -A
git commit -m"New deployment"
#git remote add origin https://github.com/johakim-azix/photosnap-app.git
git push -f https://github.com/johakim-azix/Entertainment-web-app-frontend.git master:entertainment-web-app-demo
cd -
