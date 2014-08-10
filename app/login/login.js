(function() {
	"use strict";

	angular.module('NammaApartment.login',['ui.router','NammaApartment.security'])
  	.config(['$stateProvider', function ($stateProvider) {
	  $stateProvider.state('login', {
	    url:'/login',
	    templateUrl: 'login/login.html',
	    controller: 'LoginController',
	    alloweAnanymous:true
	  })
	  .state('signup', {
	    url:'/signup',
	    templateUrl: 'login/register.html',
	    controller: 'LoginController',
	    alloweAnanymous:true
	  });

	}]);

}());