/* console.time();

for (let i = 0; i < 10000000000; i++) {
  if (i % 4000000000 == 0) {
    console.log(`Running loop 1: ${i}`);
  }
}
for (let i = 0; i < 10000000000; i++) {
  if (i % 4000000000 == 0) {
    console.log(`Running loop 2: ${i}`);
  }
}
for (let i = 0; i < 10000000000; i++) {
  if (i % 4000000000 == 0) {
    console.log(`Running loop 3: ${i}`);
  }
}

console.timeEnd(); */

// ------------------------------------------------------------------------------------------------------------------------------

const { Worker } = require("worker_threads");

new Worker("./a"); // First thread
new Worker("./b"); // Second thread
new Worker("./c"); // Third thread

// This is how we perform multi-threading in Node.js. And this is 'concurrent' application as we've implemented the concept of 'concurrency'

// Concept of 'Concurrency' and 'Parallelism'

// Parallelism means running different process at the same time in different cores for the full time.