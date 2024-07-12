/*
Asynchronous JavaScript is the programming method where operations are run independently allowing the program to continue running while waiting for certain tasks to complete. Synchronous JavaScript is the programming approach where tasks of a program are executed sequentially one at a time.
*/

//Synchronous

// function myFather() {
//   console.log("6-9AM papa dukan par rahenge");
// }

// function mySister() {
//   myFather();
//   console.log("9-4PM didi dukan par rhegi");
// }

// function myDuty() {
//   mySister();
//   console.log("4-8PM ye he meri duty he");
// }

// myDuty();

//Asynchronous

function myDuty(){
    setTimeout(function myFather(){
        console.log("Hmesa late aate he chai pikr")
    },5000)
}

myDuty();
console.log('wait krte he kb tk aate he');
console.log('chale kya ghar ab');