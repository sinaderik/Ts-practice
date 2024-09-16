interface Assignment {
    studentId: number,
    title: string,
    grade: number,
    verified?: boolean
}

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