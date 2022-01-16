import { city } from './test.js';


enum UserLocation {
    "tokyo" = "tokyo",
    "berlin" = "berlin",
}

interface User {
    name: string,
    age: number,
    location?: UserLocation,
    sex?: string,
    isAdult(age: number): boolean
    city: string
}

const getUserData = (user: User): string => {
    return `${user.name} is ${user.age} and lives in ${user.city} He is an ${user.isAdult(user.age) ? 'adult' : 'child'}`;
}

const changeLocation = (location: string, user: User) => {
   // user.location = location;
}

const user: User = {
    name: 'Max',
    age: 30,
    location: UserLocation.berlin,
    sex: "male",
    isAdult(age){
        return age > 16
    },
    city: city
}

// changeLocation("tokyo", user)

console.log(getUserData(user));


const person = { age: 5, sex: "male"}
// Object.freeze(person)

person.age = 45;

console.log(person.age)



class School {
    private _offersDegree: boolean;
    private _hasTeacher: boolean;
    name: string

    constructor(name) {
        this._offersDegree = true;
        this._hasTeacher = true;
        this.name = name;
    }

    protected get offersDegree() {
        return this._offersDegree;
    }

    get hasTeacher() {
        return this._hasTeacher;
    }
}

class University extends School {
    constructor(name) {
        super(name);
    }

}

const uniben = new University("Uniben");


const toUpperCase= <T>(obj: T) => {
    return obj
}

const ans = toUpperCase({ name: "John", age: 15 });
console.log(ans)

// identity function

function identity<T>(obj: T){
    return obj;
}

console.log(identity<string>("spiff"))
console.log(identity<number>(15))



