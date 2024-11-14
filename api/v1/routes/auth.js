const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

const users = []; // This would be replaced by a database in a real application

// Secret key for JWT signing
const JWT_SECRET = 'your_jwt_secret_key';

// Registration endpoint
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        users.push({ username, password: hashedPassword });
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
});

// Login endpoint
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Finding the User 
        const user = users.find(u => u.username === username);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
      
        // Validating the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generating a JWT Token
        const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in user' });
    }
});

module.exports = router;
