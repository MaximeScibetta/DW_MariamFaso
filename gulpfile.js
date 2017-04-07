/* desktop/MariamFaso
 *
 * /gulfile.js - Gulp Tasks
 *
 * coded by maxime@flatLand !
 * started at 07/04/2017
 */
var gulp = require( "gulp" ),
    image = require( "gulp-image" ),
    pug = require( "gulp-pug" ),
    sass = require( "gulp-sass" ),
    autoprefixer = require( "gulp-autoprefixer" ),
    csso = require( "gulp-csso" ), 
    babel = require( "gulp-babel" ),
    htmlmin = require( "gulp-htmlmin" ),
    sourcemaps = require( "gulp-sourcemaps" ),
    browserSync = require('browser-sync').create();

// --- Task for images
gulp.task( "images", function() {
    gulp.src( "src/images/**" )
        .pipe( image() )
        .pipe( gulp.dest( "assets/images" ) );
} );

// --- Task for styles 
gulp.task( "css", function() {
    gulp.src( "src/sass/**/*.scss" )
        .pipe( sass().on( "error", sass.logError ) )
        .pipe( autoprefixer() )
        .pipe( csso() )
        .pipe( gulp.dest( "assets/css" ) )
        .pipe(browserSync.stream());
} );

// --- Task for pug
// gulp.task( "html", function() {
//     gulp.src( "src/pug/**/*.pug" )
//         .pipe( pug( {} ) )
//         .pipe( gulp.dest( "." ) );
// } );

// --- Task for js
gulp.task( "js", function() {
    gulp.src( "src/js/**/*.js" )
        .pipe( sourcemaps.init() )
        .pipe( babel() )
        .on( "error", function( oError ) {
            console.error( oError );
            this.emit( "end" );
        } )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest( "assets/js" ) );
} );

// --- Task for html
gulp.task('html', function() {
    gulp.src('src/html/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("assets/html"));
});
gulp.task('htmli', function() {
    gulp.src('src/html/index/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("assets"));
});

// --- Task for browser-sync
gulp.task('serve', ['css'], function() {

    browserSync.init({
        server: "./assets"
    });
    
});

// --- Watch tasks
gulp.task( "watch", function() {
    gulp.watch( "src/images/**", [ "images" ] );
    gulp.watch( "src/sass/**/*.scss", [ "css" ] );
    gulp.watch( "src/html/**/*.html", [ "html" ] );
    gulp.watch( "src/html/**/index.html", [ "htmli" ] );
    gulp.watch( "src/js/**/*.js", [ "js" ] );
    gulp.watch("src/html/**/*.html").on('change', browserSync.reload);
} );

// --- Aliases
gulp.task( "default", [ "images", "css", "html", "htmli", "js", "serve" ] );
gulp.task( "work", [ "default", "watch" ] );