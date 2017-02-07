function ZMHeaderController() {
	let ctrl = this;

	ctrl.menu = [
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
