
const sequelize = require("../database/database");
const { DataTypes } = require("sequelize");

const options = sequelize.define("options",
  {
    id_option: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prix: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    
    
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps:false
  }
);

module.exports = options;
