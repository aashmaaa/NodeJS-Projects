const userDashboard = (req, res) => {
  res.status(200).json({
    status: "Inside Dashboard!",
  });
};
module.exports = userDashboard;
