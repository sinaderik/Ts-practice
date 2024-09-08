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
console.log('----------------------');
class MusicPlayer {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const guitarist = new MusicPlayer('amir', 'guitar');
console.log(guitarist.play('strums'));
class Actor {
    constructor(name) {
        this.name = name;
        this.id = ++Actor.actorId;
    }
    static getActorId() {
        return Actor.actorId;
    }
}
Actor.actorId = 0;
const jimmy = new Actor('jimmy');
const sara = new Actor('sara');
const henrry = new Actor('henrry');
console.log(henrry.id);
console.log(sara.id);
console.log(jimmy.id);
console.log(Actor.getActorId());
