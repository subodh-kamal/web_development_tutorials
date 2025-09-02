const container = document.querySelector(".container");

console.log(container.innerText); // This will select only the text inside the tag.
console.log(container.textContent); // This will select the text as well as spaces, new line inside the tag. This will select everything inside the tag.
console.log(container.innerHTML); // This will overrite the inner HTML if set like: <p></p>.
