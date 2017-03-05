angular
	.module('app', [
		'ui.router',
		'ngAnimate',
		'angular-google-analytics',
		'app.templates',
		'app.components',
		'app.common'
	]).config(function(AnalyticsProvider) {
		AnalyticsProvider.setAccount('UA-59393507-1');
	}).run(function($rootScope, $timeout, $location, Analytics) {
		$rootScope.$on('$stateChangeSuccess', function() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;

			$timeout(function() {
				Prism.highlightAll();
			}, 100);
		});
	});
