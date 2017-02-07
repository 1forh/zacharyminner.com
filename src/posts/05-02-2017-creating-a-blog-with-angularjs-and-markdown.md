---
title: Creating a blog with AngularJS and Markdown
excerpt: I use Angular a lot at work so to become even more familiar with it, I wanted to create my portfolio using Angular. I also wanted to be able to write my posts in markdown.
tags:
 - JavaScript
 - AngularJS
 - Gulp
 - Markdown

---

## The problem

I use  [Angular](https://angularjs.org/) a lot at work so to become even more familiar with it, I wanted to create my portfolio using Angular. I also wanted to be able to write my posts in markdown.

How do I get Angular to read my posts in markdown?

## The solution

I'm going to use a Gulp task to convert our markdown to JSON. Angular can read JSON very easily.

### Setting up our application

I want to be able to easily refactor this application to [Angular 2](https://angular.io/) when we update our stack at work. I can setup my application using a "Component Architecture" so that it is relativey similar to how an Angular 2 application is setup. I will also heavily utilize Angular's [component](https://docs.angularjs.org/guide/component) directive for the same reason.

### The Gulp task

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

The Gulp task will take the Front Matter block and output the data, along with the compiled markup of my post, as JSON. I can put any type of data I want here and the Gulp task will convert it to JSON. This will allow me to manipulate the data and use it in my Angular components.

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

Like I said above, my portfolio's directory structure will be set up using a "[Component Architecture](https://docs.angularjs.org/guide/component)". Organizing my application utilizing the strengths of Angular's component directive will help me keep my portfolio maintainable and scalable. Here is an article explaining what an Angular component is and how to use it: [https://scotch.io/tutorials/how-to-use-angular-1-5s-component-method](https://scotch.io/tutorials/how-to-use-angular-1-5s-component-method)

I will keep all of my application specific code in the `app` directory and I will keep all of my blog posts in the `posts` directory. Remember, my Gulp task will take the markdown files from the `post` directory and output a JSON file. An Angular service will then call for the data using and `http` request. This will allow me to manipulate the data and pass it to the template through a controller.

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

### The blog component

It's good practice to namespace a custom angular component. This allows relative certainty that none of the custom code will effect dependency/vendor code and vice/versa. 

I'm just going to use my initials. This makes it: `zm-blog`.

---

#### zm-blog.component.js

Setup the Angular component

```javascript
const zmBlog = {
	templateUrl: './zm-blog.html',
	controller: 'ZMBlogController'
};

angular
	.module('app.components')
	.component('zmBlog', zmBlog);
```

#### zm-blog.service.js

`GET` the data using an `http` request and return formatted data

	function ZMBlogService($http, $sce, $filter) {
		var service = {
			getPosts: getPosts
		};

		return service;

		function getPosts() {
			return $http({
				method: 'GET',
				url: './dist/data/posts.json',
				cache: false
			})
			.then(function(response) {
				for (let key in response.data) {
					if(response.data) {
						response.data[key].body = $sce.trustAsHtml(response.data[key].body); // sanitize html
					}
				}
				return response.data;
			})
			.catch(function(error) {
				console.error(error);
			});
		}
	}

	angular
		.module('app.components')
		.factory('ZMBlogService', ZMBlogService);

#### zm-blog.controller.js

Expose the data to the template


	function ZMBlogController(ZMBlogService) {
		let ctrl = this;

		ZMBlogService.getPosts()
			.then(function(response) {
				ctrl.posts = response;
			})
			.catch(function(error) {
				console.error(error);
			});
	}

	angular
		.module('app.components')
		.controller('ZMBlogController', ZMBlogController);


#### zm-blog.html

Using an HTML template, render the JSON data exposed by the controller

```html
<h1>Blog</h1>

<div ng-repeat="post in $ctrl.posts">
	<a ui-sref="post({ id: post.url })">{{ post.title }}</a>
	<small>{{ post.updatedAt | date }}</small>
	<p ng-bind="post.excerpt"></p>
</div>
```

---

## The output

I can now use `<zm-blog></zm-blog>` anywhere in my application and Angular will display a list of my blog posts, now rendered in HTML.
