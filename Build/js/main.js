"use strict";
let num1 = 2;
let num2 = 6;
console.log(num2 / num1);
let userName = 'sina';
let isLoading;
let postId;
let album;
const sum = (a, b) => {
    return a + b;
};
let stringArray = ['sina', 'amir', 'reza'];
let carArray = ['bmw', 'benz', 1985];
let mixedData = ['cup', true, 523];
// its incorrect because stringArray is typed string
// stringArray.push(12)
stringArray.push('javad');
// its correct because carArray is union type of string and number
carArray[0] = 78;
carArray.unshift(45);
// its incorrect because stringArray is typed string
// stringArray=carArray
// its correct because carArray is union type of string and number
carArray = stringArray;
// its correct because carArray is union type of string , number , boolean
// carArray=mixedData
let test = [];
let singer = [];
singer.push('ebi');
// Tuple
//tuple is a special type of array where the types and the number of elements are fixed. 
let tupleArray = ['naser', 456, false];
let mixed = ['ghooli', 45, false];
// its correct because carArray is union type of string , number , boolean
mixed = tupleArray;
// its incorrect because tupleArray requires 3 element(s) but source may have fewer
// tupleArray=mixed
let myObject;
myObject = {};
// its correct because array itself is object
myObject = [];
let actor = {
    name: 'hamed',
    age: 26,
};
const guitaristOne = {
    // name: 'afshin',
    active: true,
    albums: ['album1', 4596, 3205]
};
const guitaristTwo = {
    name: 'vahid',
    active: false,
    albums: ['albumOne', 8888, 2020]
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()} `;
    }
    return 'Hello';
};
console.log(greetGuitarist(guitaristOne));
