const resolve = document.querySelector(".resolve");
const reject = document.querySelector(".reject");

new Promise((resolve, reject) => {
  resolve("Resolved");
  // reject("Rejected");
  console.log("Inside executor"); // This runs immediately... This code runs first
}) // Above codes are synchronous and all the codes of .then, .catch, .finally are asynchronous
// .then returns a promise, .catch also returns a promise
  .then((data) => {
    console.log(data);
    return "This is .then";
  })
  .then((data) => {
    console.log(data);
    return "something"
  })
  .catch((err) => {
    console.log(err);
    return "nothing"
  })
  .finally(() => { // .finally does not accept any parameter.
    console.log("Wheather it is resolved or rejected, it's setteled!");
    return "finally" // This code will not execute.
  })
.then((data) => {
    console.log(data);
})
