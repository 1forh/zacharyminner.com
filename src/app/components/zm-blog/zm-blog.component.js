const zmBlog = {
	templateUrl: './zm-blog.html',
	controller: 'ZMBlogController'
};

angular
	.module('app.components')
	.component('zmBlog', zmBlog);
