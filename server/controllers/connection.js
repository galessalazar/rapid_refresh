const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

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
  })
// ELSE, RUN FOR DEVELOPMENT
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST ,
      port: process.env.DB_PORT || 5432,
      dialect: "postgres",
    }
  );
}



module.exports = sequelize;
