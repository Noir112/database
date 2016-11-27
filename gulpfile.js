var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass');
    jade        = require('gulp-jade');

gulp.task('sass',function(){
   return gulp.src("app/sass/**/*.sass")
       .pipe(sass())
       .pipe(gulp.dest('app/css'))
       .pipe(brouserSync.reload({stream: true}))
});

gulp.task('jade',function(){
    return gulp.src("app/jade/**/*.jade")
        .pipe(sass())
        .pipe(gulp.dest('app/html'))
        .pipe(brouserSync.reload({stream: true}))
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: "app"
        },
        notify: false
    });
});

gulp.task("watch", ["browserSync","sass","jade"], function(){
   gulp.watch("app/sass/**/*.sass",['sass']);
   gulp.watch("app/jade/**/*.jade", ["jade"]);
   gulp.watch("app/js/**/*.js", browserSync.reload)

});