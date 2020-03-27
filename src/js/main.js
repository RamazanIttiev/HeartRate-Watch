$(document).ready(function () {
  $('.slider__inner').slick({
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.svg"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });
});