'use strict';

/**
 * @ngdoc function
 * @name itechHackApp.controller:AddnewcardCtrl
 * @description
 * # AddnewcardCtrl
 * Controller of the itechHackApp
 */
angular.module('itechHackApp')
    .controller('AddnewcardCtrl', function($scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.goBack = function() {
           window.history.back();
        }
    });
