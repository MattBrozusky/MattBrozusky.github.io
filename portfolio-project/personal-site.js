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




});
