const express = require('express');
const router = express.Router();
const app = express();
const UserController = require('../controllers/UserController');

router.post('/register', UserController.Register);

module.exports = router;