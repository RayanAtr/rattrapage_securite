const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const router = express.Router();

const allowedFields = ['email', 'phone'];

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

router.post('/profile/update', authenticate, (req, res) => {
  const updates = {};

  for (const field of allowedFields) {
    if (req.body[field]) {
      updates[field] = req.body[field];
    }
  }

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ message: 'No valid fields to update' });
  }

  db.query(
    'UPDATE users SET ? WHERE id = ?',
    [updates, req.user.id],
    err => {
      if (err) return res.status(500).json({ message: 'Server error' });
      res.json({ success: true });
    }
  );
});

module.exports = router;
