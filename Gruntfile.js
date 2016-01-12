module.exports = function(grunt) {
  grunt.initConfig({
  	
    sass: {
      app: {       
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      },
      options: {
        sourceMap: true, 
        outputStyle: 'nested', 
        imagePath: "../",
      }
    },

    watch: {
      sass: {
        files: ['css/{,*/}*.{scss,sass}'],
        tasks: ['sass']
      },
      options: {
        livereload: true,
        spawn: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);

};