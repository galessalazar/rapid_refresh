const { Model, DataTypes } = require("sequelize");
const sequelize = require("../controllers/connection");

class Service extends Model {}

Service.init(
  {
    serviceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    serviceName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serviceDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    costOfService: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    estimatedTime: {
      type: DataTypes.DECIMAL(4, 1),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    // tables by convention are pluralized by sequelize because they represent a collection of records, makes it easier for other developers to understand structure, for simplicity this is ok
    underscored: true,
    modelName: "service",
  }
);

module.exports = Service;
