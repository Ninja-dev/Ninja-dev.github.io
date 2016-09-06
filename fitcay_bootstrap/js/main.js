
$(document).ready(function() {
    $('.article-slider-wrap').slick({
        dots: true,
        infinite: false,
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
          breakpoint: 1550,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false
          }
        },
           {
          breakpoint: 1399,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false
          }
        },
                 {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false
          }
        },

                 {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false
          }
        },
             {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false
          }
        }
  ]
});
});


$(document).ready(function() {
    $('.slider-centre-wrap').slick({
        dots: true,
        infinite: true,
        boolean: false,
        lazyLoad: 'ondemand',
        slidesToShow: 1

    });
});


$(document).ready(function() {
    $('.quote-slider-wrap').slick({
        dots: true,
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1
});
});

$(document).ready(function() {
    $(function () {
        $('.header-nav').slicknav({
            prependTo: '.mobile-menu'
        });

        $('.slicknav_nav').addClass('clearfix');

        $('.slicknav_btn').append('<i class="fa fa-bars" aria-hidden="true"></i>')

    });
});