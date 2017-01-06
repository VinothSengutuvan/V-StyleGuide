module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: [
             // 'js/action.js',
             'js/tooltip.js',
             'js/datepicker.min.js',
             'js/slimscroll.min.js',
             // add new js file here
            ],
        dest: 'minjs/commonjavascript.js'
      }
    } // uglify ends. 
    ,cssmin: {
      web: {
        options: {
          report:'min'
        },
        src: [
              'css/font-awesome.min.css',
              'css/datepicker.min.css',
              'css/hint.css',
              'css/main.css',
              // add new css file here
              ],
        dest: 'mincss/commonstylesheet.css'
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Default task(s).
  grunt.registerTask('default', ['uglify','cssmin']);

};