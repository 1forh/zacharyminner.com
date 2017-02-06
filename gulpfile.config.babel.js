export const config = {
	destination: './dist',
	posts: {
		source: './src/posts/**/*.md'
	},
	projects: {
		source: './src/projects/**/*.md'
	},
	styles: {
		source: './src/styles/**/*.scss',
		browsers: ['last 2 versions', 'ie >= 9']
	},
	scripts: {
		source: [
			'./src/app/**/*module.js',
			'./src/app/**/*controller.js',
			'./src/app/**/*component.js',
			'./src/app/**/*.js'
		],
		modules: [
			'node_modules/underscore/underscore.js',
			'node_modules/angular/angular.js',
			'node_modules/angular-animate/angular-animate.js',
			'node_modules/angular-sanitize/angular-sanitize.js',
			'node_modules/angular-ui-router/release/angular-ui-router.js'
		],
		templates: {
			source: [
				'./dist/posts/**/*.html',
				'./src/app/components/**/*.html'
			],
			moduleName: 'app.templates',
		},
		babel: {
			compile: true,
			presets: ['es2015']
		},
		jshint: {
			lookup: true,
			browser: true,
			devel: true,
			esversion: 6
		}
	},
	images: {
		source: './src/images/**/*.{png,jpg,svg}'
	},
	browserSync: {
		port: 5000,
		server: './'
	}
};
