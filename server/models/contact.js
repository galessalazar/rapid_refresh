const { Model, DataTypes } = require('sequelize')
const sequelize = require('../controllers/connection')

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
    sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'contact',
}
)

module.exports = Contact;