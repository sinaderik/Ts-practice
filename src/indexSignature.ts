interface Car {
    [index: string]: string | number
    company: string,
    name: string,
    model: number,

}

const myCar: Car = {
    company: 'benz',
    name: 'c200',
    model: 2022,
}
const carName:string='name'
console.log(myCar[carName])

for (const key in myCar) {
    console.log(`${key} : ${myCar[key]}`)
}