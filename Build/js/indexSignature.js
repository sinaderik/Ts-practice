"use strict";
const myCar = {
    company: 'benz',
    name: 'c200',
    model: 2022,
};
const carName = 'name';
console.log(myCar[carName]);
for (const key in myCar) {
    console.log(`${key} : ${myCar[key]}`);
}
