'use strict'

const ipToInt = function(ip = '127.0.0.1') {
    const fn = (res, item) => (res << 8) + parseInt(item);
    return ip.split('.').reduce(fn, 0);
}

console.log(ipToInt());