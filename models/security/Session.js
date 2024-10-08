const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); 
const {User} = require('../auth/User');

const Session = sequelize.define('Session', {
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
    session_id: {
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
    ip_address: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
}, {
    tableName: 'sessions',
    timestamps: false,
});

module.exports = {
    Session,
};
