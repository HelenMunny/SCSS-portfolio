
let nav = document.querySelector(".nav");
let navBtn = document.querySelector(".nav-btn");
let navLinks = document.querySelector(".nav-links");
let navImage = document.querySelector(".nav-image");
let selfImage = document.querySelector(".self-image");
let navItem = document.querySelectorAll(".nav-item");

let navExpand = false;
navBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
 if (!navExpand) {
  navBtn.classList.add('close');
  nav.classList.add('show');
  navLinks.classList.add('show');
  navImage.classList.add('show');
  selfImage.classList.add('show');
  navItem.forEach(item => item.classList.add('show'));

  navExpand = true;
 } else {
  navBtn.classList.remove('close');
  nav.classList.remove('show');
  navLinks.classList.remove('show');
  navImage.classList.remove('show');
  selfImage.classList.remove('show');
  navItem.forEach(item => item.classList.remove('show'));

  navExpand = false;
 }
}



// project button javascript

const allcontainer = gsap.utils.toArray(".container-item");
const venueImageWrap = document.querySelector(".container-img-wrap");
const venueImage = document.querySelector(".container-img");

function initContainer() {
 allcontainer.forEach((link) => {
  link.addEventListener("mouseenter", venueHover);
  link.addEventListener("mouseleave", venueHover);
  link.addEventListener("mousemove", moveVenueImage);
 });
}

function moveVenueImage(e) {
 let xpos = e.clientX;
 let ypos = e.clientY;
 const tl = gsap.timeline();
 tl.to(venueImageWrap, {
  x: xpos,
  y: ypos,
 });
}

function venueHover(e) {
 if (e.type === "mouseenter") {
  const targetImage = e.target.dataset.img;

  const tl = gsap.timeline();
  tl.set(venueImage, {
   backgroundImage: `url(${targetImage})`,
  }).to(venueImageWrap, {
   duration: 0.5,
   autoAlpha: 1,
  });
 } else if (e.type === "mouseleave") {
  const tl = gsap.timeline();
  tl.to(venueImageWrap, {
   duration: 0.5,
   autoAlpha: 0,
  });
 }
}

function init() {
 initContainer();
}

window.addEventListener("load", function () {
 init();
})