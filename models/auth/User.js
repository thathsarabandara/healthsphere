const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const { hashPassword } = require('../../utils/hashpassword');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    password_hash: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    }
}, {
    tableName: 'users',
    timestamps: true,
});

// Create the user function
const createUser = async (userData) => {
    try {
        const hashedPassword = await hashPassword(userData.password);
        const newUser = await User.create({
            username: userData.username,
            email: userData.email,
            password_hash: hashedPassword, // Ensure this matches your model
        });
        return newUser; // Return the created user
    } catch (err) {
        throw err; // Rethrow the error for handling in the register function
    }
};

async function findByEmail(email){
  try {
    const query = "SELECT * FROM users WHERE email = ?";
    const [results] = await sequelize.query(query, {
      replacements: [email], 
      type: sequelize.QueryTypes.SELECT, 
    });

    console.log('Results:', results.id); 

    // Check if user is found
    if (results.length === 0) {
      return null; 
    }

   // Get the first result (user object)
    return results; 
  } catch (err) {
    console.error('Database error:', err); 
    throw err; 
  }
};

module.exports = {
    User,
    createUser,
    findByEmail
};
