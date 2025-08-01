const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());
app.use(cors());

const port = 8000;
const secret_key = '2367571CC96923A5';

// Database
connectDB();

// Routes
app.get('/user', userRoutes);

let users = [];

async function register(username, email, password){
    const hashedPassword = bcrypt.hash(password, 8);
    users.push({username,  password: hashedPassword, email});
    console.log('User Registered Successfully');
    return true;
}

async function login(email, password){
    const user = users.find(users => users.email == email);
    if(!user){
        console.log('User not found');
        return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        console.log('Invalid Credentials');
        return null;
    }
    console.log('User Details', user);
    const token = jwt.sign(
        {email},
        secret_key,
        {expiresIn: '1h'}
    );
    console.log('Token', token);
    return token;
}

register('GM', 'gm@gmal.com', 'gmking');
setTimeout(() => {
    login('gm@gmail.com', 'gmking');
}, 5000);


app.listen(port, () => console.log('Server Running'));



