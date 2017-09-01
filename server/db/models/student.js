'use strict';

//require Sequelize, db
const Sequelize = require('sequelize');
const db = require('../index.js');

//define Student model
const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
});

//export Student model
module.exports = Student;
