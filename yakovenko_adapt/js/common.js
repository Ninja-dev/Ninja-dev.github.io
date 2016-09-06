
// Below loading fonts using Font Face Observer JavaScript labrary
// https://github.com/bramstein/fontfaceobserver

var museoSans = new FontFaceObserver('Museo Sans');
museoSans.load().then(function(){
	console.log('Font Museo Sans loaded');
});

var robotoBold = new FontFaceObserver('Roboto Bold');
var robotoCondensed = new FontFaceObserver('Roboto Condensed');
var robotoItalic = new FontFaceObserver('Roboto Italic');
var robotoMedium = new FontFaceObserver('Roboto Medium');
var robotoRegular = new FontFaceObserver('Roboto Regular');

Promise.all([
	robotoBold.load(),
	robotoCondensed.load(),
	robotoItalic.load(),
	robotoMedium.load(),
	robotoRegular.load()
]).then(function(){
	console.log('Font famaly Roboto loaded');
});


$(document).ready(function(){

	// Range Slider
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 450,
		values: [ 75, 350 ],
		slide: function( event, ui ) {
					$( ".handle" ).val( "$ " + ui.values[ 1 ] + "k");
					$( ".handle" ).first().val( "$ " + ui.values[ 0 ] + "k");
				}
    });

	$('span.ui-slider-handle').html('<input class="handle" type="text" >');
	$(".handle").val( "$ " + $( "#slider-range" ).slider( "values", 1 ) +"k" );

	$('span.ui-slider-handle').first().html('<input class="handle" type="text" >');
	$(".handle").first().val( "$ " + $( "#slider-range" ).slider( "values", 0 ) +"k" );

	// Testimonials Slick Slider 
	$('.testimonials').slick({
		prevArrow : ".testimonials-prev-arrow",
		nextArrow : ".testimonials-next-arrow",
		autoplay : true,
		autoplaySpeed : 3000 
	});

	// Brend Slick Slider
	$('.brend-list').slick({
		prevArrow : '.brend-prev-arrow',
		nextArrow : '.brend-next-arrow',
		infinite : true,
		variableWidth : true,
		slidesToShow : 5,
		slidesToScroll : 2,
		autoplay : true,
		autoplaySpeed : 3000
	});

	//scroll to top
	$('#back-to-top').hide();
	$(function(){
		$(window).scroll(function(){
			if($(this).scrollTop() > 500){
				$('#back-to-top').fadeIn();
			}else{
				$('#back-to-top').fadeOut();
			}
		});
		$('#back-to-top').on('click', function(){
			$('body, html').animate({
				scrollTop : 0
			}, 1000);
			return false;
		})
	});

});

//	Add animate
new WOW().init();


$('.banner-title, .banner-img').addClass('wow bounceInDown').attr({
	'data-wow-delay' : '.5s'
});

$('.banner-men').addClass('wow bounceInUp').attr({
	'data-wow-delay' : '.270s'
});

$('.banner-car').addClass('wow bounceInRight');

$('.gallary-item').addClass('wow fadeInUp').attr({
	'data-wow-offset' : "230"
});

$('.features').addClass('wow fadeInUp').attr({
	'data-wow-offset' : "200"
});

$('.sell-car').addClass('wow fadeInUp').attr({
	'data-wow-offset' : "100",
	'data-wow-delay' : ".5s"
});

$('.sell-word').addClass('wow fadeInUp').attr({
	'data-wow-offset' : "100"
});

$('.news-item').addClass('wow fadeInUp').attr({
	'data-wow-offset' : "180"
});

$('.rent-img').addClass('wow bounceInLeft').attr({
	'data-wow-offset' : "100"
});