'use strict';

define(['angular', 'app'], function(angular, app) {

	return app.config(['$routeProvider', function($routeProvider) {
  	  $routeProvider.otherwise({redirectTo: '/'});
	}]);

});
