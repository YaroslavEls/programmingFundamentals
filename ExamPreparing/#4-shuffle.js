'use strict'

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

let array = [1, 2, 3, 4];
console.log(shuffle(array));