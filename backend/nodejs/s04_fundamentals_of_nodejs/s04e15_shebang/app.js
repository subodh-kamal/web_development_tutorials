#!/usr/bin/env node

// Now, just go to the terminal and hit ./app.js and boom app.js file starts executing by using shebang.

console.log("This output is generating from app.js file");

let a = 0;

setInterval(() => {
  console.log(++a);
}, 1000);

// Question at timestamp: 20:54 | To solve: use fs module and use the concept of os that you've learned. And use ChatGPT if needed