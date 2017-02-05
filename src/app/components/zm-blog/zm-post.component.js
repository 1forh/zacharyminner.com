const zmPost = {
	templateUrl: './zm-post.html',
	controller: 'ZMPostController'
};

angular
	.module('app.components')
	.component('zmPost', zmPost);
