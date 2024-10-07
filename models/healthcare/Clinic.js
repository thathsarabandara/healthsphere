const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Doctor = require('./Doctor');
const Schedule = require('./Schedule');

const Clinic = sequelize.define('Clinic', {
    clinic_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    schedule_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Schedule,
            key: 'schedule_id',
        },
    },
    doctor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Doctor,
            key: 'doctor_id',
        },
        allowNull: false,
    },
    clinic_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    clinic_time: {
        type: DataTypes.TIME,
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
    tableName: 'clinics',
    timestamps: false,
});

module.exports = {
    Clinic,
};
