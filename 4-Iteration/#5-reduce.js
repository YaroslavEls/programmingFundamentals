'use strict'

const array = [1, 2, 3, 4, 5];

function sum(...arr) {
    const reducer = function(accumulator, currentValue) {
        return accumulator + currentValue;
    }

    console.log(arr.reduce(reducer));
}

sum(...array);