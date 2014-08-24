'use strict';

/**
 * @ngdoc function
 * @name whishlistApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the whishlistApp
 */
angular.module('whishlistApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
