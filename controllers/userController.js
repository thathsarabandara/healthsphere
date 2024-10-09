const User = require('../models/auth/User');
const { createUser , findByEmail } = require('../models/auth/User'); // Import the createUser function
const { comparePassword } = require('../utils/hashpassword');
const {createToken} = require('../models/auth/Token');
const tokenutils = require('../utils/tokenUtils');
const otpController = require('./otpController');
const { sendWelcomeMessage, sendReservationConfirmedMessage, sendAppoinmentRemainderEmail, sendAppoinmentCancellationEmail, sendPrescriptionUpdateEmail, sendHealthTips, sendPaymentReciptEmails, sendPasswordResetEmails, sendSuspiciousActivity, sendPasswordChange, sendAccountAccess, sendAccountReview, sendUnusualLogin, sendHealthcareReport, sendNotificationsOfSystemUpdates } = require('../services/emailServices');
const { use } = require('bcrypt/promises');

exports.register = async (req, res) => {
    const userdata = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    // Ensure all required fields are provided
    if (!userdata.username || !userdata.email || !userdata.password) {
        return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    try {
        // Create the user first
        // const newUser = await createUser(userdata); // Call createUser directly

        // Send OTP to the user's email after successful user creation
        await otpController.sendOTP(userdata.email);
        await sendWelcomeMessage(userdata.username,userdata.email); // Make sure to pass the user's email
        await sendReservationConfirmedMessage(userdata.username, userdata.email, '2024/10/11' , '06:00P.M.', 'Dr.Thathsara', 'Dermetalogist');
        await sendAppoinmentRemainderEmail(userdata.username,  userdata.email, '2024/10/11', '06:00P.M.','Dr.Thathsara', 'Dermetalogist');
        await sendAppoinmentCancellationEmail(userdata.username, userdata.email, '2024/10/11', '06:00P.M.','Dr.Thathsara', 'Dermetalogist');
        await sendPrescriptionUpdateEmail(userdata.username, userdata.email, 'P001','Prescription One','Dr.Bandara','2024/10/11');
        await sendHealthTips(userdata.username, userdata.email);
        await sendPaymentReciptEmails(userdata.username, userdata.email, '2500.00','2024/10/24','P001');
        await sendPasswordResetEmails(userdata.username, userdata.email,'11556688');
        await sendSuspiciousActivity(userdata.username, userdata.email);
        await sendPasswordChange(userdata.username, userdata.email);
        await sendAccountAccess(userdata.username, userdata.email);
        await sendAccountReview(userdata.username, userdata.email);
        await sendUnusualLogin(userdata.username, userdata.email);
        await sendHealthcareReport(userdata.username, userdata.email);
        await sendNotificationsOfSystemUpdates(userdata.email,'2024/12/01', '06:00 P.M.')
        // res.status(201).json({ message: 'User created successfully, OTP sent', user: newUser });

    } catch (err) {
        // Handle user creation or OTP sending errors
        console.error('Error during registration process:', err);
        if (err.message.includes('OTP failed')) {
            return res.status(400).json({ error: 'OTP sending failed', details: err.message });
        }
        return res.status(500).json({ error: 'Registration failed', details: err.message });
    }
};

exports.login = async(req, res) => {
    const credentials = req.body;

    try{
        
        const user =  await findByEmail(credentials.email);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
          } 

        const isValidPassword =  comparePassword(credentials.password, '#'+user.password_hash)
        
        if(!isValidPassword){
            return res.status(401).json({ error: 'Invalid Credentials'});
        }
        
        const token = await tokenutils.generateToken(credentials);

        const newToken = createToken(user.id, token)

        res.cookie('token', token , {
            httpsOnly: 'ture',
            maxAge: 1000 * 3600*2
        });

        res.status(200).json({message: 'Login Successfull', newToken})

    }catch (err){
        console.error('Error during login:', err);

        return res.status(500).json({ error: 'Login failed', details: err.message });
    }
}
