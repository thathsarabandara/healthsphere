const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const {Clinic} = require('./Clinic');
const {Patient} = require('./Patient');
const {Payment} = require('../transactions/Payment');

const Reservation = sequelize.define('Reservation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    clinic_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Clinic,
            key: 'id',
        },
    },
    patient_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Patient,
            key: 'id',
        },
        allowNull: false,
    },
    payment_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Payment,
            key: 'id',
        },
    },
    reservation_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    reservation_time: {
        type: DataTypes.TIME,
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
    tableName: 'reservations',
    timestamps: false,
});

module.exports = {
    Reservation,
};
