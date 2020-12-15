---
date: 2020-12-15
tags:
  - Nuxt.js
  - NPM
title: nuxt command not found
summary: How to solve the npm error: `nuxt command not found`
---

Step 1: Run `npm cache clean --force`

Step 2: Delete `node_modules` by running `rm -rf node_modules`. 

Step 3: Delete `package-lock.json` by running `rm package-lock.json`. 

Step 4: Run `npm install` to reinstall dependencies

[Solution Source](https://stackoverflow.com/questions/7167519/should-markdown-preserve-newlines-in-blockquotes)
