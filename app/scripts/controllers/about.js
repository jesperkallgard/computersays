'use strict';

/**
 * @ngdoc function
 * @name computersaysApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the computersaysApp
 */
angular.module('computersaysApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
