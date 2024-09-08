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

    public getAge(){
        console.log(`Hi, im ${this.age}`)
    }
}

class Programmer extends Coder{
    
    constructor(name: string, music: string, age: number, language: string){
        super(name,music,age,language)
    }
    public getLanguage(){
        console.log(`I write ${this.language}`)
    }
}
const student = new Coder('sina', 'pop', 26, 'English')
const teacher=new Programmer('reza','Jazz',37,'Javascript')
teacher.getAge()
teacher.getLanguage()