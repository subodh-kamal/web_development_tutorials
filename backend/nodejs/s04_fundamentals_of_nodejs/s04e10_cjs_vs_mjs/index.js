// console.log("index.js code");

// import timer from "./timer.js"; // ES6 modules are hoisted.

const response = await fetch("https://jsonplaceholder.typicode.com/todos");
console.log(response);

// (async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   console.log(response);
// })();
