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
