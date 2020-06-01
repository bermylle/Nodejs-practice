const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },

    sex: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;