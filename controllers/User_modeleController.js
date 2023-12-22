const User_modele = require('../models/User_modele');
const Modele = require('../models/Modele');
const sequelize = require('sequelize');
const Option = require('../models/OptionsModel');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

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
    const token = req.query.token ? req.query.token : req.headers.authorization;
    try {
        const decodedToken = jwt.verify(token, process.env.API_KEY);
        console.log(decodedToken);
        const query = await User.findOne({where:{email: decodedToken.email}})
        console.log(query);

        const idUser = query.id_user;
        console.log(idUser);

        const prixModele = await Modele.sum('prix', {
            where: {
                id_modele: req.params.id_modele
            }
        });

        const idOptions = req.body.id_options;
        let prixOptions = 0;

        for (const idOption of idOptions) {
            const prixOption = await Option.sum('prix', {
                where: {
                    id_option: idOption
                }
            });
            prixOptions += prixOption;
        }
        console.log(idUser)
        total = prixModele + prixOptions;
        console.log(total, req.params.id_modele);

        const newPurchase = await User_modele.create({
            prixtotal: total,
            id_modele: req.params.id_modele,
            id_user: idUser
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