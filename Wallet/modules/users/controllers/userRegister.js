const mongoose = require("mongoose");

const userRegister = async (req, res) => {
  const Users = mongoose.model("users");

  const { name, email, password, balance, address } = req.body;

  // validation logic here

  //creation logic here

  try {
    const createdUser = await Users.create({
      name,
      email,
      password,
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
