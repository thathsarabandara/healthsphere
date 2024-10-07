const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Specialization = require('./Specialization');

const Doctor = sequelize.define('Doctor', {
    doctor_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id',
        },
        allowNull: false,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
    },
    medical_license_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    specialization_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Specialization,
            key: 'id',
        },
    },
    years_of_experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hospital_clinic_affiliation: {
        type: DataTypes.STRING,
    },
    medical_school_university: {
        type: DataTypes.STRING,
    },
    national_id_passport: {
        type: DataTypes.STRING,
    },
    medical_license_document: {
        type: DataTypes.STRING,
    },
    professional_certifications: {
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
    tableName: 'doctors',
    timestamps: false,
});

module.exports = {
    Doctor,
};
