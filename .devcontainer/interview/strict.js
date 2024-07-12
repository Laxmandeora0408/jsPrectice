/* 
//NOTE = "use strict"

//NOTE- JavaScript's strict mode was added in ECMAScript 5. It makes JavaScript code stricter and handles errors more strictly during runtime. It also encourages writing cleaner code and detects errors and bugs that might not be found otherwise.

 js ki first line me bhi kr skte he or kisi function me bhi use kr skte he.


"use strict";

 let userName = "laxmandeora0408";
console.log(userName);
*/

//NOTE - Strict Important

class Instagram {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  getInfo() {
    return `your username is: ${username} & and your password is: ${email}`;
  }

  static getPassword(password) {
    return password;
  }
}

class Kajal extends Instagram {
  constructor(username, email, password) {
    super(username, email, password);
  }
}

const laxman = new Instagram("Laxman Deora", "laxmandeora@0408", "Laxman");
const kajal = new Instagram("kajal Sharma", "kajalsharma@0408", "Kajal");

console.log(
  `hey ${kajal.username} your email is here: ${kajal.email} & password is here: ${kajal.password}`
);
console.log(`hey ${laxman.username} your email is here: ${laxman.email} & password is here: ${laxman.password}`);
