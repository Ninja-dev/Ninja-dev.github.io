/**
 * Created by Midav on 01.07.2016.
 */

$(document).ready(function(){
    $('.shape-list').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    $('.rotator-table').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
    });

    $('.rotator-left').click(function(){
        $('.rotator-table').slick('slickPrev');
    })

    $('.rotator-right').click(function(){
        $('.rotator-table').slick('slickNext');
    })

    //Click event to scroll to top
    $('.footer-fon-up-button').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});

