// const image = document.querySelector("img");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();
//   console.log(xhr);

//   xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//   xhr.send();
// });

// ******************************************************************************************

const button = document.querySelector("button");
const image = document.querySelector("img");

button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  // console.log(xhr);

  xhr.responseType = "json";

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
  // we can write the above two lines of code after load event code

  xhr.addEventListener("load", () => {
    console.log(xhr.response);
    image.src = xhr.response.message;
  });

  // xhr.onload = () => {
  //   image.src = xhr.response.message;
  // };

});

// **********************************************************************************

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 1000);

// console.log("3");
