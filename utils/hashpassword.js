const bcrypt = require('bcrypt');

const hashPassword = async(password) =>{
    const saltRound = 10;
    return await bcrypt.hash(password, saltRound)
};

const comparePassword = async (password, hashedPassword)=>{
    return await bcrypt.compare(password, hashedPassword)
};

module.exports = { hashPassword, comparePassword }