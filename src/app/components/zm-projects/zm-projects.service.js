function ZMProjectsService($http, $sce, $filter) {
	var service = {
		getProjects: getProjects
	};

	return service;

	function getProjects() {
		return $http({
				method: 'GET',
				url: './data/projects.json',
				cache: false
			})
			.then(function(response) {
				for (let key in response.data) {
					if(response.data) {
						response.data[key].url = $filter('replaceSpaces')(key); // add url to data object
						response.data[key].body = $sce.trustAsHtml(response.data[key].body); // sanitize html
					}
				}
				return response.data;
			})
			.catch(function(error) {
				console.error(error);
			});
	}
}

angular
	.module('app.components')
	.factory('ZMProjectsService', ZMProjectsService);
