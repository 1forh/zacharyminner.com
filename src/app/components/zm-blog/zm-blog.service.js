function ZMBlogService($http, $sce, $filter) {
	var service = {
		getPosts: getPosts
	};

	return service;

	function getPosts() {
		return $http({
				method: 'GET',
				url: './dist/data/posts.json',
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

ZMBlogService.$inject = ['$http', '$sce', '$filter'];

angular
	.module('app.components')
	.factory('ZMBlogService', ZMBlogService);
