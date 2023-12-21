const express = require("express");
const router = express.Router();
const optionsController = require("../controllers/OptionsController");

router.post("/create", optionsController.createOptions);

router.get("/", optionsController.getAllOptions);

router.get("/:id", optionsController.getOptionsById);

router.post('/opmodassocier/:id', optionsController.addOptionToModele);

//router.get("/:id", optionsController.getOptionsById);

module.exports = router;
