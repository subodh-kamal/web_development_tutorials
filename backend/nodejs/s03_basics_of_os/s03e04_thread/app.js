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





/* 

Concepts/Jargons in OS

- What is OS
- What is Kernel
- What is CPU
- What is Cores - Physical cores and Logical cores
- What is Process
- Spawning a process
- States of process -> Ready, Running, Waiting, Terminated, Sleep
- What is Thread
- Can a process exist without a thread
- Context Switching
- Concurency vs Parallelism\
- Memory (RAM)
- Storage (ROM)
- Environment Variables
  - In Windows OS:
    - 1. User-defined Variables (Permanent)
    - 2. System Variables (Permanent)
    - 3. Process Variables (Temporary)

- Files, Folders, Symbolic Links, and Path Systems

- Executable Files:
    - Script executable file (any script file that executes the code inside it, like .sh, .js, .css, .html, etc.)
    - Binary executable file (having .exe extension in Windows OS, but in Linux, it is extensionless )

- File Permissions in Windows and Linux
- How Commands work in Terminal (5 Categories)

*/