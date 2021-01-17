const numOfpopcorn = 91;
let popcorn = [];
let bucketHeight = $('.bucket').height();
let size = $('.popcorn').height() * 1.5;

class Popcorn {
  constructor(y, x, weight, index, time, allDone) {
    this.y = y;
    this.x = x;
    this.weight = weight;
    this.index = index;
    this.time = time;
    this.allDone = allDone;
  }

  draw = () => {
    $(`#${this.index}`).css({
      top: `${this.y}px`,
      left: `${this.x}px`,
      'animation-duration': `${this.time}s`,
    });
    $(window).on('resize', function () {
      this.x = 50 + Math.floor(Math.random() * (window.innerWidth - 155));
    });
  };

  motion = () => {
    this.y += this.weight;
    if (this.x > window.innerWidth / 2.8 && this.x < window.innerWidth / 1.6) {
      if (this.y > window.innerHeight - (bucketHeight + size)) {
        this.weight = 0;
        this.allDone = true;
        $(`#${this.index}`).css('z-index', '0');
        $(`#${this.index}`).addClass('paused');
        $(window).on('resize', function () {
          this.x = 50 + Math.floor(Math.random() * (window.innerWidth - 155));
        });
      }
    }
    if (this.y > window.innerHeight - size) {
      this.weight = 0;
      this.allDone = true;
      $(`#${this.index}`).addClass('paused');
      $(window).on('resize', function () {
        this.x = 50 + Math.floor(Math.random() * (window.innerWidth - 155));
      });
    }
  };
}

init = () => {
  popcorn = [];
  for (let i = 0; i < numOfpopcorn; i++) {
    let y = -200;
    let x = 50 + Math.floor(Math.random() * (window.innerWidth - 155));
    let weight = Math.floor(Math.random() * 15 + 8);
    let index = i;
    let time = Math.floor(Math.random() * 3 + 1);
    let allDone = false;
    popcorn.push(new Popcorn(y, x, weight, index, time, allDone));
  }
};

animate = () => {
  let int = 0;
  for (let i = 0; i < numOfpopcorn; i++) {
    popcorn[i].motion();
    popcorn[i].draw();
    // if (popcorn[i].allDone == true) {
    //   ++int;
    // }
    // if (int == numOfpopcorn) {
    //   return;
    // }
  }
  requestAnimationFrame(animate);
};

// for (let i = 0; i < 91; i++) {
//   $(`#${i}`).draggable({
//
//     start: (event, ui) => {},
//     stop: (event, ui) => {},
//   });
// }

init();
animate();

$(window).resize(function () {
  bucketHeight = $('.bucket').height();
  size = $('.popcorn').height() * 1.5;
  for (let i = 0; i < numOfpopcorn; i++) {
    $(`#${i}`).removeClass('paused');
    $(`#${i}`).css('z-index', '1');
  }
  init();
  // animate();
});
