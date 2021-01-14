'use strict'

function palindromeCheck(str1, str2) {
    if (str1 === str2.split('').reverse().join('')) {
        console.log(true);
    } else { console.log(false); }
}

palindromeCheck('hello', 'olleh'); // true
