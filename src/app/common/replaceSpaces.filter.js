function replaceSpaces() {
	return function(input) {
		if(input) {
			return input.toLowerCase().replace(/\s+/g, '-');
		}
	};
}

angular
	.module('app.common')
	.filter('replaceSpaces', replaceSpaces);
