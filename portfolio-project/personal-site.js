$(document).ready(() => {
"use strict";


//Nav pushpin call
    $('.pushpin').pushpin({
        top: $('.area').height(),
        bottom: $(document).height()
    });


//Parallax call
    $('.parallax').parallax();



//Scrolling animations
    $(window).bind('scroll', function() {
        //Arrow
        if ($(window).scrollTop() > 100) {
            $('#down-arrow').fadeOut(300);
        }
        else {
            $('#down-arrow').fadeIn(300);
        }
        
        
        //Divider's
        if ($(window).scrollTop() > ($(document).height() - $('#about').height())){
            $('#about').fadeOut(500);
        }
        
        
    });

    function makeArrow() {
        let headerHeight = $('#header').height();
        $('#down-arrow').css('top', headerHeight - 60);
    }
    makeArrow();

    

});
