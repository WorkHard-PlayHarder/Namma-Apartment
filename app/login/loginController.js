(function() {
  "use strict";
  
  angular.module('NammaApartment.login')
    .controller('LoginController', function ($scope, $rootScope, AUTH_EVENTS, authenticationService) {
    
    $scope.credentials = {
      username: '',
      password: ''
    };

    $scope.form ={
      isInvalid:false
    }

    $scope.login = function (credentials) {
      $scope.form.invalid = false;
      authenticationService.login(credentials).then(function (user) {
        if(user){
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        }
        else{
          $scope.form.isInvalid = true;
        }
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    };
  });
    
}());