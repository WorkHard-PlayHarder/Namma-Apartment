'use strict';

//define(['angular'], function (angular) {
	var app = angular.module('NammaApartment', []);

	app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "modules/home/home.html"
        })
        .when("/about", {
            templateUrl: "modules/home/about.html"
        })
        .otherwise({
            redirectTo: '/home'
        });
    }]);
//});
