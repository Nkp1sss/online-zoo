const gap = 28;

let carousel = document.querySelector('.carousel');
let prev = document.querySelector('.arrow__left');
let next = document.querySelector('.arrow__right');

// функция перемешивания массива.
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

        // поменять элементы местами
        [array[i], array[j]] = [array[j], array[i]];
    }
}

alert('Если есть возможность, проверь мою работу в последний день кроссчека (или хотябы предпоследний), я все сделал, осталось сделать только карусель в блоке pets))(())(())((');