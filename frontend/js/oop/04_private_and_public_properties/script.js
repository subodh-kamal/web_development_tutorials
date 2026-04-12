class CreateUser {
  #age; // This feature is updated as of now
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#age = age;
  }

  #hi = "Hello World"; // This still works

  getBirthYear() {
    console.log(this.#hi);
    return new Date().getFullYear() - this.#age;
  }

  #getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const user1 = new CreateUser("Subodh", "Kamal", 25);
const user2 = new CreateUser("Kamal", "Dev", 30);
