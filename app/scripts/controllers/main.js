'use strict';

/**
 * @ngdoc function
 * @name whishlistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the whishlistApp
 */
angular.module('whishlistApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
