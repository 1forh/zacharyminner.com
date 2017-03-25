import gulp from 'gulp';
import sass from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import jshint from 'gulp-jshint';
import stylish from 'jshint-stylish';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import gulpif from 'gulp-if';
import templateCache from 'gulp-angular-templatecache';
import yargs from 'yargs';
import path from 'path';
import wrap from 'gulp-wrap';
import markdownToJson from 'gulp-markdown-to-json';
import marked from 'marked';
import gutil from 'gulp-util';
import useref from 'gulp-useref';

import { config } from './gulpfile.config.babel';

const argv = yargs.argv;

export function posts() {
	return gulp.src(config.posts.source)
		.pipe(plumber())
		.pipe(gutil.buffer())
		.pipe(markdownToJson(marked, 'posts.json'))
		.pipe(gulp.dest(config.destination + '/data'));
}

export function projects() {
	return gulp.src(config.projects.source)
		.pipe(plumber())
		.pipe(gutil.buffer())
		.pipe(markdownToJson(marked, 'projects.json'))
		.pipe(gulp.dest(config.destination + '/data'));
}

export function styles() {
	return gulp.src(config.styles.source)
		.pipe(plumber())
		.pipe(gulpif(!argv.prod, sourcemaps.init()))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: config.styles.browsers
		}))
		.pipe(gulpif(argv.prod, cssnano()))
		.pipe(gulpif(!argv.prod, sourcemaps.write('.')))
		.pipe(gulp.dest(config.destination))
		.pipe(browserSync.stream());
}

export function scripts() {
	return gulp.src(config.scripts.source)
		.pipe(plumber())
		.pipe(gulpif(!argv.prod, sourcemaps.init()))
		.pipe(wrap('(function(angular){\n\'use strict\';\n<%= contents %>})(window.angular);'))
		.pipe(concat('bundle.js'))
		.pipe(gulpif(config.scripts.babel.compile === true, babel(config.babel)))
		// .pipe(gulpif(argv.prod, uglify()))
		.pipe(gulpif(!argv.prod, sourcemaps.write('.')))
		.pipe(gulp.dest(config.destination));
}

export function modules() {
	return gulp.src(config.scripts.modules)
		.pipe(plumber())
		.pipe(gulpif(!argv.prod, sourcemaps.init()))
		.pipe(concat('vendor.js'))
		.pipe(gulpif(argv.prod, uglify()))
		.pipe(gulpif(!argv.prod, sourcemaps.write('.')))
		.pipe(gulp.dest(config.destination));
}

export function templates() {
	return gulp.src(config.scripts.templates.source)
		.pipe(templateCache({
			module: config.scripts.templates.moduleName,
			root: 'app',
			standalone: true,
			transformUrl: function (url) {
				return url.replace(path.dirname(url), '.');
			}
		}))
		.pipe(gulp.dest(config.destination));
}

export function lint() {
	return gulp.src(config.scripts.source)
		.pipe(plumber())
		.pipe(jshint(config.scripts.jshint))
		.pipe(jshint.reporter(stylish));
}

export function images() {
	return gulp.src(config.images.source)
		.pipe(plumber())
		.pipe(gulp.dest(config.destination + '/images'));
}

export function html() {
	return gulp.src(config.html.source)
		.pipe(gulpif(argv.prod, useref({
			searchPath: './dist'
		})))
		.pipe(gulp.dest(config.destination));
}

export function serve() {
	browserSync.init({
		port: config.browserSync.port,
		server: config.browserSync.server
	});

	gulp.watch(config.html.source, gulp.series(html, browserSync.reload));
	gulp.watch(config.posts.source, gulp.series(posts, browserSync.reload));
	gulp.watch(config.projects.source, gulp.series(projects, browserSync.reload));
	gulp.watch(config.styles.source, styles);
	gulp.watch(config.scripts.templates.source, gulp.series(templates, browserSync.reload));
	gulp.watch(config.scripts.source, gulp.series(scripts, browserSync.reload));
}

const clean = () => del([config.destination]);
export { clean };

const build = gulp.series(clean, gulp.parallel(posts, projects, styles, gulp.parallel(lint, scripts), modules, templates, images), html);
export { build };

export default serve;
