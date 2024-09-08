const year = document.getElementById('year') as HTMLElement
const thisYear = new Date().getFullYear().toString()
year.setAttribute('datetime', thisYear)
year.textContent = thisYear

class Coder {
    public name: string
    public readonly music: string
    private age: number
    protected language: string

    constructor(name: string, music: string, age: number, language: string) {
        this.name = name
        this.music = music
        this.age = age
        this.language = language
    }

    public getAge() {
        console.log(`Hi, im ${this.age}`)
    }
}

class Programmer extends Coder {

    constructor(name: string, music: string, age: number, language: string) {
        super(name, music, age, language)
    }

    public getLanguage() {
        console.log(`I write ${this.language}`)
    }
}
const student = new Coder('sina', 'pop', 26, 'English')
const teacher = new Programmer('reza', 'Jazz', 37, 'Javascript')
teacher.getAge()
teacher.getLanguage()
console.log('----------------------')
interface Musician {
    name: string
    instrument: string
    play(action: string): string
}

class MusicPlayer implements Musician {
    name: string
    instrument: string
    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }
    public play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const guitarist = new MusicPlayer('amir', 'guitar')
console.log(guitarist.play('strums'))

class Actor {
    static actorId: number = 0
    name: string
    id: number
    constructor(name: string) {
        this.name = name
        this.id = ++Actor.actorId
    }
    static getActorId(): number {
        return Actor.actorId
    }
}
const jimmy=new Actor('jimmy')
const sara=new Actor('sara')
const henrry=new Actor('henrry')
console.log(henrry.id)
console.log(sara.id)
console.log(jimmy.id)
console.log(Actor.getActorId())