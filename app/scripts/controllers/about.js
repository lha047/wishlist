(function(appControllers){
	'use strict';

  appControllers.controller('AboutCtrl', ['$scope', '$location', 
  	function ($scope, $location) {
  	$scope.addWish = function() {
  		$location.path(addWish);
  	};  
  });
})(angular.module('appControllers'));