function ZMHeaderController() {
	let ctrl = this;

	ctrl.links = [
		{
			state: 'blog',
			name: 'Blog'
		},
		{
			state: 'projects',
			name: 'Projects'
		}
	];
}

angular
	.module('app.components')
	.controller('ZMHeaderController', ZMHeaderController);
