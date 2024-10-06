const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 
const User = require('./User'); 
const Group = require('./Group'); 

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


module.exports = UserGroup;
