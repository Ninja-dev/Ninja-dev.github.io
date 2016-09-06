/*$('.header-nav-menu-list').slicknav({

});*/

$(function(){
    $('.header-menu').slicknav({
        prependTo: '.mobile-menu'
    });

    $('.slicknav_nav').addClass('clearfix');

    $('.slicknav_btn').append('<i class="fa fa-bars" aria-hidden="true"></i>')
});


$(document).ready(function() {
    $('.slider-wrap').slick({
        dots: false,
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,
         responsive: [
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    },
             {
      breakpoint: 320,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
});




