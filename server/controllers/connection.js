const Sequelize = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    

    {
        DB_LOCATION,
        host: 'localhost',
        dialect: 'postgres'

    }
)

