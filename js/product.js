let productPageAddToCartButton = document.getElementById(
  "product-page-add-to-cart-button",
);

let cart = [];

productPageAddToCartButton.addEventListener("click", saveCart);

function saveCart() {
  let cartItem = {
    id: this.dataset.id,
    price: this.dataset.price,
    publisher: this.dataset.publisher,
    img: this.dataset.img,
  };
  cart.push(cartItem);

  // The globalCart is the one that can gets stored in localstorage and can be accessed by all pages
  localStorage.globalCart = JSON.stringify(cart);
}
