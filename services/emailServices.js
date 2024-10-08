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

  try {
      await Promise.race([
          transporter.sendMail(mailOptions),
          new Promise((_, reject) =>
              setTimeout(() => reject(new Error('Email sending timed out')), 10000) // 10 seconds
          ),
      ]);
      console.log('Email sent successfully');
  } catch (error) {
      console.error('Failed to send email:', error);
  }
};
exports.sendWelocmMessage = async (toEmail, otp) => {
    const mailOptions = {
        from: emailConfig.auth.user,
        to: toEmail,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
    };
  
    try {
        await Promise.race([
            transporter.sendMail(mailOptions),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Email sending timed out')), 10000) // 10 seconds
            ),
        ]);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Failed to send email:', error);
    }
  };
  
