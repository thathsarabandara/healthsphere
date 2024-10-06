const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateToken = (user) =>{
    return jwt.sign({ email: user.email , password: user.password}, process.env.JWT_SECRET);
}

