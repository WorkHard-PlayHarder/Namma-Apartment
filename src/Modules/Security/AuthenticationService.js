
angular.module('NammaApartment.security')
  .factory('AuthenticationService', function ($http, Session) {
  var authenticationService = {};
 
  authenticationService.login = function (credentials) {
    return $http
      .get('/users.json', credentials)
      .then(function (res) {
        Session.create(res.data.id, res.data.user.id, res.data.user.role);
        return res.user;
      });
  };
 
  authenticationService.isAuthenticated = function () {
    return !!Session.userId;
  };
 
  authenticationService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authenticationService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
  };
 
  return authenticationService;
});
