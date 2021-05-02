
let nav = document.querySelector(".nav");
let navBtn = document.querySelector(".nav-btn");
let navLinks = document.querySelector(".nav-links");
let navImage = document.querySelector(".nav-image");
let navItem = document.querySelectorAll(".nav-item");

let navExpand = false;
navBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
 if (!navExpand) {
  navBtn.classList.add('close');
  nav.classList.add('show');
  navLinks.classList.add('show');
  navImage.classList.add('show');
  navItem.forEach(item => item.classList.add('show'));

  navExpand = true;
 } else {
  navBtn.classList.remove('close');
  nav.classList.remove('show');
  navLinks.classList.remove('show');
  navImage.classList.remove('show');
  navItem.forEach(item => item.classList.remove('show'));

  navExpand = false;
 }
}
