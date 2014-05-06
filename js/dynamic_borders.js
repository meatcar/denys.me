(function (app) {
  app($, _, window, undefined);
}(function ($, _, window){

  /*
   * Returns a uniformly random number between min and max
   */
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function rand_point() {
    var x = rand(min, max),
        y = rand(min, max);
    if (x < y) {
      x = x/2;
    } else {
      y = y/2;
    }
    return {x: x, y: y};
  }

  /**
   * Resize the corner given the vertical orientation and element
   * (top, $('triangle'))
   */
  function size_corner(dirs, min, max, el) {
    var $el = $(el),
        v = $el.parent().hasClass('top') ? 'top' : 'bottom',
        h = $el.hasClass('right') ? 'right' : 'left',
        width = [0, 0, 0, 0],
        point = rand_point();
    width[dirs[v]] = point.y + "px";
    width[dirs[h]] = point.x + "px";
    $el.css('border-width', width.join(' '));
  }


  var min = 0,
      max,
      // Direction Indeces
      dirs = {
          right: 1,
          bottom: 0,
          top: 2,  // top and bottom indeces swapped
          left: 3
      };

  $(document).ready(function () {
    // get max width out of css
    max = $('.wrapper').first().css('width');
    max = parseInt(max, 10);
    _.each($('.triangle'), _.partial(size_corner, dirs, min, max));
  });

  $(document).load(function (){
    $('.content').show();
  });

}));
