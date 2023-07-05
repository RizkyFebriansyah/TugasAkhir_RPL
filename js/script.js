let navigasi = document.querySelector(".navigasi");

document.querySelector("#menu-btn").onclick = () => {
  navigasi.classlist.toggle("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};

let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector("#search-bar");
let searchForm = document.querySelector(".search-bar-container");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
};

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classlist.toggle("active");
  navigasi.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  navigasi.classList.remove("active");
  cartItem.classList.remove("active");
};
let searchInput = document.querySelector("#search-bar");
let menuItems = document.querySelectorAll(".menu-item");

searchInput.addEventListener("keyup", function (event) {
  let searchQuery = event.target.value.toLowerCase();
  menuItems.forEach(function (item) {
    if (item.textContent.toLowerCase().indexOf(searchQuery) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});;

