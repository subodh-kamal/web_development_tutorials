/* In short, value is Anil or Subodh and refrence is variable address.
primitive types checks the value and non-primitive type checks the reference.
In primitve types, if the variable address(reference) is different but the value is same then it will give true result like == true and also === true.
But in reference types, variable address(refrence) is checked, so if the variable address(reference) is different, then it will give the result false instead of value being same, like == false and also === false.
*/

const myName = "Anil";

const username1 = "";
const username2 = "";

const user1 = {};
const user2 = {};

const user3 = {
  firstName: "Subodh",
  lastName: "Kamal",
  age: 25,
  education: "Computer Engineering",
  city: "Kathmandu",
};

const qualification = "education";

const user4 = {
  firstName: "Subodh",
  "last-Name": "Kamal",
  age: 25,
  education: "Computer Engineering",
  city: "Kathmandu",
};

// ---------------------------------------------------------------------------------------------------------------

// Ways of accessing values

// console.log(user3.firstName); // dot notation
// console.log(user4["last-Name"]); // bracket notation
// console.log(user4[qualification]); // accessing value using outside variable
// console.log(user4["first" + "Name"]); // accessing value using expression also

// ---------------------------------------------------------------------------------------------------------------

// Ways to add and update values

// console.log(user3.age); // 25
// user3.age = 27; // updating values
// console.log(user3.age); // 27
// user3["is-student"] = false; // adding new properties
// console.log(user3);

// ---------------------------------------------------------------------------------------------------------------

// Creating object using constructor function

// const singletonObj1 = new Object({
//   firstDay: "Sunday",
//   secondDay: "Monday",
//   thirdDay: "Tuesday",
// });

// const singletonObj2 = new Object({ ...singletonObj1 });

// const user5 = { ...singletonObj1 };

// console.log(singletonObj1);
// console.log(singletonObj2);
// console.log(user5);

// Every object will be assigned a new address, no matter how it is created.

// ---------------------------------------------------------------------------------------------------------------

// const user6 = {
//   firstName: "Ravi",
//   lastName: "Dev",
//   addressDetails: {
//     // addressDetails will be assigned a new address
//     city: "Kathmandu",
//     pincode: 446600,
//     state: "Bagmati",
//     moreDetails: {
//       // moreDetails will be assigned a new address
//       population: 38908293,
//       area: "650 sq km",
//     },
//   },
// };

// console.log(user6);

// ---------------------------------------------------------------------------------------------------------------

// Question: Swap the values of a and b

// First method: Using a Temporary Variable

let a = 2;
let b = 5;

let temp = a;

a = b;
b = temp;

console.log(a);
console.log(b);

// Second method: Using a Destructuring Variable

let c = 3;
let d = 6;

[c, d] = [d, c];

console.log(c);
console.log(d);
