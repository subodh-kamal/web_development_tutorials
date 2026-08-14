- ***NPM Modules*** and ***NPM Packages*** are two different things.
- Modules do have extention but packages don't have.
- Modules are simply files. But, packages resides inside folders.

**Important Clarification**

- Module → concept in JavaScript (code unit)
- Package → distribution unit in npm
---
- Every npm module you install comes as a package
- But not every package is necessarily used as a module (for example: CLI Package like vite. vite is used for development purpose only)
- Every npm module is distributed as a package, but not every package is necessarily used as a module.

**Those modules which are present inside node_modules folder are called npm modules.**

**There are 2 more things about NPM**
1. npmjs.com (Where all NPM packages are available)
2. npm command line tool (we use the code like: **npm i axios** [to install the axios package from npmjs.com])