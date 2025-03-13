const { Model, DataTypes } = require('sequelize')
const db = require('../controllers/connection')
const { sequelize } = require('./Service')

class Contact extends Model {}

Contact.init(
    {
        contactName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactMessage: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },


{
    sequelize: db,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'contact',
}
)

module.exports = Contact;