// import fsPromises from "node:fs/promises";
import fs from "node:fs";

setTimeout(() => {
  console.log("hello");
}, 0);

// // Async I/O
// const fileContent = await fsPromises.readFile("async_io.md", "utf-8");
// console.log(fileContent);

// Sync I/O
const fileContent = fs.readFileSync("a.txt", "utf-8");
console.log(fileContent);

console.log("LAST LINE");


// Synchronous code
// Asynchronous code
// Promisified code
// .then, .catch, .finally
// async/await