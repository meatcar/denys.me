var // Direction Indeces
    dirs = {
        right: 1,
        bottom: 0,
        top: 2,  // top and bottom indeces swapped
        left: 3
    };

/*
 * Returns a uniformly random number between min and max
 */
function rand(max) {
  return Math.floor(Math.random() * (max + 1));
}

function rand_point() {
  var x = rand(max),
      y = rand(max);
  if (x < y) {
    x = x/3;
  } else {
    y = y/3;
  }
  return {x: x, y: y};
}

/**
 * Resize the corner given the vertical orientation and element
 * (top, $('triangle'))
 */
function size_corner(dirs,  max, el) {
  var v = el.parentNode.classList.contains('top') ? 'top' : 'bottom',
      h = el.classList.contains('right') ? 'right' : 'left',
      width = [0, 0, 0, 0],
      point = rand_point(max);
  width[dirs[v]] = point.y + "px";
  width[dirs[h]] = point.x + "px";
  el.style.borderWidth = width.join(' ');
}



window.addEventListener('load', function (event) {
  feather.replace()
  document.querySelector('.content').style.display = 'block';

  // get max width out of css
  max = document.querySelector('.wrapper').getBoundingClientRect().width;
  max = parseInt(max, 10);
  document.querySelectorAll('.triangle').forEach(function (e) {
    size_corner(dirs, max, e);
  });
});
