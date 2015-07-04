'use strict';

/**
 * @ngdoc function
 * @name itechHackApp.controller:ShowcurrentbillCtrl
 * @description
 * # ShowcurrentbillCtrl
 * Controller of the itechHackApp
 */
angular.module('itechHackApp')
    .controller('ShowcurrentbillCtrl', function($scope, $routeParams, $http) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        var billId = $routeParams.id;
        $scope.item_lists = "";
        $http({
            method: 'GET',
            url: 'http://172.16.1.72:1337/user'
        }).success(function(data) {
            data.forEach(function(bill) {
                // angular.forEach(, function(bb){
                if (bill.bills) {
                    bill.bills.forEach(function(item_list) {
                        if (item_list && item_list.id == billId) {
                            // console.log(item_list);
                            $scope.item_lists = item_list.items;
                            var sum = 0;
                            item_list.items.forEach(function(item){
                              if (item)
                              sum += item.price;
                            })
                            $scope.item_lists.sum = sum;
                        }
                    })
                }

                // })
                // })

            })
                            console.log($scope.item_lists);

        })
    });
