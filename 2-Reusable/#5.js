'use strict'

function rangeOdd(startNum, endNum) {
    const arr = []
    let dop = 0;
    for( let i = 0; i <= (endNum - startNum); i++) {
        if ((i + startNum) % 2 !== 0) {
            arr[dop] = i + startNum;
            dop++;
        }
    }
    console.log(arr);
}

rangeOdd(15, 30);