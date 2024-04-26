const mongoose = require("mongoose");

const userLogin = (req, res) => {
  res.status(200).json({
    status: "Inside userLogin!!!",
  });
};

module.exports = userLogin;
