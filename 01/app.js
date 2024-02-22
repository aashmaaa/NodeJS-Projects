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
  const writingData = "Mclaren";
  fs.writeFile("./data.txt", writingData, (err) => {
    if (err) res.send("Error in writing");
    res.send("Write is Successful");
  });
});

app.listen(8000, () => {
  console.log("Server started!!");
});
