/* To understand roughly, value is Anil or Subodh and refrence is variable address.

primitive types checks the value and non-primitive type checks the reference.

In primitve types, if the variable address(reference) is different but the value is same then it will give true result like == true and also === true.

for eg: 

const name1 = "Subodh"
const name2 = "Su" + "bodh"

The above 2 variables will be assigned different variable address but the value will be same like: Subodh | So, it will produce output: true, because it checks the value like: "Subodh" and, hence called "Value types"

But in reference types, variable address(refrence) is checked, so if the variable address(reference) is different, then it will give the result false instead of value being same, like == false and also === false.

Here, for eg:

const obj1 = {}
const obj2 = {}

The above 2 variables will be assigned different variable address so, it will produce output: false, because it checks the reference (variable address) and, hence called "Reference types"

*/

// ---------------------------------------------------------------------------------------------------------------

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

const obj3 = { ...obj1 }; //These two objects will be assigned different address.
const obj4 = obj2; //These two objects will be assigned the same address.
