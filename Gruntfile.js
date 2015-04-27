module.exports = function(grunt){

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		watch: {
			less: {
				files: ['less/*.less'],
				tasks: ['less:development']
			}
		},
		less: {
			development: {
				files: {
		          "css/styles.css": "less/index.less"
		        },
		        options: {
		          sourceMap: true,
		          sourceMapURL: 'styles.css.map'
		        }
			}
		}
	});

	grunt.registerTask('default', [
		'less:development',
		'watch'
	]);
}