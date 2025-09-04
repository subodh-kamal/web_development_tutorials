const person = {
  name: "Subodh",
  age: 27,
};

for (let key in person) {
  console.log(key); // "name", "age"
  console.log(person[key]); // "Subodh", 27
  console.log(key, ":", person[key]); // "name: Subodh", "age: 27"
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// It is recommendable to not use for...in. Instead, first do Object.keys or Object.values then it will give an array and then use for...of