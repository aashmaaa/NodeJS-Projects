const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  //   console.log(req.headers);

  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    res.status(401).json({
      status: "failed",
      message: "Authorization failed! You must be logged in!!",
    });
    return;
  }
  const token = authorizationHeader.split("Bearer ")[1];
  //   console.log(token);
  try {
    const checkToken = jwt.verify(token, process.env.jwt_salt);
    req.user = checkToken;
  } catch (e) {
    res.status(401).json({
      status: "failed",
      message: "Authorization failed! Invalid Token!",
    });
    return;
  }

  next();
};

//checking authentication header

module.exports = auth;
