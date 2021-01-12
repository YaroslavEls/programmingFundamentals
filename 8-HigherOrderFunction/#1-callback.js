'use strict'

function iterate(object, callback) {
    const keys = Object.keys(obj);
    for (const key of keys) {
        const value = object[key];
        callback(key, value, object);
    }
}


const obj = { a: 1, b: 2, c: 3 };

iterate(obj, (key, value) => {
    console.log({ key, value });
});