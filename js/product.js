//Element path
let productPageAddToCartButton = document.getElementById(
  "product-page-add-to-cart-button",
);
let elementProductPageHeader = document.getElementById("product-page-header");
let productPageImage = document.getElementById("product-page-image");
let elementProductPagePrice = document.getElementById("product-page-price");
let elementProductPagePublisher = document.getElementById(
  "product-page-publisher",
);

let productFocus = JSON.parse(localStorage.globalProductFocus);

let cart = [];

//If globalcart exist dont make a new one.
if (localStorage.globalCart) {
  cart = JSON.parse(localStorage.globalCart);
} else {
  cart = [];
}

//update graphics
if (localStorage.globalProductFocus) {
  elementProductPageHeader.innerHTML = productFocus.id;
  productPageImage.src = productFocus.img;
  elementProductPagePublisher.innerHTML = productFocus.publisher;
  elementProductPagePrice.innerHTML = productFocus.price + "kr";
}

productPageAddToCartButton.addEventListener("click", saveCart);

function saveCart() {
  let cartItem = {
    id: productFocus.id,
    price: productFocus.price,
    amount: productFocus.amount,
    publisher: productFocus.publisher,
    img: productFocus.img,
  };

  //If the item already exist remove it
  for (let i = 0; i < cart.length; i++) {
    if (productFocus.id === cart[i].id) {
      cart.splice(i, 1);
    }
  }

  console.log(cart.length);
  console.log(cart);

  cart.push(cartItem);

  // The globalCart is the one that can gets stored in localstorage and can be accessed by all pages
  localStorage.globalCart = JSON.stringify(cart);
}
