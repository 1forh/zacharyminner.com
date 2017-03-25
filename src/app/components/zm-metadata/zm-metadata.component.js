const zmMetadata = {
	bindings: {
		title: '@',
		description: '@'
	},
	controller: 'ZMMetadataController'
};

angular
	.module('app.components')
	.component('zmMetadata', zmMetadata);
