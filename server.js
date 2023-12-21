const modeleController = require('./controllers/ModeleController');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./database/database')
const ModeleRoute = require("./routes/ModeleRoute");
const UserRoute = require("./routes/UserRoute");
const optionsRoute = require("./routes/OptionsRoute");
const User_modeleRoute = require("./routes/UsermodeleRoutes");

app.use(cors());
app.use(bodyParser.json());

// let tableslaunch = async () => {
//     await sequelize.sync({ force: true });
// };
// tableslaunch();


app.use('/users', UserRoute);

app.use('/modeles', ModeleRoute);

app.use("/options",optionsRoute);

app.use("/purchases", User_modeleRoute );

const port = 3000;
app.listen(port, () => {
console.log(`Serveur en cours d'exécution sur le port ${port}`);
});