var Layout = function(params) {
  var self = this;

  // Cached DOM
  var $container = params.$container;
  var $preloader = $container.find(".image-loader");
  var $homePlaceholder = $container.find(".home-placeholder");
  var $homePoster = $container.find(".home-poster");

  var preloadImage = function(imgSource) {
    var preloader = $.Deferred();
    var preloadImage = new Image();

    preloadImage.onload = function() {
      preloader.resolve();
    };

    preloadImage.src = imgSource;

    return preloader;
  };

  var animateHomeIn = function() {
    $homePlaceholder.fadeOut(function() {
      $homePoster.show();
      $homePoster.css({
        height: '15rem'
      });
      setTimeout(function() {
        $homePoster.find('.poster-name').css({
          top: '4.5rem'
        });
        $homePoster.find('.poster-subtitle').css({
          top: '7.7rem'
        });
        setTimeout(function() {
          $homePoster.addClass('indicator-visible');
        }, 400)
      }, 400);
    });
  };

  var animateHomeOut = function() {
      $homePoster.show();
      $homePoster.css({
        height: '15rem'
      });
      setTimeout(function() {
        $homePoster.find('.poster-name').css({
          top: '4.5rem'
        });
        $homePoster.find('.poster-subtitle').css({
          top: '7.7rem'
        });
        setTimeout(function() {
          $homePoster.addClass('indicator-visible');
        }, 400)
      }, 400);
  };

  this.initialize = function() {
    var imageLoaders = [
      preloadImage('./img/photos/home_bg.jpg')
    ];

    $.when.apply($, imageLoaders).then(function() {
      animateHomeIn();
    });
  };
};


$(function() {
  var layout = new Layout({
    $container: $('body')
  });

  layout.initialize();
});