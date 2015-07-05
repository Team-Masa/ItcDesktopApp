'use strict';

/**
 * @ngdoc function
 * @name itechHackApp.controller:PaysuccessCtrl
 * @description
 * # PaysuccessCtrl
 * Controller of the itechHackApp
 */
angular.module('itechHackApp')
    .controller('PaysuccessCtrl', function($scope, $timeout, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        // setTimeout(function() {
        //     console.log("asd");
        //     $location.path("/thankyou");
        // }, 500);
     $timeout(function () {
       console.log("asd");
       $location.path("/thankyou");
    }, 2000);
    });
