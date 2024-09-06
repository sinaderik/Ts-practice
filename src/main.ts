
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
carArray[0]=78
carArray.unshift(45)

// its incorrect because stringArray is typed string
// stringArray=carArray

// its correct because carArray is union type of string and number
carArray=stringArray

// its correct because carArray is union type of string , number , boolean
// carArray=mixedData

