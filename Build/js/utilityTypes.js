"use strict";
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
