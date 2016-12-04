'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rimraf = require('rimraf');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

const config = {
	styles: {
		source: './public/assets/styles/**/*.scss',
		destination: './public/dist',
		browsers: ['last 2 versions', 'ie >= 9']
	},
	scripts: {
		source: [
			'./public/assets/scripts/main.js'
		],
		destination: './public/dist',
		babel: {
			presets: ['es2015']
		}
	},
	clean: {
		path: './public/dist'
	},
	browserSync: {
		port: 5000,
		server: './public'
	}
};

const styles = () =>
	gulp.src(config.styles.source)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: config.styles.browsers
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.styles.destination))
		.pipe(browserSync.stream());

const scripts = () =>
	gulp.src(config.scripts.source)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: config.scripts.babel.presets
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.scripts.destination));

const clean = (error) => {
	rimraf(config.clean.path, error);
};

const serve = () => {
	browserSync.init({
		port: config.browserSync.port,
		server: config.browserSync.server
	});

	gulp.watch(config.styles.source ['styles']);
	gulp.watch(config.scripts.source, ['scripts', browserSync.reload]);
};

gulp.task('clean', clean);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('build', ['styles', 'scripts']);
gulp.task('serve', ['build'], serve);
gulp.task('default', ['serve']);
