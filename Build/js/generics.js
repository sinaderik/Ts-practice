"use strict";
const echoString = (arg) => {
    return arg;
};
const echo = (arg) => {
    return arg;
};
const isObj = (arg) => {
    if (typeof arg === 'object' && !Array.isArray(arg) && arg !== null) {
        return true;
    }
    return false;
};
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && Object.keys(arg).length === 0) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const checkTrueOrFalse = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && Object.keys(arg).length === 0) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
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
];
console.log(getUsersProperty(allUsers, 'name'));
class Laptop {
    constructor(name) {
        this.laptopName = name;
    }
    get Name() {
        return this.laptopName;
    }
    set Name(name) {
        this.laptopName = name;
    }
}
const asus = new Laptop('q550');
const hp = new Laptop('q550');
asus.Name = 'F7404';
// asus.Name=1012
hp.Name = 'hp 707';
hp.Name = 4050;
console.log(asus.Name);
console.log(hp.Name);
