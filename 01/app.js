const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello Worldddd!!");
});

app.get("/k_cha", (req, res) => {
  res.status(200).send("Hello World! ani k cha ta??");
});

app.listen(8000, () => {
  console.log("Server started!!");
});
