function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getBirthYear() {
      return new Date().getFullYear() - user.age;
    },
  };
  return user;
}

const user1 = createUser("Subodh", "Kamal", 25);
const user2 = createUser("Kamal", "Dev", 30);

/*

Programming paradigm:
    1. Procedural Programming
    2. Functional Programming -> Concept of pure functions (Modern React.js Programming is based on Functional Programming)
    3. OOP -> Everything inside object (Early days React.js Programming was based on OOP)

*/
