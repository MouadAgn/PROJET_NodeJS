const express = require('express');
const router = express.Router();
const app = express();
const ModeleController = require('../controllers/ModeleController');  // Assurez-vous du chemin correct

// Routes pour Modele
router.post('/create', ModeleController.createModele);  // Ajoutez cette ligne pour la création d'un utilisateur
router.get('/', ModeleController.getAllModeles); //Ligne pour l'affichage de tout les modeles
router.get('/:id', ModeleController.getModeleById); //Ligne pour l'affichage des modeles au fonction de l'ID
router.get('/opmodassocier/:id', ModeleController.getAllOptionModele);
router.post('/delete/:id', ModeleController.deleteModele);
router.post('/update/:id', ModeleController.updateModele);



// Exportez le routeur
module.exports = router;
 