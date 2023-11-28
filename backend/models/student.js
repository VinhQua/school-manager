const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connect");

const Student = sequelize.define(
  "Student",

  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Please enter a student's name`,
        },
      },
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Please enter a student's contact`,
        },
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    school: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { modelName: "Student", tableName: "Student" }
);
const syncTable = async () => {
  await Student.sync({ alter: true });
};

// syncTable();

module.exports = { Student };
