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
      }
    imagemin: {
        dynamic: {
           files: [{
               expand: true,
               cwd: 'images/',
               src: ['https://images.pexels.com/photos/2988/pattern-triangles.jpg?h=350&auto=compress&cs=tinysrgb.{png,jpg,gif}'],
               dest: 'images/build/'
           }]
        }
    }
      watch: {
      scripts: {
          files: ['sass/main.sass'],
          tasks: ['sass'],
          options: {
              spawn: false,
          },
      } 
    }
    browserSync: {
      bsFiles: {
          src : 'css/main.css'
      },
      options: {
          server: {
              baseDir: "file:///C:/Users/b/Documents/Ania/programowanie/zadania%20domowe/GIT/index.html"
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
