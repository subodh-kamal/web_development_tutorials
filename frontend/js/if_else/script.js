// Statement vs Expression

/*

Statement:

    1. if-else
    2. switch case
    3. loops
    4. variable declaration | for eg: let a = 2; | we cannot assign this in a variable like:  let ans = let a =2 | This is will throw syntax error

    -> We cannot store statements into variables.
    -> If we try to store any statement into variable then it will throw syntax error.

Expression:

    -> We can store expression into variables.

    1. ternary operator is an expression
    2. function declaration is an expression
    - function calling is also an expression
    3. all methods are expressions. Like forEach(), map(), filter(), reduce()
    4. all conditions are expressions. for eg: 3>2; and so on...
    5. all operators are expressions. for eg: comparison operator, logical operator, arithmetic operator, and so on...

*/

/* if (5 > 4) {
  ("true");
} else {
  ("false");
} */

// ---------------------------------------------------------------

/* 

In Chrome DevTools (and most browsers’ consoles), when you type something directly in the console tab, it’s treated like you’re in a JavaScript REPL (Read–Eval–Print-Loop).

That means:

Read → It takes the code you typed.

Eval → It evaluates the code.

Print → It displays the result (return value) of the evaluated expression.

Example

if (true) {
  5;
} else {
  10;
}

Here’s what happens:

if (true) → runs the first block.

The block { 5; } → last evaluated expression is 5.

Because you’re in the REPL, that value gets printed automatically.

If you were running the same code inside a .js file in a browser or Node, nothing would be printed unless you explicitly used:

console.log(5);
Why this is different from console.log:

REPL output = Chrome automatically shows the return value of what you typed.

console.log() = You manually send something to the console.

*/

// console.log(if (5 > 4) {
//   ("true");
// } else {
//   ("false");
// }
// );
