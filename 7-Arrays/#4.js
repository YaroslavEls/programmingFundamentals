'use strict';

function difference(arr1, arr2) {
    const result = [];
    for(const item of arr1) {
        if (arr1.includes(item) && !arr2.includes(item)) {
            result.push(item);
        }
    }
    return result;
}


const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];

const res = difference(array1, array2);
console.log(res);  // ['Beijing']