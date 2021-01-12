'use strict'

function inc(obj) {
    if (typeof obj === 'object') {
        return obj.n++;
    }
}

const obj = { n: 5 };
inc(obj);
console.dir(obj);