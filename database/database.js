const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projet_nodejs', 'root', '', { 
    host: 'localhost', dialect: 'mariadb',
 });

sequelize.authenticate()
    .then(() => {
        console.log("Authentification réussie");
    })
    .catch((err) => {
        console.error("Erreur d'authentification :", err);
    });

module.exports = sequelize