// Each file is called a module in node.js And there are 2 types of module systems in Node.js For eg: Common js module system(CJS), ES6 module system (ESM) 
// The return value of require function is module.exports and math.exports is an object.

// console.log(typeof require); // output: function

const { sum, product } = require("./math");

console.log(sum(1, 2, 3, 4));
console.log(product(1, 2, 3, 4));

// console.log(sum);

/* const sum = require("./sum"); // This require function takes only module(file) as an argument. Nothing else will work here.
const product = require("./product")

console.log(sum(1, 2, 3, 4));
console.log(product(1, 2, 3, 4));

console.log(typeof require); // function
console.log(typeof module); // object
console.log(typeof exports); // object
console.log(typeof module.exports); // object */
