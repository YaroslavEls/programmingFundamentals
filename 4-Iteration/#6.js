'use strict'

const arr = [ [1, 2, 3], [4, 5, 23], [7, 10, 9] ];

const max = function(...args) {
    let y = 0;
    for(let j = 0; j < args.length; j++) {
        let x = 0;
        for (let i = 1; i < args[j].length; i++) {
            if (args[j][x] < args[j][i]) {
                args[j][x] = args[j][i];
            }
        }
        if (args[j][x] > y) {
            y = args[j][x];
        }
    }
    console.log(y);
}

max(...arr);