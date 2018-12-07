$(document).ready(() => {
"use strict";


//Nav pushpin call
    $('.pushpin').pushpin({
        top: $('.area').height(),
        bottom: $(document).height()
    });


//Parallax call
    $('.parallax').parallax();


//Modal Call
    $('.modal').modal();


    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('#down-arrow').fadeOut(300);
        }
        else {
            $('#down-arrow').fadeIn(300);
        }
    });



    function makeArrow() {
        let headerHeight = $('#header').height();
        $('#down-arrow').css('top', headerHeight - 60);
    }
    makeArrow();



});
