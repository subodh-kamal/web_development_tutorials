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
