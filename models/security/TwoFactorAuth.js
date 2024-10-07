const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); 
const {User} = require('./auth/User');

const TwoFactorAuth = sequelize.define('TwoFactorAuth', {
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
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    secret: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    backup_codes: {
        type: DataTypes.TEXT,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'two_factor_auths',
    timestamps: false,
});

module.exports = {
    TwoFactorAuth,
};
