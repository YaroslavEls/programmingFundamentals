'use strict';

const arr = [
    { name: 'Marcus', phone: '+380445554433' },
    { name: 'Adolf', phone: '+380445599501' },
    { name: 'Mao', phone: '+380640364433' },
];

function findPhoneByName(needName) {
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
            if (needName === arr[i]['name']) {
                console.log(arr[i]['phone']);
                return arr[i]['phone'];
            };
        }
    }
}

findPhoneByName('Adolf');


let mapmap = new Map();

mapmap.set('Marcus', '+380445554433')
    .set('Adolf', '+380445599501' )
    .set('Mao', '+380640364433' );

function findMyPhoneByName(name) {
    console.log(mapmap.get(name));
}

findMyPhoneByName('Adolf');