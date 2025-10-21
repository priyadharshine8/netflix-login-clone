// backend/server.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173' 
})); 
app.use(express.json());

// API Routes
app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});