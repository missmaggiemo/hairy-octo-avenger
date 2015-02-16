'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Menus',
	function($scope, Menus) {
		$scope.menu = Menus.getMenu('topbar');
	}
]);