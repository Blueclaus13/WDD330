import U, { printName as printName, printAge } from "./user.js";

const user = new U('Bob', 11)
console.log(user);
printName(user);
printAge(user);
