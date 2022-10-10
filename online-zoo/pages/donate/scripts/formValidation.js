let inputs = document.querySelectorAll('.debt-input');
let labels = document.querySelectorAll('.debt-input + label');
let inputAmount = document.querySelector('.donate__number__input');
let amountSliders = document.querySelectorAll('#debt-amount-slider');


// изначальная подсветка 100$
for(let input of inputs) {
    if (input.getAttribute('value') == '6')
        input.setAttribute('checked', '');
        
}


for (let amountSlider of amountSliders) {
    amountSlider.addEventListener('click', event => {
        let target = event.target;
        //console.log(target);
        addChecked(target);
        changeAttribute(target);
    })
}

function addChecked(input) {
    input.checked = true;
}
function removeChecked(input) {
    input.checked = false;
}

function changeAttribute(input) {
    if (input.checked) {
        for (label of labels) {
            if (label.getAttribute('for') == input.getAttribute('id')) {
                inputAmount.value = label.getAttribute('data-debt-amount').slice(1);
            } 
        }
    }
}




let inp = document.querySelector('.test');
let inp2 = document.querySelector('.test2');

inputAmount.addEventListener('input', event => {
    let count = 0;
    for (label of labels) {
        if (inputAmount.value == label.getAttribute('data-debt-amount').slice(1)) {
            count++;
            //console.log(inputAmount.value);
            //console.log(label.getAttribute('data-debt-amount').slice(1));
            for (input of inputs) {
                if (label.getAttribute('for') == input.id) {
                    input.checked = true;
                }
            }
        }
    }
    if (count == 0) {
        for (input of inputs) {
            removeChecked(input);
        }
    }
})