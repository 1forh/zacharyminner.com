function ZMProjectController(ZMProjectsService, $state) {
	let ctrl = this;

	ZMProjectsService.getProjects()
		.then(function(response) {
			ctrl.project = response[$state.params.id];
		})
		.catch(function(error) {
			console.error(error);
		});
}

ZMProjectController.$inject = ['ZMProjectsService', '$state'];

angular
	.module('app.components')
	.controller('ZMProjectController', ZMProjectController);
