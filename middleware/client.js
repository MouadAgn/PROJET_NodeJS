const jwt = require('jsonwebtoken');
const promisePool = require('../database/database');

exports.isClient = async (req, res, next) => {
    const token = req.query.token ? req.query.token : req.headers.authorization;

    if (token && process.env.API_KEY) {
        jwt.verify(token, process.env.API_KEY, async (err, decoded) => {
            if (err) {
                res.status(401).json({ error: 'Access denied.' });
            } else {
                const userEmail = decoded && decoded.email;

                try {
                    const query = 'SELECT role FROM utilisateur WHERE email = ?';
                    const [rows, fields] = await pool.query(query, [userEmail]);

                    if (rows.length > 0 && rows[0].role === 'CLIENT') {
                        next(); 
                    } else {
                        res.status(403).json({ error: 'Permission denied. User is not a client.' });
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