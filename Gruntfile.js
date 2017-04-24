module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['images/kubas.jpg'],
          dest: 'images/build/'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['sass/main.sass'],
        tasks: ['sass'],
        options: {
           spawn: false,
        },
      } 
    },
    browserSync: {
      bsFiles: {
        src : ['css/main.css', 'index.html']

      },
      options: {
		  watchTask: true,
        server: {
           baseDir: "./"
        }
      }
    }
  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};
