const jwt = require('jsonwebtoken');
const user = require("../models/UserModel");

exports.isComptable = async (req, res, next) => {
    const token = req.query.token ? req.query.token : req.headers.authorization;
    console.log('test');
    if (token && process.env.API_KEY) {
        jwt.verify(token, process.env.API_KEY, async (err, decoded) => {
            if (err) {
                res.status(401).json({ error: 'Access denied.' });
            } else {
                const userEmail = decoded && decoded.email;
                console.log(userEmail);
                try {
                    const query = await user.findOne({where:{email:userEmail}})
                    console.log(query.dataValues.role);

                    if (query.dataValues.role === 'COMPTABLE') {
                        next(); 
                    } else {
                        res.status(403).json({ error: 'Permission denied. User is not a comptable.' });
                    }
                } catch (dbError) {
                    console.error(dbError);
                    res.status(500).json({ error: 'Internal Server Error.' });
                }
            }
        });
    } else {
        res.status(401).json({ error: 'Access denied.' });
    }
};