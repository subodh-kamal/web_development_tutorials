/* 

There are two things: 
1. Module Systems 
2. Module

1. Common JS Module System (CJS): 'module.exports' object and 'require' function

2. ES6 Module System (ESM): 'import' and 'export'

Besides this, there are 3 main Categories of Modules:

1. Core/Internal/Native Node.js Modules
2. User Modules (These are also referred as internal modules)
3. NPM/External Modules

*/

// ----------------------------------------------------------------------------------------------------

// require("./math.js"); // This is Common JS

import {num} from "./math.js" // This is ES6. And this is named import. We can also rename the varaibale here like: import {num: number} from "./math.js"

import num1 from "./math.js"; // This is default import. .mjs extension will also work here. But there is no any validation in Common JS Module System, We can use any random customized extension in CJS.

console.log(num1);

// We can use both named and default export and import in ES6 Module System in the same file at the same time. For eg;

// import num1, {num} from "./math.js"; // This will work perfectly. Here, we are using default import and named import in the same line.

// We Cannot use multiple 'require' in the same line in Common JS Module System because 'require' is a function and a function can return only one value at a time.

var a = 3;
// b = 8; // This will throw an error because 'strict mode' is enabled by default in ES6 Module Sysytem.

console.log(num);

// console.log(require); // This will not work in here.