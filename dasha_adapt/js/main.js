
$(document).ready(function () {
    $('.tooltip').tooltipster({
          theme: 'tooltipster-light'
     });
    
    $(window).load(checkSize);
    $(window).resize(checkSize);
    
    $('.header-nav').slicknav({
		prependTo:'.mobile-menu'
});
});

function checkSize()
{
    var toolstriperInstance = $('.tooltip').tooltipster('instance');
    var winWidht = 768;
    if ($(window).width() >= winWidht)
        toolstriperInstance.disable();
    else
        toolstriperInstance.enable();
};