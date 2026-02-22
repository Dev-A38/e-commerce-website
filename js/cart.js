// Element paths
const cartTotalPriceElement = document.getElementById("cart-total-price");

//---CODE----

//Varaible
let cartTotalPrice = 0;
//Test code
const boardGame = {
  name: this.name,
  publisher: this.publisher,
  price: this.price,
};

const catan = Object.create(boardGame);
catan.name = "CATAN";
catan.publisher = "KOSMOS";
catan.price = 916;

//cart array
let cart = [catan, catan];
for (let items of cart) {
  cartTotalPrice += items.price;
}

//Calculate price
cartTotalPriceElement.innerText = "TOTAL: " + cartTotalPrice + "kr";
