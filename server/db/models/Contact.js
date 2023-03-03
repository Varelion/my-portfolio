const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');


const Contact = db.define('contact', {
  ip: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  message: {
    type: Sequelize.TEXT,
    unique: false,
    allowNull: false,
  },
});

module.exports = Contact;
