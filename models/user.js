const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cart: {
        items: [
          {
            productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true }
          }
        ]
      }
});

module.exports = mongoose.model('User', userSchema);
// const Sequelize = require('sequelize');
// const sequelize = require('../util/database');

// const User = sequelize.define('user', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },

//     first_name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },

//     last_name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },

//     email: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
// }, {
//     timestamps: false
// });

// module.exports = User;