// ORM ACTIVITIES 1/14

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../controllers/connection");

class User extends Model {}

// TODO: Add validations to the User model

User.init(
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 25],
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,

      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 250],
      },
    },
    isOwner: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
