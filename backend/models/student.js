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
  },

  {
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Please enter a student's contact`,
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

module.exports = {Student};
