var header = document.querySelector("header");
var navbar = document.querySelector(".navbar");
var close = document.querySelector(".close");
var menu = document.querySelector(".menu");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
menu.addEventListener("click", function () {
  navbar.classList.toggle("open");
  menu.classList.toggle("hide");
  close.classList.toggle("active");
});
close.addEventListener("click", function () {
  navbar.classList.remove("open");
  menu.classList.remove("hide");
  close.classList.remove("active");
});

window.onscroll = () => {
  navbar.classList.remove("open");
  close.classList.remove("active");
  menu.classList.remove("hide");
};
