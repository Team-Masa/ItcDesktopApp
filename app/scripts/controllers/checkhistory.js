'use strict';

/**
 * @ngdoc function
 * @name itechHackApp.controller:CheckhistoryCtrl
 * @description
 * # CheckhistoryCtrl
 * Controller of the itechHackApp
 */
angular.module('itechHackApp')
    .controller('CheckhistoryCtrl', function($scope, userId, $http, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.goBack = function(){
            $location.path("/homepage");
        }
        $scope.getDate = function(d)
        {
            var dateObj = (new Date(d).getDate()).toString() +"/"+ (new Date(d).getMonth()).toString() +"/"+ (new Date(d).getFullYear()).toString();
            return dateObj;
        };
        $scope.getTime = function(d)
        {
            var timeObj = (new Date(d).getHours()).toString() +":"+ (new Date(d).getMinutes()).toString() +":"+ (new Date(d).getSeconds()).toString();
            return timeObj;
        };
        console.log(userId);
        var bills = new Array();
        $http({
            method: 'GET',
            url: 'http://172.16.1.72:1337/user?userId=' + userId
        }).success(function(data) {
            $scope.bills = data[0].bills;
            console.log(data[0].bills);

        })
    });
