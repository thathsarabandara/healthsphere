const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); 
const {User} = require('./auth/User');

const FailedLoginAttempt = sequelize.define('FailedLoginAttempt', {
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
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    ip_address: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    reason: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    tableName: 'failed_login_attempts',
    timestamps: false,
});


module.exports = {
    FailedLoginAttempt,
};
