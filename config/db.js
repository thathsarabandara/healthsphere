require('dotenv').config();
const { Sequelize } = require('sequelize');

console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);

// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD || '', {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306, // Optional: specify port
    dialect: 'mysql',
    logging: false, // Disable logging; set to console.log for SQL query logs
});

// Export the Sequelize instance
module.exports = sequelize;
