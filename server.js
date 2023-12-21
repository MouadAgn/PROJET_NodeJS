const modeleController = require('./controllers/ModeleController');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./database/database')
const ModeleRoute = require("./routes/ModeleRoute");
const UserRoute = require("./routes/UserRoute");
const optionsRoute = require("./routes/OptionsRoute");
const option_modele = require("./routes/option_modele_route")

const jwt = require('jsonwebtoken');

app.use(cors());

app.use(bodyParser.json());


const Modele = require('./models/Modele');

// let tableslaunch = async () => {
//     await sequelize.sync({ force: true });
// };
//  tableslaunch();

app.use('/users', UserRoute);

app.use('/modeles', ModeleRoute);

app.use("/options",optionsRoute);

const port = 3000;
app.listen(port, () => {
console.log(`Serveur en cours d'exécution sur le port ${port}`);
});