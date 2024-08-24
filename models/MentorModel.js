const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Mentor = sequelize.define('Mentor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availability: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  areas_of_expertise: {
    type: DataTypes.STRING, // Store as a JSON string
    allowNull: false,
    get() {
      const rawValue = this.getDataValue('areas_of_expertise');
      return JSON.parse(rawValue);
    },
    set(value) {
      this.setDataValue('areas_of_expertise', JSON.stringify(value));
    }
  },
  is_premium: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = { MentorModel: Mentor };
