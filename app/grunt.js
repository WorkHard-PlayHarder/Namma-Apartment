'use strict';

module.exports = function(grunt){

	grunt.initConfig({		
		meta:{
			//add this header to all the files when minified
			banner: "Namma apartment project, created at <%= grunt.template.today() %>"
		},
		min{
			//for the time being minify only the security related files
			dist:{
				src:["<banner>","security/*.js"],
				dest:"security.min.js"
			}
		},
		watch:{
			//watch these files for any changes and run the task
			files:["security/*.js"],
			tasks:["min"]
		}
	});

	grunt.registerTask("default", [ "min"]);
};