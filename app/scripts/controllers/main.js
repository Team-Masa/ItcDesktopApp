'use strict';

/**
 * @ngdoc function
 * @name itechHackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itechHackApp
 */
angular.module('itechHackApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
