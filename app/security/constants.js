(function() {
	"use strict";
	var app = angular.module('NammaApartment.security', [])
		.constant('AUTH_EVENTS', {
			loginSuccess: 'auth-login-success',
			loginFailed: 'auth-login-failed',
			logoutSuccess: 'auth-logout-success',
			sessionTimeout: 'auth-session-timeout',
			notAuthenticated: 'auth-not-authenticated',
			notAuthorized: 'auth-not-authorized'
		})
		.constant('USER_ROLES', {
			all: '*',
			admin: 'admin',
			guest: 'guest'
		});
}());