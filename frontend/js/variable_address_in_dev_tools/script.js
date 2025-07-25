/* In short, value is Subodh and refrence is variable address.
primitive types checks the value and non-primitive type checks the reference.
In primitve types, if the variable address(reference) is different but the value is same then it will give true result like == true and also === true.
But in reference types, variable address is checked, so if the variable address(reference) is different, then it will give the result false instead of value being same, like == false and also === false.
*/

const firstName = "Subodh";
const firstNameAgain = "Su" + "bodh"; // This string will be assigned a different variable address. But, if we check the equality like == then it will give true and also === true . But in case of non-primitive type == false and === false
const lastName = "Kamal";
const userAge = 25;
const birthYear = 2000;
const isGraduate = true;
const hasJob = false;
const myNull = null;
const myUndefined = undefined;
const myEmptyString = "";
const myNaN = NaN;

const obj1 = {
  userName: "Anil Kamal",
  profession: "Software Developer",
};

const obj2 = {
  userName: "Anil Kamal",
  profession: "Software Developer",
};

const obj3 = { ...obj1 };
