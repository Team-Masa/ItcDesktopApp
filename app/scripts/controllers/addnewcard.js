'use strict';

/**
 * @ngdoc function
 * @name itechHackApp.controller:AddnewcardCtrl
 * @description
 * # AddnewcardCtrl
 * Controller of the itechHackApp
 */
angular.module('itechHackApp')
    .controller('AddnewcardCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.toppings = [{
            category: 'meat',
            name: 'Pepperoni'
        }, {
            category: 'meat',
            name: 'Sausage'
        }, {
            category: 'meat',
            name: 'Ground Beef'
        }, {
            category: 'meat',
            name: 'Bacon'
        }, {
            category: 'veg',
            name: 'Mushrooms'
        }, {
            category: 'veg',
            name: 'Onion'
        }, {
            category: 'veg',
            name: 'Green Pepper'
        }, {
            category: 'veg',
            name: 'Green Olives'
        }];
    });
