function sum(...nums) {
  return nums.reduce((curr, acc) => curr + acc);
}

function product(...nums) {
  return nums.reduce((curr, acc) => curr * acc);
}

// module.exports and exports are by deafault objects. That is why we can add properties directly to these objects as shown below:

exports.sum = sum;
exports.product = product;

// module.exports.sum = sum;
// module.exports.product = product;

/* module.exports = {
  sum,
  product,
}; */
