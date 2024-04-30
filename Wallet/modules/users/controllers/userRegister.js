const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
  const Users = mongoose.model("users");

  const { name, email, password, balance, address } = req.body;

  // validation logic here

  //creation logic here
  const encPwd = await bcrypt.hash(password, 10);

  try {
    const createdUser = await Users.create({
      name, //name:name
      email,
      password: encPwd,
      balance,
      address,
    });
  } catch (e) {
    res.status(400).json({ status: "failed", message: e.message });
  }
  res.status(200).json({
    status: "Inside userRegister!!!",
  });
  return;
};

module.exports = userRegister;
