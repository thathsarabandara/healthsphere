const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const {Doctor} = require('../healthcare/Doctor');

const Schedule = sequelize.define('Schedule', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    doctor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Doctor,
            key: 'id',
        },
        allowNull: false,
    },
    schedule_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    schedule_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comment: {
        type: DataTypes.TEXT,
    },
    fees: {
        type: DataTypes.DECIMAL(10, 2),
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
    tableName: 'schedules',
    timestamps: false,
});

module.exports = {
    Schedule,
};
