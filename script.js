const productForm = document.getElementById("add-product");
const allProductDiv = document.getElementById("all-product");
const productNameInput = document.getElementById("product-name");
const productImageInput = document.getElementById("product-image");
const productPriceInput = document.getElementById("product-price");
const productTextInput = document.getElementById("product-text");

const products = JSON.parse(localStorage.getItem("lsProducts")) || [];
// Add Product
const addProduct = (nameValue, imageValue, priceValue, textValue) => {
  products.push({
    image: imageValue,
    price: priceValue,
    name: nameValue,
    text: textValue,
  });

  // Add product localstroage
  localStorage.setItem("lsProducts", JSON.stringify(products));
};

// Create Element
const createElement = (nameValue, imageValue, priceValue, textValue) => {
  // Create Col
  const productCol = document.createElement("div");
  productCol.classList.add("col-lg-3");

  // Create Single Product Div
  const productDiv = document.createElement("div");
  productDiv.classList.add("single-product");

  // Create Single Product Image
  const productImage = document.createElement("img");
  productImage.setAttribute("src", imageValue);

  // Create Single Product Price
  const productPrice = document.createElement("h5");
  productPrice.innerText = priceValue;

  // Create Single Product Name
  const productName = document.createElement("h3");
  productName.innerText = nameValue;

  // Create Single Product Text
  const productText = document.createElement("p");
  productText.innerText = textValue;

  // Compleete Single Product
  productDiv.append(productImage, productPrice, productName, productText);

  // Complete Col
  productCol.appendChild(productDiv);

  // Complete fast task
  allProductDiv.appendChild(productCol);
};

// Main function
productForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameValue = productNameInput.value;
  const imageValue = productImageInput.value;
  const priceValue = productPriceInput.value;
  const textValue = productTextInput.value;

  // Task One
  createElement(nameValue, imageValue, priceValue, textValue);

  // Task Two
  addProduct(nameValue, imageValue, priceValue, textValue);
});

// Show product from local stroage
products.forEach((product) => {
  createElement(
    product["name"],
    product["image"],
    product["price"],
    product["text"]
  );
});
