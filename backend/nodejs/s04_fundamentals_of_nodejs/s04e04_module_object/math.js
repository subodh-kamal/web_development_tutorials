module.exports = 598;

console.log(module.isPreloading);

/* 
Run this code to preload the module and you will get 'true' output.

node --require ./math.js index.js

*/

/* 

math.js is the internal module that we have created. But, axios is the external module. And we can get that by running the command like: npm i axios

Every module has its own object. For example, math.js is a module and index.js is a module; each has its own separate module object in the local variable section.

module {} object represents a whole module.

*/