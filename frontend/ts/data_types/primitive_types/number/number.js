// ChatGPT the topics and jargons that you don't know
var num1 = 25;
var num2 = 10;
var total = num1 + num2;
console.log(total);
var octal = 1;
var binary = 1;
var hexadecimal = 0x00001;
console.log(num2 + octal);
console.log(num2 + binary);
console.log(num2 + hexadecimal);
/*

📘 Type Inference in TypeScript
Type Inference is a powerful feature in TypeScript where the compiler automatically detects the type of a variable, function return, etc., without explicit annotations.

🔹 1. Basic Variable Inference
When you assign a value directly, TypeScript infers the type:

    let age = 25;         // inferred as number
    let name = "Subodh";  // inferred as string
    let isAdmin = true;   // inferred as boolean

You don't need to write:

    let age: number = 25; // manual typing (optional)


🔹 2. Function Return Type Inference
If you don't specify a return type, TS infers it:

    function add(a: number, b: number) {
        return a + b; // inferred return type: number
    }


🔹 3. Contextual Typing
The type is inferred based on the context:

    window.addEventListener("click", (e) => {
        // e is inferred as MouseEvent
        console.log(e.clientX);
    });


🔹 4. Best Common Type Inference
When you assign an array with mixed elements, TS finds the common type:

    let data = [1, 2, 3]; // inferred as number[]
    let mixed = [1, "hello", true]; // inferred as (string | number | boolean)[]


🔹 5. Destructuring Inference
Types are inferred from the structure:

    const [a, b] = [1, 2];     // a, b → number
    const { x, y } = { x: 5, y: "hi" }; // x → number, y → string


🔹 6. Limitations of Inference
Sometimes TypeScript can't infer types well. In those cases, use explicit types:

    function getValue(value: any) {
        return value.toFixed(); // ❌ Error: any doesn't have toFixed()
    }

✅ Fix:

    function getValue(value: number) {
        return value.toFixed();
    }


🟨 Summary

    Place	Inference Applies?
    Variable assignment	✅
    Function return values	✅
    Destructuring	✅
    Array values	✅ (best common type)
    Function parameters	❌ (need explicit types)

*/
