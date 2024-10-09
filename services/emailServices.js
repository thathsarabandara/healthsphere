const nodemailer = require('nodemailer');
const emailConfig = require('../config/emailConfig');

const transporter = nodemailer.createTransport(emailConfig);
// OTP Sending Emails 
exports.sendOTPEmail = async (toEmail, otp) => {
  const mailOptions = {
      from: emailConfig.auth.user,
      to: toEmail,
      subject: '🔒 HealthSphere - OTP Email Service! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
      html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f2f2f2;">
            <!-- Header -->
            <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                <h1 style="margin: 0;">HealthSphere</h1>
                <p style="margin: 5px 0;">Your Trusted Healthcare Service</p>
                <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="margin: 10px 0; height: 50px; width: 150px;"/>
            </div>
            
            <!-- Email Body -->
            <div style="background-color: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <img src="https://drive.google.com/uc?export=view&id=1BrkMgx7nzjZST11AnyVrs2QbQyR8npoc" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
              <div style="text-align: center; padding: 20px;">
                    <h2>Your OTP Code</h2>
                    <p>Hello,</p>
                    <p>Your one-time password (OTP) is:</p>
                    <p style="font-size: 24px; font-weight: bold; color: #FF4500;">${otp}</p>
                    <p>This code will expire in 10 minutes.</p>
                    <p>Thank you for using our service!</p>
                    <img src="https://drive.google.com/uc?export=view&id=1WPwLg2QwLQXeT_vv_udV4XYtBOXXjz2L" alt="Health Matters" style="margin: 20px 0; border-radius: 5px; height: 220px; width: 400px;"/>
                </div>
                <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                    <p style="font-size: 12px; text-align: center; color: #888;">If you did not request this OTP, please contact our support team immediately.</p>
                    <p style="font-size: 12px; text-align: center; color: #888;">Developed by Dev Squad <sup>TM</sup></p>
                </div>
            </div>
            
            <!-- Footer -->
            <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; margin-top: 20px;">
                <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                <p style="margin: 5px 0;">Follow us on:</p>
                <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
            </div>
          </div>
        `,
        // attachments: [
        //   {
        //   filename: 'banner.png',
        //   path: 'Assets/banner.png',
        //   cid: 'BannerImage'
        //   },
        //   {
        //   filename: 'HeaderOTP.png',
        //   path: 'Assets/HeaderOTP.png',
        //   cid: 'HeaderImage'
        //   },
        //   {
        //     filename: 'OTP.png',
        //     path: 'Assets/OTP.png',
        //     cid: 'OTPImage'
        //   },
      // ]
  };

  try {
      await Promise.race([
          transporter.sendMail(mailOptions),
          new Promise((_, reject) =>
              setTimeout(() => reject(new Error('Email sending timed out')), 30000) // 10 seconds
          ),
      ]);
      console.log('Email sent successfully');
  } catch (error) {
      console.error('Failed to send email:', error);
  }
};
// Send Welcome message 
exports.sendWelcomeMessage = async (username, email) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '🎉 Welcome to the Healthcare Management System! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section with Logo -->
          <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
              <h1>Welcome to HealthSphere, ${username}!</h1>
          </div>

          <!-- Banner Image -->
          <img src="https://wallpaperaccess.com/full/624185.jpg" alt="Healthcare Banner" style="width: 100%; height: auto; margin-bottom: 20px;">

          <!-- Welcome Message Section -->
          <div style="padding: 20px; text-align: left;">
              <p style="font-size: 18px; color: #333;">We are delighted to have you join the HealthSphere community! Our platform is designed to help you manage your health effectively by providing access to top medical professionals, easy appointment scheduling, and seamless health record management.</p>
              <p style="font-size: 16px; color: #333;">As a new member, here’s what you can do next:</p>

              <!-- Key Features Section -->
              <ul style="font-size: 16px; color: #333;">
                  <li><strong>Book an Appointment:</strong> Schedule appointments with our certified doctors at your convenience.</li>
                  <li><strong>View Your Medical Records:</strong> Access your health records anytime, anywhere.</li>
                  <li><strong>Receive Health Notifications:</strong> Stay informed with personalized health tips and updates.</li>
              </ul>

              <!-- Call-to-Action Button -->
              <p style="text-align: center; margin: 30px 0;">
                  <a href="https://yourwebsite.com/dashboard" style="background-color: #007BFF; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">Login to HealthSphere</a>
              </p>

              <!-- Additional Healthcare Image -->
              <img src="https://www.affluentcpa.com/wp-content/uploads/2017/04/healthcare-auditing-1.jpg" alt="Healthcare Image" style="width: 100%; height: auto; margin-bottom: 20px;">

              <!-- Healthcare Tip Section -->
              <div style="background-color: #f1f1f1; padding: 15px; border-radius: 5px; text-align: center; margin-top: 20px;">
                  <h3 style="color: #007BFF;">Healthcare Tip of the Day</h3>
                  <p style="font-size: 16px; color: #666;">Did you know that regular health checkups can prevent many health issues? Schedule your checkup today and take control of your health.</p>
              </div>
          </div>

          <!-- Footer Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If you need assistance, please contact our support team immediately.</p>
              <p style="font-size: 14px; text-align: center; color: #777;">Need help or have questions? <a href="mailto:support@yourwebsite.com" style="color: #007BFF; text-decoration: none;">Contact our support team</a>.</p>
              <p style="font-size: 12px; color: #aaa; text-align: center;">You received this email because you registered for HealthSphere. If you didn't sign up, please ignore this email.</p>
              <p style="font-size: 12px; color: #aaa; text-align: center;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timed out')), 10000)
      ),
    ]);
    console.log('Welcome email sent successfully');
  } catch (error) {
    console.error('Failed to send welcome email:', error);
  }
};

exports.sendReservationConfirmedMessage = async (username, email, appointmentDate, appointmentTime, doctorName, specialization) => {
    const mailOptions = {
      from: emailConfig.auth.user,
      to: email,
      subject: '✅ Your Appointment is Confirmed! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
      html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
            <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <!-- Header Section with Logo -->
                <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
                    <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
                    <h1>Your Appointment is Confirmed!</h1>
                </div>
                <img src="https://drive.google.com/uc?export=view&id=137AWCk6gCHlsQlLJZh7WRUMZkQ-pl9Mp" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
                <!-- Appointment Details Section -->
                <div style="padding: 20px; text-align: left; background-color: #e9f7fe; border-radius: 5px; margin: 20px;">
                    <h2 style="color: #007BFF;">Appointment Details</h2>
                    <p style="font-size: 16px; color: #333;">Hello ${username},</p>
                    <p style="font-size: 16px; color: #333;">We are pleased to confirm your appointment with the following details:</p>
                    <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
                        <li><strong>Date:</strong> ${appointmentDate}</li>
                        <li><strong>Time:</strong> ${appointmentTime}</li>
                        <li><strong>Doctor:</strong> Dr. ${doctorName}</li>
                        <li><strong>Specialization:</strong> ${specialization}</li>
                        <li><strong>Location:</strong> At HealthSphere Hospitals </li>
                    </ul>
                </div>

                <!-- Reminder Section -->
                <div style="padding: 20px; text-align: center; background-color: #fff; border-radius: 5px; margin: 20px;">
                    <h3 style="color: #007BFF;">Important Reminder</h3>
                    <p style="font-size: 16px; color: #333;">Please arrive at least 15 minutes early for your appointment. If you need to reschedule, don't hesitate to reach out!</p>
                </div>

                <!-- Call-to-Action Button -->
                <p style="text-align: center; margin: 30px 0;">
                    <a href="https://yourwebsite.com/dashboard" style="background-color: #007BFF; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">View Your Appointment</a>
                </p>

                <!-- Healthcare Tip Section -->
                <div style="background-color: #f1f1f1; padding: 15px; border-radius: 5px; text-align: center; margin: 20px;">
                    <h3 style="color: #007BFF;">Health Tip of the Day</h3>
                    <p style="font-size: 16px; color: #666;">Remember to hydrate before your appointment! Drinking enough water can improve your overall health.</p>
                </div>

                <!-- Footer Section -->
                <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                    <p style="font-size: 12px; text-align: center; color: #888;">If you have any questions, please contact our support team immediately.</p>
                    <p style="font-size: 14px; text-align: center; color: #777;">Need help or have questions? <a href="mailto:support@yourwebsite.com" style="color: #007BFF; text-decoration: none;">Contact our support team</a>.</p>
                    <p style="font-size: 12px; color: #aaa; text-align: center;">You received this email because you scheduled an appointment with HealthSphere. If you didn't schedule an appointment, please ignore this email.</p>
                    <p style="font-size: 12px; color: #aaa; text-align: center;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

                    <!-- Social Media Links -->
                    <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                        <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                        <p style="margin: 5px 0;">Follow us on:</p>
                        <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                        <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                        <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
                    </div>
                </div>
            </div>
          </div>
      `
    };
  
    try {
      await Promise.race([
        transporter.sendMail(mailOptions),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Email sending timed out')), 10000)
        ),
      ]);
      console.log('Appoinment Confirm email sent successfully');
    } catch (error) {
      console.error('Failed to send Appoinment confirm email:', error);
    }
  };

