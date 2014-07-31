(function() {
    "use strict";

    //define(['angular'], function (angular) {
    var app = angular.module('NammaApartment', ['NammaApartment.login', 'NammaApartment.security']);

    app.config(['$routeProvider',
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
    ])
        .config(function($httpProvider) {
            $httpProvider.interceptors.push([
                '$injector',
                function($injector) {
                    return $injector.get('authenticationInterceptor');
                }
            ]);
        })
        .run(function($rootScope, AUTH_EVENTS, authenticationService) {
            $rootScope.$on('$locationChangeStart', function(event, next) {

                //var authorizedRoles = next.data.authorizedRoles;

                //if (!AuthService.isAuthorized(authorizedRoles)) {
                //  event.preventDefault();
                //  if (AuthService.isAuthenticated()) {
                // user is not allowed
                //    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                //  } else {
                // user is not logged in
                //    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                //  }
                //}
            });
        });
    //});

}());