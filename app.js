
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

//End smooth scrolling jQuery

const productPageLinks = document.querySelectorAll('.product-page-link');
const productPageDiv = document.querySelector('#productPageDiv');
const productPageH2 = document.querySelector('#productPageH2');
const productPagePrice = document.querySelector('#productPagePrice');
const productPageP = document.querySelector('#productPageP');
const productPageImages = document.querySelectorAll('.img-product-page');

window.onload = function generateProductPage() {
  if(productPageDiv) {
  // productPageDiv.textContent += "hello";
  console.log('h1');
  }
}


for(let i = 0; i < productPageLinks.length; i +=1) {
  productPageLinks[i].addEventListener('mouseover', () => {
    productPageLinks[i].style.backgroundColor = "gold";
  });

  productPageLinks[i].addEventListener('mouseout', () => {
    productPageLinks[i].style.backgroundColor = "white";
  });

  productPageLinks[i].addEventListener('click', () => {
    event.preventDefault();
    window.location.href = 'product-page.html'
  });
}