// Function to send notifications about upcoming appointments
exports.sendAppoinmentRemainderEmail = async (username, email, appointmentDate, appointmentTime, doctorName, specialization) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '⏰ Appointment Reminder! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
        <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <!-- Header Section with Logo -->
            <div style="text-align: center; padding: 20px; background-color: #28a745; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
                <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
                <h1>Your Appointment Reminder</h1>
            </div>
            <img src="https://drive.google.com/uc?export=view&id=1mMZ0Gn-vFGTeFwtXykS165LpgYN_BB8a" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
            <!-- Reminder Details Section -->
            <div style="padding: 20px; text-align: left;">
                <h2 style="color: #28a745;">Upcoming Appointment Details</h2>
                <p style="font-size: 16px; color: #333;">Hello ${username},</p>
                <p style="font-size: 16px; color: #333;">This is a friendly reminder for your upcoming appointment:</p>
                <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
                    <li><strong>Date:</strong> ${appointmentDate}</li>
                    <li><strong>Time:</strong> ${appointmentTime}</li>
                    <li><strong>Doctor:</strong> Dr. ${doctorName}</li>
                    <li><strong>Specialization:</strong> ${specialization}</li>
                    <li><strong>Location:</strong> At HealthSphere Hospitals </li>
                </ul>
            </div>

            <!-- Preparation Tips Section -->
            <div style="padding: 20px; text-align: left; background-color: #e2f0d9; border-radius: 5px; margin: 20px;">
                <h3 style="color: #28a745;">Tips for Your Visit</h3>
                <p style="font-size: 16px; color: #333;">To ensure a smooth appointment, please consider the following:</p>
                <ul style="font-size: 16px; color: #333;">
                    <li>Arrive at least 10 minutes early to complete any necessary paperwork.</li>
                    <li>Bring any relevant medical records or information.</li>
                    <li>Prepare a list of questions or concerns you would like to discuss.</li>
                </ul>
            </div>

            <!-- Call-to-Action Button -->
            <p style="text-align: center; margin: 30px 0;">
                <a href="https://yourwebsite.com/dashboard" style="background-color: #28a745; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">View Your Appointment</a>
            </p>

            <!-- Footer Section -->
            <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                <p style="font-size: 12px; text-align: center; color: #888;">If you have any questions or need to reschedule, please contact our support team.</p>
                <p style="font-size: 14px; text-align: center; color: #777;">Need help or have questions? <a href="mailto:support@yourwebsite.com" style="color: #28a745; text-decoration: none;">Contact our support team</a>.</p>
                <p style="font-size: 12px; color: #aaa;">You received this email because you scheduled an appointment with HealthSphere. If you didn't schedule an appointment, please ignore this email.</p>
                <p style="font-size: 12px; color: #aaa;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

                <!-- Social Media Links -->
                <div style="text-align: center; padding: 20px; background-color: #28a745; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                    <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                    <p style="margin: 5px 0;">Follow us on:</p>
                    <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                    <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                    <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
                </div>
            </div>
        </div>
      </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timed out')), 10000)
      ),
    ]);
    console.log('Appointment reminder notification sent successfully');
  } catch (error) {
    console.error('Failed to send appointment reminder notification:', error);
  }
};

