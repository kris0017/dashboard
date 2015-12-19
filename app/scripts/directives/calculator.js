'use strict';

 /**
 * @ngdoc function
 * @name dashboardApp.directive:calculator
 * @description
 * # calculator
 * directive of the dashboardApp
 * @author Khrystyna Mosolova 
 */
angular.module('dashboardApp')
  .directive('calculator', function() {
    return {
      templateUrl: 'views/partials/calculator.html',
      restrict: 'E',
      link: function($scope) {
        var lastResult, lastNumber = '', previousAction;
        $scope.calcInput = '';

        $scope.onDigestBtnClick = function($event, value) {
          $event.preventDefault();
          if ($scope.resultIsReady) {
            $scope.hideResult();
            $scope.calcInput = '';
          }
          $scope.calcInput += value;
          lastNumber += value;
        };

        $scope.onActionBtnClick = function($event, value) {
          $event.preventDefault();
          

          if (lastNumber.length === 0) {
            $scope.calcInput = $scope.calcInput.substring(0, $scope.calcInput.length - 1);
            $scope.calcInput += value;
            previousAction = value;
            return;
          }

          $scope.calcInput += value;

          if (lastResult) {
            count(previousAction);
            $scope.calcInput = lastResult + value;
          } else {
            lastResult = Number(lastNumber);
          }
          previousAction = value;
          lastNumber = '';
        };

        function count(action) {
          switch(action) {
            case '*':
              lastResult *= Number(lastNumber);
              break;
            case '/':
              lastResult /= Number(lastNumber);
              break;
            case '-':
              lastResult -= Number(lastNumber);
              break;
            case '+':
              lastResult += Number(lastNumber);
              break;
          }
        }

        $scope.clearInput = function($event) {
          $event.preventDefault();
          $scope.calcInput = '';
          clearValues();
        };

        $scope.countResult = function($event) {
          $event.preventDefault();
          count(previousAction);
          $scope.calcInput = lastResult;
          $scope.showResult(lastResult);
          clearValues();
        }; 

        function clearValues() {
          previousAction = '';
          lastResult = undefined;
          lastNumber = '';
        }

      }
    };
  });