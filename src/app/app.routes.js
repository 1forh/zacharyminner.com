angular
	.module('app')
	.config(($stateProvider, $urlRouterProvider) => {
		$stateProvider
			.state('home', {
				url: '/',
				component: 'zmHome',
				template: '<zm-home></zm-home>'
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
			});

		$urlRouterProvider.otherwise('/');
	});
