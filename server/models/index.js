// // const { Model, DataTypes } = require('sequelize');

const sequelize = require('../controllers/connection');
const User = require('./User');
const Contact = require('./Contact');
const Service = require('./Service');

// Export models
module.exports = {
  sequelize,
  User,
  Contact,
  Service
};

// sequelize.sync().then(() => {
//     console.log('Database synced');
// }).catch(err => console.error('Sync error:', err));