(function() {
    "use strict";

	angular.module('NammaApartment.blogs')
	.factory('blogsService',['$http', function($http){
		var blogsService ={};

		blogsService.getPosts = function(){

		},

		blogsService.getPostById = function(postId){

		},

		blogsService.getPostByTags = function(tagId){

		},

		blogsService.getPostByCategory = function(categoryId){
			
		};
	}]);
	
}());