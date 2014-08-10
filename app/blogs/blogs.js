(function() {
    "use strict";

	angular.module('NammaApartment.blogs',['ui.router'])
	.config(['$stateProvider', function($stateProvider){

		$stateProvider.state('blogs', {
			url:'/blogs',
			templateUrl:'blogs/blogs.html',
			controller:'blogsController'
		})
		.state('blogDetails', {
			url:'/blogDetails/{blogId}',
			templateUrl:'blogs/blogDetails.html',
			controller:'blogsController'
		});
	}]);

}());