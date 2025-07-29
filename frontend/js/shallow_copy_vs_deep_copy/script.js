/* To understand roughly, value is Anil or Subodh and refrence is variable address.

primitive types checks the value and non-primitive type checks the reference.

In primitve types, if the variable address(reference) is different but the value is same then it will give true result like == true and also === true.

for eg: 

const name1 = "Subodh"
const name2 = "Su" + "bodh"

The above 2 variables will be assigned different variable address but the value will be same like: Subodh | So, it will produce output: true, because it checks the value like: "Subodh" and, hence called "Value types"

But in reference types, variable address(refrence) is checked, so if the variable address(reference) is different, then it will give the result false instead of value being same, like == false and also === false.

Here, for eg:

const obj1 = {}
const obj2 = {}

The above 2 variables will be assigned different variable address so, it will produce output: false, because it checks the reference (variable address) and, hence called "Reference types"

*/

// ---------------------------------------------------------------------------------------------------------------

// --------------------------- Value Types ------------------------------------

// const userName1 = "Subodh";

// let userName2 = userName1;
// /* same variable address will be assigned to userName1 and userName2 */
// console.log(userName1);
// console.log(userName2);

// userName2 = userName2 + " Kamal";
// // after updating the userName2 in the above line, the variable address will change.
// console.log(userName2);

// ---------------------------------------------------------------------------------------------

// --------------------------- Reference Types ------------------------------------

// ------------------------------ ARRAY ------------------------------------

// const fruits1 = ["Mango", "Appple", "Orange"];

// const fruits2 = fruits1; // same variable address will be assigned here to "fruits2" that was assigned to "fruits1"

// fruits2.push("Dates"); // adding an element to an array
// fruits1[1] = "Banana"; // updating an element of an array

// console.log("fruits1 =", fruits1);
// console.log("fruits2 =", fruits2);

// *********************************************************

// --------------- Object.assign() --------------------------

// const fruits3 = []; // A new variable address will be assigned to "fruits3" which will be unique from all other variable address.

// Object.assign(fruits3, fruits1);

// *********************************************************

// ------------------------- Spread Operator -------------------------

// const fruits3 = [...fruits1];

// console.log("fruits3 =", fruits3);

// *********************************************************

// Another ways to copy array:

const fruits4 = [].concat(fruits1)
const fruits5 = fruits1.slice()

// ---------------------------------------------------------------------------------------------

// ------------------------------ OBJECTS ------------------------------------

const user1 = {
  firstName: "Subodh",
  lastName: "kamal",
};

const user2 = user1; // same variable address will be assigned here to "user2" that was assigned to "user1"

user2.lastName = "Dev"; // updating value of an existing key -> lastName of an Object
user2.age = 25; // adding properties to Object user2
console.log("user1", user1);
console.log("user2", user2);

// *********************************************************

// --------------- Object.assign() --------------------------

const user3 = {}; // A new variable address will be assigned to "user3" which will be unique from all other variable addresses.

Object.assign(user3, user1); // Instead of this, we can use spread operator like shown below:

// *********************************************************

// ------------------------- Spread Operator -------------------------

// // const user3 = {...user1} // spread operator

// // In this case, the variable address will change

// *********************************************************

console.log("user3", user3);

user3.lastName = "Gautam"; // updates lastName only in user3

console.log("user1", user1);
console.log("user3", user3); // property will change here only but not in user1

// ----------- making another copy from Object.assign() --------------

const user4 = Object.assign({}, user3);

console.log("user1 =", user1);
console.log("user3 =", user3);
console.log("user4 =", user4);

user4.isWorking = true;

console.log("user1=== =", user1);
console.log("user3=== =", user3);
console.log("user4=== =", user4);

// --------------------------------------------------------------------

// // Object.assign is old method. Instead we use spread operator, And spread operator will do the same thing but it is short and concise and modern and easy to use.

// ---------------------------------------------------------------------------------------------

/* Check for == and ===
And also copy using object.assign and spread operator and then check if the address is same or not
*/


// ChatGPT deep copy