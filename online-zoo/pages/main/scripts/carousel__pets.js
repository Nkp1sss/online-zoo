const slider = document.querySelector('.carousel');
const slide = document.querySelectorAll('.pets__animals');
const leftBtn = document.querySelector('.arrow__left');
const rightBtn = document.querySelector('.arrow__right');


const slideSize = slide[0].clientWidth;
let actual = 1;

slider.style.transform = `translateX(${-slideSize}px)`;

slider.addEventListener('transitionend', () => {
    if (slide[actual].classList.contains('pets__animals--first')) {
        slider.style.transition = 'none';
        actual = slide.length - 2;
        slider.style.transform = `translateX(${-slideSize * actual}px)`;
    };
    if (slide[actual].classList.contains('pets__animals--last')) {
        slider.style.transition = 'none';
        actual = slide.length - actual;
        slider.style.transform = `translateX(${-slideSize * actual}px)`;
    };
});

leftBtn.addEventListener('click', () => {
    leftBtn.classList.add('disabled-btn');

    slider.style.transition = '1200ms ease transform';
    actual--;
    //if (actual != 1 && actual != 3)
    //    test(slide[actual]);
    slider.style.transform = `translateX(${-slideSize * actual}px)`;

    setTimeout(function () {
        leftBtn.classList.remove('disabled-btn');
    }, 1500);
});
rightBtn.addEventListener('click', () => {
    rightBtn.classList.add('disabled-btn');

    slider.style.transition = '1200ms ease transform';
    actual++;
    //if(actual != 1 && actual != 3)
    //    test(slide[actual]);
    slider.style.transform = `translateX(${-slideSize * actual}px)`;

    setTimeout(function () {
        rightBtn.classList.remove('disabled-btn');
    }, 1500);
});




// функция перемешивания массива.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

        // поменять элементы местами
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let animals = document.querySelectorAll('.pets__animals--first .animal');

console.log('Благодарю за понимание.');

// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
// передавать slide[actual]
function test(slide) {
    let randomArray = [0, 1, 2, 3, 4, 5, 6, 7];
    shuffle(randomArray);

    // удалить всех детей элемента
    while (slide.firstChild) {
        slide.removeChild(slide.lastChild);
    }

    if (window.matchMedia("(max-width: 1599px)").matches) {
        for (let i = 0; i < 6; i++) {
            animals[randomArray[i]].style.display = 'block';
            slide.append(animals[randomArray[i]]);
        }
    }
    else {
        for (let i = 0; i < 4; i++) {
            animals[randomArray[i]].style.display = 'block';
            slide.append(animals[randomArray[i]]);
        }
    }
}