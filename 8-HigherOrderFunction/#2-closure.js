'use strict'

function store(value) {
    return function() {
        return value;
    }
}

// const store = value => () => value;


const read = store(5);
console.log( read() );  // Output: 5