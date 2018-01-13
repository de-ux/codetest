var gulp      = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concat    = require('gulp-concat');

uglify        = require('gulp-uglify');
prefix        = require('gulp-autoprefixer');
sass          = require('gulp-sass');
browserSync   = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('js-app', function(){
  return gulp.src('app.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
});

gulp.task('js-controllers', function(){
  return gulp.src('controllers/*.js')
    .pipe(uglify())
    .pipe(concat('controllers.js'))
    .pipe(gulp.dest('public/js/'))
});

gulp.task('styles', function(){
  return gulp.src('assets/scss/**/*.scss')
  .pipe(sass())
  .pipe(prefix('last 2 versions'))
  .pipe(concat('style.css'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', ['styles']);
  gulp.watch('app.js', ['js-app']);
});

gulp.task('default', function() {
  gulp.run('browser-sync');
  gulp.run('styles');
  gulp.run('js-app');
  gulp.run('js-controllers');
  gulp.run('watch');
});
