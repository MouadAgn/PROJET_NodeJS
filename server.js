const cors = require('cors');
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const sequelize = require('./database/database')
    app.use(cors());

    app.use(bodyParser.json());


    


    
    const port = 3000;
    app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
    });