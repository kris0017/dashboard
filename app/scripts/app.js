'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/chart', {
        templateUrl: 'views/chart.html',
        controller: 'pagesCtrl'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'pagesCtrl'
      })
      .when('/calculator', {
        templateUrl: 'views/calculatorWidget.html',
        controller: 'pagesCtrl'
      })
      .when('/result', {
        templateUrl: 'views/resultWidget.html',
        controller: 'pagesCtrl'
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  });
