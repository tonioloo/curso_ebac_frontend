const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagem(){
  return gulp.src('./src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./build/images'));
}

function compilaSass(){
  return gulp.src('./src/styles/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(sourcemaps.write('../maps'))
  .pipe(gulp.dest('build/styles'));
}

function compilaJavaScript() {
  return gulp.src('./src/scripts/*.js')
  .pipe(uglify())
  .pipe(obfuscate())
  .pipe(gulp.dest('./build/scripts'));
}



exports.sass = compilaSass;
exports.javascript = compilaJavaScript;
exports.images = comprimeImagem;