var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    sass         = require('gulp-sass'),
    pug          = require('gulp-pug'),
    notify       = require('gulp-notify'),
    babel        = require('gulp-babel');

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

gulp.task("babel",function(){
    return gulp.src('app/ES6/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }).on("error", notify.onError()))
        .pipe(gulp.dest('app/js'))
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

gulp.task("watch", ["browser-sync","sass","pug","babel"], function(){
   gulp.watch("app/sass/**/*.sass",['sass']);
   gulp.watch("app/pug/**/*.pug", ["pug"]);
   gulp.watch("app/ES6/**/*.js", ["babel"]);
   //gulp.watch("app/js/**/*.js", browserSync.reload)

});

gulp.task('default', ['watch']);