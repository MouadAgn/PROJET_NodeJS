const express = require('express');
const router = express.Router();
const app = express();
const ModeleController = require('../controllers/ModeleController');  // Assurez-vous du chemin correct

// Routes pour Modele
router.get('/', ModeleController.getAllModeles);  // Ajoutez cette ligne pour la création d'un utilisateur
// router.get('/:id/dieux', utilisateurController.getUtilisateurDieux);


// Exportez le routeur
module.exports = router;
 