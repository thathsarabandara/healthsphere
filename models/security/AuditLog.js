const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); 
const {User} = require('./auth/User');

const AuditLog = sequelize.define('AuditLog', {
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
    action: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    ip_address: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    details: {
        type: DataTypes.TEXT,
    },
}, {
    tableName: 'audit_logs',
    timestamps: false,
});

module.exports = {
    AuditLog,
};
