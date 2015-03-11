module.exports = function(){

	grunt.initConfig({		
		meta:{
			//add this header to all the files when minified
			header: "Namma apartment project, created at <%= grunt.template.today() %>"
		},
		min{
			//for the time being minify only the security related files
			dist:{
				src:["<header>","security/*.js"],
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