function ZMBreadcrumbsController(ZMBreadcrumbsService, $location, $rootScope) {
	let ctrl = this;

	$rootScope.$on('$stateChangeSuccess', function() {
		if ($location.path() === '/') {
			ctrl.isHome = true;
		} else {
			ctrl.isHome = false;
		}
	});

	ctrl.breadcrumbs = ZMBreadcrumbsService;
}

ZMBreadcrumbsController.$inject = ['ZMBreadcrumbsService', '$location', '$rootScope'];

angular
	.module('app.components')
	.controller('ZMBreadcrumbsController', ZMBreadcrumbsController);
