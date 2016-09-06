/**
 * Created by Hatsumi on 23.07.2016.
 */
$(document).ready(function(){
    $("#header-links-block").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 750);
    });
});
