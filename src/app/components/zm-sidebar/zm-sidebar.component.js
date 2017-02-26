const zmSidebar = {
	templateUrl: './zm-sidebar.html',
	controller: 'ZMSidebarController'
};

angular
	.module('app.components')
	.component('zmSidebar', zmSidebar);
