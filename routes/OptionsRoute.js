const express = require("express");
const router = express.Router();
const optionsController = require("../controllers/OptionsController");

router.post("/create", optionsController.createOptions);

router.get("/alloptions", optionsController.getAllOptions);

 router.get("/:id", optionsController.getOptionsById);

module.exports = router;
