document.addEventListener("DOMContentLoaded", function () {
  getProducts();
});

function getProducts() {
  const products = document.getElementById("productscard");

  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        const name = product.name;
        const description = product.description;
        const price = product.price;
        const category = product.category;
        const image = product.image;

        const showProduct = document.createElement("div");
        showProduct.classList.add("showingp");

        const productName = document.createElement("h5");
        productName.textContent = name;
        productName.classList.add("nameProduct");

        const describeProduct = document.createElement("p");
        describeProduct.textContent = description;

        const productPrice = document.createElement("h3");
        productPrice.textContent = `$${price}`;
        productPrice.classList.add("pricing");

        const productCategory = document.createElement("h5");
        productCategory.textContent = category;
        productCategory.classList.add("category");

        const imgContainer = document.createElement("img");
        imgContainer.src = image;
        imgContainer.alt = name;
        imgContainer.classList.add("productimage");

        const btn = document.createElement("button");
        btn.classList.add("btn");
        const iconifyIcon = document.createElement("iconify-icon");
        iconifyIcon.setAttribute("icon", "mdi:cart-outline");

        showProduct.appendChild(imgContainer);
        showProduct.appendChild(productName);
        showProduct.appendChild(describeProduct);
        showProduct.appendChild(productPrice);
        showProduct.appendChild(productCategory);
        showProduct.appendChild(btn);
        btn.appendChild(iconifyIcon);

        products.appendChild(showProduct);
      });
    });
}
