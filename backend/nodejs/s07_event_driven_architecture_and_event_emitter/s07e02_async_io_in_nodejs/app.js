import fsPromises from "fs/promises";

setTimeout(() => {
  console.log("hello");
}, 0);

// Async I/O
const fileContent = await fsPromises.readFile("async_io.md", "utf-8");
console.log(fileContent);

console.log("LAST LINE");
