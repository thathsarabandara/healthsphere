const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Adjust the path as needed
const User = require('./User'); // Import the User model

const Doctor = sequelize.define('Doctor', {
    doctor_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    User_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
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
        allowNull: false,
    },
    medical_license_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    specialization: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    years_of_experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hospital_clinic_affiliation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    medical_school_university: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    national_id_passport: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    medical_license_document: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    professional_certifications: {
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
    tableName: 'doctors',
    timestamps: false,
});

module.exports = {
    Doctor
};
