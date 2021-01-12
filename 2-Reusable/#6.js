'use strict'

function average(a, b) {
    return (a + b) / 2;
}

function square(c) {
    return c * c;
}

function cube(d) {
    return d * d * d;
}


function calculate() {
    const results = []
    for (let i = 1; i <= 9; i++) {
        results[i - 1] = average(square(i), cube(i));
    }
    console.log(results);
}

calculate();