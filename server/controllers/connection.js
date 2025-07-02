const Sequelize = require("sequelize");
require("dotenv").config();
console.log("DB_URL:", process.env.DB_URL);

let sequelize;

// SEE THIS FOR PRODUCTION

// IF IN PRODUCTION RUN THIS

// connection string used by Sequelize to connect to PostgreSQL
if (process.env.NODE_ENV === "production" && process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  // Development configuration
  try {
    sequelize = new Sequelize(process.env.DB_URL, {
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      logging: console.log, // Enable SQL query logging
    });
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}

module.exports = sequelize;
