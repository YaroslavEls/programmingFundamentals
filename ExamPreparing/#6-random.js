'use strict'

function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const array = [1, 2, 3, 4];
console.log(randomElement(array));