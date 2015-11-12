// var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'static/scss',
					src: ['style.scss'],
					dest: 'static/css',
					ext: '.css'
				}]
			}
		},
		cssmin: {
			options: {
				noAdvanced: true,
				compatibility: "ie8"
			},
			combine: {
				files: {
					'public_html/static/css/style.min.css': [
						"static/css/normalize.min.css",
						"static/css/slick.css",
						"static/css/style.css",
					]
				}
			}
		},
		uglify: {
			js: {
				options: {
					// mangle: false,
					// compress: false,
					// beautify: true
				},
				files: {
					'public_html/static/js/main.min.js': [
						'static/js/lib/jquery-1.11.3.min.js',
						'static/js/lib/slick.min.js',
						'static/js/script.js'
					]
				}
			}
		},
		includes: {
			// reference 
			// https://github.com/vanetix/grunt-includes 
			// for details
			files: {
				src: ['html/index.html'],
				dest: 'public_html',
				flatten: true,
				cwd: '.'
			}
		},		
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					useShortDoctype: true,
					minifyJS: true,
					minifyCSS: true,
					removeCommentsFromCDATA: true
				},
				files: [{
					expand: true,
					src: ['public_html/*.html'],
					destination: 'public_html/',
					ext: '.html'
				}]
			}
		},



		watch: {
			css: {
				files: ['static/**/*.scss'],
				tasks: ['sass', 'cssmin'] //
			},
			html: {
				files: ["html/**/*.html","!html/min/*.*"],
				tasks: ["includes", "htmlmin"]
			},
			js: {
				files: ['static/**/*.js', '!application/static/**/main.min.js'],
				tasks: ['uglify']
			},

		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-includes');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('default', ['watch']);
};