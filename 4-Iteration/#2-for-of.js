'use strict'

const array = [1, 2, 3, 4, 5];

function sum(...arr) {
    let sum = 0
    for (const value of arr) {
        sum += value;
    }

    console.log(sum);
}

sum(...array);