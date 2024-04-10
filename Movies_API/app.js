const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

//console.log(process.env.mongo_connect);

const mongo_connect = process.env.mongo_connect;

mongoose
  .connect(mongo_connect, {})
  .then(() => {
    console.log("Mongo connection successful!");
  })
  .catch((err) => {
    console.log("Connection to mongo failed!");
  });

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  info: {
    type: String,
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

const movieModel = mongoose.model("movies", movieSchema);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

app.listen(8000, () => console.log("Server started!!"));
