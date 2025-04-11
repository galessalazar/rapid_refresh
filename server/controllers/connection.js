const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  sequelize = new Sequelize(
    process.env.local.DB_NAME,
    process.env.local.DB_USER,
    process.env.local.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "postgres",
    }
  );
}

async function test() {
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}
test();

module.exports = sequelize;
