export default class user{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }
}

export function printName(user){
    console.log(`User's name is ${user.age}`);
}

export function printAge(user){
    console.log(`User is ${user.age} years old`);
}