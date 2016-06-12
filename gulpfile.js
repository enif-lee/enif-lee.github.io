var gulp = require('gulp');
var install = require('gulp-install');
var clean = require('gulp-clean');
var connect = require('gulp-connect');



/******************************************************************
 * Task Difinitions
 ******************************************************************/

// clean
gulp.task('clean', function () {
	return gulp.src('./dist', {read : false}).pipe(clean());
});
gulp.task('clean-ext', function () {
	return gulp.src('./dist/libs/', {read : false}).pipe(clean());
});

gulp.task('ext', ['clean-ext'], function () {
	return gulp.src(['./public/client/bower_components/*/dist/*.min.js', './public/client/bower_components/*/dist/*.min.css',
					 './public/client/libs/**/*.js', './public/client/libs/**/*.css'])
		.pipe(gulp.dest('./dist/libs/'));
});

//TODO js minify unglify -> Exception Throws..?
gulp.task('js', function () {
	return gulp.src('./public/client/js/**/*.js')
		.pipe(gulp.dest('./dist/js/'));
});

//TODO css minify
gulp.task('css', function () {
	return gulp.src('./public/client/css/**/*.css')
		.pipe(gulp.dest('./dist/css/'));
});

//TODO html minify
gulp.task('html', function () {
	return gulp.src('./public/client/html/**/*.html')
		.pipe(gulp.dest('./dist/html/'));
});
gulp.task('img', function () {
	return gulp.src('./public/client/img/**/*')
		.pipe(gulp.dest('./dist/img/'));
})


// Install dependencies task
gulp.task('install', function () {
	return gulp.src(['./package.json', './tsd.json', './public/client/bower.json'])
		.pipe(install());
}); 


gulp.task('connect', function() {
  connect.server({
	  root : 'dist',
	  livereload : true,
	  port: 3001,
  });
});

gulp.task('liveHtml', function () {
	 gulp.src('./dist/html/**/*.html').pipe(connect.reload());
});
gulp.task('liveJs', function () {
	 gulp.src('./dist/js/**/*.js').pipe(connect.reload());
});
gulp.task('liveCss', function () {
	 gulp.src('./dist/css/**/*.css').pipe(connect.reload());
});

gulp.task('liveReload', function () {
	gulp.watch('./dist/html/**/*.html', ['liveHtml']);
	gulp.watch('./dist/js/**/*.js', ['liveJs']);
	gulp.watch('./dist/css/**/*.css',  ['liveCss']);
});

gulp.task('frontWeb', ['connect', 'liveReload'])

// Watch modified files 
gulp.task('watch', ['deploy'], function () {
	gulp.watch('./public/client/js/**/*.js', ['js']);
	gulp.watch('./public/client/html/**/*.html', ['html']);
	gulp.watch('./public/client/css/**/*.css',  ['css']);
});


/******************************************************************
 * Build Difinitions
 ******************************************************************/
gulp.task('install', ['install']);


gulp.task('deploy', ['clean'], function () {
	return gulp.start(['html', 'css', 'js', 'img', 'ext']);

})

gulp.task('development', ['deploy'], function () {
	
});

gulp.task('test', ['deploy'], function () {
	
});

gulp.task('product', ['deploy'], function () {
	
});