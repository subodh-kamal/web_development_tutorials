// function firstMultiply(a, b, c) {
//   return a * b * c;
// }

// firstMultiply(2, 3, 4);

// firstMultiply(2)(3)(4);

// -------------------------------------------------------------------------------------------

// Implementing currying

// function secondMultiply(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// secondMultiply(2)(3)

// function thirdMultiply(x) {
//   return function (y) {
//     return function (z) {
//       return x * y * z;
//     };
//   };
// }

// -----------------------------------------------------------------------------------

// Making an infinite currying function

// function fourthMultiply(x) {
//   return function (y) {
//     if (y) return fourthMultiply(x * y); // Recursion is used here
//     return x;
//   };
// }

// fourthMultiply(2)(3)(4)(5)(); // We do not call function like this in production

// Making currying function by using Closures

function multiplyByN(x) {
  return function (y) {
    return x * y;
  };
}

const multiplyByFour = multiplyByN(4);

// multiplyByFour(4);

// Making currying function by using bind method:

