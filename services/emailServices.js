const nodemailer = require('nodemailer');
const emailConfig = require('../config/emailConfig');

const transporter = nodemailer.createTransport(emailConfig);

exports.sendOTPEmail = async (toEmail, otp) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: toEmail,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
  };
  await transporter.sendMail(mailOptions);
};
