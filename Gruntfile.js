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
    }
  });

  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('serve', ['jekyll:serve']);
  grunt.registerTask('build', ['jekyll:build', 'htmlmin', 'cssmin', 'uglify']);
  grunt.registerTask('default', ['build']);

};