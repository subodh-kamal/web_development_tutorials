function sum(...nums) {
  return nums.reduce((curr, acc) => curr + acc);
}

function product(...nums) {
  return nums.reduce((curr, acc) => curr * acc);
}

// ****************** 1 ********************
// Use this if you have to return one thing at once+++++++++++++++++++++
// module.exports = sum;
// module.exports = product; // Now, the value of module.exports is product and not sum.

// Why is the below two lines of code are not working?
// Because in exports object, we are first assigning sum function which is behind the scene object, and overriting it with product fuction which is also object behind the scene. But, the return value of require function is not exports object but it is module.exports objects which is still empty

// Don't use this--------------------------------
// exports = sum;
// exports = product;

// ****************** 2 ********************
// Use this if you have to return multiple things at once++++++++++++++++++++
module.exports = {
  sum,
  product,
};

/* 
// This code will not work because after = we are creating a new object {} here and adding some new properties while the main object was module.exports which is still empty as we haven't added anything there.

// Don't use this----------------------------------
exports = {
sum,
product,
}

*/

// ****************** 3 ********************
// Don't use this because this is taking too much code although this is right code.----------
// module.exports.sum = sum;
// module.exports.product = product;

// ****************** 4 ********************
// Don't use this because product will overrite sum.----------------
// exports.sum = sum;
// exports.product = product;

// console.log("line no. 37 :", module.exports === exports); // Output: true

/* This is behind the scenes:

exports = module.exports

similarly we can do like:

math = module.exports

and then,

math.sum = sum;
math.product = product;

console.log("module");

*/

console.log(module);