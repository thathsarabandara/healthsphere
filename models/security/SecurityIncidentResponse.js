const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const SecurityIncidentResponse = sequelize.define('SecurityIncidentResponse', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    incident_type: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    response_action: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'security_incident_responses',
    timestamps: false,
});

module.exports = {
    SecurityIncidentResponse,
};
