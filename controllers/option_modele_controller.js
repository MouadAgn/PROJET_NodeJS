/*
exports.createTableOptionModele = async (req, res) => {
    await option_modele.sync({force: true});
    res.status(201).json({message: "Table Crée"});
}

exports.getAllOptionModele = async (req, res) => {
    try {
        const optionmodele = await option_modele.findAll();
        res.status(200).json(optionmodele);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}*/