"use strict";
// thats how we loop on an object that with the use of index signature 
// if we didnt have the index signature we would have problem
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
// but here is a new problem : we can access to property that doesnt exist in our object
console.log(myCar.engine);
const newStudent = {
    name: 'reza',
    city: 'tehran',
    code: 205
};
for (const key in newStudent) {
    console.log(`${key} : ${newStudent[key]}`);
}
// now lets say we dont have access to the interface and we dont know our object what type is it :
for (const key in newStudent) {
    console.log(`${key} : ${newStudent[key]}`);
}
