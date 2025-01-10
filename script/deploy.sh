#!/bin/sh

cd dist/ || exit 2 

git init
git remote add gho git@github.com:benjamin-asdf/type-pi.git
git add .
git commit -m "deploy"
git push --force gho HEAD:gh-pages





