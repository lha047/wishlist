(function (angular) {
  'use strict';
  angular.module('appServices', []);
  angular.module('appControllers', []);
  angular.module('appDirectives', []);

  var app = angular.module('wishListApp', 
    ['appServices', 'appControllers', 'appDirectives']);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/addwish', {
        templateUrl: 'views/addwish.html',
        controller: 'AddWishCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
}(angular));