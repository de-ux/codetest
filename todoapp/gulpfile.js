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

gulp.task('js', function(){
  return gulp.src('assets/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
});

gulp.task('styles', function(){
  return gulp.src('assets/scss/style.scss')
  .pipe(sass())
  .pipe(prefix('last 2 versions'))
  .pipe(concat('style.css'))
  .pipe(minifyCSS())
  .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/style.scss', ['styles']);
  gulp.watch('assets/js/app.js', ['js']);
});

gulp.task('default', function() {
  gulp.run('browser-sync');
  gulp.run('styles');
  gulp.run('js');
  gulp.run('watch');
});
