"use strict" // treat all js code as newer version

console.log(3+3); //6 add the value
console.log("2"+1);//21 number is convert to string

console.log(typeof("2"+1));// String number is work like String

console.log(1+"2"); //12 string

console.log(1+2+"2");//33 

console.log(1+"2"+1);// 121

console.log(1+3+"5"+7);//457

let name = "laxman";
let age = 21;
let isLoggedIn = true;

console.log(typeof(name));//String
console.log(typeof(age));//number
console.log(typeof(isLoggedIn));//boolean
console.log();


/*number => 2 to power 53 =>Type = number
bigInt
String=> ""               =>string
boolean => true/false     => boolean
null => standalone value  =>object
undefine =>khali          =>undefined
Symbol                    => undefined

*/
console.log(typeof "");//string
console.log(typeof 2);//number
console.table([typeof isLoggedIn,typeof null,typeof undefined, typeof symbol]);


console.log(typeof([undefined,"",34,Symbol]))//object



