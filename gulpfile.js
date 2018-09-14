var gulp 			= require('gulp');
var concat 			= require('gulp-concat');
var rename 			= require('gulp-rename');
var uglify 			= require('gulp-uglify');
var runSequence 	= require('run-sequence');
var watch 			= require('gulp-watch');
var sass 			= require('gulp-sass');
var browserSync 	= require('browser-sync');

/* tasks */
gulp.task('devjs', function ()
{
	return gulp.src('src/js/*.js')
		.pipe(concat('gulptutorial.js'))
		.pipe(gulp.dest('src'));
});


gulp.task('depsjs', function ()
{
	return gulp.src(['bower_components/modernizr/modernizr.js',
		'bower_components/jquery/dist/jquery.js',
		'bower_components/bootstrap/dist/js/bootstrap.js'])
		.pipe(concat('deps.js'))
		.pipe(gulp.dest('src'));
});

gulp.task('depsDist', function ()
{
	return gulp.src(['src/deps.js'])
		.pipe(rename('deps.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('bin'));
});

gulp.task('sass', function ()
{
	return gulp.src(['src/css/style.scss'])
		.pipe(sass())
		.on('error', console.error.bind(console))
		.pipe(gulp.dest('src/css'));
});

gulp.task('sass-watch', ['sass'], browserSync.reload);

gulp.task('watch', function ()
{
	browserSync({
		server: {
			baseDir: 'src/'
		}
	});
	gulp.watch('src/js/*.js', ['devjs']);
	gulp.watch('src/css/*.scss', ['sass-watch']);
});

gulp.task('default', function (callback)
{
	runSequence('depsjs', 'depsDist', callback);
});