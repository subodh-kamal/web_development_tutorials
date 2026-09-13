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

/* console.log("Started"); // 1st output

const p = new Promise((resolve) => {
  console.log("Just before resolve function"); // 2nd output
  resolve("resolve code");
  console.log("Just after resolve function"); // 3rd output
})

console.log(p); // 4th output // Promise itself is synchronous but .then callback is asynchronous
p.then((data)=> {
  console.log(data); // 6th output i.e, resolve code
}) 

console.log("Ended"); // 5th output */

// const p = new Promise(
//   (resolve, reject) =>
//     let sucess = true
//   if(sucess) {
//     return resolve("I am finally Resolved Sir")
//   } else  reject("Rejected"),
// );

// console.log(p);

//********************************************************************************* */

const p = new Promise(() => {}); // This is the basic code structure of promise

// Now,
// we got the 2 method inside Promise Object that is resolve() and reject()

const p1 = new Promise((resolve, reject) => {
  resolve("This is resolve method of Promise object");
  reject("This is reject method of Promise object");
});

// Now, we have .then() and .catch()

const p2 = new Promise((resolve, reject) => {
  // resolve("this is resolved data using .then() method");
  reject("this is rejected data using .catch() method");
});

p2.then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise finished!");
  });

// .finally() executes after a Promise settles, whether it is resolved or rejected.
