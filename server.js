const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
let cors = require("cors");
const sequelize = require("./database/database");


app.use(cors());
app.use(express.json());








app.listen(3001, () => {
  console.log("server listening");
});
