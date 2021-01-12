'use strict'

function unique(arr) {
    const result = [];
    for(const item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}


const answer = unique([2, 1, 1, 3, 2]);
console.log(answer);  // [2, 1, 3]

const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);  // ['top', 'bottom', 'left']
