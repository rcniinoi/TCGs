const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken'); // Adjust path if necessary

// Protected route
router.get('/protected', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Access granted!', user: req.user });
});

module.exports = router;
