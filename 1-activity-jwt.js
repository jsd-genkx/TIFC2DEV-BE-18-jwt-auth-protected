// Import JWT dependency
const jwt = require('jsonwebtoken');

// Tips: User from database after the user logging in
const user = { 
  username: "khem",
  role: "admin",
  favorite: {
    numbers: [3, 99]
  }
};

// Tips: Should be store in the .env file
const JWT_SECRET = "your-secret";

// Generating a JWT Token
const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
console.log('token = ', token);

// Verifying a JWT Token
jwt.verify(token, JWT_SECRET, function(err, decodedToken) {
  if (err) {
    console.log('err = ', err);
  }
  console.log('decodedToken = ', decodedToken);
});