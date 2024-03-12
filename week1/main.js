import user, { printName as printName, printAge } from "./user";

const user = new user('Bob', 11)
console.log(user);
printName(user);
printAge(user);
