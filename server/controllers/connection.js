const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  // disables logging in production
  logging: false,
  ssl: {
    // required for secure HEROKU POSTGRESQL connections
    rejectUnauthorized: false,
  },
});

module.exports = sequelize;
