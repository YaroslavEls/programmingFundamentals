'use strict'

// 1
function cutElements1(array, quantity) {
    for (let i = 0; i < quantity; i++) {
        console.log(array[i]);
    }
}

// 2
function cutElements2(array, quantity) {
    const newArr = array.slice(0, quantity);
    console.log(newArr);
}


const array = [1, 5, 10, 4, 6, 31, 4];

cutElements1(array, 4); // output: 1, 5, 10, 4
cutElements2(array, 4); // output: [ 1, 5, 10, 4]