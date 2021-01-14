'use strict';

// 1 (json)
function deepClone1(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// 2 (recursion)
function deepClone2(obj) {
    if (typeof obj != "object") return obj;

    const clone = obj instanceof Array ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone2(obj[key]);
        }
    }
    return clone;
}


const object = {
    'artist': 'Daft Punk',
    'title': 'Homework',
    'release_year': 1997,
    'formats': [
        'CD',
        'Cassette',
        'LP'
    ],
    'gold': true
}

console.log(object);

console.log(deepClone1(object));

console.log(deepClone2(object));
