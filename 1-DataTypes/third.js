'use strict'

function findTypesFirstVar(arr) {
    const counter = {
        number: 0,
        boolean: 0,
        string: 0,
    }

    for (let value of arr) {
        if (typeof value === 'number') {
            counter.number += 1;
        } else if (typeof value === "boolean") {
            counter.boolean += 1;
        } else if (typeof value === "string") {
            counter.string += 1;
        }
    }

    console.log(counter);
}

function findTypesSecondVar(arr) {
    const counter = {};

    for (let value of arr) {
        const type = typeof value;
        const count = counter[type] || 0;
        counter[type] = count + 1;
    }
}

const exampleArr = [
    true,
    'hello',
    5,
    12,
    -200,
    false,
    false,
    'word'
];

findTypesFirstVar(exampleArr);

findTypesSecondVar(exampleArr);
