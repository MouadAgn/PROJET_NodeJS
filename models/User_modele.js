const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Modele = require('./Modele');
const User = require('./UserModel');

const User_modele = sequelize.define('User_modele', {
  id_modele: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  prixtotal: {
    type: DataTypes.DECIMAL(15, 2),
  }
}, {
  sequelize,
  freezeTableName: true
});

User_modele.belongsTo(Modele, { foreignKey: 'id_modele' });
User_modele.belongsTo(User, { foreignKey: 'id_user' });

module.exports = User_modele;