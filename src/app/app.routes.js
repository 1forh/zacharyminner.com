angular
	.module('app')
	.config(($stateProvider, $urlRouterProvider) => {

		$stateProvider
			.state('home', {
				url: '/',
				component: 'zmHome',
				template: '<zm-home></zm-home>'
			})
			.state('contact', {
				url: '/contact',
				component: 'zmContact',
				template: '<zm-contact></zm-contact>'
			})
			.state('projects', {
				url: '/projects',
				component: 'zmProjects',
				template: '<zm-projects></zm-projects>'
			})
			.state('blog', {
				url: '/blog',
				component: 'zmBlog',
				template: '<zm-blog></zm-blog>'
			})
			.state('post', {
				url: '/blog/:id',
				component: 'zmPost',
				template: '<zm-post></zm-post>'
			});

		$urlRouterProvider.otherwise('/');
	});
