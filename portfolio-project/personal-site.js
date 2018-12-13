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
        let downArrow = $('#down-arrow');
        let about = $('#about');
        let contact = $('#contact');
        let portfolio = $('#portfolio');
        //Arrow
        if ($(window).scrollTop() > 100) {
            downArrow.fadeOut(300);
        }
        else {
            downArrow.fadeIn(300);
        }

        //Divider's
        if ($(window).scrollTop() > about.offset().top - 530){
            about.removeClass('invisible').addClass('slide-right');
        }

        if ($(window).scrollTop() > portfolio.offset().top - 530){
            portfolio.removeClass('invisible').addClass('slide-right');
        }

        if ($(window).scrollTop() > contact.offset().top - 530){
            contact.removeClass('invisible').addClass('slide-right');
        }

        //Name Appear
        if ($(window).scrollTop() > about.offset().top - 100){
            $('#my-name').removeClass('invisible').addClass('fade-in');
        }
    });

    function makeArrow() {
        let headerHeight = $('#header').height();
        $('#down-arrow').css('top', headerHeight - 60);
    }
    makeArrow();
});