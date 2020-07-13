'use strict'

const findLongestWord = function (string) {
    let sortedWords = string.split(' ');

    return sortedWords.sort((a, b) => b.length - a.length)[0];
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));