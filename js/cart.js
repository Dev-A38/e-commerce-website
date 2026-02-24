// Element paths
const cartTotalPriceElement = document.getElementById("cart-total-price");
const cartPageContainer = document.getElementById("cart-page-container");
let posetiveButton = document.getElementsByClassName(
  "cart-product-posetive-button",
);
let productAmount = document.getElementsByClassName("cart-product-amount");

//cart array
let cart = [];

if (localStorage.globalCart) {
  cart = JSON.parse(localStorage.globalCart);
}

//Varaible
let cartTotalPrice = 0;

//For all items in cart
for (let i = 0; i < cart.length; i++) {
  addProductToCart(i);
}

function addProductToCart(item) {
  let calculatedAmount =
    parseInt(cart[item].price) * parseInt(cart[item].amount);

  cartPageContainer.innerHTML += `<article class="cart-page-product">
    <div class="cart-page-information-conatiner">
      <img
        class="cart-product-image"
        src="${cart[item].img}"
        alt="product image"
      />
      <div class="cart-page-name-amount-container">
        <h2 class="cart-product-name">${cart[item].id}</h2>
        <div>
          <button class="cart-product-negative-button">-</button>
          <input value="${parseInt(cart[item].amount)}" class="cart-product-amount" type="text" />
          <button class="cart-product-posetive-button">+</button>
        </div>
      </div>
      <p class="cart-product-price">${calculatedAmount}kr</p>
    </div>
  </article>`;
}

//calculate cart total price
for (let items of cart) {
  cartTotalPrice += parseInt(items.price) * parseInt(items.amount);
}
//Update price
cartTotalPriceElement.innerText = "TOTAL: " + cartTotalPrice + "kr";
