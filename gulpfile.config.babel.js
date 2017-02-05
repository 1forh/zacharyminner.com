export const config = {
	destination: './dist',
	html: {
		source: './src/index.html'
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
			'node_modules/angular/angular.js',
			'node_modules/angular-ui-router/release/angular-ui-router.js'
		],
		templates: {
			source: [
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
		server: './dist'
	}
};
