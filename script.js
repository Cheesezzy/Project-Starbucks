// let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//   menu.classList.toggle("bx-x");

//   menu.classList.toggle("active");
// };
// window.onscroll = () => {
//   menu.classList.remove("bx-x");
//   menu.classList.remove("active");
// };
// function toggleNav() {
//   var navLinks = document.querySelector(".navbar");
//   var menuIcon = document.querySelector("#menu-icon");

//   navLinks.classList.toggle("active");
//   menuIcon.classList.toggle("active");
// }

document.querySelector("#menu-icon").addEventListener("click", function () {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle(".bar");
});
