const crypto = require('crypto');
const redisClient = require('../config/redisConfig');
const emailService = require('./emailServices');

const generateOTP = () => crypto.randomInt(100000, 999999).toString();

exports.sendOTP = async (email) => {
    const otp = generateOTP();
    await redisClient.setex(email, 600, otp);
    await emailService.sendOTPEmail(email, otp);
};

exports.verify = async (email, userOTP) => {
    const storedOTP = await redisClient.get(email);
    if(storedOTP && storedOTP === userOTP){
        await redisClient.del(email);
        return true;
    }
    return false;
};