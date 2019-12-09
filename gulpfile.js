const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const del = require('del');
const autoprefix = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const rename  = require('gulp-rename');





const config = {
  server: {
      baseDir: "./dist"
  },
  tunnel: false,
  host: 'localhost',
  port: 3333
};





gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
})


gulp.task('scripts', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
})

gulp.task('clearDist', function () {
  return del(['dist/*'])
});

gulp.task('css', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('style.css'))
    .pipe(autoprefix({
      overrideBrowserslist: ['last 5 versions'],
      cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
});


// gulp.task('img', function () {
//   return gulp.src('src/img/**/*.*')
//     .pipe(gulp.dest('dist/img/'));
// });
// gulp.task('fonts', function () {
//   return gulp.src('src/fonts/**/*.*')
//     .pipe(gulp.dest('dist/fonts/'));
// });




gulp.task('watch', function () {
  browserSync.init(config);
  gulp.watch('src/scss/*.scss', gulp.series('css'));
  gulp.watch('src/js/*.js', gulp.series('scripts'));
  gulp.watch('src/*.html',  gulp.series('html')).on('change', browserSync.reload);
});


gulp.task('build',
  gulp.series(
    'clearDist',
    gulp.parallel('html', 'scripts', 'css')
  )
);


gulp.task('default', gulp.series('build', 'watch'));


