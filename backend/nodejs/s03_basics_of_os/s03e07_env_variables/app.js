/* 
Environment Variables -> Key Value pair of Strings

The variables that we create normally are not environment variables. For eg:

num = 25;

PS1 is an env variable.

Path is a special variable

There are multiple categories of env variables.
1. User Variables.
2. System Variables.
3. Process Variables.

type 'env' or 'printenv' in the terminal to check the environment variables of the particular terminal process.

Parent process makes a copy of its variable and gives it to their child. That is why child process cannot change the variable of its parent by applying this code -> process.env.something = 123; Timestamp: 37:00

*********************************Practice this two topics: 07 Understanding Environment Variables in Depth. and 08 Working with Environment Variables in Terminal*********************************

LF -> Line Feed -> Used in MacOS/Linux
CRLF -> Carriage Return + Line Feed -> Used in Windows

\r -> move to start of line -> Commonly used by Classic Mac and older terminals/terminals
\n -> go to next line (new line) -> Used by Linux, macOS, Unix
\r\n -> Line break -> Used by Windows

 */

// const envVariables = process.env;
// console.log(envVariables);

// ----------------------------------------------------------------------------------------------------------

// Mainly the key-value pairs in '.env' file are our credentials like APIs keys, Database Passwords, etc. And we store this file in .gitignore file.

const fs = require("fs");

const fileData = fs.readFileSync("./.env").toString();

fileData.split("\n").forEach((variable) => {
  const [key, value] = variable.split("=");
  process.env[key] = value;
  console.log(key, value);
});

setInterval(() => {
    const a = process.env;
    console.log("hello");
}, 1000);