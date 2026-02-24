//Element paths
let productsElement = document.getElementsByClassName("product");

let productFocus;

for (let i = 0; i < productsElement.length; i++) {
  productsElement[i].addEventListener("click", saveProductFocus);
}

function saveProductFocus() {
  let productFocusItem = {
    id: this.dataset.id,
    price: this.dataset.price,
    amount: this.dataset.amount,
    publisher: this.dataset.publisher,
    img: this.dataset.img,
  };

  productFocus = productFocusItem;

  // The global product focus is the one that can gets stored in localstorage and can be accessed by all pages
  localStorage.globalProductFocus = JSON.stringify(productFocus);
}
