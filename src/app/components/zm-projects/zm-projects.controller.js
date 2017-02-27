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

ZMProjectsController.$inject = ['ZMProjectsService'];

angular
	.module('app.components')
	.controller('ZMProjectsController', ZMProjectsController);
