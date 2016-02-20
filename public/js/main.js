var mainApp = angular.module('mainApp', [
  'ngRoute',
  'pageControllers'
]);

mainApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'views/partials/about.html',
        controller: 'aboutController'
      })

      .when('/contact', {
        templateUrl: 'views/partials/contact.html',
        controller: 'contactController'
      })

      .otherwise({
        redirectTo: '/'
      });
  }]);

var tmi = tmi || {};

$(function() {
  tmi.splash = new tmi.Splash({
    $container: $('#splash')
  });

  tmi.splash.initialize();
});