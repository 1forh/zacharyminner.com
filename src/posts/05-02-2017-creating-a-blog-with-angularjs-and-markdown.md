---
title: Creating a blog with AngularJS and Markdown
excerpt: I use Angular a lot at my day job so to become more familiar with it, I wanted to create my portfolio using Angular. I also wanted to be able to write my posts in markdown.
tags:
 - JavaScript
 - AngularJS
 - Gulp
 - Markdown

---

## The Problem

I use  [Angular](https://angularjs.org/) a lot at my day job so to become more familiar with it, I wanted to create my portfolio using Angular. I also wanted to be able to write my posts in markdown.

How do I get Angular to read my posts in markdown?

## The Solution

Let's use a Gulp task to convert our markdown to JSON. Angular can read JSON very easily.

### Setting up our application

I want to be able to easily refactor this application to [Angular 2](https://angular.io/) when we update our stack at work. I can setup my application using a "Component Architecture" so that it is relativey similar to how an Angular 2 application is setup. I will also heavily utilize Angular's [component](https://docs.angularjs.org/guide/component) directive for the same reason.

### The Gulp Task

I will use the [gulp-markdown-to-json](https://github.com/sparkartgroup/gulp-markdown-to-json) plugin to convert my markdown to JSON. 

```javascript
import gulp from 'gulp';
import gutil from 'gulp-util';
import plumber from 'gulp-plumber';
import markdownToJson from 'gulp-markdown-to-json';

gulp.task('posts', () => {
	return gulp.src('./src/posts/**/*.md')
		.pipe(plumber())
		.pipe(gutil.buffer())
		.pipe(markdownToJson(marked, 'posts.json'))
		.pipe(gulp.dest('./dist/data'));
});
```

This Gulp task takes in all of my blog posts, written in markdown, and outputs the data to one JSON file: `posts.json`.

Then I can get the data from `posts.json` using an Angular service.

### An example post

The Gulp task will take the Front Matter block and output the data, along with the compiled markup of your post, as JSON. I can put any type of data I want here and the Gulp task will convert it to JSON. This will allow me to manipulate the data and use it in my Angular components.

```markdown
---
title: Example Post
excerpt: Using Angularjs to create a blog/portfolio lorem...
tags:
 - Tag 1
 - Tag 2

---

## Lorem ipsum dolor sit amet, consectetur adipisicing elit.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam in repellat suscipit maiores possimus aliquam hic distinctio, quas commodi, eaque tempora iusto ratione, nostrum adipisci quidem quasi! Numquam tempore, itaque.

- Lorem Ipsum
- Lorem Ipsum
- Lorem Ipsum
```
### The application structure

```
src/
	app/
		components/
			zm-blog/
		app.routes.js
		app.module.js
	posts/
		05-02-2017-test-post.md
```

### The Blog component

```javascript
const zmBlog = {
	templateUrl: './zm-blog.html',
	controller: 'ZMBlogController'
};

angular
	.module('app.components')
	.component('zmBlog', zmBlog);
```

## Hosting on GitHub Pages

TBD
