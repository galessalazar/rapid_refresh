// // const { Model, DataTypes } = require('sequelize');

const sequelize = require('../controllers/connection');
const User = require('./User');
const Contact = require('./Contact');
const Service = require('./Service');

// Initialize models
const models = {
  User,
  Contact,
  Service
};

// Export models and sequelize instance
module.exports = {
  sequelize,
  ...models
};

// sequelize.sync().then(() => {
//     console.log('Database synced');
// }).catch(err => console.error('Sync error:', err));