const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // You can change the port to your desired value

// Serve the static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve 'index.html' for any incoming request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
