import EventEmitter from "node:events";

const emitter = new EventEmitter();

emitter.setMaxListeners(2); // It will generate warning if use more than 2 event of the same name. For eg: more than 2 "abc" will throw warning but still we can use that.

// If you are not getting any suggestions here after emitter, then type: npm i @types/node -D in your terminal to get the suggestions. TO KNOW MORE: Timestamp: 04:00
emitter.on("abc", () => {
  console.log("abc event fired  11111111");
});

emitter.on("abc", () => {
  console.log("abc event fired 222222222");
});

emitter.once("xyz", () => {
  console.log("xyz fired");
});

// emitter.emit("abc");
// emitter.emit("abc");
// emitter.emit("xyz"); // xyz will fire only once irrespective of how many times we emit this.
// emitter.emit("xyz");

console.log(emitter._events);

emitter.emit("xyz");

console.log(emitter._events);


/*

Revise the concepts of:

1. Synchronous code
2. Asynchronous code
3. promises
4. .then, .catch
5. async, await
6. classes and all the concepts of class

*/
