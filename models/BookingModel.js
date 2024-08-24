const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const { MentorModel } = require('./MentorModel');
const { StudentModel } = require('./StudentModel');

const Booking = sequelize.define('Booking', {
  student_id: {
    type: DataTypes.INTEGER,
    references: {
      model: StudentModel,
      key: 'id',
    },
    allowNull: false,
  },
  mentor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: MentorModel,
      key: 'id',
    },
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  start_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { BookingModel: Booking };
