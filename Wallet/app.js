const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./modules/users/users.routes");

require("dotenv").config();

const app = express();
app.use(express.json());

//Models

require("./models/users.model");

mongoose
  .connect(process.env.mongo_connect, {})
  .then(() => {
    console.log("Connected to mongodb successfully!");
  })
  .catch((e) => {
    console.log("Connection to mongodb failed", e);
  });

//routes
app.use("/users", userRouter);

app.listen(8080, () => {
  console.log("Server started!");
});
