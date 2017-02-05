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
		},
		{
			state: 'contact',
			name: 'Contact'
		}
	];
}

angular
	.module('app.components')
	.controller('ZMHeaderController', ZMHeaderController);
