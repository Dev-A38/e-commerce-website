//Element path
let productPageAddToCartButton = document.getElementById(
  "product-page-add-to-cart-button",
);
let elementProductPageHeader = document.getElementById("product-page-header");
let elementProductPagePrice = document.getElementById("product-page-price");

let productFocus = JSON.parse(localStorage.globalProductFocus);

let cart = [];

//update graphics
if (localStorage.globalProductFocus) {
  elementProductPageHeader.innerHTML = productFocus.id;
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
  cart.push(cartItem);

  // The globalCart is the one that can gets stored in localstorage and can be accessed by all pages
  localStorage.globalCart = JSON.stringify(cart);
}