// Function to send notifications about appointment cancellations
exports.sendAppoinmentCancellationEmail = async (username, email, appointmentDate, appointmentTime, doctorName, specialization) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '❌ Appointment Successfully Canceled! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section with Logo -->
          <div style="text-align: center; padding: 20px; background-color: #dc3545; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
              <h1>Your Appointment Has Been Cancelled</h1>
          </div>
          <img src="https://drive.google.com/uc?export=view&id=1xYMLUZFdU7eoix22iWqJbAJoCBOBI64_" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
          <!-- Cancellation Details Section -->
          <div style="padding: 20px; text-align: left; background-color: #f8d7da; border-radius: 5px; margin: 20px;">
              <h2 style="color: #dc3545;">Cancellation Details</h2>
              <p style="font-size: 16px; color: #333;">Hello ${username},</p>
              <p style="font-size: 16px; color: #333;">We regret to inform you that your appointment has been cancelled. Here are the details:</p>
              <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
                  <li><strong>Date:</strong> ${appointmentDate}</li>
                  <li><strong>Time:</strong> ${appointmentTime}</li>
                  <li><strong>Doctor:</strong> Dr. ${doctorName}</li>
                  <li><strong>Specialization:</strong> ${specialization}</li>
                  <li><strong>Location:</strong> At HealthSphere Hospitals </li>
              </ul>
          </div>

          <!-- Apology Section -->
          <div style="padding: 20px; text-align: center; background-color: #fff; border-radius: 5px; margin: 20px;">
              <h3 style="color: #dc3545;">We're Sorry for the Inconvenience</h3>
              <p style="font-size: 16px; color: #333;">We understand that this may disrupt your plans. If you need to reschedule, please reach out to us.</p>
          </div>

          <!-- Call-to-Action Button -->
          <p style="text-align: center; margin: 30px 0;">
              <a href="https://yourwebsite.com/dashboard" style="background-color: #dc3545; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">Schedule a New Appointment</a>
          </p>

          <!-- Footer Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If you have any questions or need further assistance, please contact our support team immediately.</p>
              <p style="font-size: 14px; text-align: center; color: #777;">Need help or have questions? <a href="mailto:support@yourwebsite.com" style="color: #dc3545; text-decoration: none;">Contact our support team</a>.</p>
              <p style="font-size: 12px; color: #aaa;">You received this email because you scheduled an appointment with HealthSphere. If you didn't schedule an appointment, please ignore this email.</p>
              <p style="font-size: 12px; color: #aaa;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #dc3545; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timed out')), 10000)
      ),
    ]);
    console.log('Appointment cancellation notification sent successfully');
  } catch (error) {
    console.error('Failed to send appointment cancellation notification:', error);
  }
};


