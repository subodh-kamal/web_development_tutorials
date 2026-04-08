// We can use spread operator with strings, objects, arrays, and at the time of function calling

/* // With Strings

let firstName = "David";

let spellingOfDavid = [...firstName];

console.log(spellingOfDavid); */

// -------------------------------------------------------------------------------------

// With Objects
/* 
let userDetails = {
  firstName: "Rock",
  lastName: "Feller",
  age: 21,
};

let userDetails2 = { ...userDetails, fullname: "Rock Feller" };

console.log(userDetails2);
 */

// ------------------------------------------------------------------------------------

// With Arrays

let arr1 = [1, 2, 3, 4];

/* // This is how we solve this problem before es6

let concatinatedArray = arr1.concat(5, 6);

console.log(concatinatedArray); */

let arr2 = [...arr1, 5, 6];

console.log(arr2);

// -----------------------------------------------------------------------------------

/* // With function calling

const arr3 = ["Rock", "Paper", "Sissor"];

function hello(a, b, c) {
  return a + " " + b + " " + c;
}

console.log(hello(...arr3)); */
