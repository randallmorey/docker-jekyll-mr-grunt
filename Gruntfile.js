module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jekyll: {
      options: {
        src: '/src'
      },
      build: {
        options: {
          dest: '/src/_dist'
        }
      },
      serve: {
        options: {
          serve: true,
          dest: '/src/_serve',
          drafts: true,
          future: true
        }
      }
    },

    htmlmin: {
      options: {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        decodeEntities: true,
        removeComments: true,
        removeEmptyElements: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      },
      target: {
        files: [{
          expand: true,
          cwd: '/src/_dist',
          src: ['**/*.html'],
          dest: '/src/_dist'
        }]
      }
    },

    cssmin: {
      options: {
        level: {
          2: {
            all: true
          }
        }
      },
      target: {
        files: [{
          expand: true,
          cwd: '/src/_dist',
          src: ['**/*.css'],
          dest: '/src/_dist'
        }]
      }
    },

    uglify: {
      options: {
        mangle: true
      },
      target: {
        files: [{
          expand: true,
          cwd: '/src/_dist',
          src: ['**/*.js'],
          dest: '/src/_dist'
        }]
      }
    },

    validation: {
      options: {
        errorHTMLRootDir: '/src/w3c-errors',
        path: '/src/w3c-errors/validation-status.json',
        reportpath: '/src/w3c-errors/validation-report.json'
      },
      files: {
        src: '/src/_dist/**/*.html'
      }
    },

    accessibility: {
      options: {
        accessibilityLevel: 'WCAG2AAA'
      },
      test: {
        src: '/src/_dist/**/*.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-w3c-html-validation');
  grunt.loadNpmTasks('grunt-accessibility');

  // Default task(s).
  grunt.registerTask('serve', ['jekyll:serve']);
  grunt.registerTask('build', ['jekyll:build', 'htmlmin', 'cssmin', 'uglify']);
  grunt.registerTask('validate', ['validation', 'accessibility']);
  grunt.registerTask('default', ['build', 'validate']);

};
