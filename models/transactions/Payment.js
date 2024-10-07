const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Payment = sequelize.define('Payment', {
    payment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    payment_status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    receipt_number: {
        type: DataTypes.STRING,
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
    tableName: 'payments',
    timestamps: false,
});

module.exports = {
    Payment,
};
