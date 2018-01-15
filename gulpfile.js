var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');
    rigger = require('gulp-rigger');

var config = {
  'src': './src',
  'dest': './dist',
  'html': {
    'src': './src/*.html',
    'dest': './dist/'
  },

  'sass': {
    'dest': './dist/styles/',
    'src': './src/styles/*/*'
  },
  'js': {
    'src': [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      './src/js/*.js'
    ],
    'dest': './dist/js'
  },
  'img': {
    'dest': './dist/images/',
    'src': './src/images/*/*'
  }
};

gulp.task('copy:html', function () {
  return gulp.src(config.html.src)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest(config.html.dest));
});

gulp.task('minify:img', function () {
      return gulp.src(config.img.src)
          .pipe(imagemin())
          .pipe(gulp.dest(config.img.dest));
    }

);

gulp.task('copy:styles', function() {
	return gulp.src(config.saas.src)
			.pipe(gulp.dest(config.saas.dest));
});

gulp.task('default', function () {
    return gulp.src('src/styles')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('js:build', function () {
    gulp.src(config.js.src) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(uglify()) //Сожмем наш js
        .pipe(gulp.dest(config.js.dest)) //Выплюнем готовый файл в build
});

gulp.task('css:build', function () {
    gulp.src(config.sass.src) //Найдем наш main файл
        .pipe(gulp.dest(config.sass.dest)) //Выплюнем готовый файл в build
});


gulp.task('build',['copy:html', 'minify:img', 'js:build', 'css:build'], function () {});

gulp.task('watch', function () {
  gulp.watch([
    config.sass.path + '/**/*.scss',
    config.js.path + '/**/*.js',
    config.html.src
  ], ['build']);
});