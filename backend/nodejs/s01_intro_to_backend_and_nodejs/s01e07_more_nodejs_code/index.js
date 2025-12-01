const fs = require("fs");

const text = fs.readFileSync(
  "E:\\folder_1\\all-in-one\\web-dev\\web_development\\backend\\nodejs\\s01_intro_to_backend_and_nodejs\\s01e06_run_and_debug_nodejs\\words.txt"
);

// We can access any file from any loction on our system. We just need to provide the file location.

console.log(text.toString());

// console.log(global); // this will run in nodejs only
// console.log(globalThis); // this will run in both website and nodejs

// console.log("Program Ended");

// Similarly, we can write, delete, update the file and we can perform all this operations asynchronously also. For this, use ChatGPT.

// --------------------------------------------------------------------------------

// we can start process with the code. Just ask ChatGPT. For eg:-

// const { exec } = require("child_process");

// exec("start chrome"); // one way to start a process
// // exec("Replace this text inside the double quote with file_path"); // another way to start a process

// --------------------------------------------------------------------------------------

// starting a server

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.end("You are under our control now");
// });

// server.listen(1000);
