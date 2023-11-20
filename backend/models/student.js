const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connect");

const Student = sequelize.define(
  "Student",

  {
    fullName: {
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Please enter a student's name`,
        },
      },
    },
  },
  { modelName: "Student", tableName: "Student" }
);
const syncTable = async () => {
  await Student.sync({ alter: true });
};

syncTable();

module.exports = Student;
