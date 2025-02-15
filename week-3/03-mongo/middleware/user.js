const { User } = require("../db");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const username = req.headers.username;
  const password = req.headers.password;

  // check if does exist in the database
  User.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      // it means user with this username and pass do exist
      next();
    } else {
      res.status(403).json({
        message: "user doesn't exist ",
      });
    }
  });
}

module.exports = userMiddleware;
