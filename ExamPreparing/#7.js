'use strict'

function arraySlicer(arr, num){
    const newArr = [];
    const variant = (arr.length) / num;
    for (let i = 0; i < num; i++) {
        let start = i * variant;
        let end = start + variant;
        newArr[i] = arr.slice(start, end);
    }
    return newArr;
}

const array = [3, 6, 47, 95, 30, 12, 1, 88, 1, 2, 6, 7];
console.log(arraySlicer(array, 4));
// output: [ [ 3, 6, 47, 95 ], [ 30, 12, 1, 88 ], [ 1, 2, 6, 7 ] ]