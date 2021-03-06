var mainApp = angular.module('mainApp', [
  'ngRoute',
  'pageControllers',
  'flickrCarouselController'
]);

mainApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider

      .when('/about', {
        templateUrl: 'views/partials/about.html',
        controller: 'aboutController'
      })

      .when('/contact', {
        templateUrl: 'views/partials/contact.html',
        controller: 'contactController'
      })

      .when('/photos', {
        templateUrl: 'views/partials/photos.html',
        controller: 'photosController'
      })

      .otherwise({
        redirectTo: '/about'
      });
  }]);

var tmi = tmi || {};

$(function() {
  tmi.splash = new tmi.Splash({
    $container: $('#splash')
  });

  tmi.splash.initialize();
});