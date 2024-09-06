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
