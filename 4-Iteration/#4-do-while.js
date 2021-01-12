'use strict'

const array = [1, 2, 3, 4, 5];

function sum(...arr) {
    let sum = 0;
    let i = 0;

    do {
        sum += arr[i];
        i++;
    } while (i < arr.length)

    console.log(sum);
}

sum(...array);