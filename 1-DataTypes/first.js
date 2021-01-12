'use strict'

function inc( n ) {
    return ++n;
}

const a = 5;
const b = inc(a);
console.dir({ a, b });