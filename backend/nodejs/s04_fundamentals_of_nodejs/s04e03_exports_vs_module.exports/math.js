function sum(...nums) {
  return nums.reduce((curr, acc) => curr + acc);
}

function product(...nums) {
  return nums.reduce((curr, acc) => curr * acc);
}

/* 1 */
// module.exports = sum;
// module.exports = product;

/* 2 */
/* module.exports = {
  sum,
  product,
}; */

/* 
// This code will not work because after = we are creating a new object here and adding some new properties while the main object was module.exports which is still empty as we haven't added anything there.

exports = {
sum,
product,
}

*/

/* 3 */
// module.exports.sum = sum;
// module.exports.product = product;

/* 4 */
exports.sum = sum;
exports.product = product;

// console.log(module.exports === exports); // Output: true

/* This is behind the scenes:

exports = module.exports

similarly we can do like:

math = module.exports

and then,

math.sum = sum;
math.product = product;

console.log("module");

*/