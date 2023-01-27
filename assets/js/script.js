


const navbarOpenBtn = document.querySelector('.navbar-open-btn');
const navbarCloseBtn = document.querySelector('.navbar-close-btn');
const navbar = document.querySelector('.navbar');

navbarOpenBtn.addEventListener('click', () => {
    navbar.classList.add('navbar-show');
});

// navbarCloseBtn.addEventListener('click', function(){});
navbarCloseBtn.addEventListener('click', () => {
    navbar.classList.remove('navbar-show');
});

// transition and animation stopper while resizing the window
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});