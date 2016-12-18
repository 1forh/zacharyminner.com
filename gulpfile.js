'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rimraf = require('rimraf');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

const config = {
	styles: {
		source: './assets/styles/**/*.scss',
		destination: './assets/dist/',
		browsers: ['last 2 versions', 'ie >= 9']
	},
	browserSync: {
		port: 5000,
		server: './'
	},
	clean: {
		directory: './dist'
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

const clean = (error) => {
	rimraf(config.clean.directory, error);
};

const serve = () => {
	browserSync.init({
		port: config.browserSync.port,
		server: config.browserSync.server
	});

	gulp.watch(config.styles.source, ['styles']);
};

gulp.task('clean', clean);
gulp.task('styles', styles);
gulp.task('serve', ['styles'], serve);
gulp.task('default', ['serve']);
