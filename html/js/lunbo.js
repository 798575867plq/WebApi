var index = 0;
var images = document.querySelectorAll('.images > div');
var dots = document.querySelectorAll('.dots .dot');
var timer;

function changeImage(toindex,stop) {
  images = document.querySelectorAll('.images > div');
  dots = document.querySelectorAll('.dots .dot');
  if (toindex < 0) {
    toindex = 0;
    return;
  }
  if (toindex >= images.length) {
    toindex = images.length - 1;
    return;
  }
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
    dots[i].classList.remove('active');
  }
  images[toindex].classList.add('active');
  dots[toindex].classList.add('active');
  if (stop) {
    clearInterval(timer);
    timer = null;
  }
  index = toindex;
  console.log(index);
}

timer = setInterval(function() {
  index = (index + 1) % images.length;
  // changeImage(index);
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
    dots[i].classList.remove('active');
  }
  images[index].classList.add('active');
  dots[index].classList.add('active');
}, 1000);
