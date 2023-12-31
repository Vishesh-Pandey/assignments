// Middleware for handling auth

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  try {
    const token = req.headers.authorization;
    const words = token.split(" "); // convert to array of string from spaces
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedValue.username) {
      console.log("under decoded condition");
      next();
    } else {
      res.status(403).json({
        msg: "you are not authenticated bro!",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "something went wrong",
    });
  }
}

module.exports = adminMiddleware;
