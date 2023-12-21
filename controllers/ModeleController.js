const Modele = require('../models/Modele');
const express = require('express');
const app = express();
app.use(express.json());

// Endpoint pour récupérer tous les modèles
app.get('/modeles', async (req, res) => {
  try {
    const modeles = await Modele.findAll();
    res.json(modeles);
  } catch (error) {
    console.error('Erreur lors de la récupération des modèles :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});


// Endpoint pour récupérer un modèle par ID
app.get('/modeles/:id', async (req, res) => {
    const modeleId = req.params.id;
    try {
      const modele = await Modele.findByPk(modeleId);
      if (modele) {
        res.json(modele);
      } else {
        res.status(404).json({ message: 'Modèle non trouvé' });
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du modèle :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  });
  