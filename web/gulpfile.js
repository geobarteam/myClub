/// <binding BeforeBuild='clean' AfterBuild='script, min' Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    gulpRimraf = require("gulp-rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    ts = require("gulp-typescript"),
    sourcemaps = require('gulp-sourcemaps');

var webroot = "./wwwroot/";

var paths = {
    js: webroot + "js/**/*.js",
    minJs: webroot + "js/**/*.min.js",
    css: webroot + "css/**/*.css",
    minCss: webroot + "css/**/*.min.css",
    concatJsDest: webroot + "js/app.min.js",
    concatCssDest: webroot + "css/site.min.css",
    typescriptRoot: './scripts/',
    typescriptOut: webroot + 'js/',
    typescriptJs: './scripts/**/*.js',
    concatTsFileName: 'app.js'
};

var tsProject = ts.createProject(paths.typescriptRoot + 'tsConfig.json'); // use tsconfig.json

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean:tsout", function (cb) {
    rimraf(paths.typescriptOut + paths.concatTsFileName, cb);
});

gulp.task("clean:scriptjs",
    function () {
        return gulp.src(paths.typescriptJs, { read: false })
          .pipe(gulpRimraf());
    });


gulp.task("clean", ["clean:js", "clean:css", "clean:tsout", "clean:scriptjs"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], {
        base: "."
    })
      .pipe(concat(paths.concatJsDest))
      .pipe(uglify())
      .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
      .pipe(concat(paths.concatCssDest))
      .pipe(cssmin())
      .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("tsbuild", function () {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject)); // use tsconfig.json

    return tsResult.js
        .pipe(concat(paths.concatTsFileName))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.typescriptOut));
});

gulp.task("watch:tsbuild", ['tsbuild'], function () {
    gulp.watch(paths.typescriptRoot + '**/*.ts', ['tbbuild']);
});


