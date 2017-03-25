function ZMFormController($scope, $timeout) {
	let ctrl = this;

	ctrl.data = {
		name: '',
		email: '',
		message: ''
	};

	ctrl.submit = function submit() {
			console.log(ctrl.data);
	};
}

angular
	.module('app.components')
	.controller('ZMFormController', ZMFormController);
