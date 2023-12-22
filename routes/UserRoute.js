const express = require('express');
const router = express.Router();
const app = express();
const UserController = require('../controllers/UserController');

router.post('/register', UserController.Register);
router.post('/login', UserController.Login);
router.get('/getAllUsers', UserController.getAllUsers);
router.post('/logout', UserController.logout);

module.exports = router;