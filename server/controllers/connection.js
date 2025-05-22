const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

// Debug environment variables
console.log('Database Config:', {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  // Don't log the actual password
  hasPassword: !!process.env.DB_PASSWORD
});

// SEE THIS FOR PRODUCTION

// https://devcenter.heroku.com/articles/connecting-heroku-postgres#heroku-postgres-ssl

// IF IN PRODUCTION RUN THIS

// connection string used by Sequelize to connect to PostgreSQL
if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      }
    }
  });
} else {
  // Development configuration
  try {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
        dialect: "postgres",
        logging: console.log // Enable SQL query logging
      }
    );
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

module.exports = sequelize;
