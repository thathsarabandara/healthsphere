const otpService = require('../services/otpService');

exports.sendOTP = async (email) => {
  try {
    await otpService.sendOTP(email);
    console.log(`Sending OTP to ${email}`);
  } catch (error) {
    console.log('Error sending OTP');
  }
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const isValid = await otpService.verify(email, otp);
    if (isValid) {
      res.status(200).send('OTP verified successfully');
    } else {
      res.status(400).send('Invalid or expired OTP');
    }
  } catch (error) {
    res.status(500).send('Error verifying OTP');
  }
};
