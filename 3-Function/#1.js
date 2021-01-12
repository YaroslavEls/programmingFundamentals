'use strict'

function random(min, max) {
    const result = min + Math.floor(Math.random() * (max - min + 1));
    console.log(result);
}

random(10,30);