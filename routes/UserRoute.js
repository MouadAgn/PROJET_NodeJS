const express = require('express');
const router = express.Router();
const app = express();
const UserController = require('../controllers/UserController');


router.post('/login',UserController.Login);
router.post('/register', UserController.Register);
router.get('/', UserController.getAllUsers);

module.exports = router;