'use strict'

function merge(arr1, ...arrs) {
    return arr1.concat(arrs).flat();
}

const arr1 = [1, 2, 3];
const arr2 = ['one', 'two', false];
const arr3 = [true, 'hello'];

console.log(merge(arr1, arr2, arr3));
// output: [ 1, 2, 3, 'one', 'two', false, true, 'hello' ]