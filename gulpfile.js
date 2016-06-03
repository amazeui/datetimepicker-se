'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var docUtil = require('amazeui-doc-util');
var runSequence = require('run-sequence');
var tasks = require('amazeui-gulp-tasks');

var config = {
  pkg: require('./package.json'),

  // release task
  ghPages: {
    src: 'dist/**/*'
  },

  // remote branch
  git: {
    branch: 'master'
  },

  browserSync: {
    notify: false,
    server: ['dist', 'node_modules'],
    logPrefix: 'AMP'
  },

  // watch files and reload browserSync
  bsWatches: 'dist/**/*',

  less: {
    src: './less/amazeui.datetimepicker-se.less',
    autoPrefixer: docUtil.autoprefixerBrowsers,
    dist: './dist',
    watches: './less/**/*.less'
  },

  // docs:md
  md: {
    src: ['README.md', 'docs/*.md'],
    data: {
      pluginTitle: 'Amaze UI DatetimePicker SE',
      pluginDesc: '支持秒的日期时间选择器',
      buttons: 'amazeui/datetimepicker-se',
      head: '<link rel="stylesheet" href="../amazeui.datetimepicker-se.css"/>'
    },
    rename: function(file) {
      file.basename = file.basename.toLowerCase();
      if (file.basename === 'readme') {
        file.basename = 'index';
      }
      file.extname = '.html';
    },
    dist: function(file) {
      if (file.relative === 'index.html') {
        return 'dist'
      }
      return 'dist/docs';
    }
  },

  // browserify
  browserify: {
    bundleOptions: {
      entries: './lib/amazeui.datetimepicker-se.js',
      cache: {},
      packageCache: {}
    },
    filename: 'amazeui.datetimepicker-se.js',
    transforms: [['browserify-shim', {global: true}]],
    plugins: [],
    dist: 'dist'
  },

  // clean path
  clean: 'dist'
};

// init tasks
tasks(gulp, config);

gulp.task('copy', function() {
  return gulp.src('moment-with-locales.min.js', {
    cwd: 'node_modules/moment/min'
  })
    .pipe(gulp.dest('dist/docs'));
});

gulp.task('build', function(cb) {
  runSequence('clean', ['browserify', 'less', 'markdown', 'copy'], cb);
});

gulp.task('dev', ['build', 'server']);
