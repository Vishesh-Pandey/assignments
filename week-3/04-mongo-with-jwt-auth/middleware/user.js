const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  try {
    const token = req.headers.authorization;
    const words = token.split(" "); // convert to array of string from spaces
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

    // jwt thingy also saves database calls
    // decodedValue contains username as property
    if (decodedValue.username) {
      req.username = decodedValue.username;
      next();
    } else {
      res.status(403).json({
        msg: "you are not authenticated bro!",
      });
    }
  } catch (error) {
    res.status(505).json({
      message: "something went wrong",
    });
  }
}

module.exports = userMiddleware;
