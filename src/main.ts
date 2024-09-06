
let num1: number = 2
let num2: number = 6
console.log(num2 / num1)

let userName: string = 'sina'
let isLoading: boolean;
let postId: number | string;
let album: any

const sum = (a: number, b: number): number => {
    return a + b
}

let stringArray = ['sina', 'amir', 'reza']
let carArray = ['bmw', 'benz', 1985]
let mixedData = ['cup', true, 523]

// its incorrect because stringArray is typed string
// stringArray.push(12)
stringArray.push('javad')

// its correct because carArray is union type of string and number
carArray[0] = 78
carArray.unshift(45)

// its incorrect because stringArray is typed string
// stringArray=carArray

// its correct because carArray is union type of string and number
carArray = stringArray

// its correct because carArray is union type of string , number , boolean
// carArray=mixedData

let test = []
let singer: string[] = [];
singer.push('ebi')

// Tuple
//tuple is a special type of array where the types and the number of elements are fixed. 
let tupleArray: [string, number, boolean] = ['naser', 456, false]
let mixed = ['ghooli', 45, false]

// its correct because carArray is union type of string , number , boolean
mixed = tupleArray
// its incorrect because tupleArray requires 3 element(s) but source may have fewer
// tupleArray=mixed

let myObject: object
myObject = {}
// its correct because array itself is object
myObject = []

let actor = {
    name: 'hamed',
    age: 26,
}

// // actor.name=14

// interface Guitarist  {
//     // question mark makes a property optional
//     name?: string,
//     active: boolean,
//     albums: (number | string)[]
// }
type Guitarist = {
    // question mark makes a property optional
    name?: string,
    active: boolean,
    albums: (number | string)[]
}


const guitaristOne: Guitarist = {
    // name: 'afshin',
    active: true,
    albums: ['album1', 4596, 3205]
}

const guitaristTwo: Guitarist = {
    name: 'vahid',
    active: false,
    albums: ['albumOne', 8888, 2020]
}

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()} `
    }
    return 'Hello'
}

console.log(greetGuitarist(guitaristOne))
