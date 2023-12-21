const User_modele = require('../models/User_modele');

exports.createTableAchat = async (req, res) => {
    await User_modele.sync({force: true});
    res.status(201).json({message: "table achat créé"});
}

exports.getAllPurchases = async (req, res) => {
    try {
        const user_modele = await User_modele.findAll();
        res.status(200).json(user_modele);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}