// Function to send notifications about prescription updates
exports.sendPrescriptionUpdateEmail = async (username, email, prescriptionId, medicationName, doctorName, updateDate ) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '📝 Prescriptions Updated! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section with Logo -->
          <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
              <h1>Prescription Update Notification</h1>
          </div>
          <img src="https://drive.google.com/uc?export=view&id=147TqyZ0284E7gOGZZBtTM-zaf6Y0WfY0" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
          <!-- Update Details Section -->
          <div style="padding: 20px; text-align: left;">
              <p style="font-size: 16px; color: #333;">Hello ${username},</p>
              <p style="font-size: 16px; color: #333;">We would like to inform you that your prescription has been updated. Here are the details:</p>
              <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
                  <li><strong>Prescription ID:</strong> ${prescriptionId}</li>
                  <li><strong>Medication Name:</strong> ${medicationName}</li>
                  <li><strong>Prescribing Doctor:</strong> Dr. ${doctorName}</li>
                  <li><strong>Updated On:</strong> ${updateDate}</li>
              </ul>
          </div>

          <!-- Importance of Adhering to Prescription Section -->
          <div style="padding: 20px; text-align: left; background-color: #e2f0d9; border-radius: 5px; margin: 20px;">
              <h3 style="color: #007BFF;">Why It’s Important to Follow Your Prescription</h3>
              <p style="font-size: 16px; color: #333;">Following your prescription as directed is crucial for your health. Ensure you:</p>
              <ul style="font-size: 16px; color: #333;">
                  <li>Take your medication at the prescribed times.</li>
                  <li>Do not skip doses or stop taking the medication without consulting your doctor.</li>
                  <li>Contact your doctor if you experience any side effects or have questions.</li>
              </ul>
          </div>

          <!-- Call-to-Action Button -->
          <p style="text-align: center; margin: 30px 0;">
              <a href="https://yourwebsite.com/prescriptions" style="background-color: #007BFF; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">View Your Prescription</a>
          </p>

          <!-- Footer Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If you have any questions regarding your prescription, please contact our support team.</p>
              <p style="font-size: 14px; text-align: center; color: #777;">Need help or have questions? <a href="mailto:support@yourwebsite.com" style="color: #007BFF; text-decoration: none;">Contact our support team</a>.</p>
              <p style="font-size: 12px; color: #aaa; text-align: center;">You received this email because your prescription was updated with HealthSphere. If you didn't request this update, please ignore this email.</p>
              <p style="font-size: 12px; color: #aaa; text-align: center;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timed out')), 10000)
      ),
    ]);
    console.log('Prescription update notification sent successfully');
  } catch (error) {
    console.error('Failed to send prescription update notification:', error);
  }
};


// Function to send health tips and newsletter notifications
exports.sendHealthTips = async (username, email) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '🌿 Health Tips Update! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section with Logo -->
          <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
              <h1>Health Update Notification</h1>
          </div>

          <!-- Update Details Section -->
          <div style="padding: 20px; text-align: left;">
              <p style="font-size: 16px; color: #333;">Hello ${username},</p>
              <p style="font-size: 16px; color: #333;">We hope this email finds you well! Here are some health tips to help you maintain a healthy lifestyle:</p>
              
              <img src="https://drive.google.com/uc?export=view&id=1f9gv3RixPrt4WhIA6Bg2HwsI2eNWSvQy" alt="HealthSphere Logo" style="height: 300px; width: 560px;"/>

              <!-- Health Tips Section -->
              <div style="background-color: #e2f0d9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                  <h3 style="color: #007BFF;">Health Tips for You</h3>
                  <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
                      <li><strong>Stay Hydrated:</strong> Drink at least 8 glasses of water a day to keep your body hydrated.</li>
                      <li><strong>Regular Exercise:</strong> Aim for at least 30 minutes of moderate exercise most days of the week.</li>
                      <li><strong>Balanced Diet:</strong> Include a variety of fruits, vegetables, whole grains, and lean proteins in your meals.</li>
                      <li><strong>Sleep Well:</strong> Aim for 7-9 hours of quality sleep each night to rejuvenate your body.</li>
                      <li><strong>Stay Informed:</strong> Keep track of your health goals and progress regularly.</li>
                  </ul>
              </div>

              <!-- Call-to-Action Button -->
              <p style="text-align: center; margin: 30px 0;">
                  <a href="https://yourwebsite.com/health-dashboard" style="background-color: #007BFF; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">Visit Your Health Dashboard</a>
              </p>
          </div>

          <!-- Footer Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If you have any questions regarding your health tips, please contact our support team.</p>
              <p style="font-size: 14px; text-align: center; color: #777;">Need help or have questions? <a href="mailto:support@yourwebsite.com" style="color: #007BFF; text-decoration: none;">Contact our support team</a>.</p>
              <p style="font-size: 12px; color: #aaa; text-align: center;">You received this email because you signed up for health updates from HealthSphere. If you didn't request this update, please ignore this email.</p>
              <p style="font-size: 12px; color: #aaa; text-align: center;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Health tips email sending timed out')), 10000)
      ),
    ]);
    console.log('Health tips notification sent successfully');
  } catch (error) {
    console.error('Failed to send health tips notification:', error);
  }
};


