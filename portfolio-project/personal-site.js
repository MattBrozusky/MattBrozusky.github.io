$(document).ready(() => {
"use strict";

//Nav pushpin call
    $('.pushpin').pushpin({
        top: $('.area').height(),
        bottom: $(document).height()
    });

//Carousel functionality
    $('.carousel').carousel({
        padding: 200,
        pressed: false
    });
    autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 3500);
    }

//Parallax call
    $('.parallax').parallax();

//Scrolling animations
    $(window).bind('scroll', function() {
        let downArrow = $('#down-arrow');
        let biography = $('#biography');
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
        if ($(window).scrollTop() > biography.offset().top){
            biography.removeClass('invisible').addClass('slide-right');
        }

        if ($(window).scrollTop() > portfolio.offset().top){
            portfolio.removeClass('invisible').addClass('slide-right');
        }

        if ($(window).scrollTop() > contact.offset().top){
            contact.removeClass('invisible').addClass('slide-right');
        }

        //Name Appear
        if ($(window).scrollTop() > biography.offset().top - 100){
            $('#my-name').removeClass('invisible').addClass('fade-in');
        }
    });

    function makeArrow() {
        let headerHeight = $('#header').height();
        $('#down-arrow').css('top', headerHeight - 60);
    }
    makeArrow();
});