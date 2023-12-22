const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const Modele = require('../models/Modele');
const jwt = require('jsonwebtoken');


exports.createModele = async (req, res) =>{
    console.log(req.body)
    let monmodele = req.body
    const { nom } = req.body
    try{

        const existingModele = await Modele.findOne({ where: { nom } });

        if (existingModele) {
            return res.status(400).json({ error: 'Ce modele existe déjà!' });
        }

        const newModele = await Modele.create({ nom: monmodele.nom, carburant: monmodele.carburant, portes: monmodele.portes, gabarit: monmodele.gabarit, poids: monmodele.poids, prix: monmodele.prix  });
        res.status(200).json({
            "auto-generated ID": newModele.id,
            "nom": newModele.nom,
            "carburant": newModele.carburant,
            "portes": newModele.portes,
            "gabarit": newModele.gabarit,
            "poids": newModele.poids,
            "prix": newModele.prix
          });
    }
    catch(err){
        console.error('Erreur lors de la création du modele :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la création du modele.' });
    }
};

//Get all modeles
exports.getAllModeles = async (req, res) => {
    try {
      const models = await Modele.findAll();
      res.json(models);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  };

//Get Modele by ID

exports.getModeleById= async (req, res) => {
    const modeleId = req.params.id;
    try {
        const modele = await Modele.findByPk(modeleId);
    
        if (modele) {
          res.status(200).json(modele);
        } else {
          res.status(404).json({ message: 'Modèle non trouvé' });
        }
      } catch (error) {
        console.error('Erreur lors de la récupération du modèle par ID :', error);
        res.status(500).json({ error: 'Erreur serveur lors de la récupération du modèle par ID.' });
      }
  };

//  Delete Modele BY ID 

exports.deleteModele = async (req, res) => {
    try {
        const idModele = req.params.id;
        console.log(idModele)
        // Vérifier si le modèle existe
        const modeleFound = await Modele.findByPk(idModele);
        if (!modeleFound) {
            return res.status(400).json({ message: "Modèle introuvable" });
        }

      await modeleFound.destroy();

      res.status(200).json({ message: "Modèle supprimé avec succès" });
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// Update modele by ID

exports.updateModele= async (req, res) => {
  try {
      const idModele = req.params.id;

      const modeleFound = await Modele.findByPk(idModele);
      if (!modeleFound) {
          return res.status(400).json({ message: "Modèle introuvable" });
      }

      await modeleFound.update(req.body);

      res.status(200).json({ message: "Modèle mis à jour avec succès" });
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

exports.getAllOptionModele= async (req, res)=>{
  try {
      let idModele = req.params.id_modele
      const leModele = await Modele.findByPk(idModele)
      let lesOptions = await leModele.getOptions()
      console.log(lesOptions)
      //const optionmodele = await option_modele.findAll();
      res.status(200).json({modele : leModele, options: lesOptions});
  } catch (err) {
      res.status(400).json({message: err.message});
  }
}