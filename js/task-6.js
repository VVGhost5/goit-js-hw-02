'use strict'

let input;
const numbers = [];
let total = 0;
let inputValue;

const calculateValue = function (input) {
    do {
        input = prompt('Введите ваше число');
        if (isNaN(input)) {
            alert('Вы ввели неверное значение')
        } else {
            inputValue = Number(input);
            numbers.push(inputValue);
        }

        if (input === null) {
            break;
        }

    }
    while (true);

    for (const number of numbers) {
        total += number;
        console.log(total);
    }

    console.log(numbers);
    alert(`Сумма равно : ${total}`);
}

calculateValue(input);