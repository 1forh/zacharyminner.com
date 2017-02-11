---
date: 10 February 2017
title: Quick guide to Gulp
excerpt: I'll build a task that compiles our Sass styles into CSS. As the Sass files are being compiled, we can manipulate the contents of the files in multiple ways depending on what we need.
tags:
 - JavaScript
 - Gulp

---

I'll build a task that compiles our Sass styles into CSS. As the Sass files are being compiled, we can manipulate the contents of the files in multiple ways depending on what we need.

---

Below is a link to a sample Gulpfile. This is can be a great starting point to build out your own tasks.

[https://github.com/1forh/gulpfile-example](https://github.com/1forh/gulpfile-example)

---

## Get the Gulp dependencies

To use Gulp you will need a few things:

- [Node.js](https://nodejs.org/en/) - v4.4.7+
- [gulp-cli](https://github.com/gulpjs/gulp-cli) - Allows you to run Gulp tasks using the command line
    - `npm install --global gulp-cli`


---

## Get the Gulpfile dependencies

To actually use Gulp in our `gulpfile.js`, we need to install the dependency. The same is true with any other plugins we want to use.

```
npm install gulp gulp-sass --save-dev
```

**Note:** The `--save-dev` flag will save the dependencies to your `package.json` file.

---

## The task

First import the plugins installed earlier and then build out the task. 

```javascript
import gulp from 'gulp';
import sass from 'gulp-sass';

gulp.task('styles', () => {
	return gulp.src('./src/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist'));
});
```

## Expanding on the Gulpfile

Check out other plugins at [Gulp's website](http://gulpjs.com/plugins/) to see what you can do with Gulp.
