const zmHeader = {
	templateUrl: './zm-header.html',
	controller: 'ZMHeaderController'
};

angular
	.module('app.components')
	.component('zmHeader', zmHeader);
