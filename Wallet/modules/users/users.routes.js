const express = require("express");
const userRegister = require("./controllers/userRegister");
const userLogin = require("./controllers/userLogin");
const userDashboard = require("./controllers/userDashboard");
const userRouter = express.Router();

//publicRoute
userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

//ProtectedRoute
userRouter.get("/dashboard", userDashboard);

module.exports = userRouter;
