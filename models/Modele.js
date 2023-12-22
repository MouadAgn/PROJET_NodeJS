const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Modele = sequelize.define('Modele', {
    id_modele: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    carburant: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    portes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gabarit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    poids: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    prix: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

}, {
    freezeTableName: true,
    timestamps: false,
});





module.exports = Modele;