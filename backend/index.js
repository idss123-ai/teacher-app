// backend/index.js
// This is the main server file for the "Teacher" app

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();

// Middleware: allow the app to receive JSON data
app.use(express.json());

// Middleware: allow requests from the frontend (your website)
app.use(cors());

// 🔑 AUTH ROUTE (we'll create this next)
app.use('/api/auth', require('./routes/authRoutes'));

// 🏠 Default route (just to test if the server is running)
app.get('/', (req, res) => {
  res.send('✅ Teacher Backend is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
