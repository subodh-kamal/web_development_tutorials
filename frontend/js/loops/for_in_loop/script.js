const person = {
  name: "Subodh",
  age: 27
};

for (let key in person) {
  console.log(key);        // "name", "age"
  console.log(person[key]); // "Subodh", 27
}