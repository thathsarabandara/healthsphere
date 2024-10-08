const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); 
const {User} = require('../auth/User');

const PasswordResetRequest = sequelize.define('PasswordResetRequest', {
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
    tableName: 'password_reset_requests',
    timestamps: false,
});

module.exports = {
    PasswordResetRequest,
};
