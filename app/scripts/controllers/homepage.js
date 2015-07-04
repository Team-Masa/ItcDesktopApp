'use strict';

/**
 * @ngdoc function
 * @name itechHackApp.controller:HomepageCtrl
 * @description
 * # HomepageCtrl
 * Controller of the itechHackApp
 */
angular.module('itechHackApp')
  .controller('HomepageCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
