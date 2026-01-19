// Inline Event Listeners

const h1 = document.querySelector("h1");
const card = document.querySelector(".card");
const container = document.querySelector(".container");
/* 
function check() {
  console.log("This is a check function");
} */

/* function checkAgain() {
  console.log("This is a checkAgain function");
} */

// console.dir(h1);

// h1.onclick = check; // 2nd way of implementing Event Listeners
// h1.onclick = checkAgain; // This will overrite the above check function. That is why, this is also not the good approach.

// h1.addEventListener("click", check); // 3rd way of implementing Event Listeners
// h1.addEventListener("click", checkAgain); // Above line of code and this line of code, both will work. That is why, this is best approach.

let count = 1;

card.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  newCard.innerText = count++;
  container.append(newCard);
});
