// // const { Model, DataTypes } = require('sequelize');

const sequelize = require('../controllers/connection');

// Import models
const User = require('./User');
const Service = require('./Service');
const Contact = require('./Contact');

// Initialize models
const models = {
  User,
  Service,
  Contact
};

// Export models and sequelize instance
module.exports = {
  sequelize,
  User,
  Service,
  Contact
};

// sequelize.sync().then(() => {
//     console.log('Database synced');
// }).catch(err => console.error('Sync error:', err));