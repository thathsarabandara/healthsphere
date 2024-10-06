const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Permission = sequelize.define('Permission', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  tableName: 'permissions',
  timestamps: true,
});

module.exports = {
  Permission
};
