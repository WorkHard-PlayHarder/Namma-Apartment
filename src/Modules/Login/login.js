
  angular.module('NammaApartment.login',['NammaApartment.security'])
  .config(function ($routeProvider) {

  $routeProvider.when('/login',{
    templateUrl: 'modules/login/login.html',
    controller: 'LoginController',
    resolve: { }
  });

});