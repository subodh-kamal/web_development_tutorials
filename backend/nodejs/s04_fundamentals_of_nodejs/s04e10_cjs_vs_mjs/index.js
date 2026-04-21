// const timer = require('./timer.js');

console.log("Rnning index.js");
import timer from "./timer.js";
console.log(timer);


// import timer from "./timer.js"; // ES6 modules are hoisted.

// This is how we use top level await in ES6 only. We cannot use like this in CJS
// const response = await fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(response);

// This is how we use await in CJS but it is not common in use. So avoid it
// (async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   console.log(response);
// })();
