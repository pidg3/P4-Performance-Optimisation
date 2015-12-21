// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var gm = require('gulp-gm');


// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Minify JS for main page
gulp.task('js-main', function() {
    return gulp.src('js/*.js')
        .pipe(rename('perfmatters.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

// Minify JS for pizza page
gulp.task('js-pizza', function() {
    return gulp.src('views/js/*.js')
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('views/js'));
});

// Concatenate & Minify CSS for main page
gulp.task('css-main', function() {
    return gulp.src(['css/print.css', 'css/style.css'])
	.pipe(concat('all.css'))
        .pipe(gulp.dest('css'))
        .pipe(rename('all.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify CSS for pizza page
gulp.task('css-pizza', function() {
    return gulp.src(['views/css/bootstrap-grid.css', 'views/css/style.css'])
	.pipe(concat('all.css'))
        .pipe(gulp.dest('views/css'))
        .pipe(rename('all.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('views/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
});

// Resize images for home page
gulp.task('resize-home', function () {
    gulp.src('img/originals/icon-*')
    .pipe(gm(function (gmfile) {
	return gmfile.geometry('100x62!');
    }))
 
    .pipe(gulp.dest('img/icons'));
});


