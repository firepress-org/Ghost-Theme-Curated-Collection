const gulp         = require('gulp'),
      gutil        = require('gulp-util'),

      sass         = require('gulp-sass'),
      postcss      = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssnano      = require('cssnano'),

      imagemin     = require('gulp-imagemin'),
      pngquant     = require('imagemin-pngquant'),

      notifier     = require('node-notifier'),

      source       = {
          styles     : 'src/sass/styles.scss',
          stylesWatch: 'src/sass/**/*',

          favicon     : 'src/favicon/**/*',
          faviconWatch: 'src/favicon/**/*',

          images     : 'src/img/**/*',
          imagesWatch: 'src/img/**/*'
      };


gulp.task('styles', () => {
    return gulp.src(source.styles)
               .pipe(sass().on('error', sass.logError))
               .pipe(postcss([
                   autoprefixer,
                   cssnano({discardComments: {removeAll: true}})
               ]))
               .pipe(gulp.dest('assets/css'))
               .on('end', () => notifier.notify({
                   title  : 'Finished Task',
                   message: 'Sass was made readable for the Browser'
               }));
});

gulp.task('copy:favicon', () => {
    return gulp.src(source.favicon)
               .pipe(gulp.dest('assets/favicon'))
               .on('end', () => notifier.notify({
                   title  : 'Finished Task',
                   message: 'Favicons are published'
               }));
});

gulp.task('copy', ['copy:favicon']);

gulp.task('images', () => {
    return gulp.src(source.images)
               .pipe(imagemin({
                   progressive: true,
                   svgoPlugins: [
                       {removeViewBox: false},
                       {cleanupIDs: false}
                   ],
                   use        : [pngquant()]
               }))
               .pipe(gulp.dest('assets/img'))
               .on('end', () => notifier.notify({
                   title  : 'Finished Task',
                   message: 'Images are compiled'
               }));
});

gulp.task('watch', ['styles', 'copy', 'images'], () => {
    //Watch Styles
    gulp.watch([source.stylesWatch], ['styles']);

    //Watch copy files
    gulp.watch(source.faviconWatch, ['copy:favicon']);

    //Watch images
    gulp.watch(source.imagesWatch, ['images']);
});


gulp.task('default', ['copy', 'styles', 'images']);
