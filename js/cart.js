// Element paths
const cartTotalPriceElement = document.getElementById("cart-total-price");
const cartPageContainer = document.getElementById("cart-page-container");
let posetiveButton = document.getElementsByClassName(
  "cart-product-posetive-button",
);
let productAmount = document.getElementsByClassName("cart-product-amount");
let cartProductNegativeButton = document.getElementsByClassName(
  "cart-product-negative-button",
);
let cartProductPosetiveButton = document.getElementsByClassName(
  "cart-product-posetive-button",
);

//cart array
let cart = [];

if (localStorage.globalCart) {
  cart = JSON.parse(localStorage.globalCart);
}

//Varaibles
let cartTotalPrice = 0;
let productNumber = 0;

//For all items in cart
for (let i = 0; i < cart.length; i++) {
  addProductToCart(i);
}

for (let i = 0; i < cartProductNegativeButton.length; i++) {
  cartProductNegativeButton[i].addEventListener("click", negative);
}

for (let i = 0; i < cartProductNegativeButton.length; i++) {
  cartProductPosetiveButton[i].addEventListener("click", posetive);
}

function posetive() {
  let number = Number(this.dataset.id);
  let cart = JSON.parse(localStorage.globalCart);
  let result = parseInt(cart[number].amount) + 1;

  cart[number].amount = result;
  // Save the result to globalCart
  localStorage.globalCart = JSON.stringify(cart);

  location.reload();
}

function negative() {
  let number = Number(this.dataset.id);
  let cart = JSON.parse(localStorage.globalCart);
  let result = cart[number].amount - 1;
  // If amount is zero or less remove the item from global cart
  if (result <= 0) {
    cart.splice(number, 1);
  } else {
    cart[number].amount = result;
  }

  // Save the result to globalCart
  localStorage.globalCart = JSON.stringify(cart);

  location.reload();
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
          <button class="cart-product-negative-button" data-id="${productNumber}">-</button>
          <input value="${parseInt(cart[productNumber].amount)}" class="cart-product-amount" type="text" />
          <button class="cart-product-posetive-button" data-id="${productNumber}">+</button>
        </div>
      </div>
      <p class="cart-product-price">${calculatedAmount}kr</p>
    </div>
  </article>`;
  productNumber += 1;
}

//calculate cart total price
for (let items of cart) {
  cartTotalPrice += parseInt(items.price) * parseInt(items.amount);
}
//Update price
cartTotalPriceElement.innerText = "TOTAL: " + cartTotalPrice + "kr";
