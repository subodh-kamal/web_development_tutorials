function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(2, 3));
console.log(multiply(2));
console.log(multiply(2, undefined));
console.log(multiply(2, null));
console.log(multiply(2, ""));
console.log(multiply(2, NaN));

//---------------------------------------------------------

function rollADie(numberOfSides = 6) {
  // This is how we used to solve this problem before the introduction of default parameter.
  //   if (numberOfSides == undefined) {
  //     numberOfSides = 6;
  //   }
  return Math.floor(Math.random() * numberOfSides) + 1;
}

console.log(rollADie(4));
console.log(rollADie());
console.log(rollADie(6));
