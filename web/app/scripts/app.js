'use strict';

/**
 * @ngdoc overview
 * @name script2Bit
 * @description
 * # script2Bit
 *
 * Main module of the application.
 */
var script2Bit = angular
  .module('script2Bit', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'slick',
    'ngMaterial',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'UserLoginCtrl'
      })
      .when('/scene', {
        templateUrl: 'views/scene.html',
        controller: 'SceneCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$httpProvider',
      function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
      }
  ])
  .config(['$logProvider',function($logProvider){
    $logProvider.debugEnabled(true);
  }])
  .run(['$rootScope',function($rootScope) {
    $rootScope.loggedIn = false;
  }]);;
