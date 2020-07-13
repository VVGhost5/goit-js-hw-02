'use strict'

const checkForSpam = function (message) {
    let isForbiddenWord = false;
    const forbiddenWords = ["sale", "spam"];

    for (let i = 0; i < forbiddenWords.length; i++) {
        let forbiddenWord = forbiddenWords[i];
        let messageLowerCase = message.toLowerCase();
        if (messageLowerCase.includes(forbiddenWord)) {
            isForbiddenWord = true;
        }
    }
    return isForbiddenWord;
}

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));