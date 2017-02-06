const zmHero = {
	bindings: {
		title: '@',
		description: '@'
	},
	templateUrl: './zm-hero.html',
	controller: 'ZMHeroController'
};

angular
	.module('app.components')
	.component('zmHero', zmHero);
