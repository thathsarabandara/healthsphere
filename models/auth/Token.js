const { DataTypes, DATE } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('./User'); 

const Token = sequelize.define('Token', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  token: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  expires_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'tokens',
  timestamps: false,
});

Token.beforeCreate((token) => {
    token.expires_at = new Date(Date.now() + 3600 * 1000); 
  });

const createToken = async (user_id, token) =>{
  try{
    const newToken =  await Token.create({
      user_id: user_id,
      token: token,
      expires_at: new Date(Date.now() + 3600 * 1000),
   })
    return newToken
  }catch(err){
    throw err;
  }
};

const findToken = async (token) => {
  try {
    const query = "SELECT * FROM tokens WHERE token = ?";
    const [results] = await sequelize.query(query, {
      replacements: [token],
      type: sequelize.QueryTypes.SELECT,
    });
    
    // Check if results is undefined or has no entries
    if (!results || results.length === 0) {
      return null; // No token found
    }
    
    // Assuming results[0] exists, check the expiration
    if (new Date(results.expires_at) < new Date(Date.now())) {
      return null; // Token has expired
    }

    return results[0]; // Return the valid token
  } catch (err) {
    console.error("Error finding token:", err);
    return null; // Return null in case of error
  }
};

const findUserID = async (token) => {
  try {
    const query = "SELECT * FROM tokens WHERE token = ? LIMIT 1";
    const [results] = await sequelize.query(query, {
      replacements: [token],
      type: sequelize.QueryTypes.SELECT,
    });

    // Check if results is undefined (because it's an object, not an array)
    if (!results) {
      return null; // No token found
    }

    return results.user_id; // Return the userID
  } catch (err) {
    console.error("Error finding User:", err);
    return null; // Return null in case of error
  }
};



module.exports = {
  Token,
  createToken,
  findToken,
  findUserID
};
