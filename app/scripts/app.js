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
      .when('/showCurrentBill/:id', {
        templateUrl: 'views/showcurrentbill.html',
        controller: 'ShowcurrentbillCtrl'
      })
      .when('/selectPayMethod', {
        templateUrl: 'views/selectpaymethod.html',
        controller: 'SelectpaymethodCtrl'
      })
      .when('/enterOtp', {
        templateUrl: 'views/enterotp.html',
        controller: 'EnterotpCtrl'
      })
      .when('/paySuccess', {
        templateUrl: 'views/paysuccess.html',
        controller: 'PaysuccessCtrl'
      })
      .when('/thankyou', {
        templateUrl: 'views/thankyou.html',
        controller: 'ThankyouCtrl'
      })
      .otherwise({
        redirectTo: '/homepage'
      });
  });
