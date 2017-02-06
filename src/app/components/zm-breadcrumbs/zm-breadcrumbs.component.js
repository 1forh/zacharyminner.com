const zmBreadcrumbs = {
	templateUrl: './zm-breadcrumbs.html',
	controller: 'ZMBreadcrumbsController'
};

angular
	.module('app.components')
	.component('zmBreadcrumbs', zmBreadcrumbs);
