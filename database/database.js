const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('projet_nodejs', 'root', '',{
    host: 'localhost',
    dialect: 'mariadb'
});

sequelize.authenticate().then(()=>{
    console.log("authentification réussit ")
}).catch((err)=>{
    console.log("erreur: ".err)
})

module.exports = sequelize;