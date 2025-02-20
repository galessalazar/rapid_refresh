const Sequelize = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize(
    'DB_NAME',
    'DB_USER',
    'DB_PASSWORD', 
    {
        DB_LOCATATION,
        host: 'localhost',
        dialect: 'postgres'

    }
)

