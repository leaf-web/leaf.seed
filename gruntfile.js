module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'app/app.js',
					'app/views/*.js'
                ],
                dest: 'app/build/app.full.js'
            }
        },
        jshint: {
            files: ['app/build/app.full.js']
        },
        uglify: {
            js: {
                src: 'app/build/app.full.js',
                dest: 'app/build/app.min.js'
            }
        },
        cssmin: {
            css: {
                src: 'app/styles/app.css',
                dest: 'app/build/app.min.css'
            }
   		}
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'jshint', 'uglify', 'cssmin']);
}