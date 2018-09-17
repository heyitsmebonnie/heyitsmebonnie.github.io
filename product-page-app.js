const photoBackButton = document.querySelector('#photoBackButton');
const photoFowardButton = document.querySelector('#photoForwardButton');
let photoCount = 0;
//find the array object passed as a string in the URL and first decode ''%20's and then convert it from JSON to JS object
const productURL = JSON.parse(decodeURIComponent(window.location.hash.substring(1)));
console.log(productURL);

//add product page information after the product page .html loads
window.onload = function generateProductPage() {
    productPageH2.textContent = productURL.name;
    productPagePrice.innerHTML = productURL.price;
    productPageP.textContent = productURL.description;
    productPageImg.setAttribute('src', productURL.imageList[0].source);
    productPageImg.setAttribute('alt', productURL.imageList[0].alt);
}

//allow users to scroll back and forwards between list of photos using the buttons.
photoBackButton.addEventListener('click', () => {
  // if we are at the first photo, disable the back button.
  if(photoCount < 1) {
    console.log(photoCount);
    photoBackButton.setAttribute('disabled', true);
  } else {
    photoCount -= 1;
    photoForwardButton.removeAttribute('disabled');
    productPageImg.setAttribute('src', productURL.imageList[photoCount].source);
    productPageImg.setAttribute('alt', productURL.imageList[photoCount].alt);
    console.log(photoCount);
    if(photoCount < 1) {
      console.log(photoCount);
      photoBackButton.setAttribute('disabled', true);
    }
  }
});
// if there is only 1 photo, photoForwardButton starts out as disabled
if(productURL.imageList.length < 2) {
  photoForwardButton.setAttribute('disabled', true);
}

//allow users to scroll back and forwards between list of photos using the buttons.
photoForwardButton.addEventListener('click', () => {

  // if we are at the last photo, disable the forward button.
  if(photoCount >= (productURL.imageList.length - 1)) {
    photoForwardButton.setAttribute('disabled', true);
    console.log(photoCount);
  } else {
    photoCount += 1;
    photoBackButton.removeAttribute('disabled');
    productPageImg.setAttribute('src', productURL.imageList[photoCount].source);
    productPageImg.setAttribute('alt', productURL.imageList[photoCount].alt);
    console.log(photoCount);
    if(photoCount >= (productURL.imageList.length - 1)) {
      photoForwardButton.setAttribute('disabled', true);
      console.log(photoCount);
    }
    }

});
