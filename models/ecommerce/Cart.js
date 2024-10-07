const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Patient = require('../healthcare/Patient');

const Cart = sequelize.define('Cart', {
    cart_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    patient_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Patient,
            key: 'patient_id',
        },
        allowNull: false,
    },
    cart_item_id: {
        type: DataTypes.INTEGER,
        references: {
            model: CartItem,
            key: 'cart_item_id',
        },
        allowNull: false,
    },
    total_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
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
    tableName: 'carts',
    timestamps: false,
});

module.exports = {
    Cart,
};
