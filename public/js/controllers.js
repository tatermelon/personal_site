var pageControllers = angular.module('pageControllers', []);

pageControllers.controller('aboutController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.message = 'yay about!';
  }]);

pageControllers.controller('contactController', ['$scope', '$http',
  function ($scope, $http) {

    $scope.message = 'yay contact!';
  }]);

pageControllers.controller('photosController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.message = 'yay photos!';
  }]);
