"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const gradeData = {
    kelly: { assign1: 75, assign2: 80 },
    Pitter: { assign1: 95, assign2: 85 }
};
// Pick and Omit 
const studentAssignment = {
    studentId: 202,
    title: 'semi-final',
};
const preview = {
    grade: 19,
    title: 'project'
};
// ReturnType
// type NewAssign = { title: string, point: number }
const createNewAssign = (title, point) => {
    return { title, point };
};
const tsAssign = createNewAssign('math', 7);
const info = ['generics', 100];
const tsAssign2 = createNewAssign(...info);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield response.json();
    return data;
});
fetchUsers().then(users => console.log(users));
