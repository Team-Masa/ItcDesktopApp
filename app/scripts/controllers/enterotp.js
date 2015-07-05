'use strict';

/**
 * @ngdoc function
 * @name itechHackApp.controller:EnterotpCtrl
 * @description
 * # EnterotpCtrl
 * Controller of the itechHackApp
 */
angular.module('itechHackApp')
    .controller('EnterotpCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.goBack = function() {
            window.history.back();
        }
    });
