var tmi = tmi || {};

tmi.Splash = function Splash(params) {
  var self = this;

  // Cached DOM
  var $container = params.$container;
  var $preloader = $container.find(".image-loader");
  var $splashPlaceholder = $container.find(".splash-placeholder");
  var $splashPoster = $container.find(".splash-poster");

  var onHide = params.hideCallback;

  function preloadImage(imgSource) {
    var preloader = $.Deferred();
    var preloadImage = new Image();

    preloadImage.onload = function() {
      preloader.resolve();
    };

    preloadImage.src = imgSource;

    return preloader;
  }

  function animateSplashIn() {
    $splashPlaceholder.fadeOut(function() {
      $splashPoster.show();
      $splashPoster.addClass('animate-show');
    });
  }

  function animateSplashOut() {
    $splashPoster.removeClass('animate-show');

    setTimeout(function() {
      $container.slideUp(700);
    }, 500);
  }

  this.initialize = function initialize() {
    var imageLoaders = [
      preloadImage('../img/photos/home_bg.jpg')
    ];

    $.when.apply($, imageLoaders).then(function() {
      animateSplashIn();
    });

    this.setupEvents();
  };

  this.setupEvents = function setupEvents() {
    $container.on('click', '.down-arrow, .splash-poster', animateSplashOut);
  };
};

