var Layout = function(params) {
  var windowHeight = 0;

  var $container = params.$container;
  var $topBanner = $container.find('#top-banner');
  
  /* Assumes initially positioned at top of page */
  var setCentered = function(accessor) {
    $(accessor).each(function() {
      var elementHeight = $(this).height();
      var margin = (windowHeight / 2) - (elementHeight / 2);
      
      $(this).css('margin-top', margin + 'px');
    });
  };

  var handleScroll = function(e) {
    var scrollOffset = $container.scrollTop();
    console.log('hi');

    $topBanner.css({
      'background-position': '0 ' + scrollOffset + 'px'
    });
  };
  
  return {
    render: function() {
      windowHeight = $(window).height();
      setCentered('.vertically-centered');
    },
    setupEvents: function() {
      $(window).scroll(handleScroll);
    }
  };
};


$(function() {
  var layout = Layout({
    $container: $('body')
  });
  layout.render();
  layout.setupEvents();
  
  $(window).resize(layout.render);
});