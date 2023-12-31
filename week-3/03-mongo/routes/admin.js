const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  // check if user with this username already exist

  Admin.create({
    username,
    password,
  }).then(function () {
    res.json({
      message: "Admin created succssfully",
    });
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  // use zod to varify the format of input

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.status(200).json({
    message: "course added successfully",
    courseid: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  const allCourses = await Course.find({});
  res.status(200).json({
    allCourses,
  });
});

module.exports = router;
