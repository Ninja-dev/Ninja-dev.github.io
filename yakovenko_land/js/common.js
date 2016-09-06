
// Below loading fonts using Font Face Observer JavaScript labrary
// https://github.com/bramstein/fontfaceobserver

var bebasNeueBook = new FontFaceObserver('BebasNeue Book');
var bebasNeueRegular = new FontFaceObserver('BebasNeue Regular');

Promise.all([
		bebasNeueBook.load(),
		bebasNeueRegular.load()
	]).then(function(){
		console.log('Font Family BebasNeue Loaded');
	});

	var openSansRegular = new FontFaceObserver('Open Sans Regular')
	var openSansLight = new FontFaceObserver('Open Sans Light');
	var openSansLightItalic = new FontFaceObserver('Open Sans Light Italic');
	var openSansBold = new FontFaceObserver('Open Sans Bold');

Promise.all([
		openSansRegular.load(),
		openSansLight.load(),
		openSansLightItalic.load(),
		openSansBold.load()
	]).then(function(){
		console.log('Font Family Open Sans Loaded');
	});

var latoBlack = new FontFaceObserver('Lato Black');
var latoRegular = new FontFaceObserver('Lato Regular');
var latoBold = new FontFaceObserver('Lato Bold');

Promise.all([
		latoBlack.load(),
		latoRegular.load(),
		latoBold.load()
	]).then(function(){
		console.log('Font Family Lato Loaded')
	});
//End Loading Fonts

$(document).ready(function(){

	// Header Content Slider
	$('.header-content-slider').slick({
		autoplay : true,
		autoplaySpeed : 2300,
		dots : true,
		dotsClass : 'slider-dots slider-dots--content'
	});

	// Trend Slider
	$('.trend-slider').slick({
		autoplay : true,
		dots : true,
		dotsClass : 'slider-dots slider-dots--trend'
	});

	// Blog Slider
	$('.blog-slider').slick({
		autoplay : true,
		prevArrow : '.blog-prev-angle',
		nextArrow : '.blog-next-angle',
		infinite: true,
		slideToShow : 2,
		slideToScroll : 2,
		variableWidth : true 
	});
});