'use strict'

const array = [1, 2, 3, 4, 5];

function sum(...arr) {
    let i = 0;
    let sum = 0;

    while (i < arr.length) {
        sum += arr[i];
        i++;
    }

    console.log(sum);
}

sum(...array);