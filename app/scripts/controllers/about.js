'use strict';

/**
 * @ngdoc function
 * @name itechHackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the itechHackApp
 */
angular.module('itechHackApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
