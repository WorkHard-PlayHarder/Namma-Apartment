(function() {
    "use strict";
    var app = angular.module('NammaApartment',['ui.router','NammaApartment.login','NammaApartment.security','NammaApartment.blogs']);

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');
        
        $stateProvider.state("home", {
            url: '/home',
            templateUrl: "home/home.html",
            alloweAnanymous:true           
        })
        .state("about", {
            url: '/about',
            templateUrl: "about/about.html",
            alloweAnanymous:true 
        });
    }])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push([
           '$injector',
            function ($injector) {
              return $injector.get('authenticationInterceptor');
            }
        ]);
    })
    .run(function ($rootScope,$state, AUTH_EVENTS, authenticationService) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        var stateData = toState || {};

        if(stateData.alloweAnanymous){          
            return;
        }

        if (!authenticationService.isAuthorized(['admin'])) {
            event.preventDefault();

            if (authenticationService.isAuthenticated()) {
               $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);            
                return;
              } 
              else {
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);            
                return;
              }
            }

            $state.go(toState.name, toParams, {notify: false}).then(function() {            
                $rootScope.$broadcast('$stateChangeSuccess', toState, toParams, fromState, fromParams);
            });

        });
    });

}());