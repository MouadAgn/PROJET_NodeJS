const User_modele = require('../models/User_modele');
const Modele = require('../models/Modele');
const sequelize = require('sequelize');
const Option = require('../models/OptionsModel');
const User = require('../models/UserModel');

exports.createTableUser_modele = async (req, res) => {
    await User_modele.sync({force: true});
    res.status(201).json({message: "table créé"});
}

exports.getAllPurchases = async (req, res) => {
    try {
        const user_modele = await User_modele.findAll();
        res.status(200).json(user_modele);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

exports.purchase = async (req, res) => {
    console.log(req.params.id_modele);
    try {
        const prixModele = await Modele.sum('prix', {
            where: {
                id_modele: req.params.id_modele
            }
        });
        const prixOption = await Option.sum('prix', {
            where: {
                id_option: req.body.optionId
            }
        });
        total = prixModele + prixOption;
        console.log(total, req.params.id_modele)
        const newPurchase = await User_modele.create({
            prixtotal: total,
            id_modele: req.params.id_modele,
            id_user: 1
        });
        res.status(201).json(newPurchase);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

exports.getMonthTotal = async (req, res) => {
    try {
        const total = await User_modele.sum('prix Total', {
            where: sequelize.where(sequelize.fn('MONTH', sequelize.col('createdAt')), new Date().getMonth() + 1)
        });
        res.status(200).json(total);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}