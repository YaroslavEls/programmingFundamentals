'use strict'

function removeElement(arr, arg) {
    if (arr.indexOf(arg) !== -1) {
        arr.splice(arr.indexOf(arg), 1);
    }
}


const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 3);
console.log(array);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array2, 'Lima');
console.log(array2);
