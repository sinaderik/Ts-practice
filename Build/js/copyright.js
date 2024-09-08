"use strict";
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
class Coder {
    constructor(name, music, age, language) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
    getAge() {
        console.log(`Hi, im ${this.age}`);
    }
}
class Programmer extends Coder {
    constructor(name, music, age, language) {
        super(name, music, age, language);
    }
    getLanguage() {
        console.log(`I write ${this.language}`);
    }
}
const student = new Coder('sina', 'pop', 26, 'English');
const teacher = new Programmer('reza', 'Jazz', 37, 'Javascript');
teacher.getAge();
teacher.getLanguage();
