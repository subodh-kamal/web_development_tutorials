/* 

A Higher-Order Function (HOF) is a function that either:

1. Takes one or more functions as arguments,

2. Returns a function,

3. Or both.

*/

// -----------------------------------------------------------------------------------------------

// ✅ Simple Example:

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// function processUserInput(callback) {
//   const name = "Subodh";
//   console.log(callback(name));
// }

// processUserInput(greet); // Output: Hello, Subodh!
// console.log(processUserInput(greet)); // Output: Hello, Subodh! and undefined

// Here, processUserInput is a HOF because it takes another function (greet) as an argument.

// ----------------------------------------------------------------------------------------------

// ✅ Real-Life JavaScript Examples of HOFs:

// 1. .map()

// const nums = [1, 2, 3];
// const doubled = nums.map((num) => num * 2); // [2, 4, 6]

// 2. .filter()

// const nums = [1, 2, 3, 4];
// const even = nums.filter(num => num % 2 === 0); // [2, 4]

// 3. .reduce()

// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, val) => acc + val, 0); // 10

// ------------------------------------------------------------------------------------------

// ✅ Returning a Function (Another form of HOF):

function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10

// ------------------------------------------------------------------------------------------

/*

Summary:
A Higher-Order Function treats functions as first-class citizens — it can accept them as arguments or return them as values.

*/
