const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./data.txt", "utf8", (err, data) => {
    if (err) res.send("Cannot read file!");

    res.send(data);
  });
});

app.get("/write", (req, res) => {
  const writingData = "Mango";
  fs.writeFile("./data.txt", writingData, (err) => {
    if (err) res.send("Error writing");
    res.send("Write Successful");
  });
});

app.listen(8000, () => {
  console.log("Server started!!");
});
