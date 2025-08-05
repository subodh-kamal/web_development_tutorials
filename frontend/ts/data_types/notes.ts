/* 

📚 Categories of Data Types in TypeScript

------------------------------------------------------------------------------------

🔹 1. Primitive Types
These are the most basic types in TypeScript (same as in JavaScript).

    a. number:-	let age: number = 25;
    b. string:-	let name: string = "Subodh";
    c. boolean:-	let isAdmin: boolean = false;
    d. null:-	let x: null = null;
    e. undefined:-	let y: undefined = undefined;
    f. symbol:-	let sym: symbol = Symbol("id");
    g. bigint:-	let big: bigint = 9007199254740991n;

------------------------------------------------------------------------------------

🔹 2. Special Types

    a. any:-	Opts out of type checking
    b. unknown:-	Like any, but safer
    c. void:-	Typically used in functions with no return
    d. never:-	Represents values that never occur (e.g. a thrown error or infinite loop)

------------------------------------------------------------------------------------

🔹 3. Object Types

    a. object:-	let person: object = { name: "John" };
    b. array:-	let nums: number[] = [1, 2, 3];
    c. tuple:-	let user: [string, number] = ["Alice", 30];
    d. function:-	(a: number, b: number) => number

------------------------------------------------------------------------------------

🔹 4. User-Defined / Advanced Types

    a. interface:-	interface User { name: string; age: number }
    b. type alias:-	`type ID = number
    c. enum:-	enum Status { Success, Error }
    d. class:-	class Car { brand: string }

------------------------------------------------------------------------------------

🔹 5. Union & Intersection Types

    a. union:-	`let id: string
    b. intersection:-	type A = X & Y;

*/
