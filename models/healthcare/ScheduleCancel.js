const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Schedule = require('./Schedule');

const ScheduleCancel = sequelize.define('ScheduleCancel', {
    schedule_cancel_id: {
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
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    admin_feedback: {
        type: DataTypes.TEXT,
    },
    doctor_reason: {
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
    tableName: 'schedule_cancels',
    timestamps: false,
});

module.exports = {
    ScheduleCancel,
};
