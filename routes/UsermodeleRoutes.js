const express = require('express');
const router = express.Router();
const user_modelecontroller = require('../controllers/User_modeleController');
const middlewareclient = require('../middleware/client');
const middlewarecomptable = require('../middleware/comptable');

router.get('/allpurchases', middlewarecomptable.isComptable, user_modelecontroller.getAllPurchases);
router.post('/:id_modele', middlewareclient.isClient, user_modelecontroller.purchase); 
router.get('/total', middlewarecomptable.isComptable, user_modelecontroller.getMonthTotal);

module.exports = router;    