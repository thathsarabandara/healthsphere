const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); 
const Group = require('./Group'); 
const Permission = require('./Permission'); 

const GroupPermission = sequelize.define('GroupPermission', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  group_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Group,
      key: 'id',
    },
  },
  permission_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Permission,
      key: 'id',
    },
  }
}, {
  tableName: 'group_permissions',
  timestamps: true,
});

module.exports = {
  GroupPermission
};
