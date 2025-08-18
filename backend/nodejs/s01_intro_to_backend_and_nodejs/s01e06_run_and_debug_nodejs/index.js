const fs = require("fs");

const text = fs.readFileSync(
  "E:\\folder_1\\all-in-one\\web-dev\\web_development\\backend\\nodejs\\s01_intro_to_backend_and_nodejs\\s01e06_run_and_debug_nodejs\\words.txt"
);

// We can access any file from any loction on our system. We just need to provide the file location.

console.log(text.toString());

console.log(global); // this will run in nodejs only
console.log(globalThis); // this will run in both website and nodejs

console.log("Program Ended");