// Function to send payment receipt notifications
exports.sendPaymentReciptEmails = async (username, email , amount, paymentDate, transactionId) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '💳 Payment Approved! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section with Logo -->
          <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
              <h1>Payment Approved Notification</h1>
          </div>
          <img src="https://drive.google.com/uc?export=view&id=16KbGSJnIMiRijFNq5ZDGhk00ywda-OOZ" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
          <!-- Payment Confirmation Section -->
          <div style="padding: 20px; text-align: left;">
              <p style="font-size: 16px; color: #333;">Hello ${username},</p>
              <p style="font-size: 16px; color: #333;">We are pleased to inform you that your payment has been successfully approved!</p>
              <p style="font-size: 16px; color: #333;"><strong>Payment Details:</strong></p>
              <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
                  <li><strong>Amount:</strong> $${amount}</li>
                  <li><strong>Date:</strong> ${paymentDate}</li>
                  <li><strong>Payment ID:</strong> ${transactionId}</li>
              </ul>
              <p style="font-size: 16px; color: #333;">Thank you for choosing HealthSphere for your healthcare needs!</p>
              
              <!-- Health Tips Section -->
              <div style="background-color: #e2f0d9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                  <h3 style="color: #007BFF;">Health Tips for You</h3>
                  <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
                      <li><strong>Stay Active:</strong> Regular physical activity can improve your overall health and well-being.</li>
                      <li><strong>Eat Healthy:</strong> Incorporate more fruits and vegetables into your meals for better nutrition.</li>
                      <li><strong>Practice Mindfulness:</strong> Take a few minutes each day to practice deep breathing or meditation.</li>
                      <li><strong>Get Regular Checkups:</strong> Schedule annual health checkups to monitor your health status.</li>
                  </ul>
              </div>

              <!-- Call-to-Action Button -->
              <p style="text-align: center; margin: 30px 0;">
                  <a href="https://yourwebsite.com/dashboard" style="background-color: #007BFF; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">View Your Payment Details</a>
              </p>
          </div>

          <!-- Footer Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If you have any questions regarding your payment, please contact our support team.</p>
              <p style="font-size: 14px; text-align: center; color: #777;">Need help or have questions? <a href="mailto:support@yourwebsite.com" style="color: #007BFF; text-decoration: none;">Contact our support team</a>.</p>
              <p style="font-size: 12px; color: #aaa; text-align: center;">You received this email because you made a payment through HealthSphere. If you didn't make this payment, please contact us immediately.</p>
              <p style="font-size: 12px; color: #aaa; text-align: center;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Payment email sending timed out')), 10000)
      ),
    ]);
    console.log('Payment receipt notification sent successfully');
  } catch (error) {
    console.error('Failed to send payment receipt notification:', error);
  }
};

 
// Function to send notifications for approved password reset requests
exports.sendPasswordResetEmails = async (username, email, otp) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '🔐 Password Reset Approved! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section with Logo -->
          <div style="text-align: center; padding: 20px; background-color: #FF9800; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
              <h1>Password Reset OTP</h1>
          </div>
          <img src="https://drive.google.com/uc?export=view&id=1ZS1YujolPYd1qC369VT29Xbbm8J_bNgN" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
          <!-- OTP Section -->
          <div style="padding: 20px; text-align: center;">
              <p style="font-size: 16px; color: #333;">Hello ${username},</p>
              <p style="font-size: 16px; color: #333;">We received a request to reset your password. Please use the following one-time password (OTP) to reset your password:</p>
              <p style="font-size: 24px; font-weight: bold; color: #FF4500;">${otp}</p>
              <p style="font-size: 16px; color: #333;">This OTP will expire in 10 minutes.</p>
              <p style="font-size: 16px; color: #333;">If you did not request a password reset, please ignore this email.</p>
          </div>

          <!-- Health Tips Section -->
          <div style="background-color: #ffe0b2; padding: 15px; border-radius: 5px; margin: 20px 10px; text-align: left;">
              <h3 style="color: #FF9800;">Health Tips for You</h3>
              <ul style="font-size: 16px; color: #333; list-style-type: disc; padding: 5px;">
                  <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day to stay hydrated.</li>
                  <li><strong>Regular Exercise:</strong> Aim for at least 30 minutes of physical activity most days of the week.</li>
                  <li><strong>Balanced Diet:</strong> Incorporate a variety of foods in your diet to ensure proper nutrition.</li>
                  <li><strong>Prioritize Sleep:</strong> Aim for 7-9 hours of quality sleep each night for better health.</li>
              </ul>
          </div>

          <!-- Footer Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If you have any questions regarding this request, please contact our support team.</p>
              <p style="font-size: 14px; text-align: center; color: #777;">Need help or have questions? <a href="mailto:support@yourwebsite.com" style="color: #FF9800; text-decoration: none;">Contact our support team</a>.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">You received this email because you requested a password reset for your HealthSphere account. If you didn't make this request, please contact us immediately.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #FF9800; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timed out')), 10000)
      ),
    ]);
    console.log('Password reset notification sent successfully');
  } catch (error) {
    console.error('Failed to send password reset notification:', error);
  }
};


