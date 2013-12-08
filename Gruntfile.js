var LIVERELOAD_PORT = 35729;
var filesWatch = ['styles/{,*/}*.css', 'js/{,*/}*.js', 'tpl/{,*/}*.html', 'test/{,*/}*.js', 'index.html']
module.exports = function(grunt) {

	// load all grunt tasks matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		'bower-install': {
			target: {
				html: 'index.html',
				cssPattern: '<link href="{{filePath}}" rel="stylesheet">',
				jsPattern: '<script type="text/javascript" src="{{filePath}}"></script>'
			}
		},
		watch: {
			options: {
				livereload: true
			},
			files: filesWatch
		}
	});

	// Default task(s).
	// grunt.registerTask('default', ['bower-install']);
	grunt.registerTask('install', ['bower-install']);
	grunt.registerTask("default", ["watch"]);

};