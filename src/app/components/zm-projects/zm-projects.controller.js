function ZMProjectsController(ZMProjectsService) {
	let ctrl = this;

	ZMProjectsService.getProjects()
		.then(function(response) {
			ctrl.projects = response;
		})
		.catch(function(error) {
			console.error(error);
		});
}

angular
	.module('app.components')
	.controller('ZMProjectsController', ZMProjectsController);