// Function to send notifications about suspicious activity detected
exports.sendSuspiciousActivity = async (username, email) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '🚨 Security Alert: Suspicious Activity Detected! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section -->
          <div style="text-align: center; padding: 20px; background-color: #FF9800; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <h1>Security Alert: Suspicious Activity Detected</h1>
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
          </div>
          <img src="https://drive.google.com/uc?export=view&id=1IU7YHMeSEJfJnIsD5-2glssnQ7LnOAwA" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
          <!-- Alert Message Section -->
          <div style="padding: 20px; text-align: center;">
              <p style="font-size: 16px; color: #333;">Dear ${username},</p>
              <p style="font-size: 16px; color: #333;">We have detected suspicious activity on your HealthSphere account. For your security, we recommend you take immediate action.</p>
              <p style="font-size: 16px; color: #FF4500;">If you did not initiate this activity, please reset your password immediately.</p>
              <p style="font-size: 16px; color: #333;">For assistance, please contact our support team.</p>
          </div>

          <!-- Action Section -->
          <div style="text-align: center; margin: 30px 0;">
              <a href="https://yourwebsite.com/reset-password" style="background-color: #FF9800; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">Reset Your Password</a>
          </div>

          <!-- Health Tips Section -->
          <div style="background-color: #ffe0b2; padding: 15px; border-radius: 5px; margin: 20px 10px; text-align: center;">
              <h3 style="color: #FF9800;">Safety Tips for Your Account</h3>
              <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
                  <li><strong>Use a Strong Password:</strong> Combine letters, numbers, and symbols for better security.</li>
                  <li><strong>Enable Two-Factor Authentication:</strong> Add an extra layer of protection to your account.</li>
                  <li><strong>Be Cautious of Phishing Emails:</strong> Do not click on suspicious links or provide personal information.</li>
              </ul>
          </div>

          <!-- Footer Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If you have any questions regarding this alert, please contact our support team.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">You received this email because suspicious activity was detected on your HealthSphere account. If you have any concerns, please reach out to us immediately.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #FF9800; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timed out')), 10000)
      ),
    ]);
    console.log('Suspicious activity notification sent successfully');
  } catch (error) {
    console.error('Failed to send suspicious activity notification:', error);
  }
};


// Function to send notifications about password change requests
exports.sendPasswordChange = async (username, email) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '🔒 Security Notification: Password Change Requested! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section -->
          <div style="text-align: center; padding: 20px; background-color: #FF9800; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <h1>Security Notification: Password Change Requested!</h1>
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
          </div>
          <img src="https://drive.google.com/uc?export=view&id=1IU7YHMeSEJfJnIsD5-2glssnQ7LnOAwA" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
          <div style="padding: 20px; text-align: center;">
              <p style="font-size: 16px; color: #333;">Dear ${username},</p>
              <p style="font-size: 16px; color: #333;">We have received a request to change the password for your HealthSphere account.</p>
              <p style="font-size: 16px; color: #FF9800;">If you did not make this request, please secure your account immediately.</p>
              <p style="font-size: 16px; color: #333;">For your protection, your account will remain secured until this action is verified.</p>
          </div>

          <!-- Action Section -->
          <div style="text-align: center; margin: 30px 0;">
              <a href="https://yourwebsite.com/reset-password" style="background-color: #FF9800; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">Secure Your Account</a>
          </div>

          <!-- Security Tips Section -->
          <div style="background-color: #ffe0b2; padding: 15px; border-radius: 5px; margin: 20px 10px; text-align: center;">
              <h3 style="color: #FF9800;">Account Safety Tips</h3>
              <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
                  <li><strong>Change Your Password Regularly:</strong> Use a unique and strong password for your account.</li>
                  <li><strong>Monitor Account Activity:</strong> Keep an eye on your account activity and report any unusual actions.</li>
                  <li><strong>Enable Two-Factor Authentication:</strong> Add an extra layer of security to protect your account.</li>
              </ul>
          </div>

          <!-- Footer Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If you did not request this password change, please contact our support team immediately.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">You received this email because a password change was requested for your HealthSphere account. If this was not you, please secure your account right away.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #FF9800; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timed out')), 10000)
      ),
    ]);
    console.log('Password change notification sent successfully');
  } catch (error) {
    console.error('Failed to send password change notification:', error);
  }
};


// Function to send notifications about account access attempts
exports.sendAccountAccess = async (username, email) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '⚠️ Important Security Update: Account Access Attempted! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section -->
          <div style="text-align: center; padding: 20px; background-color: #FF9800; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <h1>Important Security Update: Account Access Attempted!</h1>
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
          </div>
          <img src="https://drive.google.com/uc?export=view&id=1IU7YHMeSEJfJnIsD5-2glssnQ7LnOAwA" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
          <!-- Alert Message Section -->
          <div style="padding: 20px; text-align: center;">
              <p style="font-size: 16px; color: #333;">Dear ${username},</p>
              <p style="font-size: 16px; color: #333;">We detected a recent attempt to access your HealthSphere account from an unrecognized device or location.</p>
              <p style="font-size: 16px; color: #FF9800;">If this was not you, please secure your account immediately.</p>
              <p style="font-size: 16px; color: #333;">If you recognize this activity, you can safely ignore this message.</p>
          </div>

          <!-- Call-to-Action Button -->
          <div style="text-align: center; margin: 30px 0;">
              <a href="https://yourwebsite.com/secure-account" style="background-color: #FF9800; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">Secure Your Account</a>
          </div>

          <!-- Security Tips Section -->
          <div style="background-color: #ffe0b2; padding: 15px; border-radius: 5px; margin: 20px 10px; text-align: center;">
              <h3 style="color: #FF9800;">Security Tips</h3>
              <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
                  <li><strong>Monitor Your Account:</strong> Regularly check your account activity for any unauthorized actions.</li>
                  <li><strong>Update Your Password:</strong> Use a strong and unique password to protect your account.</li>
                  <li><strong>Enable Two-Factor Authentication:</strong> Add extra security by using two-factor authentication.</li>
              </ul>
          </div>

          <!-- Footer Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If this was not you, please take immediate action to secure your account.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">You received this email because an access attempt was detected on your HealthSphere account. If this was not you, secure your account right away.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #FF9800; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timed out')), 10000)
      ),
    ]);
    console.log('Account access notification sent successfully');
  } catch (error) {
    console.error('Failed to send account access notification:', error);
  }
};


