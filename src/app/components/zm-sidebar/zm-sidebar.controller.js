function ZMSidebarController() {
	let ctrl = this;

	ctrl.menu = [
		{
			state: 'portfolio',
			name: 'Portfolio'
		},
		{
			state: 'blog',
			name: 'Blog'
		},
		{
			state: 'contact',
			name: 'Contact'
		},
		{
			state: 'resume',
			name: 'Resume'
		}
	];

	ctrl.social = [
		{
			url: 'mailto:1forhlol@gmail.com',
			name: 'Email'
		},
		{
			url: 'https://github.com/1forh',
			name: 'Github'
		},
		{
			url: 'https://www.linkedin.com/in/zachary-minner-877371118',
			name: 'Linkedin'
		},
		{
			url: 'http://codepen.io/1forh/',
			name: 'Codepen'
		}
	];
}

angular
	.module('app.components')
	.controller('ZMSidebarController', ZMSidebarController);
