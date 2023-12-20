const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./database/database');

const UserRoute = require('./routes/UserRoute');
app.use(bodyParser.json());
app.use(cors());
app.use('/', UserRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});