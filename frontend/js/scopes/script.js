/* Main Scope is "Global Scope"

There are two scopes inside Global Scope:
A. Window Scope
B. Script Scope

- 'variable declaration using var' and 'function declaration' comes under "Window Scope"

- variable declaration using 'let' and 'const' comes under "Script Scope"

We have other scopes as well:

- Local Scope -> occur in functions
- Block Scope -> if-else statement, loops, functions
- Lexical Scope -> current scope + all other outer scopes till global scope 
- Module Scope -> need to explore

*/

// ----------------------- Script Scope ------------------------------

let firstMonth = "January";
const secondMonth = "February";

console.log(firstMonth);
console.log(secondMonth);

// Below two lines of code will give 'undefined' because it is not present inside window object

// console.log(window.firstMonth);
// console.log(window.secondMonth);

// using globalThis to check in node environment.
console.log(globalThis.firstMonth);
console.log(globalThis.secondMonth);

// ---------------------- Window Scope -------------------------------

var thirdMonth = "March";

console.log(thirdMonth);
console.log(window.thirdMonth);
