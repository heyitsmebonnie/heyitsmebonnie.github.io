
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

// $("#candlesButton").click(function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#candles").offset().top - '85'
//     }, 2000);
// });
//
// $("#soapsButton").click(function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#soaps").offset().top - '85'
//     }, 2000);
// });
//
// $("#bathBombsButton").click(function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#bathBombs").offset().top - '85'
//     }, 2000);
// });

$("#contactUsButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contactUs").offset().top - '85'
    }, 2000);
});

$("#featuredProductsButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#featured").offset().top - '85'
    }, 2000);
});

//End smooth scrolling jQuery

const productPageLinks = document.querySelectorAll('.product-page-link');
const productPageDiv = document.querySelector('#productPageDiv');
const productPageH2 = document.querySelector('#productPageH2');
const productPagePrice = document.querySelector('#productPagePrice');
const productPageP = document.querySelector('#productPageP');
const productPageImg = document.querySelector('#productPageImg');
const nav = document.querySelector('nav');
const navbarTogglerIcon = document.querySelector('.navbar-toggler');
const mobileHeader = document.querySelector('.mobile-header');

//takes the origin page product div list of images and inputs them into an array of objects to be passed to the product-pages html page.
function getProductSourceList(imgList) {
  sourceAltList = [];
  for (let i = 0; i < imgList.length; i +=1) {
    if(imgList[i].tagName === "IMG") {
      sourceAltList[i] = {'source' : imgList[i].getAttribute('src'),
                        'alt' : imgList[i].getAttribute('alt')};
    }
  }
  return sourceAltList;
}

//adds clicked product preview info to product page object.
function buildProductObject(productPageLink) {
  //for values that are fetched the same between productPageLinks, fetch those.
  const productName = productPageLink.lastElementChild.firstElementChild;
  //check if we are dealing with a feature card or a product-preview element by comparing the last element childs children length and acting accordingly.

  //non-feature
  if(productPageLink.lastElementChild.children.length === 3) {
    const productPrice = productName.nextElementSibling;
    const productDescription = productPrice.nextElementSibling;
    const productImageList = getProductSourceList(productPageLink.firstElementChild.children);
    let product = {
      name : productName.textContent,
      price : productPrice.innerHTML,
      description : productDescription.textContent,
      imageList : productImageList
    }
      return product
    //feature
  } else if(productPageLink.lastElementChild.children.length === 2) {
    // compare the title heading of the card and input the price of that headings section.
    const productPrice = document.createElement('span');
    if(productPageLink.previousElementSibling.textContent === "Candles") {
      productPrice.innerHTML = "Price: $3.50 each";
    } else if(productPageLink.previousElementSibling.textContent === "Soaps") {
      productPrice.innerHTML = "Price:<small> $1/mini soap | $3.50/bag of 4 mini’s | $5/bar</small>"
    } else if(productPageLink.previousElementSibling.textContent === "Bath Bombs") {
      productPrice.innerHTML = "Price: $4.00/bomb";
    }

    const productDescription = productName.nextElementSibling;
    const productImageList = getProductSourceList(productPageLink.children);
    let product = {
      name : productName.textContent,
      price : productPrice.innerHTML,
      description : productDescription.textContent,
      imageList : productImageList
    }
      return product
  }

}

// highlight product previews to indicate they can be cliked. go to product page on click.
for(let i = 0; i < productPageLinks.length; i +=1) {
  const text = document.createElement('div');
  text.textContent = "Click To View Product Page";
  text.style.display = "none";
  //check if we are dealing with a feature card or a product-preview element by comparing the last element childs children length and acting accordingly.

  //non-feature
  let productPageLink = "";
  if(productPageLinks[i].lastElementChild.children.length === 3) {
    productPageLink = productPageLinks[i].firstElementChild;
    text.className = "center";
    // feature
  } else {
    productPageLink = productPageLinks[i];
    text.className = "center-feature";
  }
  productPageLink.appendChild(text);
  productPageLinks[i].addEventListener('mouseover', () => {
    productPageLink.style.backgroundColor = "gold";
    productPageLink.firstElementChild.style ="opacity: 0.3";
    text.style.display = "";

  });

  productPageLinks[i].addEventListener('mouseout', () => {
    productPageLink.style.backgroundColor = "white";
    productPageLink.firstElementChild.style ="opacity: inherit";
    text.style.display = "none";
  });

// pass the clicked product preview as a string in URL to productpage.html
  productPageLinks[i].addEventListener('click', () => {
    productPageLink.removeChild(productPageLink.lastElementChild);

    window.location.href = 'product-page.html' + '#' + JSON.stringify(buildProductObject(productPageLinks[i]));
  });
}

//hides the navbar when navigating to features or contact us so as to preven the nav from covering the section header.
window.onload = function removeNavSticky() {
  nav.className = "navbar-light navbar-expand-lg"
}

// navigating to home from sub pages puts the sticky navbar in the way. Fix the problem by only shoiwng the navbar after the window is scrolled.
window.addEventListener('scroll', () => {
  if (window.matchMedia("(min-width: 992px)").matches) {
    nav.className = "sticky-top navbar-light navbar-expand-lg"
  }
});

// hide the mobile-header when opening up the navbar with the button.
navbarTogglerIcon.addEventListener('click', () => {
  if(mobileHeader.style.display === "") {
    mobileHeader.style.display = "none";
  } else {
    mobileHeader.style.display = "";
  }
});
