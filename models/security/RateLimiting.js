const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const {User} = require('../auth/User');

const RateLimiting = sequelize.define('RateLimiting', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    request_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    last_request_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'rate_limiting',
    timestamps: false,
});

module.exports = {
    RateLimiting,
};
