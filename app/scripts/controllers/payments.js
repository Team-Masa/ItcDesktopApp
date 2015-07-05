'use strict';

/**
 * @ngdoc function
 * @name itechHackApp.controller:PaymentsCtrl
 * @description
 * # PaymentsCtrl
 * Controller of the itechHackApp
 */
angular.module('itechHackApp')
    .controller('PaymentsCtrl', function($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.goBack = function() {
            $location.path("/homepage");
        }
    });
