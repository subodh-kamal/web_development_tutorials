/* const resolve = document.querySelector(".resolve");
const reject = document.querySelector(".reject");

new Promise((resolve, reject) => {
  // resolve("Resolved");
  reject("Rejected");
  console.log("Inside executor"); // This runs immediately... This code runs first
}) // Above codes are synchronous and all the codes of .then, .catch, .finally are asynchronous
// .then returns a promise, .catch also returns a promise
  .then((data) => {
    console.log(data);
    // return data;
    return "This is .then";
  })
  .then((data) => {
    console.log(data);
    return "something"
  })
  .catch((err) => {
    console.log(err);
    return "nothing" // We usuallay don't return anything from here. We just console.log whatever the error is.
  })
  .finally(() => { // .finally does not accept any parameter.
    console.log("Wheather it is resolved or rejected, it's setteled!");
    return "finally" // This code will not execute.
  })
.then((data) => {
    console.log(data);
})
 */

// -----------------------------------------------------------------------------------------


console.log("Started"); // 1st output

const p = new Promise((resolve) => {
  console.log("Just before resolve function"); // 2nd output
  resolve("resolve code");
  console.log("Just after resolve function"); // 3rd output
})

console.log(p); // 4th output // Promise itself is synchronous but .then callback is asynchronous
p.then((data)=> {
  console.log(data); // 6th output i.e, resolve code
}) 

console.log("Ended"); // 5th output
