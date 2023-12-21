const express = require('express');
const router = express.Router();
const app = express();
const ModeleController = require('../controllers/ModeleController'); 


router.post('/create', ModeleController.createModele); 
router.get('/', ModeleController.getAllModeles); 
router.get('/modele/:id', ModeleController.getModeleById); 


module.exports = router;
 