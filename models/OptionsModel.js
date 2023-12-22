const sequelize = require("../database/database");
const { DataTypes } = require("sequelize");
const Modele = require('./Modele')

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

options.belongsToMany(Modele, { through: 'options_modele' });
Modele.belongsToMany(options, { through: 'options_modele' });

module.exports = options;