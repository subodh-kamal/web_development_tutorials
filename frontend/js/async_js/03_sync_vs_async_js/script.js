// const image = document.querySelector("img");
// const button = document.querySelector("button");

// button.addEventListener('click', () => {
//   const xhr = new XMLHttpRequest();
//   console.log(xhr);

//   xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
//   xhr.send()
// });

// ***********************************************************************************************

// const button = document.querySelector("button");
// const image = document.querySelector("img");

// button.addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();
//   console.log(xhr);

//   xhr.responseType = "json";

//   xhr.addEventListener("load", () => {
//     console.log(xhr.response);
//     image.src = xhr.response.message;
//   });

//   // xhr.onload = () => {
//   //   image.src = xhr.response.message;
//   // };

//   xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//   xhr.send();
// });

// ***************************************************************************************************

// const button = document.querySelector("button");
// const image = document.querySelector("img");

// button.addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();

//   xhr.responseType = "json";

//   xhr.addEventListener("load", () => {
//     console.log(xhr);
//     // console.log(xhr.response);
//     // console.log(JSON.parse(xhr.response));
//     // image.src = JSON.parse(xhr.response).message;
//     image.src = xhr.response.message;
//   });

//   xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//   xhr.send();
// });

// ALL THE ABOVE CODES ARE FOR XHR

// *********************************************************************************************

// Below codes represent Synchronous vs Asynchronous js

const button = document.querySelector("button");
const image = document.querySelector("img");

button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  // xhr.responseType = "json"; // This method will not work if the xhr.open() is false, Instead we have to write JSON.parse()
  console.log(xhr);

  xhr.addEventListener("load", () => {
    image.src = JSON.parse(xhr.response).message;
    // image.src = xhr.response.message;
    console.log(xhr);

    console.log("Dog image is coming from Synchronous code");
  });

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  // xhr.open("GET", "https://dog.ceo/api/breeds/image/random", false); // 3rd argument: false means now this code becomes synchronous. true means asynchronous.
  xhr.send();
});

// setTimeout(() => {
//   console.log("This is asynchronous code");
// }, 4000);

// *********************************************************************************************

// Code for blocking main thread of js. This is synchronous code

const blockingBtn = document.querySelector(".blocking-btn");

blockingBtn.addEventListener("click", () => {
  const startTime = Date.now();
  let currentTime = startTime;
  console.log(startTime);
  console.log(currentTime);

  let count = 0;

  while (startTime + 2000 > currentTime) {
    currentTime = Date.now();
    count++;
    console.log("Loop ran:", count, "times");
    console.log(startTime);
    console.log(currentTime);
  }
});

// ---------------------------------------------------------------------------------------------------------------------

// const a = Date.now(); // 5000
// let b = a; // 5000

// while (a + 2000 > b) {
//   b = Date.now();
// }
