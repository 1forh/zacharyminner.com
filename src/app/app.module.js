angular
	.module('app', [
		'ui.router',
		'ngAnimate',
		'app.templates',
		'app.components',
		'app.common'
	]).run(function($rootScope, $timeout, $location) {
		$rootScope.$on('$stateChangeSuccess', function() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;

			$timeout(function() {
				Prism.highlightAll();
			}, 100);
		});
	});
