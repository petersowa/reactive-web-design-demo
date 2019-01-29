'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const browserSync = require('browser-sync').create()

sass.compiler = require('node-sass')

gulp.task('sass', function() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
})

gulp.task('styles', function() {
  return gulp
    .src('src/css/**/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('typescript', function() {
  var tsResult = gulp.src('src/**/*.ts').pipe(
    ts({
      noImplicitAny: true,
      out: 'output.js',
      module: 'system',
    })
  )
  return tsResult.js.pipe(gulp.dest('src/'))
})

gulp.task('scripts', function() {
  return gulp
    .src('src/**/*.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

gulp.task('html', function() {
  return gulp.src('src/*.html').pipe(gulp.dest('dist'))
})

gulp.task('live-server', function() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
    notify: false,
  })
  gulp.watch('./dist/**/*').on('change', browserSync.reload)
})

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'))
  gulp.watch('src/css/**/*.css', gulp.series('styles'))
  gulp.watch('src/**/*.ts', gulp.series('typescript'))
  gulp.watch('src/**/*.js', gulp.series('scripts'))
  gulp.watch('src/*.html', gulp.series('html'))
})

gulp.task(
  'default',
  gulp.parallel('sass', 'typescript', 'scripts', 'html', 'live-server', 'watch')
)
