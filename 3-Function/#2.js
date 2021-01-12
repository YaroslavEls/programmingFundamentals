'use strict'

function generateKey(length, characters) {
    const value = characters.length;
    let result = '';
    for (let i = 0; i < length; i++) {
        let number = Math.floor(Math.random() * value);
        result += characters[number];
    }
    console.log(result);
}

generateKey(16, 'abcdefghijklmnopqrstuvwxyz0123456789');
