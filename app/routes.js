(function() {
    "use strict";

    define(['angular', 'app'], function(angular, app) {
        return app.config(['$routeProvider',
            function($routeProvider) {
                $routeProvider.when("/home", {
                    templateUrl: "home/home.html"
                })
                    .when("/about", {
                        templateUrl: "about/about.html"
                    })
                    .otherwise({
                        redirectTo: 'home'
                    });
            }
        ]);
    });
}());