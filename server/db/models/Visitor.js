const Sequelize = require('sequelize');
const db = require('../db');

const Visitor = db.define('visitor', {
  ip: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'Not set',
  },
});

module.exports = Visitor;
