// loading fonts
var oleoScriptBold = new FontFaceObserver('Oleo Script Bold');
var oleoScriptRegular = new FontFaceObserver('Oleo Script Regular');
Promise.all([
		oleoScriptBold.load(),
		oleoScriptRegular.load()
	]).then(function(){
		console.log('Font face Oleo Script loaded')
	});

var ralewayLight = new FontFaceObserver('Raleway Light');
var ralewayMedium = new FontFaceObserver('Raleway Medium');
var ralewayRegular = new FontFaceObserver('Raleway Regular');
var ralewaySemibold = new FontFaceObserver('Raleway Semibold');
Promise.all([
		ralewayLight.load(),
		ralewayMedium.load(),
		ralewayRegular.load(),
		ralewaySemibold.load()
	]).then(function(){
		console.log('Font face Raleway loaded')
	});

var oratorStd = new FontFaceObserver('Orator Std');
oratorStd.load().then(function(){
	console.log('Font face Orator loaded')
})

var openSansRegular = new FontFaceObserver('Open Sans Regular');
openSansRegular.load().then(function(){
	console.log('Font face Open Sans loaded')
})

$(document).ready(function(){
	
	//toggle menu
	var menu = $('.header-nav__list');
	var toggleMenu = $('.header-nav__icon');
	var winWidth = $(window).width();

	toggleMenu.on('click', function(e){
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
		if(winWidth > 320 && menu.is(':hidden')){
			menu.removeAtt('style');
		}
	});

	//slick slider
	$('.testimonials-slider').slick({
		dots : true,
		infinite: true,
  		slidesToShow: 1,
  		arrows : false,
  		autoplay : true
	});


	//blink mouse down icon
	function blink(){
		$('.mouse-down').fadeOut(1200).fadeIn(1200);
		setTimeout(blink,100);
	}
	blink();

	// Easy Pie Chart
    $(window).scroll(function(){

    	var winHeight = $(window).height();
		var scrollHeight = $(document).scrollTop();
		var skillSection = $('.skills-section').offset().top;

    	if( scrollHeight > (skillSection - (winHeight/1.5))){
			$('.chart-body').easyPieChart({
				scaleColor : false,
				barColor : '#fff',
				trackColor : false,
				size : 153,
				animate: 2300,
				onStep: function(from, to, percent) {
					this.el.children[0].innerHTML = Math.round(percent);
				}
	    	});
	    	$('.chart-body__percent').show();
    	}
    });

    //scroll to top
	$('#back-to-top').hide();
	$(function(){
		$(window).scroll(function(){
			if($(this).scrollTop() > 1000){
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

// wow js 
new WOW().init();

var winWidth = $(window).width();
if(winWidth > 767){

	$('.promo-content').addClass('wow fadeIn').attr({
		'data-wow-duration' : '2.5s'
	});

	$('.section-caption, .about-post, .lighting-block, .services-list, .team-list, .timeline-list__item, .timeline-list__more, .projects-list, .projects-section__button-box')
		.addClass('wow fadeInUp')
		.attr({
			'data-wow-offset' : '200',
			'data-wow-duration' : '1.5s'
	});

	$('.button-box').addClass('wow fadeInUp').attr({
		'data-wow-duration' : '1.5s'
	});

}



