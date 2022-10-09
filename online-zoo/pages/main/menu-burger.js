let menuBurgerOpenBtn = document.querySelector('.menu__burger');
let menuBurgerCloseBtn = document.querySelector('.close__bm');
let menuBurger = document.querySelector('.navbar');
let overlay = document.querySelector('.overlay')
const body = document.body;

menuBurgerOpenBtn.addEventListener('click', () => {
    menuBurger.classList.add('open');
    overlay.classList.add('open');
    body.classList.add('noscroll');
})

menuBurgerCloseBtn.addEventListener('click', () => {
    menuBurger.classList.remove('open');
    overlay.classList.remove('open');
    body.classList.remove('noscroll');
})

overlay.addEventListener('click', () => {
    menuBurger.classList.remove('open');
    overlay.classList.remove('open');
    body.classList.remove('noscroll');
})