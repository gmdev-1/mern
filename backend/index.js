const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');

const app = express();

const port = 8000;

// Database
connectDB();

// Routes
app.post('/user', userRoutes);



app.listen(port, () => console.log('Server Running'));



