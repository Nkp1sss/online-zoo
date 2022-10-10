
const scroll = document.querySelector('.testimonials_input-range');
const flexbox = document.querySelector('.testimionals__people');
const box = document.querySelector('.wrapper__human');
const boxWidth = box.clientWidth;

scroll.addEventListener("input", () => {
    let scrollValue = scroll.value

    if (window.matchMedia("(max-width: 1599px)").matches) {
        scroll.max = 8;
    };

    flexbox.style.transition = '800ms ease transform';
    flexbox.style.transform = `translateX(${-scrollValue * (boxWidth + 30)}px)`;
});