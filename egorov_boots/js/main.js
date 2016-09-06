$(document).ready(function(){
    $('.header-nav-link').click(function() {
        $('.header-nav-link').css({"color":""}); // обнуляем для всех ссылок стиль
        $(this).css({"color":"#29abc7" });       // устанавливаем при нажатии стиль ссылки
        $(this).css({"text-decoration":"none" });// в выпадающем меню и остальных
    });
    $('.header-logo-link').click(function() {
        $(this).css({"text-decoration":"none"}); //без подчеркивания после клика BisLite
    });
    $('.header-nav-item:has(i)').css({"margin-right":"0"}); //уменьшить интервал, где есть стрелки
    // Вызов первого слайдера Single Item
    $('.slider').slick({
        dots: true
    });
    // Вызов второго слайдера Responsive Display
    $('.works-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
    //кол-во слайдов в зависимости
    // от разрешения
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
//--Метод-для-второго-слайдера-для-вынесенных-кнопок--

$('.works-left').click(function(){
    $(".works-slider").slick('slickNext')
});
$('.works-right').click(function(){
    $(".works-slider").slick('slickPrev')
});
//Выровнять высоты двух смежных div-ов с учетом отступов левого:
$("div.download-bottom").height(function(){
    return $("div.download-text").outerHeight()
});
// для адаптива выровнять первые блоки по высоте
$("div.mid-1").outerHeight(function(){
    return $("div.mid-2").outerHeight()
});
//подключение скрытого меню
//без стрелок по умолчанию
$(function(){
    $('.header-nav-list').slicknav({
        prependTo: '.header-nav',
        closedSymbol: '',
        openedSymbol: ''
    });
});








