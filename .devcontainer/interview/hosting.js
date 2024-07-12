//hosting

/* Note- hosting in javascript is a behavior in which variable and function declearation are moverd or "hosted" on the top of their containing scope during the compilation phase This mean that you can use variable and function before you declear in your code.
*/

/*

console.log(`ignore everything with a ${name}`);// undefine name =>
var name = "smile";
*/

/*
console.log(`ignore everything with a ${name}`);//Cannot access 'name' before initialization
let name = "smile";
*/

/*
console.log(`ignore everything with a ${name}`) //Cannot access 'name' before initialization
const name = "smile";

NOTE 1. - variable declaration var, const, let are hoisted on the top of their scope but only var is initializd with undefined
*/

/*
idiom("smile");
function idiom(name){
    console.log(`ignore everything with a ${name}`);
}

NOTE 2. function decleration is fully hosted and its printed value
*/

/*
idiom("smile"); // cannot acces before intialization
let idiom =(name)=>{
    console.log(`ignore everthing with a ${name}`);
}

Note-3. Function expression are not hosted in same way function declarations
*/

