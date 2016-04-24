var flickrCarouselController = angular.module('flickrCarouselController', []);


flickrCarouselController.controller('flickrCarouselController', ['$scope', '$http',
  function ($scope, $http, Photos) {

    var FLICKR_KEY = '77f950374ed50bc566a875b2dfb1011a';
    var FLICKR_ID = "21381280@N08";
    var ALBUM_ID = '72157664718577442';
    var page = 0;

    $scope.photos = [];

    $http.jsonp("https://api.flickr.com/services/rest/" +
      "?method=flickr.photosets.getPhotos" + 
      "&api_key=" + FLICKR_KEY +
      "&per_page=40&page=" + page +
      "&user_id=" + FLICKR_ID +
      "&photoset_id=" + ALBUM_ID +
      "&format=json" +
      "&callback=?"
    );

    window.jsonFlickrApi = function(response) {
      var photos = response.photoset.photo;

      $.each(photos, function(index,photo) {
        $scope.photos.push({
          url: "http://farm" + photo.farm + ".static.flickr.com/"
                  + photo.server + "/" + photo.id + "_" + photo.secret 
                  + "_c.jpg",
          alt: photo.title
        });
      });
    };

    $scope.message = 'yay photos!';
  }]);

