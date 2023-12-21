const pool = require("../database/database");
const Options = require("../models/OptionsModel");
//const option_modele = require('../models/option_modele');
const Modele = require('../models/Modele')


  
  exports.createOptions = async (req, res) => {
    console.log(req.body);
    let options = req.body;
    const { nom } = req.body
    try {
      const existingOption = await Options.findOne({ where: { nom } });

        if (existingOption) {
            return res.status(400).json({ error: 'Cet Option existe déjà!' });
        }

      const newOptions = await Options.create({
        nom: options.nom,
        prix: options.prix,
      
      });
  
      res
        .status(200)
        .json({ "auto-generated ID + nom ": newOptions.id_option + " " + newOptions.nom  + " : " + newOptions.prix +"€"});
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

  //Get Options BY
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

  

exports.addOptionToModele = async (req, res) => {
    try {
        const idModele = req.params.id_module;
        const idOption = req.body.id_option;

        // Vérifier si le modèle existe
        const modeleFound = await Modele.findByPk(idModele);
        console.log(modeleFound)
        if (!modeleFound) {
            return res.status(400).json({ message: "Modèle introuvable" });
        }

        // Vérifier si l'option existe
        const optionFound = await Options.findByPk(idOption);
        if (!optionFound) {
            return res.status(400).json({ message: "Option introuvable" });
        }

        // Vérifier si l'option est déjà associée au modèle
        modeleFound.addOptions(optionFound);

        // Associer l'option au modèle
        

        res.status(201).json({ message: "Option ajoutée au modèle" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.createOption = async (req, res) => {
    try {
        const Option = req.body.nom_option;

        // Vérifier si l'option existe déjà
        const optionFound = await Options.findOne({
            where: {
                nom_option: Option
            }
        });
        if (optionFound) {
            return res.status(400).json({ message: "Option déjà existante" });
        }

        // Créer une nouvelle option
        await Options.create({
            nom_option: Option,
            prix_option: req.body.prix_option
        });

        res.status(201).json({ message: "Option créée" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
