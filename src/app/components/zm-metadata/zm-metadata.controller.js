function ZMMetadataController($rootScope, $location) {
	let ctrl = this;

	$rootScope.metadata = {
		url: $location.absUrl(),
		title: ctrl.title ? ctrl.title : 'Zach Minner',
		description: ctrl.description ? ctrl.description : 'Hey! My name is Zach Minner. I am a front-end web developer at SKYCATCHFIRE who lives off Mr. Robot and grilled cheese sandwiches.'
	};

}

angular
	.module('app.components')
	.controller('ZMMetadataController', ZMMetadataController);
