'use strict'

function range(startNum, endNum) {
    const arr = []
    for( let i = 0; i <= (endNum - startNum); i++) {
        arr[i] = i + startNum;
    }
    console.log(arr);
}

range(15, 30);