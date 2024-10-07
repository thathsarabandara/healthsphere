const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Patient = require('./Patient');
const Reservation = require('./Reservation');

const Prescription = sequelize.define('Prescription', {
    prescription_id: {
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
    reservation_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Reservation,
            key: 'reservation_id',
        },
    },
    prescription_photo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    special_comments: {
        type: DataTypes.TEXT,
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
    tableName: 'prescriptions',
    timestamps: false,
});

module.exports = {
    Prescription,
};
