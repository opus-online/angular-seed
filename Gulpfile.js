const gulp = require('gulp');
const extractTranslate = require('gulp-angular-translate-extractor');

gulp.task('extract', () => {
    const i18nsrc = './src/app/**/*.*';
    const i18ndest = './www/languages';
    return gulp.src(i18nsrc)
        .pipe(extractTranslate({
            defaultLang: 'et',
            lang: ['et'],
            dest: i18ndest,
            safeMode: false,
            stringifyOptions: true
        }))
        .pipe(gulp.dest(i18ndest));
});
