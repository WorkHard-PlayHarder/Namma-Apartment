'use strict';

define(['angular', 'app'], function(angular, app) {

	return app.config(['$routeProvider', function($routeProvider) {
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

});
