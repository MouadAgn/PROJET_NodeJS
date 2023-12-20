const pool = require("../database/database");
const options = require("../models/OptionsModel");




exports.createTableOptions = async (req, res) => {
    try {
      await options.sync({ force: true });
      res.status(200).json("la table options est cree");
    } catch (err) {
      console.error("unable to connect to bd", err);
      console.log(err);
    }
  };
  
  /* 
  exports.createOptions = async (req, res) => {
    console.log(req.body);
    let Options = req.body;
    try {
      const newOptions = await options.create({
        nom: Options.nom,
      
      });
  
      res
        .status(200)
        .json({ "auto-generated ID + nom ": newOptions.id + " " + newOptions.nom });
    } catch (err) {
      console.error("unable to connect to bd", err);
      console.log(err);
    }
  };
  
  
  
  
  exports.getAlloptions = async (req, res) => {
    try {
      let conn = await pool.getConnection();
      console.log("lencement de la requete d'affichage");
      const rows = await conn.query('SELECT * FROM  options');
      console.log(rows);
      res.status(200).json(rows);
    } catch (err) {
      console.log(err);
    }
  };
  
  
  exports.getOptionsById = async (req, res) => {
    res.status(200).send("hello");
  };
  
 */