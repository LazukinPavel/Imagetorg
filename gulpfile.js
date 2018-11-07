var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync'),
	del = require('del');
	
//converting sass into css
gulp.task('sass', function(){ 
	return gulp.src('src/assets/css/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(sourcemaps.write()) 
		.pipe(gulp.dest('src/assets/css'))
		.pipe(browserSync.reload({stream: true}));
});

//minifying js
gulp.task('minifyScripts', function() {
	return gulp.src('src/assets/js/*.js')
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('src/assets/js'))
		.pipe(browserSync.reload({stream: true}));
});

//image optimization
gulp.task('img', function() {
	return gulp.src('src/assets/img/**/*')
		.pipe(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
	}))
});

//browser sync
gulp.task('browser-sync', function () {
  var files = [
	'src/**/*.html',
	'src/assets/css/**/*.scss',
	'src/assets/js/main.min.js'
  ];
  
  browserSync.init(files, {
	server: {
	  baseDir: 'src'
	}
  });
});

//watch
gulp.task('watch', ['browser-sync', 'sass', 'minifyScripts'], function() {
	gulp.watch('src/assets/css/**/*.scss', ['sass']);
	gulp.watch('src/assets/js/main.js', ['minifyScripts']);
});

//cleaning build folder
gulp.task('clean', function() {
	del('docs',
		'src/assets/css/main.css',
		'src/assets/js/main.min.js');
});

//build task
gulp.task('build', ['sass', 'minifyScripts', 'img'], function() {
	gulp.src(['src/assets/css/main.css', 'src/assets/js/main.min.js',
			'src/*.html', 'src/assets/img/**', 'src/assets/fonts/**', 'src/assets/data/**'],
			{ base: './src'})
			.pipe(gulp.dest('docs'));
});

//setting default task
gulp.task('default', ['clean'], function() {
	gulp.start('build');
});