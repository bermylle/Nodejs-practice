const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const CartItem = sequelize.define('cart', {
    id: {
        type: Sequelize.STRING,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = CartItem;