// Function to send notifications about account reviews
exports.sendAccountReview = async (username, email) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '🛡️ Security Alert: Your Account is Under Review! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section -->
          <div style="text-align: center; padding: 20px; background-color: #FF9800; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <h1>Security Alert: Your Account is Under Review!</h1>
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
          </div>
          <img src="https://drive.google.com/uc?export=view&id=1IU7YHMeSEJfJnIsD5-2glssnQ7LnOAwA" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
          <!-- Alert Message Section -->
          <div style="padding: 20px; text-align: center;">
              <p style="font-size: 16px; color: #333;">Dear ${username},</p>
              <p style="font-size: 16px; color: #333;">We are conducting a routine security review of your HealthSphere account to ensure its safety.</p>
              <p style="font-size: 16px; color: #FF9800;">During this time, your account may have limited functionality.</p>
              <p style="font-size: 16px; color: #333;">We appreciate your patience as we work to enhance your account security.</p>
          </div>

          <!-- Call-to-Action Button -->
          <div style="text-align: center; margin: 30px 0;">
              <a href="https://yourwebsite.com/security-review" style="background-color: #FF9800; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">Check Your Account Status</a>
          </div>

          <!-- Security Tips Section -->
          <div style="background-color: #ffe0b2; padding: 15px; border-radius: 5px; margin: 20px 10px; text-align: center;">
              <h3 style="color: #FF9800;">Security Tips</h3>
              <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
                  <li><strong>Review Account Activity:</strong> Regularly check your recent activities for any unauthorized actions.</li>
                  <li><strong>Strengthen Your Password:</strong> Use a strong, unique password that you haven’t used before.</li>
                  <li><strong>Enable Two-Factor Authentication:</strong> Protect your account with an extra layer of security.</li>
              </ul>
          </div>

          <!-- Footer Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If you have any questions or concerns, please do not hesitate to reach out.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">You received this email because of our ongoing commitment to security on your HealthSphere account.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #FF9800; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timed out')), 10000)
      ),
    ]);
    console.log('Account review notification sent successfully');
  } catch (error) {
    console.error('Failed to send account review notification:', error);
  }
};


// Function to send notifications about unusual login attempts
exports.sendUnusualLogin = async (username, email) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '🔔 Security Notice: Unusual Login Attempt Detected! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section -->
          <div style="text-align: center; padding: 20px; background-color: #FF9800; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <h1>Security Notice: Unusual Login Attempt Detected!</h1>
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
          </div>
          <img src="https://drive.google.com/uc?export=view&id=1IU7YHMeSEJfJnIsD5-2glssnQ7LnOAwA" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
          <!-- Alert Message Section -->
          <div style="padding: 20px; text-align: center;">
              <p style="font-size: 16px; color: #333;">Dear ${username},</p>
              <p style="font-size: 16px; color: #333;">We have detected a login attempt from an unusual location or device on your HealthSphere account.</p>
              <p style="font-size: 16px; color: #FF9800;">If this was not you, please take immediate action to secure your account.</p>
              <p style="font-size: 16px; color: #333;">Your account security is our top priority!</p>
          </div>

          <!-- Call-to-Action Button -->
          <div style="text-align: center; margin: 30px 0;">
              <a href="https://yourwebsite.com/security" style="background-color: #FF9800; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">Secure Your Account</a>
          </div>

          <!-- Security Tips Section -->
          <div style="background-color: #ffe0b2; padding: 15px; border-radius: 5px; margin: 20px 10px; text-align: center;">
              <h3 style="color: #FF9800;">Security Tips</h3>
              <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0;">
                  <li><strong>Change Your Password:</strong> Update your password immediately if you suspect unauthorized access.</li>
                  <li><strong>Enable Two-Factor Authentication:</strong> This adds an extra layer of protection to your account.</li>
                  <li><strong>Review Account Activity:</strong> Check your recent activities for any suspicious actions.</li>
              </ul>
          </div>

          <!-- Footer Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If you have any questions or concerns, please do not hesitate to reach out.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">You received this email because of our ongoing commitment to security on your HealthSphere account.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #FF9800; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timed out')), 10000)
      ),
    ]);
    console.log('Unusual login notification sent successfully');
  } catch (error) {
    console.error('Failed to send unusual login notification:', error);
  }
};


