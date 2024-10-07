const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db'); 
const {User} = require('./auth/User');

const SecurityQuestion = sequelize.define('SecurityQuestion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    question: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    answer_hash: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'security_questions',
    timestamps: false,
});

module.exports = {
    SecurityQuestion,
};
