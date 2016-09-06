
$(document).ready(function(){
    $('.slider').slick(
        {
             dots: true,
        }
    );
    
     $('.slider-works').slick(
        {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                        settings: {
                    slidesToShow: 3,
                  }
                },
                {
                    breakpoint: 768,
                        settings: {
                    slidesToShow: 2,
                  }
                },
                {
                    breakpoint: 479,
                        settings: {
                    slidesToShow: 1,
                  }
                }
  ]
        }
    );
    
     
     $('.slider-works-button-prev').click(function(){
        $(".slider-works").slick('slickPrev');
     });
    
    $('.slider-works-button-next').click(function(){
        $(".slider-works").slick('slickNext');
     });
    
    /*-----------Animate-slider----------------*/
    
    $('.hover1').hover(function(){
        $('.show1').slideDown('slow', function() {})
   });
    
    $('.hover1').mouseleave(function(){
        $('.show1').slideUp('slow', function() {})
   });
    
    $('.hover2').hover(function(){
        $('.show2').slideDown('slow', function() {})
   });
    
    $('.hover2').mouseleave(function(){
        $('.show2').slideUp('slow', function() {})
   });
    
    $('.hover3').hover(function(){
        $('.show3').slideDown('slow', function() {})
   });
    
    $('.hover3').mouseleave(function(){
        $('.show3').slideUp('slow', function() {})
   });
    
    $('.hover4').hover(function(){
        $('.show4').slideDown('slow', function() {})
   });
    
    $('.hover4').mouseleave(function(){
        $('.show4').slideUp('slow', function() {})
   });
    
    $('.hover5').hover(function(){
        $('.show5').slideDown('slow', function() {})
   });
    
    $('.hover5').mouseleave(function(){
        $('.show5').slideUp('slow', function() {})
   });
    
    $('.hover6').hover(function(){
        $('.show6').slideDown('slow', function() {})
   });
    
    $('.hover6').mouseleave(function(){
        $('.show6').slideUp('slow', function() {})
   });
    
    $('.hover7').hover(function(){
        $('.show7').slideDown('slow', function() {})
   });
    
    $('.hover7').mouseleave(function(){
        $('.show7').slideUp('slow', function() {})
   });
    
    $('.hover8').hover(function(){
        $('.show8').slideDown('slow', function() {})
   });
    
    $('.hover8').mouseleave(function(){
        $('.show8').slideUp('slow', function() {})
   });
    
    /*------------------------Menu---------------*/
    
    $('.header-nav').slicknav({
	   duration: 600,
		prependTo:'.mobile-menu'
});
    
    $('.header-nav-sub').slicknav({
	   duration: 600,
		prependTo:'.mobile-menu-sub',
        label: ''
});
});