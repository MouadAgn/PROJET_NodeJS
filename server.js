const modeleController = require('./controllers/ModeleController');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./database/database')
const ModeleRoute = require("./routes/ModeleRoute");
const UserRoute = require("./routes/UserRoute");
const jwt = require('jsonwebtoken');

app.use(cors());

app.use(bodyParser.json());

const Modele = require('./models/Modele');


app.use('/users', UserRoute);
app.use('/', UserRoute);

app.use('/modele', ModeleRoute);
app.use('/', ModeleRoute);


const port = 3000;
app.listen(port, () => {
console.log(`Serveur en cours d'exécution sur le port ${port}`);
});