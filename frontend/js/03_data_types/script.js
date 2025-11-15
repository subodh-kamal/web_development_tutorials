console.log(typeof 5); // output: number
console.log(typeof "Mango"); // output: string
console.log(typeof true); // output: boolean
console.log(typeof false); // output: boolean
console.log(typeof undefined); // output: undefined
console.log(typeof null); // output: object  // it should be 'null' here but by mistake (or intentionally) it is object and it has not been changed since then because lots of code has already been deployed by using this code on the internet and it would affect the code if type changed to null.

// *****************************************************************************************************************

const obj = {};

console.log(typeof obj); // output: object

const arr = [];

console.log(typeof arr); //output: object

function fun() { // This is function declaration and function definition
  console.log(typeof fun); // output: function // but it is always object
}

fun();  // function calling

console.log("This line is added to check if the code is working well or not");