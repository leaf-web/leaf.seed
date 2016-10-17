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
        sass: {
	        options: {
	            style: 'compressed'
	        },
	        dist: {
	            files: {
	                'app/build/app.min.css': 'app/styles/app.scss'
	            }
	        }
	    },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }	       		
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('default', ['concat', 'jshint', 'uglify', 'sass']);
    grunt.registerTask('test', ['concat', 'jshint', 'uglify', 'sass', 'karma']);
}