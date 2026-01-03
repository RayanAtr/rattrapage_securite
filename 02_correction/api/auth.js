const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const db = require('../config/db');


const router = express.Router();


// Limitation des tentatives de login
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5
});


router.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;


    // 1. Validation des entrées
    if (!username || !password) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }


    // 2. Requête préparée
    db.query(
        'SELECT id, username, password_hash, role FROM users WHERE username = ?',
        [username],
        async (err, results) => {
            if (err || results.length === 0) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }


            const user = results[0];


            // 3. Vérification du hash
            const match = await bcrypt.compare(password, user.password_hash);
            if (!match) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }


            // 4. Génération JWT signé
            const token = jwt.sign(
                { id: user.id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );


            res.json({ token });
        }
    );
});


module.exports = router;