'use strict';

/**
 * @ngdoc function
 * @name itechHackApp.controller:CheckhistoryCtrl
 * @description
 * # CheckhistoryCtrl
 * Controller of the itechHackApp
 */
angular.module('itechHackApp')
    .controller('CheckhistoryCtrl', function($scope, userId, $http) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        console.log(userId);
        var bills = new Array();
        $http({
            method: 'GET',
            url: 'http://172.16.1.72:1337/user?userId=' + userId
        }).success(function(data) {
            // data[0].bills.forEach(function(items) {
            //     var sum = 0;
            //     if (items) {
            //         items.items.forEach(function(ob) {
            //             if (ob) {
            //                 sum += ob["price"];
            //             }
            //         })

            //     };
            //     data[0].bills.push({
            //         "sum": sum
            //     });
            //     // console.log(items);

            // })
            $scope.bills = data[0].bills;
            console.log(data[0].bills);

        })
    });
