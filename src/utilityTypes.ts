interface Assignment {
    studentId: number,
    title: string,
    grade: number,
    verified?: boolean
}
// Partial
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate }
}
const student1: Assignment = {
    studentId: 101,
    title: 'Finall project',
    grade: 0
}

const resultAssignment: Assignment = updateAssignment(student1, { grade: 18 })
console.log(resultAssignment)

// required and readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // some logic
    return assign
}
// console.log(recordAssignment(student1))
const assignVerified:Readonly<Assignment>=student1;
// assignVerified.grade=54


// Record
// here we're saying that all values and keys must be string
const colorCode:Record<string,string>={
    blue:'#8520',
    green:'#2368',
    red:'99025'
}

type StudentName='kelly' | 'Pitter' 
type LetterGrades='A'|'B'|'C'|'D'

const finallGrade:Record<StudentName,LetterGrades>={
    kelly:'A',
    Pitter:'C'
}