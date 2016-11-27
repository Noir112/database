var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    sass         = require('gulp-sass');
    pug          = require('gulp-pug');
    notify       = require('gulp-notify')
gulp.task('sass',function(){
   return gulp.src("app/sass/**/*.sass")
       .pipe(sass().on("error", notify.onError()))
       .pipe(gulp.dest('app/css'))
       .pipe(browserSync.reload({stream: true}))
});

gulp.task('pug',function(){
    return gulp.src("app/pug/**/*.pug")
        .pipe(pug().on("error", notify.onError()))
        .pipe(gulp.dest('app/html'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app/html'
        },
        notify: false
    });
});

gulp.task("watch", ["browser-sync","sass","pug"], function(){
   gulp.watch("app/sass/**/*.sass",['sass']);
   gulp.watch("app/pug/**/*.pug", ["pug"]);
   gulp.watch("app/js/**/*.js", browserSync.reload)

});

gulp.task('default', ['watch']);