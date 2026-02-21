const button = document.querySelector("button");
const image = document.querySelector("img");

function fetchDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => (image.src = json.message));
}

button.addEventListener("click", fetchDog);

// Trigger on Enter key
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    fetchDog();
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////

let userData;

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log("one");
        console.log(json)
        console.log("two");
        userData = json;
      })

// fetch is an asynchronous code.

console.log("Outside");
