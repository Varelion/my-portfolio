//this is the access point for all things database related!

const db = require('./db');
const User = require('./models/User');
const Contact = require('./models/Contact');
const Visitor = require('./models/Visitor');

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Contact,
    Visitor
  },
};
