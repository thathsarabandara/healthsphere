const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Patient = require('../healthcare/Patient');
const Doctor = require('../healthcare/Doctor');

const Review = sequelize.define('Review', {
    review_id: {
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
    doctor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Doctor,
            key: 'doctor_id',
        },
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    comment: {
        type: DataTypes.TEXT,
    },
    review_date: {
        type: DataTypes.DATEONLY,
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
    tableName: 'reviews',
    timestamps: false,
});

module.exports = {
    Review,
};
