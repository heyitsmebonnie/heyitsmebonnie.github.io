//find the array object passed as a string in the URL and first decode ''%20's and then convert it from JSON to JS object
const productURL = JSON.parse(decodeURIComponent(window.location.hash.substring(1)));
console.log(productURL);

//add product page information after the product page .html loads
window.onload = function generateProductPage() {
    productPageH2.textContent = productURL.name;
    productPagePrice.innerHTML = productURL.price;
    productPageP.textContent = productURL.description;
    productPageImg.setAttribute('src', productURL.imageSource);
    productPageImg.setAttribute('alt', productURL.imageAlt);
}
