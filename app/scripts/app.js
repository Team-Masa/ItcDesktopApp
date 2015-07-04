'use strict';

/**
 * @ngdoc overview
 * @name itechHackApp
 * @description
 * # itechHackApp
 *
 * Main module of the application.
 */
angular
  .module('itechHackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ]).
  factory('userId', function(){
    var userId = '1';
    return userId;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/homepage', {
        templateUrl: 'views/homepage.html',
        controller: 'HomepageCtrl'
      })
      .when('/payments', {
        templateUrl: 'views/payments.html',
        controller: 'PaymentsCtrl'
      })
      .when('/addNewCard', {
        templateUrl: 'views/addnewcard.html',
        controller: 'AddnewcardCtrl'
      })
      .when('/checkHistory', {
        templateUrl: 'views/checkhistory.html',
        controller: 'CheckhistoryCtrl'
      })
      .otherwise({
        redirectTo: '/homepage'
      });
  });
