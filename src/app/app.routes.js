angular
	.module('app')
	.config(($stateProvider, $urlRouterProvider, $locationProvider) => {

		$locationProvider.html5Mode({
			enabled: true
		});

		$stateProvider
			.state('home', {
				url: '/',
				component: 'zmProjects',
				template: '<zm-projects></zm-projects>'
			})
			.state('contact', {
				url: '/contact',
				component: 'zmContact',
				template: '<zm-contact></zm-contact>'
			})
			.state('resume', {
				url: '/resume',
				component: 'zmResume',
				template: '<zm-resume></zm-resume>'
			})
			.state('portfolio', {
				url: '/portfolio',
				component: 'zmProjects',
				template: '<zm-projects></zm-projects>'
			})
			.state('project', {
				url: '/portfolio/:id',
				component: 'zmProject',
				template: '<zm-project></zm-project>'
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
