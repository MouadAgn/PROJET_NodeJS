const express = require('express');
const router = express.Router();
const app = express();
const utilisateurController = require('../controllers/UtilisateurController');  // Assurez-vous du chemin correct

// Routes pour Utilisateur
router.post('/create', utilisateurController.createUtilisateur);  // Ajoutez cette ligne pour la création d'un utilisateur
// router.get('/:id/dieux', utilisateurController.getUtilisateurDieux);


// Exportez le routeur
module.exports = router;
 