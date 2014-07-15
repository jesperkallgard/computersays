'use strict';

/**
 * @ngdoc function
 * @name computersaysApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the computersaysApp
 */
angular.module('computersaysApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
