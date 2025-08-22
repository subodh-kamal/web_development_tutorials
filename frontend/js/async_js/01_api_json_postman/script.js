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
