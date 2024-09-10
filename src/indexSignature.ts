// thats how we loop on an object that with the use of index signature 
// if we didnt have the index signature we would have problem

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
const carName: string = 'name'
console.log(myCar[carName])

for (const key in myCar) {
    console.log(`${key} : ${myCar[key]}`)
}
// but here is a new problem : we can access to property that doesnt exist in our object
console.log(myCar.engine)

// thats where keyof , typeof comes in handy : with the use of keyof we can loop over an object without 
// need of index signature 
interface Student {
    name: string,
    city: string,
    code: number,
}
const newStudent: Student = {
    name: 'reza',
    city: 'tehran',
    code: 205
}
for (const key in newStudent) {
    console.log(`${key} : ${newStudent[key as keyof Student]}`)
}

// now lets say we dont have access to the interface and we dont know our object what type is it :

for (const key in newStudent) {
    console.log(`${key} : ${newStudent[key as keyof typeof newStudent]}`)
}

console.log('----------------------')

const logStudentKeys = (student: Student, key: keyof Student): void => {
    console.log(`${key} : ${student[key]}`)
}

logStudentKeys(newStudent, 'city')


// Record utitlty type is equvilant to => [key:string]: string | number
type Lessons = 'math' | 'programming' | 'history'
type Grades = Record<Lessons, number | string>

const lastExam:Grades={
    math:17,
    programming:20,
    history:'15'
}


