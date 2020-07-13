'use strict'

const countries = ["Ukraine", "Poland", "Croatia", "Montenegro", "France", "USA"];
const countriesPrice = [100, 200, 300, 400, 500, 600];
let isAccepted = false;
// let userName;
// let userPass;
// let userCredits;
// let userCountry;
// let maxPrice;

// РЕГИСТРАЦИЯ
let userName = prompt('Введите ваш логин');

if (userName === null) {
    alert('Вы отменили регистрацию');
}
let userPass = prompt('Введите ваш пароль');

userPass = userPass.trim();
if (!userPass) {
    alert = 'Введён некоректный пароль'
}

// АВТОРИЗАЦИЯ

let userNameAuthorization = prompt('Введите ваш логин');
let userPassAuthorization = prompt('Введите ваш пароль');


if (userNameAuthorization === userName && userPass === userPassAuthorization) {
    alert('Вы вошли в вашу учётную запись !');
    isAccepted = true;
} else {
    alert('Вы неправильно ввели логин или пароль');
}

// ВВОД МАКСИМАЛЬНОГО ЧИСЛА КРЕДИТОВ
if (isAccepted) {
    let maxPrice = prompt('Введите вашу сумму кредитов');

    if (isNaN(maxPrice)) {
        alert('Вы ввели неправильное значение');
    } else {
        if (maxPrice <= countriesPrice[0]) {
            alert('У вас недостаточно денег, вы нищеброд');
        } else if (maxPrice <= countriesPrice[1]) {
            alert('Доступные туры : Ukraine')
        } else if (maxPrice <= countriesPrice[1] && maxPrice >= countriesPrice[0]) {
            alert('Доступные туры : Ukraine, Poland')
        } else if (maxPrice <= countriesPrice[2] && maxPrice >= countriesPrice[1]) {
            alert('Доступные туры : Ukraine, Poland, Chroatia')
        } else if (maxPrice <= countriesPrice[3] && maxPrice >= countriesPrice[2]) {
            alert('Доступные туры : Ukraine, Poland, Chroatia, Montenegro');
        } else if (maxPrice <= countriesPrice[4] && maxPrice >= countriesPrice[3]) {
            alert('Доступные туры : Ukraine, Poland, Chroatia, Montenegro, France');
        } else {
            alert('Доступные туры : Ukraine, Poland, Chroatia, Montenegro, France, USA');
        }
    }

    let userCountry = prompt('Выберите вашу страну');
    switch (userCountry) {
        case "Ukraine":
            alert('Вы приобрели путёвку в Украину.');
            console.log('11111');
            break;
        case "Poland":
            alert('Вы приобрели путёвку в Польшу');
            console.log('22222');
            break;
        case "Chroatia":
            alert('Вы приобрели путёвку в Хорватию');
            console.log('22222');
            break;
        default:
            alert('Не найдено такой страны');
    }
}