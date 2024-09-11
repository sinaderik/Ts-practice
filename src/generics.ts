const echoString = (arg: string): string => {
    return arg
}

const echo = <T>(arg: T): T => {
    return arg
}

const isObj = <T>(arg: T): boolean => {
    if (typeof arg === 'object' && !Array.isArray(arg) && arg !== null) {
        return true
    }
    return false
}

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && Object.keys(arg as keyof T).length === 0) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}

// same function but using interface for its return type
interface CheckBoolean<T> {
    arg: T,
    is: boolean
}

const checkTrueOrFalse = <T>(arg: T): CheckBoolean<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && Object.keys(arg as keyof T).length === 0) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}

interface HasId {
    id: number
}
const processUser = <T extends HasId>(user: T): T => {
    return user
}

const getUsersProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const allUsers = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }
]

console.log(getUsersProperty(allUsers,'name'))