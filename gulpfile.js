/**
 * Created by BWY on 2017/10/11.
 */
var gulp = require('gulp');
var rjs = require("gulp-r");
const shell = require("gulp-shell");
const requirejs = require("requirejs");
var requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('test',()=>{
    return gulp.src('www/js/common.js')
        .pipe(
            requirejsOptimize({
                optimize: 'none',
                baseUrl: './www/js/lib',
                paths: {
                    app: '../app'
                },
                mainConfigFile: 'www/js/config.js',
                include: ['jquery',
                    'app/lib',
                    'app/controller/Base',
                    'app/model/Base'
                ]
            })
        )
        .pipe(gulp.dest('www-built-gulp/js'));
});

/*
gulp.task('test',()=>{
    // console.log(requirejs);
    return gulp.src('*.js')
        .pipe(
            shell(['node tools/r.js -o tools/build.js'])
        )
});
*/
/*
gulp.task('test',()=>{
    gulp.src("www/js/common.js")
    .pipe(rjs({
        baseUrl: './',
        mainConfigFile: './www/js/common.js',
        "optimize":'none'
    }))
    .pipe(gulp.dest("dist/scripts"));
});
*/
