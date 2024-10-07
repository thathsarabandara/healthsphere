const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Payment = require('./Payment');

const Refund = sequelize.define('Refund', {
    refund_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    payment_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Payment,
            key: 'payment_id',
        },
    },
    refund_reason: {
        type: DataTypes.TEXT,
    },
    refund_status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    admin_feedback: {
        type: DataTypes.TEXT,
    },
    refund_amount: {
        type: DataTypes.DECIMAL(10, 2),
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
    tableName: 'refunds',
    timestamps: false,
});

module.exports = {
    Refund,
};
