console.log("First line of code in math.js file");

console.log(__filename); // This will throw an error here because this is not defined here in ES6 Module System.

export const num = 4; // This is ES6. And this is named export.

const num1 = 9;

export default num1; // This is default export.

// module.exports = num; // This is Common JS

console.log("Last line of code in math.js file");