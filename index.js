const express = require('express');
const authRoutes = require('./api/v1/routes/auth');
const authenticateToken = require('./api/v1/routes/authenticateToken');


const app = express();
app.use(express.json()); // Use express.json() to parse JSON request bodies

app.use('/api/v1/auth', authRoutes);

// Example protected route
app.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({ message: "This is a protected route", user: req.user });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
