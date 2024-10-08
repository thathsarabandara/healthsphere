require('dotenv').config();

module.exports = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
    },
    tls: {
        ciphers: 'SSLv3', // Use a more compatible cipher
    },
};
