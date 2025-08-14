// To understand simply break the word 'debouncing' -> de + bouncing -> reverse of bouncing. And the meaning is clear.

// ---------------------------------------------------------------------------------------------
// Without Debounce
// This will resize the window many times.

// window.addEventListener("resize", () => {
//   console.log("Resized");
// });

// *************************************************

// With Debounce

// function debounce(func, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// window.addEventListener(
//   "resize",
//   debounce(() => {
//     console.log("Resized after stop");
//   }, 500)
// );

// --------------------------------------------------------------------------------

const inputElement = document.querySelector("input");

const debounce = (func, wait) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

const callApi = (e) => {
  console.log("Calling API: ", e.target.value);
};

const debouncedCallApi = debounce(callApi, 1000);

// console.log(debouncedCallApi);

inputElement.addEventListener("input", debouncedCallApi);
