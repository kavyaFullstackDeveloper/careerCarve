const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availability: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  area_of_interest: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { StudentModel: Student };
