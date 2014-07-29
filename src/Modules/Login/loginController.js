
angular.module('NammaApartment.login')
  .controller('LoginController', function ($scope, $rootScope, AUTH_EVENTS, AuthenticationService) {
	
  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function (credentials) {
    AuthenticationService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      //$scope.setCurrentUser(user);
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };

});