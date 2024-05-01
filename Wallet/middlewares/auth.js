const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  //Authentication logic

  console.log(req.headers);
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    res.status(401).json({
      status: "failed",
      message: "Authorization failed! must be logged in! ",
    });
    return;
  }
  //shecking authorization header

  const token = authorizationHeader.split("Bearer")[1];

  try {
    const checkToken = jwt.verify(token, process.env.jwt_salt);
  } catch (e) {
    res.status(401).json({
      status: "failed",
      message: "Authorization failed!!Invalid token!!",
    });
    return;
  }
  next();
};
module.exports = auth;
