const rateLimit = require('express-rate-limit');

exports.otpRateLimiter = rateLimit({
    windowMs: 60*60*1000,
    max: 5,
    message: 'Too many OTP request, Please try again later',
});