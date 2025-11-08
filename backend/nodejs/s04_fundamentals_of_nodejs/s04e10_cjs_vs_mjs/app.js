/* 
Common JS Modules:

1. Modules of CJS reads and loads the file synchronously. It uses main thread.
2. File extension is optional.
3. If we provide full path, then we can load any file using cjs.
4. It is a convention to add .cjs extension in the file name.
5. CJS imports are not hoisted.
6. It is optional to set "type": "commonjs" in package.json because commonjs is the default module system of Node.js
7. In CJS, 'this' keyword points to module.exports by default.
8. Top level 'await' is not allowed.
9. Only one value can be exported.
10. dirname and filename can be accessed with the code: __dirname and __filename
11. strict mode is not enabled by default.


*/

// Both module system uses main thread for execution.

/* 
ES6 Modules:

1. Modules of ES6 reads and loads the file asynchronously.
2. File extension is mandatory.
3. We can not load any file, only .js and .mjs files are allowed
4. It is a convention to add .mjs in the file extention.
5. MJS imports are hoisted.
6. We have to set "type": "module" in the package.json
7. In MJS, 'this' keyword is undefined.
8. Top level 'await' is allowed.
9. Multiple values can be exported.
10. dirname and filename can be accessed with the code: import.meta.dirname and import.meta.filename
11. strict mode is enabled by default.


*/