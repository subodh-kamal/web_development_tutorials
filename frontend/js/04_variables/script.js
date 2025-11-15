//This is the example of value types
let x = 12;
let y = x;

x = 22;

console.log("value of x is: ", x); // Output: 22
console.log("value of y is: ", y); // Output: 12

// Question: Swap the value of two different variables.

let a = 2;
let b = 3;

temp = a;

a = b;

b = temp;

console.log(a);
console.log(b);

// There are more ways to swap the value of variables. to know more, just chatGPT.

// -------------------------------------------------------------------------------------------------------------------

//This is the example of reference types...This topic is explained in "deep copy vs shallow copy" topic.
var obj1 = {
  name: "Mango",
  rollno: 2,
};

var obj2 = obj1;

obj2.rollno = 3

console.log("obj1:", obj1);
console.log("obj2:", obj2);
