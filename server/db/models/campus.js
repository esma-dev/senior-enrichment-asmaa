'use strict';

//require Sequelize, db, Student (for the join table)
const Sequelize = require('sequelize');
const db = require('../index.js');
const Student = require('./student');

//define Campus model
const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
  }
});

//export both models
module.exports = Campus;
