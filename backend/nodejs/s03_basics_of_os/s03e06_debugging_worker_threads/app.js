const { Worker } = require("worker_threads");

new Worker("./a"); // First thread
new Worker("./b"); // Second thread
new Worker("./c"); // Third thread
