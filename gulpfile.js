// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var uglify = require('gulp-uglify');
var gm = require('gulp-gm'); // GraphicsMagick
var inlineCss = require('gulp-inline-css');


// Minify JS for main pages and transfer to /dist
gulp.task('js-main', function() {
    return gulp.src('src/js/perfmatters.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Minify JS for pizza page
gulp.task('js-pizza', function() {
    return gulp.src('src/views/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/views/js'));
});

// Inline CSS into HTML files for main pages
gulp.task('inlineCSS-main', function() {
    return gulp.src('src/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('dist'));
});

// Copy across CSS for pizza page - no changes
gulp.task('copyCSS-pizza', function() {
    return gulp.src('src/views/css/*')
        .pipe(gulp.dest('dist/views/css'));
});

// Copy across HTML for pizza page - no changes
gulp.task('copyHTML-pizza', function() {
    return gulp.src('src/views/*.html')
        .pipe(gulp.dest('dist/views'));
});

// Copy across latest files for all areas (except imagery)
gulp.task('reset', function() {
    gulp.start('js-main', 'js-pizza', 'inlineCSS-main', 'copyCSS-pizza', 'copyHTML-pizza');
});

// Watch Files For Changes
gulp.task('watch', function() {
    // main HTML/CSS
    gulp.watch(['src/*.html', 'src/css/*'], ['inlineCSS-main']);
    // main JS
    gulp.watch(['src/js/*'], ['js-main']);
    // pizza HTML/CSS
    gulp.watch(['src/views/*.html', 'src/views/css/*'], ['copyCSS-pizza', 'copyHTML-pizza']);
    // pizza JS
    gulp.watch(['src/views/js/*'], ['js-pizza']);
});

// Copy and compress images for home page
gulp.task('copyImages-main', function () {
    gulp.src('src/img/*')
    .pipe(gm(function (gmfile) {
    gmfile.quality(80);
    return gmfile.compress('JPEG');
    }))

    .pipe(gulp.dest('dist/img'));
});

// Resize home page icons
gulp.task('resizeIcons', function () {

    gulp.src('dist/img/icon-*')
    .pipe(gm(function (gmfile) {
    return gmfile.geometry('100x62!');
    }))
    .pipe(gulp.dest('dist/img'));
});

// Copy and compress images for pizza page
gulp.task('copyImages-pizza', function () {
    gulp.src('src/views/images/*')
    .pipe(gm(function (gmfile) {
    return gmfile.quality(80);
    }))

    .pipe(gulp.dest('dist/views/images'));
});