'use strict';

// Setting up route
angular.module('core', ['uiGmapgoogle-maps', 'ngGeolocation']).config(['$stateProvider', '$urlRouterProvider', 'uiGmapGoogleMapApiProvider',
	function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});

	  uiGmapGoogleMapApiProvider.configure({
	   key: 'AIzaSyCM6TkCWq1HEpfXKjkAHMtSzhAD0KSLhZs',
	    v: '3.17',
	    libraries: 'weather,geometry,visualization'
	  });

	}
]);