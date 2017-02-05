function ZMProjectsController() {
	let ctrl = this;

	ctrl.projects = [
		{
			id: 1,
			title: 'Test Project #1',
			featuredImage: 'http://fillmurray.com/500/350',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus excepturi, aliquid voluptatem quia! Doloremque illum exercitationem vitae iusto amet nisi illo veritatis animi, rem sequi iste voluptas cum saepe omnis.'
		},
		{
			id: 2,
			title: 'Test Project #2',
			featuredImage: 'http://fillmurray.com/500/350',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus excepturi, aliquid voluptatem quia! Doloremque illum exercitationem vitae iusto amet nisi illo veritatis animi, rem sequi iste voluptas cum saepe omnis.'
		},
		{
			id: 3,
			title: 'Test Project #3',
			featuredImage: 'http://fillmurray.com/500/350',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus excepturi, aliquid voluptatem quia! Doloremque illum exercitationem vitae iusto amet nisi illo veritatis animi, rem sequi iste voluptas cum saepe omnis.'
		},
		{
			id: 4,
			title: 'Test Project #4',
			featuredImage: 'http://fillmurray.com/500/350',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus excepturi, aliquid voluptatem quia! Doloremque illum exercitationem vitae iusto amet nisi illo veritatis animi, rem sequi iste voluptas cum saepe omnis.'
		}
	];
}

angular
	.module('app.components')
	.controller('ZMProjectsController', ZMProjectsController);
