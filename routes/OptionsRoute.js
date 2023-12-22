const express = require("express");
const router = express.Router();
const optionsController = require("../controllers/OptionsController");
const middlewareadmin = require('../middleware/admin');
const middlewareclient = require('../middleware/client');

router.post("/create", middlewareadmin.isAdmin, optionsController.createOptions);
router.get("/alloptions", middlewareclient.isClient, optionsController.getAllOptions);
router.get("/:id", optionsController.getOptionsById);
router.post('/opmodassocier/:id', middlewareadmin.isAdmin, optionsController.addOptionToModele);

module.exports = router;
