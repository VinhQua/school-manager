const express = require("express");
const {
  getSingleStudent,
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);
router
  .route("/:id")
  .get(getSingleStudent)
  .patch(updateStudent)
  .delete(deleteStudent);
