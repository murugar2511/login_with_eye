const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files like CSS and images
app.use(express.static(path.join(__dirname, 'public')));

// Render the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Handle login request
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple authentication logic (you can add your DB or API call here)
  if (username === 'admin' && password === 'password') {
    res.send('Login successful');
  } else {
    res.send('Invalid username or password');
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
