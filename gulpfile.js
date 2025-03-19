const { gulp, src, dest, watch, parallel, series } = require('gulp');
let browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const { Version } = require('sass');
const autoprefixer = require('gulp-autoprefixer');
const nunjucksRender = require('gulp-nunjucks-render');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const del = require('del');


function nunjucks() {
    return src('app/*.njk')
    .pipe(nunjucksRender())
    .pipe(dest('app'))
    .pipe(browserSync.stream());
} 

function browser() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
}

function styles() {
    return src('./app/scss/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      //.pipe(concat('style.min.css'))
      .pipe(rename({
        suffix: ".min"
      }))
      .pipe(autoprefixer({
            overrideBrowserlist: ['last 10 versions'],
            grid: true
      }))
      .pipe(dest('./app/css'))
      .pipe(browserSync.stream());
  };

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/@fancyapps/ui/dist/fancybox/fancybox.umd.js',
        'app/js/main.js',
        'node_modules/rateyo/src/jquery.rateyo.js',
        'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
        'node_modules/jquery-form-styler/dist/jquery.formstyler.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}



function watching() {
    watch(['./app/**/*.scss'], styles);
    watch(['./app/*.njk'], nunjucks);
    watch(['./app/js/**/*.js', '!./app/js/main.min.js'], scripts);
    watch(['./app/**/*.html']).on('change', browserSync.reload);
}

function build() {
    return src([
        'app/**/*.html',
        'app/css/style.min.css',
        'app/js/main.min.js',
    ], {base: 'app'})
    .pipe(dest('dist'))
}

function cleanDist() {
    return del('dist')
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.cleanDist = cleanDist;
exports.nunjucks = nunjucks;
exports.build = series(cleanDist, build);

exports.default = parallel(nunjucks, styles, scripts, browser, watching);