import fs from "node:fs";
// import fs from "fs/promises";

// const a = fs.readFileSync("./index.html", "utf-8");
// console.log(a);

fs.readFile("./index.html", "utf-8", (err, data) => {
  console.log(data);
});

// console.time();
// let i = 0;

// const timerId = setInterval(() => {
//   console.log(i++);
//   if (i = 100) {
//     clearInterval(timerId);
//     console.timeEnd();
//   }
// }, 5);

// const a = await fs.readFile("./fs_module.txt");

// console.log("Reading Done!");

// console.log("End");
