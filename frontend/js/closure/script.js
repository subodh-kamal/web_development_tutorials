// function one(num) {
//   const a = 2;
//   function two() {
//     const b = 3;
//     console.log(num);
//     console.log(a);
//     function three() {
//       console.log(a);
//       console.log(b);
//     }
//     three();
//   }
//   two();
// }

// one(10); // Output: 10, 2, 2, 3

// -----------------------------------------------------------------------------------------------

// function one(num) {
//   const a = 2;
//   function two() {
//     const b = 3;
//     console.log(num);
//     console.log(a);
//     function three() {
//       console.log(a);
//       console.log(b);
//     }
//     three();
//   }
//   return two;
// }

// const value = one(42); // returns function two
// value(); // calls two, prints 42, 2, 2, 3

// --------------------------------------------------------------------------------------------

// function one(num) {
//   const a = 2;
//   function two() {
//     const b = 3;
//     function three() {
//       console.log(num); // from one
//       console.log(a); // from one
//       console.log(b); // from two
//     }
//     return three;
//   }
//   return two(); // returns the function three
// }

// const value = one(42); // returns three function
// value(); // calls three → logs: 42, 2, 3

// --------------------------------------------------------------------------------------------

// function x(num) {
//   const a = num;
//   const b = 5;
//   console.log(b);
//   function child() {
//     console.log(a, b, num);
//   }
//   return child;
// }

// const y = x(1);

// console.log(y);

// console.log(y);

// -------------------------------------------------------------------------------

// Changing the value of closure

// function x() {
//   let a = 0;
//   function child(increment) {
//     a = a + increment;
//   }
//   return child;
// }

// const result1 = x();
// const result2 = x();

// console.dir(result1);
// console.dir(result2);

// everytime and in every calling, closure will be assigned to new memory

// Closure is available after function is ended.

// ----------------------------------------------------------------------------------------

// Use of Closure

// ---------------------- USE NO. 1 ----------------------------------------------------

function task() {
  const userName = "Subodh";

  function callBack() {
    console.log(userName);
  }

  console.dir(callBack); // To check the scope in console tab

  setTimeout(callBack, 5000);
}

task();

// -----------------------------------------------------------------------------------------

// ---------------------- USE NO. 2 ----------------------------------------------------

// Creating once function using closure

function onceFunction() {
  let executed = false;

  return function () {
    if (!executed) {
      executed = true;
      console.log(
        "This is the first and the last time your are accessing this code. If you call this function again and agian then, You will not get this output."
      );
    }
  };
}

const output = onceFunction();

// copy and paste this code in your console tab : output()

// ----------------------------------------------------------------------------------

// ---------------------- USE NO. 3 ----------------------------------------------------

// Memoization

/* 

Advantage: We can use the variable in any child function. TLDR: Create variable once in the parent function and use it in any child

Disadvantage: Everytime we call the function, it creates new memory and so on... Beacause of this, using and unnecessary calling the function will cause garbage fill and hence memory leak(leaking (overflowing))

*/