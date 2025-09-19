// console.log(typeof require); // output: function

const { sum, product } = require("./math");

console.log(sum(1, 2, 3, 4));
console.log(product(1, 2, 3, 4));

// The return value of require function is module.exports and math.exports is an object.

// console.log(sum);

/*
 // This section of code is for understanding purpose only.
const user = {
  name: "Subodh Kamal",
  age: 27,
  address: {
    city: "Kathmandu",
    state: "Bagmati",
  },
  hobbies: ["Travelling", "Coding", "Exploring"],
};

Note: module is equivalent to user object and exports is equivalent to address object that is below.

let address = user.address;

console.log(user.address === address); // Output: true

// address.pincode = 2327327;
// address.country = "Nepal";

// console.log(address);
// console.log(user.address);

address = {
  pincode: 2327327,
  country: "Nepal",
}

console.log(address);
console.log(user.address);
*/
