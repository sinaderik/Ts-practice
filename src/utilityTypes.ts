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
const assignVerified: Readonly<Assignment> = student1;
// assignVerified.grade=54


// Record
// here we're saying that all values and keys must be string
const colorCode: Record<string, string> = {
    blue: '#8520',
    green: '#2368',
    red: '99025'
}

type StudentName = 'kelly' | 'Pitter'
type LetterGrades = 'A' | 'B' | 'C' | 'D'

const finallGrade: Record<StudentName, LetterGrades> = {
    kelly: 'A',
    Pitter: 'C'
}

interface GradeData {
    assign1: number,
    assign2: number
}
const gradeData: Record<StudentName, GradeData> = {
    kelly: { assign1: 75, assign2: 80 },
    Pitter: { assign1: 95, assign2: 85 }
}

// Pick and Omit 
const studentAssignment: Pick<Assignment, 'studentId' | 'title'> = {
    studentId: 202,
    title: 'semi-final',
}
const preview: Omit<Assignment, 'verified' | 'studentId'> = {
    grade: 19,
    title: 'project'
}

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, 'D'>
type highGrade = Extract<LetterGrades, 'A' | 'B'>

// nonNullable
type allPossibleGrade = 'john' | 'pitter' | undefined | null
type onlyNames = NonNullable<allPossibleGrade>

// ReturnType
// type NewAssign = { title: string, point: number }
const createNewAssign = (title: string, point: number) => {
    return { title, point }
}
type NewAssign = ReturnType<typeof createNewAssign>
const tsAssign: NewAssign = createNewAssign('math', 7)

// Parameter
type AssignParams = Parameters<typeof createNewAssign>
const info: AssignParams = ['generics', 100]
const tsAssign2: NewAssign = createNewAssign(...info)
console.log(tsAssign2)

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}
const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
}
fetchUsers().then(users => console.log(users))
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>