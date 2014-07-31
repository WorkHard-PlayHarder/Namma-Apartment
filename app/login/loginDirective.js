(function() {
  "use strict";

  angular.module('NammaApartment.login')
    .directive('loginDialog', function(AUTH_EVENTS) {

      return {
        restrict: 'A',
        template: '<div ng-if="visible" ng-include="login.html">',
        link: function(scope) {
          var showDialog = function() {
            scope.visible = true;
          };

          scope.visible = false;
          scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
          scope.$on(AUTH_EVENTS.sessionTimeout, showDialog);
        }
      };

    });
}());