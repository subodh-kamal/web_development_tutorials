// console.log(import.meta); // This is an Object. We can find this is both Node.js as well as in Browser. This Object is only accessible in ES6 Module System.
// console.log(import.meta.dirname); // We cannot find this in Browser
// console.log(import.meta.filename); // We cannot find this in Browser

// In browser, we get url as http://.........(Using http protocol) But in Node.js we get like: file://....... ( Using file transfer protocol)

import { num } from "./math.js";

// const meta = import.meta; // We can destructure filename and dirname here. Like:
// console.log(meta);

// we can add any properties on 'import.meta' object like this:

import.meta.a = "Subodh";

const {filename, dirname, a} = import.meta;
console.log(filename, dirname, a);

// process.chdir('./src'); // This will change the directory. So, We should not use this code here.

console.log(process.cwd()); // We can get the directory by this code also. But, this will produce output only for the current directory. To know more: Timestamp: 16:00 of this tutorial.
// By default, JS Engiene or browser adds only two properties inside 'import.meta' Object which is 'resolve' function and 'url'. But Node.js adds two more properties which is: 'filename' and 'dirname'