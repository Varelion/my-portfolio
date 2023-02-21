const Sequelize = require('sequelize');
const db = require('../db');

const Visitor = db.define('board', {
  ip: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Visitor;
