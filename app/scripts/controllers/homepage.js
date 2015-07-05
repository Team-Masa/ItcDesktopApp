'use strict';

/**
 * @ngdoc function
 * @name itechHackApp.controller:HomepageCtrl
 * @description
 * # HomepageCtrl
 * Controller of the itechHackApp
 */
angular.module('itechHackApp')
  .controller('HomepageCtrl', function ($scope, $mdSidenav, $mdDialog) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  }
  });
