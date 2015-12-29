// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var gm = require('gulp-gm');
var inlineCss = require('gulp-inline-css');

// Minify JS for main page
gulp.task('js-main', function() {
    return gulp.src('js/perfmatters.js')
        .pipe(rename('perfmatters.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

// Minify JS for pizza page
gulp.task('js-pizza', function() {
    return gulp.src('views/js/main.js')
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

// Combine all concatenation/minification tasks for all pages
gulp.task('minify-all', function() {
    gulp.start('js-main', 'js-pizza', 'css-main', 'css-pizza');
});

gulp.task('inlineCSS', function() {
    return gulp.src('dev_html/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest(''));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['js/perfmatters.js', 'views/js/main.js', 'css/print.css', 'css/style.css', 'views/css/bootstrap-grid.css', 'views/css/style.css'], ['minify-all']);
    gulp.watch(['dev_html/*'], ['inlineCSS']);
});

// Resize images for home page
gulp.task('resize-home', function () {
    gulp.src('img/originals/icon-*')
    .pipe(gm(function (gmfile) {
    gmfile.quality(70);
    gmfile.compress('JPEG');
	return gmfile.geometry('100x62!');
    }))

    .pipe(gulp.dest('img/icons'));
});