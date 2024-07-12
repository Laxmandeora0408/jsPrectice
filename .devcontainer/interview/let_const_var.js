// diffrence betveen var, let & const

/*NOTE - var is the function scope .
function github() {
  var userName = "Laxmandeora0408";
  var password = "Laxman";
  var isLoggedIn = true;
  if (isLoggedIn) {
    var userName = "KajalSharma0408"; //due to hosting and function scope of var username & password value reassign
    var password = "kajal";

    console.log(`Your username is: ${userName} & password is: ${password}`);
  }

  console.log(`Your username is: ${userName} & password is: ${password}`);
}
github();

//NOTE- output = Your username is: KajalSharma0408 & password is: kajal
//NOTE-output =  Your username is: KajalSharma0408 & password is: kajal

*/

/*
function github() {
  let userName = "Laxmandeora0408";
  let password = "Laxman";
  let isLoggedIn = true;
  if (isLoggedIn) {
    let userName = "KajalSharma0408"; // username & password value reassign
    let password = "kajal";

    console.log(`Your username is: ${userName} & password is: ${password}`);
  }

  console.log(`Your username is: ${userName} & password is: ${password}`);
}
github();

NOTE- outpu - Your username is: KajalSharma0408 & password is: kajal
NOTE- Your username is: Laxmandeora0408 & password is: Laxman
*/

//const is also same as let variable but value is constant only
