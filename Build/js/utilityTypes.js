"use strict";
// Partial
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const student1 = {
    studentId: 101,
    title: 'Finall project',
    grade: 0
};
const resultAssignment = updateAssignment(student1, { grade: 18 });
console.log(resultAssignment);
// required and readonly
const recordAssignment = (assign) => {
    // some logic
    return assign;
};
// console.log(recordAssignment(student1))
const assignVerified = student1;
// assignVerified.grade=54
// Record
// here we're saying that all values and keys must be string
const colorCode = {
    blue: '#8520',
    green: '#2368',
    red: '99025'
};
const finallGrade = {
    kelly: 'A',
    Pitter: 'C'
};
