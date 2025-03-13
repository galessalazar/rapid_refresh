const { Model, DataTypes } = require("sequelize");
const db = require("../controllers/connection");

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
    },
    serviceDescription: {
      type: DataTypes.TEXT,
    },
    costOfService: {
      type: DataTypes.INTEGER,
    },
    estimatedTime: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: db,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "service",
  }
);

module.exports = Service;
