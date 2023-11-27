const { StatusCodes } = require("http-status-codes");
const { Student } = require("../models/student");
const NotFound = require("../errors/not-found");

const getAllStudents = async (req, res) => {
  let queryObject = {};
  const students = await Student.findAll({ where: queryObject });
  res.status(StatusCodes.OK).json({
    students,
  });
};
const createStudent = async (req, res) => {
  if (req.body.length > 1) {
    const students = await Student.bulkCreate(req.body);
    return res.status(StatusCodes.CREATED).json({ students });
  }
  const student = await Student.create(req.body);
  return res.status(StatusCodes.CREATED).json({ student });
};
const getSingleStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findOne({ where: { id } });
  if (!student) {
    throw new NotFound(`no student with id ${id}`);
  }
  return res.status(StatusCodes.OK).json({ student });
};
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.update(req.body, { where: { id } });
  if (!student) {
    throw new NotFound(`no student with id ${id}`);
  }
  return res.status(StatusCodes.OK).json({ student });
};
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.destroy({ where: { id } });
  if (!student) {
    throw new NotFound(`no student with id ${id}`);
  }
  return res.status(StatusCodes.OK).json({ msg: "Student Deleted" });
};

module.exports = {
  getAllStudents,
  createStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
