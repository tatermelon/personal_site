var tmi = tmi || {};

tmi.Home = function Home() {
  this.initialize = function initialize() {

  };

  this.slideIn = function slideIn() {

  };
};

$(function() {
  tmi.home = new tmi.Home();

  tmi.splash = new tmi.Splash({
    $container: $('body'),
    hideCallback: tmi.home.slideIn
  });

  tmi.splash.initialize();
});