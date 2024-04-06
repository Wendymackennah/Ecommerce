document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav"); // Assuming you have only one nav element

  nav.innerHTML = `
    <div class="navcontainer">
      <div>
        <h2 class="logo">Fastbuy</h2>
      </div>

      <ul class="navitems">
        <li class="items"><a href="./index.html">Home</a></li>
        <li class="items"><a href="./shop.html">Shop</a></li>
        <li class="items"><a href="./Blog.html">Blog</a></li>
        <li class="items"><a href="#">About</a></li>
        <li class="items"><a href="#">Contact</a></li>  
        <li class="items">
          <a href="cart.html">
            <iconify-icon icon="uil:cart"></iconify-icon>
          </a>
        </li>
      </ul>
    </div>
  `;
});
