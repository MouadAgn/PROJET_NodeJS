const pool = require("../database/database");
const Options = require("../models/OptionsModel");


  
  exports.createOptions = async (req, res) => {
    console.log(req.body);
    let options = req.body;
    try {
      const newOptions = await Options.create({
        nom: options.nom,
        prix: options.prix,
      
      });
  
      res
        .status(200)
        .json({ "auto-generated ID + nom ": newOptions.id + " " + newOptions.nom  });
    } catch (err) {
      console.error("unable to connect to bd", err);
      console.log(err);
    }
  };
  
  


  exports.getAllOptions = async (req, res) => {
    try {

      const allOptions = await Options.findAll(); 
      res.status(200).json(allOptions);
    } catch (err) {
      console.error("Error fetching all options", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  
  exports.getOptionsById = async (req, res) => {
    const optionsId = req.params.id; 
  
    try {
      
      const options = await Options.findByPk(optionsId);
  
      if (options) {
        console.log("Option found:", options);
        res.status(200).json(options);
      } else {
        res.status(404).json({ error: 'Option not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

