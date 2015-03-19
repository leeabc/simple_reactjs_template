var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
var fs = require('fs');
var webserver = require('gulp-webserver');

//live reload when doc change.
var live = livereload();
livereload.listen();

var paths = {
    main        : './app/js/boot.js',
    less        : './app/assets/less/Main.less',
    destDir     : 'dist',
    destCSS     : 'dist/assets/css',
    destJS      : 'dist/js'
};

// bundle all js !
gulp.task('bundle-js', function(){

    //打包 JSX
    return browserify({
        entries: [ paths.main ]
    })

    .transform( 'reactify' )
    .bundle({debug: true})
    .on('error', function(err){
        console.error(err);
        this.end();
        gulp.src('').pipe( notify('! Bundle Failed !') )
    })

    .pipe( source('bundle.js') )
    .pipe( gulp.dest( paths.destJS ) )

});

//do less !
gulp.task('less', function(){
    gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest( paths.destCSS ))
});

//copy to dist
gulp.task('copy', function(){
    //copy html
    gulp.src([ 'app/index.html' ])
    .pipe( gulp.dest(paths.destDir) );
});

//start web server
gulp.task('webserver', function(){
    gulp.src(paths.destDir)
    .pipe(webserver({
        livereload: true,
        directoryListing: false,
        open: true
    }));
});

//Watch job
gulp.task('watch', function() {
    gulp.watch( 'app/**/*', ['bundle-js', 'less', 'refresh', 'copy'] );
});

//livereload refresh
gulp.task( 'refresh', function(){
    setTimeout(function(){
      live.changed('');
    }, 500)
})


gulp.task('default', ['dev']);

gulp.task('dev',['bundle-js', 'less', 'watch', 'copy', 'webserver']);
