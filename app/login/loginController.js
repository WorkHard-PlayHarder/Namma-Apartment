(function() {
  "use strict";
  angular.module('NammaApartment.login')
    .controller('loginController', function($scope, $rootScope, AUTH_EVENTS, authenticationService) {

      $scope.credentials = {
        username: '',
        password: ''
      };

      $scope.login = function(credentials) {
        authenticationService.login(credentials).then(function(user) {
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          //$scope.setCurrentUser(user);
        }, function() {
          $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
      };

    });
}());