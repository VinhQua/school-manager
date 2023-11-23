const { StatusCodes } = require("http-status-codes");
const { Student } = require("../models/student");

const getAllStudents = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "all students" });
};
const createStudent = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: "create student" });
};
const getSingleStudent = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "single student" });
};
const updateStudent = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "update students" });
};
const deleteStudent = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "delete student" });
};

module.exports = {
  getAllStudents,
  createStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
