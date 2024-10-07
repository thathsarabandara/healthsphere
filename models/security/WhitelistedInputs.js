const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const WhitelistedInput = sequelize.define('WhitelistedInput', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    field_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    allowed_value: {
        type: DataTypes.STRING(255),
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
    tableName: 'whitelisted_inputs',
    timestamps: false,
});

module.exports = {
    WhitelistedInput,
};
