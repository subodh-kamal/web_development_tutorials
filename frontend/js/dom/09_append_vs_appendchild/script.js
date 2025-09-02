const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const card = document.querySelector(".card");

// container.appendChild(h1); // This will cut and paste h1 tag with their content.
// container.appendChild(h1.cloneNode()); // This will copy empty h1 tag with attribute but not with content.
// container.appendChild(h1.cloneNode(true)); // This will copy h1 tag with their attribute and content.

// for (let i = 2; i <= 100; i++) {
//   const newCard = card.cloneNode();
//   newCard.innerText = i;
//   container.appendChild(newCard);
// }

/*

- 1. return value of append(). for eg: container.append(newCard) is undefined but appendChild(). for eg:      container.appendChild(newCard) is an element

- 2.  container.appendChild("Hello") // This will throw an error. Hello is string here but not a text node.

- 2.  container.append("Hello") // This will append Hello inside container.

- To create text node, we use document.createTextNode("Hello")

- 3. We can append multiple things: for eg: container.append("Hello", h1, "World") and so on... But appendChild() will ignore everything after first argument.

*/
