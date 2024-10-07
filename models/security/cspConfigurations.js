const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const CSPConfiguration = sequelize.define('CSPConfiguration', {
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
    tableName: 'csp_configurations',
    timestamps: false,
});

module.exports = {
    CSPConfiguration,
};
