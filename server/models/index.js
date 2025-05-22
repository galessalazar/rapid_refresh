// // const { Model, DataTypes } = require('sequelize');

const sequelize = require('../controllers/connection');

// Import models
const User = require('./User');
const Service = require('./Service');

// Export models and sequelize instance
module.exports = {
  sequelize,
  User,
  Service
};

// sequelize.sync().then(() => {
//     console.log('Database synced');
// }).catch(err => console.error('Sync error:', err));