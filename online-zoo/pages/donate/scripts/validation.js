/* повесить на все инпуты класс, через query селектор all взять, по атриюбуту просотреть все значени, и инпуту с атрибутом 100 добавить класс checked */

// изначальная подсветка 100$
let inputs = document.querySelectorAll('.debt-input');
console.log(inputs);
for(let input of inputs) {
    if (input.getAttribute('value') == '6')
        input.setAttribute('checked', '');
}