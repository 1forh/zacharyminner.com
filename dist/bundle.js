'use strict';

(function (angular) {
	'use strict';

	angular.module('app', ['ui.router', 'ngAnimate', 'app.templates', 'app.components', 'app.common']).run(function ($rootScope, $timeout, $location) {
		$rootScope.$on('$stateChangeSuccess', function () {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;

			$timeout(function () {
				Prism.highlightAll();
			}, 100);
		});
	});
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('app.templates', []);
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('app.common', []);
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('app.components', []);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMBlogController(ZMBlogService) {
		var ctrl = this;

		console.log(ctrl.count);

		ZMBlogService.getPosts().then(function (response) {
			ctrl.posts = response;
		}).catch(function (error) {
			console.error(error);
		});
	}

	angular.module('app.components').controller('ZMBlogController', ZMBlogController);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMPostController(ZMBlogService, $state) {
		var ctrl = this;

		ZMBlogService.getPosts().then(function (response) {
			ctrl.post = response[$state.params.id];
		}).catch(function (error) {
			console.error(error);
		});
	}

	angular.module('app.components').controller('ZMPostController', ZMPostController);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMBreadcrumbsController(ZMBreadcrumbsService, $location, $rootScope) {
		var ctrl = this;

		$rootScope.$on('$stateChangeSuccess', function () {
			if ($location.path() === '/') {
				ctrl.isHome = true;
			} else {
				ctrl.isHome = false;
			}
		});

		ctrl.breadcrumbs = ZMBreadcrumbsService;
	}

	angular.module('app.components').controller('ZMBreadcrumbsController', ZMBreadcrumbsController);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMFooterController() {
		var ctrl = this;
	}

	angular.module('app.components').controller('ZMFooterController', ZMFooterController);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMFormController() {
		var ctrl = this;
	}

	angular.module('app.components').controller('ZMFormController', ZMFormController);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMHeaderController() {
		var ctrl = this;

		ctrl.menu = [{
			state: 'blog',
			name: 'Blog'
		}, {
			state: 'projects',
			name: 'Projects'
		}];
	}

	angular.module('app.components').controller('ZMHeaderController', ZMHeaderController);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMHeroController() {
		var ctrl = this;
	}

	angular.module('app.components').controller('ZMHeroController', ZMHeroController);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMHomeController() {
		var ctrl = this;
	}

	angular.module('app.components').controller('ZMHomeController', ZMHomeController);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMProjectController(ZMProjectsService, $state) {
		var ctrl = this;

		ZMProjectsService.getProjects().then(function (response) {
			ctrl.project = response[$state.params.id];
		}).catch(function (error) {
			console.error(error);
		});
	}

	angular.module('app.components').controller('ZMProjectController', ZMProjectController);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMProjectsController(ZMProjectsService) {
		var ctrl = this;

		ZMProjectsService.getProjects().then(function (response) {
			ctrl.projects = response;
		}).catch(function (error) {
			console.error(error);
		});
	}

	angular.module('app.components').controller('ZMProjectsController', ZMProjectsController);
})(window.angular);
(function (angular) {
	'use strict';

	var zmBlog = {
		templateUrl: './zm-blog.html',
		controller: 'ZMBlogController'
	};

	angular.module('app.components').component('zmBlog', zmBlog);
})(window.angular);
(function (angular) {
	'use strict';

	var zmPost = {
		templateUrl: './zm-post.html',
		controller: 'ZMPostController'
	};

	angular.module('app.components').component('zmPost', zmPost);
})(window.angular);
(function (angular) {
	'use strict';

	var zmBreadcrumbs = {
		templateUrl: './zm-breadcrumbs.html',
		controller: 'ZMBreadcrumbsController'
	};

	angular.module('app.components').component('zmBreadcrumbs', zmBreadcrumbs);
})(window.angular);
(function (angular) {
	'use strict';

	var zmContact = {
		templateUrl: './zm-contact.html'
	};

	angular.module('app.components').component('zmContact', zmContact);
})(window.angular);
(function (angular) {
	'use strict';

	var zmFooter = {
		templateUrl: './zm-footer.html',
		controller: 'ZMFooterController'
	};

	angular.module('app.components').component('zmFooter', zmFooter);
})(window.angular);
(function (angular) {
	'use strict';

	var zmForm = {
		templateUrl: './zm-form.html',
		controller: 'ZMFormController'
	};

	angular.module('app.components').component('zmForm', zmForm);
})(window.angular);
(function (angular) {
	'use strict';

	var zmHeader = {
		templateUrl: './zm-header.html',
		controller: 'ZMHeaderController'
	};

	angular.module('app.components').component('zmHeader', zmHeader);
})(window.angular);
(function (angular) {
	'use strict';

	var zmHero = {
		bindings: {
			title: '@',
			description: '@'
		},
		templateUrl: './zm-hero.html',
		controller: 'ZMHeroController'
	};

	angular.module('app.components').component('zmHero', zmHero);
})(window.angular);
(function (angular) {
	'use strict';

	var zmHome = {
		templateUrl: './zm-home.html'
	};

	angular.module('app.components').component('zmHome', zmHome);
})(window.angular);
(function (angular) {
	'use strict';

	var zmProject = {
		templateUrl: './zm-project.html',
		controller: 'ZMProjectController'
	};

	angular.module('app.components').component('zmProject', zmProject);
})(window.angular);
(function (angular) {
	'use strict';

	var zmProjects = {
		templateUrl: './zm-projects.html',
		controller: 'ZMProjectsController'
	};

	angular.module('app.components').component('zmProjects', zmProjects);
})(window.angular);
(function (angular) {
	'use strict';

	angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider.state('home', {
			url: '/',
			component: 'zmHome',
			template: '<zm-home></zm-home>'
		}).state('contact', {
			url: '/contact',
			component: 'zmContact',
			template: '<zm-contact></zm-contact>'
		}).state('projects', {
			url: '/projects',
			component: 'zmProjects',
			template: '<zm-projects></zm-projects>'
		}).state('project', {
			url: '/projects/:id',
			component: 'zmProject',
			template: '<zm-project></zm-project>'
		}).state('blog', {
			url: '/blog',
			component: 'zmBlog',
			template: '<zm-blog></zm-blog>'
		}).state('post', {
			url: '/blog/:id',
			component: 'zmPost',
			template: '<zm-post></zm-post>'
		});

		$urlRouterProvider.otherwise('/');
	});
})(window.angular);
(function (angular) {
	'use strict';

	function replaceSpaces() {
		return function (input) {
			if (input) {
				return input.toLowerCase().replace(/\s+/g, '-');
			}
		};
	}

	angular.module('app.common').filter('replaceSpaces', replaceSpaces);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMBlogService($http, $sce, $filter) {
		var service = {
			getPosts: getPosts
		};

		return service;

		function getPosts() {
			return $http({
				method: 'GET',
				url: './dist/data/posts.json',
				cache: false
			}).then(function (response) {
				for (var key in response.data) {
					if (response.data) {
						response.data[key].url = $filter('replaceSpaces')(key); // add url to data object
						response.data[key].body = $sce.trustAsHtml(response.data[key].body); // sanitize html
					}
				}
				return response.data;
			}).catch(function (error) {
				console.error(error);
			});
		}
	}

	angular.module('app.components').factory('ZMBlogService', ZMBlogService);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMBreadcrumbsService($rootScope, $location, $filter) {
		var breadcrumbs = [];

		$rootScope.$on('$stateChangeSuccess', function () {

			var pathElements = $location.path().split('/'),
			    result = [],
			    i;

			var breadcrumbPath = function breadcrumbPath(index) {
				return pathElements.slice(0, index + 1).join('/');
			};

			pathElements.shift();
			for (i = 0; i < pathElements.length; i++) {
				result.push({ name: pathElements[i], path: breadcrumbPath(i) });
				result[i].name = result[i].name.replace(/-|(\d)/g, ' '); //  remove numbers and replace dashes with spaces
			}

			breadcrumbs = result;
		});

		function getAll() {
			return breadcrumbs;
		}

		function getFirst() {
			return breadcrumbs[0] || {};
		}

		return {
			getAll: getAll,
			getFirst: getFirst
		};
	}

	angular.module('app.components').factory('ZMBreadcrumbsService', ZMBreadcrumbsService);
})(window.angular);
(function (angular) {
	'use strict';

	function ZMProjectsService($http, $sce, $filter) {
		var service = {
			getProjects: getProjects
		};

		return service;

		function getProjects() {
			return $http({
				method: 'GET',
				url: './dist/data/projects.json',
				cache: false
			}).then(function (response) {
				for (var key in response.data) {
					if (response.data) {
						if (response.data[key].featured) {
							response.data[key].featured = 'dist/images/projects/' + key + '/' + response.data[key].featured;
						}
						response.data[key].url = $filter('replaceSpaces')(key); // add url to data object
						response.data[key].body = $sce.trustAsHtml(response.data[key].body); // sanitize html
					}
				}
				return response.data;
			}).catch(function (error) {
				console.error(error);
			});
		}
	}

	angular.module('app.components').factory('ZMProjectsService', ZMProjectsService);
})(window.angular);
//# sourceMappingURL=bundle.js.map
