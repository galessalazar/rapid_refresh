const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

// SEE THIS FOR PRODUCTION

// https://devcenter.heroku.com/articles/connecting-heroku-postgres#heroku-postgres-ssl

// IF IN PRODUCTION RUN THIS

if (process.env.DATABASE_URL) {
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
      dialect: "postgres",
    }
  );
}



module.exports = sequelize;
