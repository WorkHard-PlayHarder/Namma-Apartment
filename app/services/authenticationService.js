(function() {
  "use strict";
  angular.module('NammaApartment.security')
    .factory('authenticationService', function ($http, session) {
      var authenticationService = {};
     
      authenticationService.login = function (credentials) {
        return $http
          .get('/users.json', credentials)
          .then(function (res) {            
            session.create(res.data.id, res.data.user.id, res.data.user.role);
            return res.user;
          });
      };

      authenticationService.logOff = function () {
          session.destroy();
      };
     
      authenticationService.isAuthenticated = function () {
        return !!session.userId;
      };
     
      authenticationService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
          authorizedRoles = [authorizedRoles];
        }
        return (authenticationService.isAuthenticated() &&
          authorizedRoles.indexOf(session.userRole) !== -1);
      };
     
      return authenticationService;
  });

}());