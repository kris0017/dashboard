'use strict';

/**
 * @ngdoc function
 * @name tempApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tempApp
 * @author Khrystyna Mosolova 
 */
angular.module('dashboardApp').controller('mainCtrl', [ '$scope', function ($scope) {
    
    $scope.resultIsReady = false;
    $scope.result = '';

    $scope.showResult = function(dataToShow) {
      $scope.resultIsReady = true;
      $scope.result = dataToShow;
    };

    $scope.hideResult = function() {
      $scope.resultIsReady = false;
    };

    /** Code for beautiful chart **/
    var width = 360;
    var height = 360;
    var radius = Math.min(width, height) / 2;

    var color = d3.scale.category20b();
    var dataset = [
      { label: 'Abulia', count: 10 }, 
      { label: 'Betelgeuse', count: 20 },
      { label: 'Cantaloupe', count: 30 },
      { label: 'Dijkstra', count: 40 }
    ];

    var svg = d3.select('#chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

    var arc = d3.svg.arc().outerRadius(radius);

    var pie = d3.layout.pie()
      .value(function(d) { return d.count; })
      .sort(null);

    svg.selectAll('path')
      .data(pie(dataset))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d) { 
        return color(d.data.label);
      });


}]);
