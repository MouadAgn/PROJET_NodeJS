const express = require('express');
const router = express.Router();
const app = express();
const ModeleController = require('../controllers/ModeleController');  // Assurez-vous du chemin correct

// Routes pour Modele
router.post('/Create', ModeleController.createModele);  // Ajoutez cette ligne pour la création d'un utilisateur
router.get('/', ModeleController.getAllModeles);
router.get('/modele/:id', ModeleController.getModeleById);

// Exportez le routeur
module.exports = router;
 