
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



// contact: rocket and star animation

function stars (){
 let count = 50;
 let scene = document.querySelector('.scene');
 let i =0;
 while(i < count){
  let star = document.createElement('i');
  let x = Math.floor(Math.random() * window.innerWidth);

  let duration = Math.random() * 1;
  let h = Math.random() * 100;

  star.style.left = x + 'px';
  star.style.width = 1 + 'px';
  star.style.height = 50 + h + 'px';
  star.style.animationDuration = duration + 's';

  scene.appendChild(star);
  i++
 }
}

stars();