const express = require('express');
const router = express.Router();
const ModeleController = require('../controllers/ModeleController'); 
const middlewareadmin = require('../middleware/admin');

router.post('/create', middlewareadmin.isAdmin, ModeleController.createModele); 
router.get('/', ModeleController.getAllModeles); 
router.get('/:id', ModeleController.getModeleById); 
router.get('/opmodassocier/:id', ModeleController.getAllOptionModele);
router.post('/delete/:id', ModeleController.deleteModele);
router.put('/update/:id', ModeleController.updateModele);

module.exports = router;
 