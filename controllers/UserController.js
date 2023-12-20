const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

exports.Register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ error: 'Cet utilisateur existe déjà!' });
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        const newUser = await User.create({ email, password: hashedPassword, role: 'client' });

        const token = jwt.sign({ email: newUser.email }, process.env.API_KEY, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.Login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(401).json({ error: "L'utilisateur n'existe pas." });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Mot de passe incorrect.' });
      }
  
      const token = jwt.sign({ pseudo }, process.env.API_KEY, { expiresIn: '24h' });
      res.json({ token });
    } catch (error) {
      console.error('Erreur lors de la tentative de connexion :', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
};

exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
