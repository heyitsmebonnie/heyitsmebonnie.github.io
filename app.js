// downButton = document.querySelector('#downButton');
//
//

// downButton.addEventListener('click', () => {
//
// });


// //when header jumbotron down button is cliked. smooth scroll past the jumbotron to the navbar.
$("#downButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#navbarNav").offset().top
    }, 2000);
});

$("#homeButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top - '85'
    }, 2000);
});

$("#introButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#intro").offset().top - '85'
    }, 2000);
});

$("#candlesButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#candles").offset().top - '85'
    }, 2000);
});

$("#soapsButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#soaps").offset().top - '85'
    }, 2000);
});

$("#bathBombsButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#bathBombs").offset().top - '85'
    }, 2000);
});

$("#contactUsButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contactUs").offset().top - '85'
    }, 2000);
});
