const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); 
const User = require('./User'); 
const Group = require('../Group'); 

const UserGroup = sequelize.define('UserGroup', {
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
  group_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Group,
      key: 'id',
    },
  }
}, {
  tableName: 'user_groups',
  timestamps: true,
});

const validateUserGroups = (id) =>{
  try{const query = "SELECT group_id FROM UserGroup WHERE user_id = ?";
  const results = sequelize.query(query,{
    replacements: id,
    type: sequelize.QueryTypes.SELECT,
  });
  if(!results){
    return null
  }
  return results;
}catch(err){
  console.error('Error filnding Groups', err);
}
}


module.exports = {
  UserGroup,
  validateUserGroups
};
