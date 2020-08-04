var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');


//html task
gulp.task('html', async function () {
    return gulp.src('project/index.html')
        .pipe(gulp.dest('dist'))
});

// css task
gulp.task('css', async function () {
    return gulp.src('project/css/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }).on('erorr', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
})

//js task
gulp.task('js', async function () {
    return gulp.src('project/js/*.js')

        .pipe(concat('main.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});


// watch task
gulp.task('watch', async function () {
    livereload.listen();
    gulp.watch('project/index.html', gulp.series('html'));
    gulp.watch('project/css/sass/**/*.scss', gulp.series('css'));
    gulp.watch('project/js/*.js', gulp.series('js'));
});

//defaullt task
gulp.task('default', gulp.series('watch'));