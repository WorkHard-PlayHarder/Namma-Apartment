(function() {
	"use strict";
	angular.module('NammaApartment')
	  .controller('ApplicationController', function ($scope,$rootScope,$state, USER_ROLES, AUTH_EVENTS, authenticationService, $location) {
		
		$scope.currentUser = null;
		$scope.userRoles = USER_ROLES;
		$scope.isAuthorized = authenticationService.isAuthorized;

	 	$scope.loggedIn = function(){
	 		return authenticationService.isAuthenticated();
	 	};

	    $scope.login = function(){
		 	 $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
		};

		 $scope.logOff = function(){
		 	$scope.currentUser = null;
		 	authenticationService.logOff();
		 	$state.go('home');
		};
		 
		$scope.setCurrentUser = function (user) {
		    $scope.currentUser = user;
		};

		$scope.$on(AUTH_EVENTS.loginSuccess, function(user) {
	    	$scope.setCurrentUser(user);
	    	$state.go('home');
	    });

	    $scope.$on(AUTH_EVENTS.notAuthenticated, function() {
	    	$state.go('login');
	    });

	    $scope.$on(AUTH_EVENTS.notAuthorized, function() {
	    	$state.go('login');
	    });

	});
}());