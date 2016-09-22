/**
 * Created by Ashish on 9/20/2016.
 */
var gulp= require('gulp'),mon=require('gulp-nodemon');

gulp.task('default',function () {
    mon({
        script:'server.js',ext:'js'
    }).on('restart',function () {
        console.log("restarting");
    })
});
