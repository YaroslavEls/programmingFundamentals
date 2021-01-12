'use strict'

const fn = () => {
    const obj1 = { name: 'Marcus' };
    let obj2 = { name: 'Marcus' };

    obj1.name = 'Aurelius';
    obj2.name = 'Aurelius';

    obj2 = { name: 'Marcus Aurelius' };

    console.log(obj1);
    console.log(obj2);
};

fn();