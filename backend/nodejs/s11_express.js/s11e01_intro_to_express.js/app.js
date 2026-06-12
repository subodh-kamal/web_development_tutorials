import express from "express";

const app = express();

const port = 4000;

app.disable("x-powered-by");

app.get("/", (req, res) => {
    res.send("Alan Turing: 23rd June 1912 - 7th June 1954, was an English polymath and is widely considered as the father of 'theoretical computer science'")
//   res.setHeader("Content-Type", "text/html; charset=utf8");
//   res.end(
//     "Claude Elwood Shanon 🫡 April 30 1916 - Feb 24, 2001 is known as the 'Father of Information'",
//   );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
