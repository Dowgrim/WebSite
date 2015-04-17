'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/Project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/Experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl'
      })
      .when('/Passion', {
        templateUrl: 'views/passion.html',
        controller: 'PassionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
