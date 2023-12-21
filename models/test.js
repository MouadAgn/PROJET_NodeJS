const sequelize = require('../database/database');
const { DataTypes, Model } = require('sequelize');

const Modele = require('./Modele');
const Option = require('./OptionsModel');


/*
const OptionModele = sequelize.define('option_modele', {
  id_option: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  id_modele: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
 
}, {
  sequelize,
  freezeTableName: true
});

OptionModele.belongsTo(Modele, { foreignKey: 'id_Modele' });
OptionModele.belongsTo(Option, { foreignKey: 'id_Option' });

module.exports = OptionModele;
*/