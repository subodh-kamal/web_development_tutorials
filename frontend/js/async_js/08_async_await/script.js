/*

async function makeRequest() { // by using async, promise is by default resolved. And, we are converting a synchronous function into an asynchronous function by using 'async' keyword.
  throw new Error("Failed!"); // To reject the promise

  console.log("This line will not run"); // This code is not reachable
}

*/

// -----------------------------------------------------------------------------------------------------------

/*

async function makeRequest() {
  const api1 = fetch("https://dummyjson.com/users");
  api1.then((res) => res.json()).then((data) => console.log(data));

  console.log("fetch program");
}

makeRequest();

*/

// ----------------------------------------------------------------------------------------------------------

async function makeSecondReq() {
  const api2 = await fetch("https://dummyjson.com/users");
  const data = await api2.json();

  /*
    // We can perform above two lines of code into a single line as coded below: But, this is not common

     const api2 = await (await fetch("https://dummyjson.com/users")).json();
     console.log(api2);
  
  */

  console.log(data); // This code will run first
  console.log("await program"); // This code will run later

}

makeSecondReq();

// ---------------------------------------------------------------------------------------------------------

/* 

- async gives resolved promise
- await also gives resolved promise
- await seems like working synchronously but it actually works asynchronously and also works like .then
- await is only valid in async function and top-level module. For eg: type="module" in script tag.

*******To handle error in async await, we use try and catch.

*/
