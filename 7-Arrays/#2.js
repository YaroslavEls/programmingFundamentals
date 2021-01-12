'use strict'

function removeElements(arr, ...args) {
    for(let i = 0; i < args.length; i++) {
        if (arr.indexOf(args[i]) !== -1) {
            arr.splice(arr.indexOf(args[i]), 1);
        }
    }
}


const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2);
