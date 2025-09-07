// The change event fires when the value of an input, select, or textarea changes and the element loses focus (blur), or when a selection changes.

const inputSelected = document.getElementById("username");
const selectSelected = document.getElementById("color");

input.addEventListener("change", (e) => {
  console.dir(e.target.value); // e is the event object here
  console.dir(inputSelected.value);
});

select.addEventListener("change", (e) => {
  console.log(e.target.value);
  console.log(selectSelected.value);
});
