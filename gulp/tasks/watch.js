var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', [
    'nunjucks:watch',
    'sprite:svg:watch',
    'sprite:png:watch',
    'svgo:watch',
    'sass:watch'
]);
