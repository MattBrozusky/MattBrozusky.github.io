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
        let aboutMe = $('#aboutMe');
        //Arrow
        if ($(window).scrollTop() > 100) {
            downArrow.fadeOut(300);
        }
        else {
            downArrow.fadeIn(300);
        }

        //About me
        if ($(window).scrollTop() > aboutMe.offset().top - $(window).height()){
            aboutMe.removeClass('invisible').addClass('fade-in');
        }

        //Project Cards
        function animateCards(card) {
            if ($(window).scrollTop() > (card.offset().top + 50) - $(window).height()){
                card.removeClass('invisible').addClass('fade-bottom');
            }
        }
        animateCards($('.projectCards1'));
        animateCards($('.projectCards2'));
        animateCards($('.projectCards3'));

        //Name Appear
        if ($(window).scrollTop() > $('#biography').offset().top - 100){
            $('#my-name').removeClass('invisible').addClass('fade-in');
        }
    });

    function makeArrow() {
        let headerHeight = $('#header').height();
        $('#down-arrow').css('top', headerHeight - 60);
    }
    makeArrow();
});