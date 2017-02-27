function ZMBreadcrumbsService($rootScope, $location, $filter) {
	var breadcrumbs = [];

		$rootScope.$on('$stateChangeSuccess', function() {

			var pathElements = $location.path().split('/'), result = [], i;

			var breadcrumbPath = function(index) {
				return (pathElements.slice(0, index + 1)).join('/');
			};

			pathElements.shift();
			for (i = 0; i < pathElements.length; i++) {
				result.push({name: pathElements[i], path: breadcrumbPath(i)});
				result[i].name = result[i].name.replace(/-|(\d)/g, ' '); //  remove numbers and replace dashes with spaces
			}

			breadcrumbs = result;
		});

		function getAll() {
			return breadcrumbs;
		}

		function getFirst() {
			return breadcrumbs[0] || {};
		}

		return {
			getAll: getAll,
			getFirst: getFirst
		};
}

ZMBreadcrumbsService.$inject = ['$rootScope', '$location', '$filter'];

angular
	.module('app.components')
	.factory('ZMBreadcrumbsService', ZMBreadcrumbsService);