// Function to send healthcare reports to users
exports.sendHealthcareReport = async (username, email) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '📊 Health Reports Available! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section -->
          <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <h1>🩺 Health Reports Available!</h1>
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
          </div>
          <img src="https://drive.google.com/uc?export=view&id=1bXg-Gp_IPEqqeNgJPnCZ9QPk5-14IZi8" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
          <!-- Alert Message Section -->
          <div style="padding: 20px; text-align: center;">
              <p style="font-size: 16px; color: #333;">Dear ${username},</p>
              <p style="font-size: 16px; color: #333;">Your health reports are now available for review on your HealthSphere account.</p>
              <p style="font-size: 16px; color: #FF4500;">Please take a moment to log in and view your reports.</p>
          </div>

          <!-- Call-to-Action Button -->
          <div style="text-align: center; margin: 30px 0;">
              <a href="https://yourwebsite.com/reports" style="background-color: #007BFF; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-size: 18px;">View Your Health Reports</a>
          </div>

          <!-- Health Tips Section -->
          <div style="background-color: #e7f3ff; padding: 15px; border-radius: 5px; margin: 20px 10px; text-align: center;">
              <h3 style="color: #007BFF;">Health Tip of the Day</h3>
              <p style="font-size: 16px; color: #333;">Regularly reviewing your health reports helps you stay informed and take charge of your health. Schedule check-ups and consult with your doctor as needed.</p>
          </div>

          <!-- Footer Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If you have any questions about your reports, feel free to reach out to our support team.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">You received this email because you registered for HealthSphere. If you didn't sign up, please ignore this email.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #007BFF; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timed out')), 10000)
      ),
    ]);
    console.log('Healthcare report sent successfully');
  } catch (error) {
    console.error('Failed to send healthcare report:', error);
  }
};


// Function to send notifications about system updates or maintenance
exports.sendNotificationsOfSystemUpdates = async (email , date , time) => {
  const mailOptions = {
    from: emailConfig.auth.user,
    to: email,
    subject: '🔧 System Update or Maintenance! – HealthSphere Hospitals 🏥 | @2024 – DEV Squad ⚡️ [Do Not Reply]',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff;">
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header Section -->
          <div style="text-align: center; padding: 20px; background-color: #FF4500; color: white; border-top-left-radius: 10px; border-top-right-radius: 10px;">
              <h1>System Update Notice</h1>
              <img src="https://drive.google.com/uc?export=view&id=1n-3QGEs8Vvgcln1Oo_dDPOhylkSx2v5B" alt="HealthSphere Logo" style="width: 150px; margin-bottom: 20px;">
          </div>
          <img src="https://drive.google.com/uc?export=view&id=1WeeL9wnoMzJ88MkfREENCrUJEK2Zp7l_" alt="HealthSphere Logo" style="margin: 10px; height: 300px; width: 580px;"/>
          <!-- Alert Message Section -->
          <div style="padding: 20px; text-align: center;">
              <p style="font-size: 16px; color: #333;">Dear HealthSphere User,</p>
              <p style="font-size: 16px; color: #333;">We want to inform you that scheduled maintenance is taking place to enhance our services.</p>
              <p style="font-size: 16px; color: #FF4500;">The maintenance will occur on:</p>
              <p style="font-size: 18px; font-weight: bold; color: #333;">Date: ${date}<br>Time: ${time}</p>
              <p style="font-size: 16px; color: #333;">During this time, the platform may be temporarily unavailable.</p>
          </div>

          <!-- Health Tips Section -->
          <div style="background-color: #f1f1f1; padding: 15px; border-radius: 5px; margin: 20px 10px; text-align: center;">
              <h3 style="color: #FF4500;">Health Tip of the Day</h3>
              <p style="font-size: 16px; color: #666;">Remember to take regular breaks and maintain a balanced lifestyle for optimal health.</p>
          </div>

          <!-- Footer Section -->
          <div style="background-color: #f9f9f9; padding: 15px; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
              <p style="font-size: 12px; text-align: center; color: #888;">If you have any questions or concerns, please contact our support team.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">You received this email because you registered for HealthSphere. If you didn't sign up, please ignore this email.</p>
              <p style="font-size: 12px; text-align: center; color: #aaa;">All Rights Reserved @2024 - Dev Squad <sup>TM</sup></p>

              <!-- Social Media Links -->
              <div style="text-align: center; padding: 20px; background-color: #FF4500; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin-top: 20px;">
                  <p style="margin: 0;">&copy; 2024 HealthSphere. All rights reserved.</p>
                  <p style="margin: 5px 0;">Follow us on:</p>
                  <a href="https://facebook.com" style="color: white; text-decoration: none; margin: 0 10px;">Facebook</a> |
                  <a href="https://twitter.com" style="color: white; text-decoration: none; margin: 0 10px;">Twitter</a> |
                  <a href="https://instagram.com" style="color: white; text-decoration: none; margin: 0 10px;">Instagram</a>
              </div>
          </div>
      </div>
    </div>
    `
  };

  try {
    await Promise.race([
      transporter.sendMail(mailOptions),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Email sending timed out')), 10000)
      ),
    ]);
    console.log('System update notification sent successfully');
  } catch (error) {
    console.error('Failed to send system update notification:', error);
  }
};


