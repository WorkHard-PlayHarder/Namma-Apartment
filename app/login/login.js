(function() {
	"use strict";
	angular.module('NammaApartment.login', ['NammaApartment.security'])
		.config(function($routeProvider) {

			$routeProvider.when('/login', {
				templateUrl: 'login/login.html',
				controller: 'loginController',
				resolve: {}
			});

		});
}());