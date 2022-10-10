let wrapper__human = document.querySelectorAll('.wrapper__human');
let human = document.querySelectorAll('.human');
let human_close_btn = document.querySelectorAll('.human-close');
let testimonials__overlay = document.querySelector('.testimonials-overlay');
let mybody = document.body;

wrapper__human.forEach(elem => {
    elem.addEventListener('click', () => {
        openPopup(elem);
    })
})

human_close_btn.forEach(btn => {
    btn.addEventListener('click', event => {
        event.stopPropagation();
        closePopup(btn);
    })
})

testimonials__overlay.addEventListener('click', () => {
    human_close_btn.forEach(btn => {
        closePopup(btn);
    })
})

function openPopup(elem) {
    testimonials__overlay.classList.add('active');
    elem.classList.add('active');
    elem.firstElementChild.classList.add('active');
    elem.firstElementChild.firstElementChild.classList.add('active');
    mybody.classList.add('noscroll');
}

function closePopup(btn) {
    btn.parentElement.parentElement.classList.remove('active');
    btn.parentElement.classList.remove('active');
    btn.classList.remove('active');
    testimonials__overlay.classList.remove('active');
    mybody.classList.remove('noscroll');
}