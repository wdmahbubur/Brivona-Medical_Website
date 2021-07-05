/*var myCarousel = document.querySelector('#doctor-carousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})*/
$(document).ready(function () {


  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#go-to-top').fadeIn();
    } else {
      $('#go-to-top').fadeOut();
    }
  });

  //Click event to scroll to top
  $('#go-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 100);
    return false;
  });

  $('#doctor-carousel').slick({
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

  $("#image-comparison").twentytwenty();

});
var a = 0;
$(window).scroll(function () {

  var oTop = $('.counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  };

});