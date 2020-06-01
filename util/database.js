const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs', 'root', 'L14brmk993014', 
{
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;