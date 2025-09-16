// console.log(typeof require); // output: function

const { sum, product } = require("./math");

console.log(sum(1, 2, 3, 4));
console.log(product(1, 2, 3, 4));

// The return value of require function is module.exports and math.exports is an object.

// console.log(sum);
