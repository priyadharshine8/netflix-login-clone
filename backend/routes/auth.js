// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const mockUsers = require('../mockData/users'); 

// POST /api/login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    // Authentication Mock: Check credentials against static data
    const user = mockUsers.find(
        u => u.email === email && u.password === password
    );

    if (user) {
        // Success
        return res.status(200).json({ message: 'Login successful', user: { email: user.email } });
    } else {
        // Error Handling: Invalid credentials
        return res.status(401).json({ message: 'Invalid email or password.' });
    }
});

module.exports = router;