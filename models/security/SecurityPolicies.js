const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const SecurityPolicy = sequelize.define('SecurityPolicy', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    policy_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    policy_details: {
        type: DataTypes.TEXT,
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
    tableName: 'security_policies',
    timestamps: false,
});

module.exports = {
    SecurityPolicy,
};
