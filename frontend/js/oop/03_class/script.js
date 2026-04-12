// function CreateUser(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// CreateUser.prototype.getBirthYear = function() {
//   return new Date().getFullYear() - this.age;
// }

// CreateUser.prototype.getFullName = function() {
//   return this.firstName + ' ' + this.lastName;
// }

// const user1 = new CreateUser("Subodh", "Kamal", 25);
// const user2 = new CreateUser("Kamal", "Dev", 30);

//----------------------------------------------------------------------------

class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const user1 = new CreateUser("Subodh", "Kamal", 25);
const user2 = new CreateUser("Kamal", "Dev", 30);
