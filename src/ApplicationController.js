

angular.module('NammaApartment')
  .controller('ApplicationController', function ($scope, USER_ROLES, AUTH_EVENTS, AuthenticationService, $location) {
	$scope.currentUser = null;
	$scope.userRoles = USER_ROLES;
	$scope.isAuthorized = AuthenticationService.isAuthorized;
 	$scope.loggedIn = function(){
 		return $scope.currentUser != null;
 	};

    $scope.login = function(){
	 	$location.path('/login');
	};

	 $scope.logOff = function(){
	 	$scope.currentUser = null;
	};
	 
	$scope.setCurrentUser = function (user) {
	    $scope.currentUser = user;
	};

	$scope.$on(AUTH_EVENTS.loginSuccess,function() {
    	$scope.currentUser = {};
    });

});