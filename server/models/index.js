// // const { Model, DataTypes } = require('sequelize');

const sequelize = require('../controllers/connection');

// Import models
const User = require('./User');
const Service = require('./Service');
const { Contact } = require('lucide-react');

// Export models and sequelize instance
module.exports = {
  sequelize,
  User,
  Service,
  Contact
};

