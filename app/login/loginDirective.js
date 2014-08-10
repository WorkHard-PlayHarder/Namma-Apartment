(function() {
  "use strict";

  angular.module('NammaApartment.login')
  .directive('loginDialog', function (AUTH_EVENTS) {

    return {
      restrict: 'A',
      template: '<div ng-if="visible" ng-include="\'/modules/login/login.html\'">',
      link: function (scope) {
        var showDialog = function () {  
        scope.visible = true;     
          $('#loginForm').modal('show'); 
        },

        closeDialog = function(){
          scope.visible = false;
           $('#loginForm').modal('hide'); 
        };

        scope.visible = false;
        scope.$on(AUTH_EVENTS.notAuthenticated, showDialog);
        scope.$on(AUTH_EVENTS.sessionTimeout, showDialog);
        scope.$on(AUTH_EVENTS.loginSuccess, closeDialog);
      }
    };

  });

}());