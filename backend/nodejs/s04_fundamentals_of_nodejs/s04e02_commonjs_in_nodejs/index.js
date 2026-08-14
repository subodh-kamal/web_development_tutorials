// Each file is called a module in node.js And there are 2 types of module systems in Node.js i.e., Common js module system(CJS), ES6 module system (ESM) 
// The return value of require function is module.exports and math.exports is an object.

/*  *** IMPORTANT *** -> require function works in 3 steps:
1. Finds the file that is provided to the require function like: require("./sum")
2. Executes all the code except module.exports inside the provided file
3. Executes the code module.exports

####### reqire is a synchronous function

*/

// console.log(typeof require); // output: function

const { sum, product } = require("./math");

console.log(sum(1, 2, 3, 4));
console.log(product(1, 2, 3, 4));

// console.log(sum);

// const sum = require("./sum"); // This require function takes only module(file) as an argument. Nothing else will work here other than valid file path.
// const product = require("./product")

/* console.log(sum(1, 2, 3, 4));
console.log(product(1, 2, 3, 4));

console.log(typeof exports); // object
console.log(typeof module); // object
console.log(typeof module.exports); // object 
console.log(typeof require); // function */
