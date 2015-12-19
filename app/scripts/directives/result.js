'use strict';

 /**
 * @ngdoc function
 * @name dashboardApp.directive:result
 * @description
 * # result
 * directive of the dashboardApp
 * @author Khrystyna Mosolova 
 */
angular.module('dashboardApp')
  .directive('result', function() {
    return {
      templateUrl: 'views/partials/result.html',
      restrict: 'E',
      link: function() {}
    };
  });