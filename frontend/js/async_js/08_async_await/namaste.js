/*

- What is async?
- What is await?
- How async await works behind the scenes?
- Examples of using async/await
- Error handling
- Interview questions
- async await vs Promise .then/.catch

*/

// const p = new Promise((resolve, reject) => {
//   resolve("Promise Resolved Value!!");
// });

// // always returns a promise
// async function getData() {
//   return p;
// }

// const dataPromise = getData();
// // console.log(data);

// dataPromise.then((res) => console.log(res));

// ******************************************************************

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 5000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("Hello World!");
//   const val1 = await promise1;
//   console.log("Logging console");
//   console.log(val1);

//   const val2 = await promise2;
//   console.log("Again logging console");
//   console.log(val2);
// }

// handlePromise();

// function gettingData() {
//   promise.then((res) => console.log(res));
// }

// gettingData();

const API_URL = "https://api.github.com/users/subodh-kamal";

async function handlePromise() {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);
}

handlePromise();
