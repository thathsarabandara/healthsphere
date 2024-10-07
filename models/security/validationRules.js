const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const ValidationRule = sequelize.define('ValidationRule', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    field_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    validation_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    criteria: {
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
    tableName: 'validation_rules',
    timestamps: false,
});

module.exports = {
    ValidationRule,
};
