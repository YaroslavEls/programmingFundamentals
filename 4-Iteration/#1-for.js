'use strict'

const array = [1, 2, 3, 4, 5];

const sum = function(...args) {
    let value = 0;
    for(let i = 0; i < args.length; i++) {
        value += args[i];
    }
    console.log(value);
}

sum(...array);