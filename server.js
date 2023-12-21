const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
let cors = require("cors");
const sequelize = require("./database/database");
const optionsRoute = require("./routes/OptionsRoute");

app.use(cors());
app.use(express.json());

app.use("/options", optionsRoute);

app.listen(3000, () => {
  console.log("server listening");
});
