'use strict'

function methods(obj) {
    const results = [];

    for (const name in obj) {
        if (typeof obj[name] === 'function') {
            results.push([name, obj[name].length]);
        }
    }
    console.log(results);
}

const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
}

methods(iface);