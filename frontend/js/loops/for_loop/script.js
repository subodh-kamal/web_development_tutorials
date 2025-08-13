/*

for(initialization; condition; afterthought(or update)){
    statement
}  

// ------------------------------------------

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
*/
// ChatGPT how to fix this issue by providing this code as a prompt.

// --------------------------------------------------------------------

// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// ---------------------------------------------------------------------------------------------

// below code will not throw any error because for is special case and we need not to use block like {}.

// for (let i = 1; i <= 3; i++)
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);

// -------------------------------------------------------------------------------------------

// if (true) console.log("hello");

// if (true) var a = 5; // No error: because var is function scoped and a will be created in global space.

// if (true) let a = 5; // error because it is block scoped.

// -----------------------------------------
// const array = [];

// for (let i = 1; i <= 3; i++) {
//   const callback = () => {
//     console.log(i);
//   };
//   array.push(callback);
//   setTimeout(callback, 1000);
// }

// ------------------------------------------------------------------------------------------

// We can create as many variables as we want using variable declarations only once, but we have to use , after every variable assignment. For eg:

// let a = "Subodh",
//   b = 2,
//   c = true;

//------------------------------------------------------------------------------------------

// for (let i = 0, getI = () => i; i < 3; i++) {
//   console.log(getI());
// }
// Logs 0, 0, 0

//-------------------------------------------------------------------------------

// for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
//   console.log(getI());
// }
// Logs 0, 1, 2

// ----------------------------------------------------------------------------------------

for (
  let i = 0, getI = () => i, incrementI = () => i++;
  getI() < 3;
  incrementI()
) {
  console.log(i);
}
// Logs 0, 0, 0