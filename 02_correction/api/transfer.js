const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const router = express.Router();

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

router.post('/transfer', authenticate, (req, res) => {
  const { amount, toAccount } = req.body;

  if (!amount || amount <= 0 || !toAccount) {
    return res.status(400).json({ message: 'Invalid transfer data' });
  }

  db.beginTransaction(err => {
    if (err) return res.status(500).json({ message: 'Server error' });

    db.query(
      'SELECT balance FROM accounts WHERE user_id = ? FOR UPDATE',
      [req.user.id],
      (err, results) => {
        if (err || results.length === 0 || results[0].balance < amount) {
          return db.rollback(() =>
            res.status(400).json({ message: 'Insufficient funds' })
          );
        }

        db.query(
          'UPDATE accounts SET balance = balance - ? WHERE user_id = ?',
          [amount, req.user.id]
        );

        db.query(
          'UPDATE accounts SET balance = balance + ? WHERE account_number = ?',
          [amount, toAccount]
        );

        db.commit(() => res.json({ success: true }));
      }
    );
  });
});

module.exports = router;
