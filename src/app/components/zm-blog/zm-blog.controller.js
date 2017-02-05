function ZMBlogController() {
	let ctrl = this;

	ctrl.posts = [
		{
			id: 1,
			title: 'Test Post #1',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus excepturi, aliquid voluptatem quia! Doloremque illum exercitationem vitae iusto amet nisi illo veritatis animi, rem sequi iste voluptas cum saepe omnis.'
		},
		{
			id: 2,
			title: 'Test Post #2',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus excepturi, aliquid voluptatem quia! Doloremque illum exercitationem vitae iusto amet nisi illo veritatis animi, rem sequi iste voluptas cum saepe omnis.'
		},
		{
			id: 3,
			title: 'Test Post #3',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus excepturi, aliquid voluptatem quia! Doloremque illum exercitationem vitae iusto amet nisi illo veritatis animi, rem sequi iste voluptas cum saepe omnis.'
		},
		{
			id: 4,
			title: 'Test Post #4',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus excepturi, aliquid voluptatem quia! Doloremque illum exercitationem vitae iusto amet nisi illo veritatis animi, rem sequi iste voluptas cum saepe omnis.'
		}
	];
}

angular
	.module('app.components')
	.controller('ZMBlogController', ZMBlogController);
