function ZMPostController(ZMBlogService, $state) {
	let ctrl = this;

	ZMBlogService.getPosts()
		.then(function(response) {
			ctrl.post = response[$state.params.id];
		})
		.catch(function(error) {
			console.error(error);
		});
}

ZMPostController.$inject = ['ZMBlogService', '$state'];

angular
	.module('app.components')
	.controller('ZMPostController', ZMPostController);
