var num = 5; // This variable is available in Local Scope.

console.log(num);

// How can we create a Global variable in Node.js
// One way is:

globalThis.num2 = 35; // But, this is not a right way to create a Global variable.

console.log(num2);
