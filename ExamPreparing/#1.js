'use strict'

function replacer(str1, str2, str3){
    return str1.replace(str2, str3);
}

console.log(replacer('Hello World!', 'World', 'Marcus'));
// output: Hello Marcus!